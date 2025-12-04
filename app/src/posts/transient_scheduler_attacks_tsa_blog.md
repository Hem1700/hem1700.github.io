
# Transient Scheduler Attacks on CPUs: Exploiting AMD’s New Microarchitectural Leak

In 2018, *Spectre* and *Meltdown* taught everyone that “just running code” on a CPU was enough to leak data you were *never* supposed to see. We patched, mitigated, and told ourselves the worst was over.

Fast-forward to 2025 and AMD quietly drops a new phrase into the hardware-security lexicon:

> **Transient Scheduler Attacks (TSA)** – a fresh class of speculative side-channel leaks in AMD CPUs, abusing the *instruction scheduler* itself.

If Spectre was about mispredicted branches and Meltdown about rogue loads, TSA is about **“false completions”**: the CPU momentarily believes a load has finished and forwards *invalid* data into dependent instructions. That data isn’t architecturally visible—but it *does* change how long later instructions take to execute, and those timing differences leak information across privilege boundaries.

In this post, we’ll unpack TSA from a red-team mindset:

- What TSA actually is (minus marketing),
- How an attacker could *conceptually* exploit it,
- A tiny lab you can build to “feel” this class of leak,
- And what defenders should do before their schedulers start talking.

---

## 1. Quick refresher: speculative execution & side-channels

Modern CPUs are performance junkies. They:

- **Speculatively execute** instructions before they’re 100% sure they’re needed (branch prediction, memory prediction, etc.).
- **Out-of-order schedule** instructions to keep execution units busy.
- **Forward data** between loads and stores without waiting for the full memory pipeline.

Most of the time, that works great. Occasionally, it creates **transient states** where:

1. The CPU does some work based on *guessed* information,  
2. Later realizes it guessed wrong,  
3. Rolls back the architectural state…  
4. But the **microarchitectural state** (caches, predictors, queues, timing) still remembers what happened.

Classic attacks:

- **Spectre**: abuse branch prediction → transiently execute code that touches secret-dependent memory → leak via cache timing.  
- **Meltdown / Foreshadow / MDS**: abuse permission checks and internal buffers to read data across isolation boundaries.

TSA is the same story *one layer deeper*: not the branch predictor, not the cache hierarchy, but the **scheduler and its perception of whether a load is “done.”**

---

## 2. What AMD calls “Transient Scheduler Attacks”

AMD’s 2025 security bulletin and technical whitepaper describe TSA as a new speculative side channel that appears when certain **load instructions experience “false completion.”**

### 2.1 False completions in a nutshell

Under specific timing and microarchitectural conditions:

1. A load instruction is expected to hit in a fast structure (e.g., L1 cache).  
2. Hardware *optimistically* assumes the data will be ready quickly.  
3. Dependent operations get scheduled based on that assumption.  
4. But something goes wrong – the load *didn’t* actually complete (it missed in L1, or the store data isn’t ready, etc.).  
5. The CPU forwards **invalid data** to dependent instructions temporarily.  
6. The load is later re-executed with the correct data, and dependents re-run.

Crucially:

- You don’t get a pipeline flush like some other transient behaviors.  
- That invalid data **doesn’t update caches or TLBs**, so you can’t see it with classic cache-based side-channels.  
- But the invalid data *does* influence the **timing** of other instructions in the core, and that timing is observable.

Hence: **Transient Scheduler Attacks** – you leak data by watching how the scheduler behaves when it has been lied to.

### 2.2 Two main variants: TSA-L1 and TSA-SQ

AMD’s technical guidance splits TSA into two sub-variants:

- **TSA-L1 (L1 data cache variant)**  
  - Modern AMD cores use a **microtag** structure to accelerate L1 lookups.  
  - In some edge cases, the microtag says “hit” when the real L1 line isn’t there.  
  - The load experiences a false completion and receives invalid data from whatever was associated with that microtag entry.  
  - An attacker who can repeatedly engineer this state can infer **what’s in the L1 cache**, even if it belongs to:
    - OS kernel vs user process,  
    - Hypervisor vs guest VM,  
    - One VM vs another.

- **TSA-SQ (store queue variant)**  
  - The store queue tracks in-flight stores and sometimes forwards their data to matching loads (**Store-To-Load Forwarding**).  
  - In some timing windows, a load that matches an older store may see a false completion where invalid data comes from a *previous* occupant of that store-queue entry.  
  - An attacker may infer data from older stores—potentially across kernel/user boundaries—but cross-VM leakage here appears more limited.

So TSA-L1 is your **“peek into L1 from another context”** scenario, whereas TSA-SQ is more like **“see what older stores were doing”** if you can hit the timing window.

### 2.3 Affected CPUs & severity

- TSA affects **AMD Family 19h** processors (Zen 3 / Zen 4 class parts, including EPYC and Ryzen families).  
- Individual CVEs are rated in the “medium” band, but collectively TSA is treated as a **speculative side-channel class** that can leak data across privilege boundaries.
- AMD is shipping **microcode updates** plus OS/hypervisor guidance; the Linux kernel added a dedicated `MITIGATION_TSA` config option and a `tsa=` boot parameter to toggle mitigation strategies.

In other words: TSA isn’t “you can RCE the CPU via JavaScript,” but it *is* “if an attacker can run code on the same CPU, they may spy on higher-privileged contexts.”

---

## 3. How would an attacker actually abuse TSA?

From a red-team point of view, TSA is about **turning local code execution into a powerful side-channel primitive**.

AMD is quite explicit about preconditions:

> TSA is likely only exploitable if the attacker can run arbitrary code on the machine and can repeatedly trigger victim activity to build up a measurable signal.

So think **“post-compromise escalation / stealth data theft”**, not “remote drive-by.”

### 3.1 Threat models that actually make sense

Some realistic scenarios:

1. **Malicious VM in a public cloud**  
   - You rent a VM on a shared EPYC host.  
   - You arrange your workload so that:
     - Your VM executes carefully crafted load/store sequences, trying to create false completions,  
     - You constantly measure timing of your own code,  
     - You synchronize with a high-value victim VM (e.g., by hitting its web API, causing it to perform sensitive operations repeatedly).  
   - Over many iterations, you try to reconstruct bits of secrets used in the victim: crypto keys, keystroke patterns, or data-dependent control paths.

2. **Untrusted plugin / extension in a multi-tenant app**  
   - Think: a plugin system where tenants can upload native or WASM modules and get CPU time on the same host as privileged code.  
   - The plugin runs malicious code that tries to observe kernel or hypervisor behavior via TSA-style timing leaks, especially across system calls or hypercalls.

3. **Malware on a bare-metal server**  
   - Traditional malware already has local execution.  
   - TSA gives it a way to break isolation between:
     - Normal user processes and privileged daemons,  
     - Or between containers that happen to share cores.

In *all* these cases, TSA doesn’t give you code execution; it gives you a **new, stealthy information-leak channel** once you’re on the box.

### 3.2 What does “exploitation” look like?

High-level exploitation strategy (similar in spirit to other speculative side channels):

1. **Prime microarchitectural state**  
   - Arrange L1 cache or store queue to contain patterns that encode guesses about victim data (or vice versa).  

2. **Trigger victim computation**  
   - System call, network request, hypercall—anything that causes the victim to touch sensitive data.  
   - Repeat this many times so you can average out noise.  

3. **Force false completions**  
   - Using carefully chosen addresses and instruction sequences, steer certain victim or attacker loads into the microtag / store-queue corner cases described in TSA-L1 and TSA-SQ.

4. **Measure timing in attacker context**  
   - The invalid forwarded data doesn’t leak directly, but it changes how long later instructions take to execute.  
   - By correlating timing patterns with what you know you primed, you infer bits of secret state in the victim’s cache lines or stores.

5. **Do this… a lot**  
   - TSA is noisy. You typically need many victim invocations to create a measurable signal.

If that sounds abstract, that’s because it is—**real TSA exploitation is non-trivial**. But you can build a lab to internalize the shape of the attack.

---

## 4. A tiny lab to “feel” scheduler-style leaks (with code)

We’re still **not** reproducing TSA itself (that’s complex research), but we can build a lab that:

- Shows how **secret-dependent memory access → timing difference → information leak** works, and  
- Uses patterns similar to what real speculative / transient attacks exploit.

Think of this as a **Flush+Reload / cache timing 101** exercise that warms people up conceptually for TSA.

> ⚠️ Educational only. Run this only on machines you own. Don’t point this at shared environments you don’t control.

### 4.1 Full toy example: secret-dependent access + timing

This is a self-contained C toy that:

- Has a “secret” byte,  
- A victim function that touches memory depending on that secret,  
- An attacker that measures which memory line is “hot” by timing loads with `rdtsc`.

```c
// gcc -O2 -march=native -o tsa_toy tsa_toy.c
// Simple educational cache timing demo:
//  - victim_operation() uses a secret-dependent index
//  - attacker measures which index is fastest to infer the secret

#define _GNU_SOURCE
#include <stdio.h>
#include <stdint.h>
#include <x86intrin.h>   // for __rdtscp, _mm_clflush
#include <unistd.h>
#include <limits.h>

#define STRIDE 4096      // ensure different cache lines
#define PROBE_SIZE 256

// Shared array used as our "probe" for timing
uint8_t probe_array[PROBE_SIZE * STRIDE];

// Fake secret we want to "leak"
volatile uint8_t secret = 0x42;  // 66 decimal

// Victim: uses attacker-controlled hint, mixed with secret, to pick an index
void victim_operation(uint8_t attacker_hint) {
    uint8_t idx = attacker_hint ^ secret;  // secret-dependent index
    volatile uint8_t *addr = &probe_array[idx * STRIDE];

    // Load from secret-dependent location
    uint8_t value = *addr;

    // Prevent the compiler from optimizing away the load
    __asm__ volatile("" :: "r"(value) : "memory");
}

// Flush entire probe_array from caches
void flush_probe_array(void) {
    for (int i = 0; i < PROBE_SIZE; i++) {
        _mm_clflush(&probe_array[i * STRIDE]);
    }
}

// Measure time to access probe_array[idx * STRIDE]
uint32_t time_access(int idx) {
    unsigned int aux;
    volatile uint8_t *addr = &probe_array[idx * STRIDE];

    uint64_t t1 = __rdtscp(&aux);
    (void)*addr;
    uint64_t t2 = __rdtscp(&aux);

    return (uint32_t)(t2 - t1);
}

int main(void) {
    // 1. Initialize array to force allocation
    for (int i = 0; i < PROBE_SIZE * STRIDE; i++) {
        probe_array[i] = 1;
    }

    // Attacker chooses a hint. For simplicity we fix it.
    uint8_t attacker_hint = 0x10;

    // 2. Flush the probe_array from cache
    flush_probe_array();

    // 3. Trigger victim many times to strengthen the signal
    for (int i = 0; i < 1000; i++) {
        victim_operation(attacker_hint);
    }

    // 4. Measure timing for each possible index and find fastest
    uint32_t best_time = UINT_MAX;
    int best_idx = -1;

    for (int idx = 0; idx < PROBE_SIZE; idx++) {
        uint32_t t = time_access(idx);
        if (t < best_time) {
            best_time = t;
            best_idx = idx;
        }
    }

    printf("Best index = %d (time = %u cycles)\n", best_idx, best_time);

    // Recover an approximation of the secret
    uint8_t recovered = attacker_hint ^ (uint8_t)best_idx;
    printf("Actual secret    = 0x%02x\n", secret);
    printf("Recovered secret = 0x%02x\n", recovered);

    return 0;
}
```

What’s happening here:

- The victim repeatedly touches `probe_array[(attacker_hint ^ secret) * STRIDE]`,  
- That specific cache line becomes hot,  
- The attacker times every index and infers which is fastest,  
- From that `best_idx`, it guesses `secret ≈ attacker_hint ^ best_idx`.

This is the **same mental structure** as real microarchitectural leaks: you never read the secret directly; you watch how **transient microarchitectural state changes timing**.

On a modern CPU, you may need to run it multiple times, average results, or tweak `PROBE_SIZE` / `STRIDE` to get a clear signal.

### 4.2 Variant without `rdtsc`: using `clock_gettime`

If you want a version that doesn’t rely on `rdtsc` (e.g., on some systems it may be restricted or noisy), here’s a variant using `clock_gettime` with `CLOCK_MONOTONIC_RAW`. It’s less precise but more portable.

```c
// gcc -O2 -march=native -o tsa_toy_posix tsa_toy_posix.c

#define _GNU_SOURCE
#include <stdio.h>
#include <stdint.h>
#include <time.h>
#include <x86intrin.h>   // for _mm_clflush
#include <unistd.h>
#include <limits.h>

#define STRIDE 4096
#define PROBE_SIZE 256

uint8_t probe_array[PROBE_SIZE * STRIDE];
volatile uint8_t secret = 0x2A;  // 42 decimal

static inline uint64_t nsec_now(void) {
    struct timespec ts;
    clock_gettime(CLOCK_MONOTONIC_RAW, &ts);
    return (uint64_t)ts.tv_sec * 1000000000ull + ts.tv_nsec;
}

void victim_operation(uint8_t attacker_hint) {
    uint8_t idx = attacker_hint ^ secret;
    volatile uint8_t *addr = &probe_array[idx * STRIDE];
    uint8_t value = *addr;
    __asm__ volatile("" :: "r"(value) : "memory");
}

void flush_probe_array(void) {
    for (int i = 0; i < PROBE_SIZE; i++) {
        _mm_clflush(&probe_array[i * STRIDE]);
    }
}

uint64_t time_access_ns(int idx) {
    volatile uint8_t *addr = &probe_array[idx * STRIDE];

    uint64_t t1 = nsec_now();
    (void)*addr;
    uint64_t t2 = nsec_now();

    return t2 - t1;
}

int main(void) {
    for (int i = 0; i < PROBE_SIZE * STRIDE; i++) {
        probe_array[i] = 1;
    }

    uint8_t attacker_hint = 0x05;

    // Simple multiple trials to average timing
    const int trials = 50;

    // prime+victim
    flush_probe_array();
    for (int i = 0; i < 1000; i++) {
        victim_operation(attacker_hint);
    }

    uint64_t best_time = UINT64_MAX;
    int best_idx = -1;

    for (int idx = 0; idx < PROBE_SIZE; idx++) {
        uint64_t total = 0;
        for (int t = 0; t < trials; t++) {
            total += time_access_ns(idx);
        }
        uint64_t avg = total / trials;

        if (avg < best_time) {
            best_time = avg;
            best_idx = idx;
        }
    }

    printf("Best index = %d (avg time = %llu ns)\n",
           best_idx, (unsigned long long)best_time);

    uint8_t recovered = attacker_hint ^ (uint8_t)best_idx;
    printf("Actual secret    = 0x%02x\n", secret);
    printf("Recovered secret = 0x%02x\n", recovered);

    return 0;
}
```

This looks similar to the timing setups in CPU side-channel courses and Spectre labs, where you average many samples to separate cache hits from misses.

### 4.3 Splitting victim and attacker (two processes, shared memory)

To make the lab feel more like a **cross-process leak** (closer to TSA’s “other context” threat model), you can separate victim and attacker into **two processes** that share memory via `shm_open` / `mmap`.

**Shared header:**

```c
// common.h
#pragma once
#include <stdint.h>

#define STRIDE 4096
#define PROBE_SIZE 256

struct shared_region {
    uint8_t probe_array[PROBE_SIZE * STRIDE];
    volatile uint8_t stop;      // flag to tell victim to stop
    volatile uint8_t ready;     // flag for simple sync
};
```

**Victim process:**

```c
// victim.c
// gcc -O2 -march=native -o victim victim.c -lrt

#include "common.h"
#include <sys/mman.h>
#include <fcntl.h>
#include <unistd.h>
#include <stdio.h>

volatile uint8_t secret = 0x7F;

int main(void) {
    int fd = shm_open("/tsa_demo", O_RDWR | O_CREAT, 0600);
    ftruncate(fd, sizeof(struct shared_region));
    struct shared_region *sh = mmap(NULL, sizeof(*sh),
                                    PROT_READ | PROT_WRITE,
                                    MAP_SHARED, fd, 0);

    // Initialize
    for (int i = 0; i < PROBE_SIZE * STRIDE; i++) {
        sh->probe_array[i] = 1;
    }

    sh->ready = 1;

    while (!sh->stop) {
        // attacker_hint could be communicated via shared memory too;
        // here we just fix it for simplicity
        uint8_t attacker_hint = 0x11;
        uint8_t idx = attacker_hint ^ secret;
        volatile uint8_t *addr = &sh->probe_array[idx * STRIDE];
        uint8_t value = *addr;
        __asm__ volatile("" :: "r"(value) : "memory");
    }

    return 0;
}
```

**Attacker process:**

```c
// attacker.c
// gcc -O2 -march=native -o attacker attacker.c -lrt

#include "common.h"
#include <sys/mman.h>
#include <fcntl.h>
#include <unistd.h>
#include <x86intrin.h>
#include <stdio.h>
#include <limits.h>

uint32_t time_access(struct shared_region *sh, int idx) {
    unsigned aux;
    volatile uint8_t *addr = &sh->probe_array[idx * STRIDE];
    uint64_t t1 = __rdtscp(&aux);
    (void)*addr;
    uint64_t t2 = __rdtscp(&aux);
    return (uint32_t)(t2 - t1);
}

int main(void) {
    int fd = shm_open("/tsa_demo", O_RDWR, 0600);
    struct shared_region *sh = mmap(NULL, sizeof(*sh),
                                    PROT_READ | PROT_WRITE,
                                    MAP_SHARED, fd, 0);

    // Wait for victim to init
    while (!sh->ready) { }

    // Flush cache lines first
    for (int i = 0; i < PROBE_SIZE; i++) {
        _mm_clflush(&sh->probe_array[i * STRIDE]);
    }

    // Give victim some time to run and "prime" one line
    usleep(10000);

    uint32_t best_time = UINT_MAX;
    int best_idx = -1;

    for (int idx = 0; idx < PROBE_SIZE; idx++) {
        uint32_t t = time_access(sh, idx);
        if (t < best_time) {
            best_time = t;
            best_idx = idx;
        }
    }

    printf("Best index (cross-proc) = %d, time = %u cycles\n",
           best_idx, best_time);

    // Tell victim to stop
    sh->stop = 1;

    return 0;
}
```

This is closer in spirit to **“victim in one context, attacker in another”**, even though they’re still on the same OS and sharing memory explicitly. Real TSA removes that explicit sharing: instead of a shared array, the “shared state” is the CPU’s internal scheduler, store queue, and L1 cache.

### 4.4 Connecting the lab back to TSA

Right after these code sections, the key takeaway is:

- Our toy lab uses **cache presence** as the side-channel signal (classic Flush+Reload / Prime+Probe).  
- TSA uses **scheduler timing** as the side-channel signal:
  - False completions → invalid data forwarded → different dependency chains → different timing.  
- In both cases, the attacker:

  1. **Influences** microarchitectural state (priming),  
  2. Lets a victim touch secret-dependent data (access pattern),  
  3. Measures a **timing difference** in its own code,  
  4. Reconstructs bits of the secret over many trials.

That’s the mental bridge you want readers to cross.

---

## 5. Mitigations: what AMD, OSs, and clouds are doing

TSA mitigations span firmware, OS, and virtualization layers.

### 5.1 Microcode + VERW

AMD ships updated **microcode** for vulnerable Family 19h CPUs. On top of that, they recommend using the memory form of the `VERW` instruction as a “microarchitectural scrub”:

- New CPUID bits tell software:
  - Whether TSA-L1 / TSA-SQ are not present,
  - Whether the CPU supports TSA mitigation via `VERW_CLEAR`.  
- With appropriate microcode loaded, **CPL0 (kernel / hypervisor)** can execute `VERW` to clear TSA-relevant structures when crossing trust boundaries, e.g.:
  - Kernel → user transitions,  
  - Hypervisor → guest VM transitions,  
  - Before entering low-power states.

This is similar in spirit to existing post-Spectre mitigations (IBPB, STIBP, etc.) but targeted at scheduler structures.

### 5.2 Linux `MITIGATION_TSA` and `tsa=` knob

Linux added explicit support for TSA mitigations:

- A new Kconfig option `MITIGATION_TSA` gates TSA-related logic.  
- A boot parameter `tsa=` controls behavior (e.g., always on, only for user/kernel transitions, only guest/host transitions, or disabled).  
- Combined with updated microcode from `linux-firmware`, this lets distros tune performance vs security trade-offs depending on threat model.

### 5.3 SEV-SNP and attestation

For AMD’s **SEV-SNP** (encrypted VM) environments:

- TSA could, in principle, allow a malicious hypervisor to infer SEV-SNP guest data.  
- Microcode and firmware updates aim to automatically mitigate TSA for SEV-SNP guests.  
- Guest owners are expected to:
  - Verify via **attestation** that the host is running the right microcode,  
  - Confirm that TSA mitigations are active before trusting the platform.

---

## 6. What red teams and blue teams should actually do

### 6.1 For red teams

TSA probably won’t be your **first** move in a real engagement, but it’s worth understanding as part of a modern attack surface:

- **Model it as a capability**:  
  - “Given local code execution on a shared AMD Zen 3/4 host, I may be able to leak bits of privileged data over time.”
- **Think in campaigns, not single shots**:  
  - Meeting the timing conditions and noise requirements means you want long-lived footholds and repeated victim activity.
- **Use it to stress test cloud models**:  
  - Ask: “If I’m a rogue tenant on this EPYC host, what’s the maximum *theoretical* data I can extract from neighbors?”

TSA is a great hook for talks and blogs because it forces teams to think beyond “network perimeter” and even beyond “syscall boundary.” The CPU itself is part of the threat surface.

### 6.2 For blue teams

Concrete actions:

1. **Patch like this is Meltdown-class, not just ‘medium CVSS’**  
   - Make sure:
     - Firmware/microcode is up to date for all Family 19h platforms,  
     - OS / hypervisor builds include TSA mitigations and have `tsa=` configured appropriately.

2. **Re-evaluate your multi-tenant risk**  
   - In clouds and shared hosting:
     - Understand which SKUs are affected,  
     - Decide whether you treat TSA as an academic curiosity or something you must mitigate for specific tenants (e.g., high-sensitivity workloads).  

3. **Include TSA in your threat modeling**  
   - It’s an **info-leak primitive**, not an RCE.  
   - Combine it mentally with other bugs:
     - RCE → TSA → secret exfiltration → crypto break → lateral movement.

4. **Watch for performance regressions**  
   - VERW-based mitigations may hurt performance; you’ll need to benchmark and possibly make different choices per environment (internal dev vs multi-tenant cloud vs regulated workloads).

---

## 7. Further reading

If you want to go deeper than this blog, here’s a good starting stack:

- AMD’s **Transient Scheduler Attacks** (TSA) security bulletin and technical guidance.  
- Linux kernel docs / Phoronix coverage for `MITIGATION_TSA` and the `tsa=` boot knob.  
- Research papers on speculative and transient execution attacks (Spectre, Meltdown, Zenbleed, Inception, Medusa, etc.).  
- AMD and academic work on automated discovery of microarchitectural leaks and isolation-boundary testing.

These will give you both the official narrative and the gritty experimental details behind TSA.

---

*Again: everything here is for learning and for defending modern systems. Don’t point side-channel experiments at machines you don’t own or control, and assume that anything that can leak data can also get you in trouble if you use it irresponsibly.*
