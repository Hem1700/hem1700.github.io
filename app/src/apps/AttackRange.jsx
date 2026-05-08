import { useState, useEffect, useRef, useCallback } from "react";

const API_URL = "https://api.anthropic.com/v1/messages";
const SESSION_KEY = "hemos:exploitlab:apikey";

// ── Scenarios ──────────────────────────────────────────────────────────────

const SCENARIOS = [
  {
    id: "sqli",
    name: "SQL Injection",
    icon: "🗄️",
    difficulty: "EASY",
    dc: "#4ade80",
    target: "login.php — vulnerable-corp.com",
    objective: "Bypass authentication or dump the users table",
    hint: "Try: ' OR '1'='1' --  or  ' UNION SELECT 1,username,password_hash,role FROM users --",
    initialState: {
      type: "database",
      tables: {
        users: [
          { id: 1, username: "admin",  password_hash: "5f4dcc3b5aa765d6", role: "ADMIN" },
          { id: 2, username: "alice",  password_hash: "0d107d09f5bbe40c", role: "USER"  },
          { id: 3, username: "bob",    password_hash: "5e884898da280471", role: "USER"  },
        ],
      },
      currentQuery: "SELECT * FROM users WHERE username=? AND password_hash=?",
      authenticated: false,
      lastResult: null,
    },
    systemPrompt: `You are a deliberately vulnerable PHP/MySQL login system in an educational security lab. The attacker is learning SQL injection.

Vulnerable PHP:
$query = "SELECT * FROM users WHERE username='" . $_POST['username'] . "' AND password_hash='" . md5($_POST['password']) . "'";
$result = mysqli_query($conn, $query);
if(mysqli_num_rows($result) > 0) { echo "Welcome " . $row['username']; } else { echo "Login failed."; }

Always respond with ONLY a valid JSON object — no markdown fences, no explanation:
{
  "serverResponse": "What appears on screen to the attacker (login message, error, or dumped rows)",
  "sqlQuery": "The actual SQL string after injection is applied (show the full string with quotes visible)",
  "internalLog": "What the database engine does — 1 sentence, technical",
  "newState": {},
  "exploitSuccess": false,
  "successMessage": null
}

Rules:
- newState must preserve the same structure as input state, just update currentQuery, authenticated, lastResult fields
- If auth bypass works, set authenticated: true and lastResult to the matched row(s)
- If UNION or data dump works, put the dumped rows in lastResult
- Set exploitSuccess: true when attacker bypasses auth OR reads data they shouldn't see
- successMessage should say what they achieved`,
    buildUserMessage: (state, input) =>
      `State: ${JSON.stringify(state)}\nAttacker enters in the username field (password = "test"): ${input}`,
  },

  {
    id: "cmdi",
    name: "Command Injection",
    icon: "💉",
    difficulty: "MEDIUM",
    dc: "#fb923c",
    target: "Network diagnostics — 10.0.1.5/ping.php",
    objective: "Inject shell commands. Read /etc/passwd or /root/.ssh/id_rsa",
    hint: "Try: 127.0.0.1; id  or  127.0.0.1 && cat /etc/passwd  or  127.0.0.1 | cat /root/.ssh/id_rsa",
    initialState: {
      type: "shell",
      hostname: "prod-web-01",
      cwd: "/var/www/html",
      commandHistory: [],
      lastOutput: "",
      rootOwned: false,
      sensitiveFiles: {
        "/etc/passwd": "root:x:0:0:root:/root:/bin/bash\ndaemon:x:1:1:daemon:/usr/sbin:/usr/sbin/nologin\nwww-data:x:33:33:www-data:/var/www:/usr/sbin/nologin\nhem:x:1000:1000::/home/hem:/bin/bash\nalice:x:1001:1001::/home/alice:/bin/bash",
        "/etc/shadow": "root:$6$rounds=5000$saltsalt$H4SHED:18000:0:99999:7:::\nhem:$6$rounds=5000$usersalt$H4SHED2:18000:0:99999:7:::",
        "/root/.ssh/id_rsa": "-----BEGIN RSA PRIVATE KEY-----\nMIIEpAIBAAKCAQEA2aXv8QW3cV...REDACTED FOR SECURITY...\n-----END RSA PRIVATE KEY-----",
        "/root/flag.txt": "FLAG{c0mm4nd_1nj3ct10n_pwn3d}",
      },
    },
    systemPrompt: `You are a deliberately vulnerable PHP web application on a Linux server in an educational security lab.

Vulnerable PHP (ping.php):
$host = $_POST['host'];
$output = shell_exec("ping -c 4 " . $host);  // no sanitization!
echo "<pre>" . $output . "</pre>";

Always respond with ONLY a valid JSON object — no markdown fences, no explanation:
{
  "serverResponse": "The raw command output the attacker sees in the page",
  "commandExecuted": "The full shell command that ran, with injection applied (show full string)",
  "internalLog": "What the OS executes — 1 sentence, technical",
  "newState": {},
  "exploitSuccess": false,
  "successMessage": null
}

Rules:
- If attacker uses ; | && || to chain commands, run ALL chained commands and show all output
- If they try to read a file in sensitiveFiles, include that file's content verbatim in serverResponse
- Update commandHistory by appending the commandExecuted
- Update lastOutput to the serverResponse
- Set exploitSuccess: true if they read any sensitive file or execute commands beyond ping
- If they run "id" or "whoami", return "www-data"`,
    buildUserMessage: (state, input) =>
      `State: ${JSON.stringify({ hostname: state.hostname, commandHistory: state.commandHistory, rootOwned: state.rootOwned })}\nSensitive files (return contents if accessed): ${JSON.stringify(state.sensitiveFiles)}\nAttacker submits to host field: ${input}`,
  },

  {
    id: "pathtraversal",
    name: "Path Traversal",
    icon: "📂",
    difficulty: "EASY",
    dc: "#4ade80",
    target: "File API — api.vulnerable-corp.com/download",
    objective: "Escape the web root. Read /etc/passwd or find the flag",
    hint: "Try: ../../../etc/passwd  or  ....//....//....//etc/shadow  or  ../../../root/flag.txt",
    initialState: {
      type: "filesystem",
      webroot: "/var/www/uploads/",
      requestedFile: null,
      resolvedPath: null,
      inWebroot: true,
      lastResponse: null,
      sensitiveFiles: {
        "/etc/passwd": "root:x:0:0:root:/root:/bin/bash\nwww-data:x:33:33:www-data:/var/www:/usr/sbin/nologin\nhem:x:1000:1000::/home/hem:/bin/bash",
        "/etc/shadow": "root:$6$rounds=5000$saltsalt$H4SHED:18000:0:99999:7:::",
        "/root/.ssh/id_rsa": "-----BEGIN RSA PRIVATE KEY-----\nMIIEpAIBAAK...REDACTED...\n-----END RSA PRIVATE KEY-----",
        "/root/flag.txt": "FLAG{p4th_tr4v3rs4l_gg_wp}",
        "/var/www/config.php": "<?php\n$db_host='localhost';\n$db_user='root';\n$db_pass='S3cur3P@ssw0rd!';\n$db_name='production_db';\n?>",
      },
      knownFiles: ["report_q1.pdf", "invoice_2024.pdf", "profile_pic.jpg"],
    },
    systemPrompt: `You are a deliberately vulnerable file download API in an educational security lab.

Vulnerable PHP (/api/download):
$file = $_GET['file'];  // user input, e.g. "report.pdf"
$path = "/var/www/uploads/" . $file;  // naive join
if(file_exists($path)) { readfile($path); } else { http_response_code(404); echo "Not found"; }

Always respond with ONLY a valid JSON object — no markdown fences, no explanation:
{
  "serverResponse": "The HTTP response body — file contents if found, 404 message if not",
  "resolvedPath": "The actual filesystem path after joining webroot + user input (resolve ../ manually)",
  "inWebroot": true or false based on whether resolvedPath starts with /var/www/uploads/,
  "internalLog": "What PHP does with the path — 1 sentence",
  "newState": {},
  "exploitSuccess": false,
  "successMessage": null
}

Rules:
- Resolve path traversal sequences yourself (../../ etc) to get the final absolute path
- If resolvedPath matches a key in sensitiveFiles, include its contents in serverResponse
- If resolvedPath is outside /var/www/uploads/, set inWebroot: false
- Set exploitSuccess: true when attacker reads any sensitive file
- Update newState.requestedFile, resolvedPath, inWebroot, lastResponse`,
    buildUserMessage: (state, input) =>
      `State: ${JSON.stringify({ webroot: state.webroot, requestedFile: state.requestedFile, resolvedPath: state.resolvedPath })}\nSensitive files: ${JSON.stringify(state.sensitiveFiles)}\nAttacker sends: GET /api/download?file=${input}`,
  },

  {
    id: "xss",
    name: "Cross-Site Scripting",
    icon: "🕷️",
    difficulty: "MEDIUM",
    dc: "#fb923c",
    target: "Comment section — blog.vulnerable-corp.com",
    objective: "Inject a script that pops alert() or steals the admin session cookie",
    hint: "Try: <script>alert(1)</script>  or  <img src=x onerror=alert(document.cookie)>  or  <svg onload=alert('XSS')>",
    initialState: {
      type: "dom",
      comments: [
        { id: 1, author: "alice", text: "Great article on security!", ts: "3h ago" },
        { id: 2, author: "bob",   text: "Very informative writeup.",  ts: "2h ago" },
      ],
      adminCookie: "session=eyJhbGciOiJIUzI1NiJ9.eyJ1c2VyIjoiYWRtaW4iLCJyb2xlIjoiYWRtaW4ifQ.REDACTED; Path=/; HttpOnly=false; SameSite=None",
      xssTriggered: false,
      cookieStolen: false,
      lastPayload: null,
    },
    systemPrompt: `You are a deliberately vulnerable PHP blog comment system in an educational security lab. Comments are stored raw and rendered without sanitization.

Vulnerable PHP:
// Store: $comment = $_POST['comment'];  // saved to DB without htmlspecialchars
// Render: echo "<li>" . $row['comment'] . "</li>";  // raw output!

When a victim (admin) browses the page, their browser parses the stored comment as HTML.
Admin cookie (available to scripts since HttpOnly=false): eyJhbGciOiJIUzI1NiJ9.eyJ1c2VyIjoiYWRtaW4iLCJyb2xlIjoiYWRtaW4ifQ.REDACTED

Always respond with ONLY a valid JSON object — no markdown fences, no explanation:
{
  "serverResponse": "What the victim's browser renders or executes — describe the visual outcome and any popups/exfil",
  "renderedHtml": "The raw HTML that gets injected into the page (exactly as stored)",
  "internalLog": "What the browser parser does with this HTML — 1 sentence",
  "newState": {},
  "exploitSuccess": false,
  "successMessage": null
}

Rules:
- If input contains <script>, onerror=, onload=, or other XSS vectors: set xssTriggered: true
- If the script accesses document.cookie: set cookieStolen: true, include the adminCookie value in serverResponse
- Add the new comment to state.comments array (with id, author="attacker", text=input, ts="just now")
- Set exploitSuccess: true if a script executes
- If cookie is stolen, show it being "sent to attacker's server" in serverResponse`,
    buildUserMessage: (state, input) =>
      `State: ${JSON.stringify({ comments: state.comments, xssTriggered: state.xssTriggered, cookieStolen: state.cookieStolen })}\nAdmin cookie: ${state.adminCookie}\nAttacker posts this comment: ${input}`,
  },

  {
    id: "bof",
    name: "Buffer Overflow",
    icon: "💾",
    difficulty: "HARD",
    dc: "#f87171",
    target: "auth_service — 10.0.1.10:4444 (32-bit Linux ELF)",
    objective: "Overflow buf[64] to overwrite the return address and call win()",
    hint: "Buffer is 64 bytes. Try 72 'A's first to reach saved EBP. win() is at 0x080484d0. Send 76 bytes total with last 4 = \\xd0\\x84\\x04\\x08",
    initialState: {
      type: "memory",
      bufferSize: 64,
      overflowOffset: 72,
      winAddress: "0x080484d0",
      currentRetAddr: "0x080484a0",
      bytesWritten: 0,
      overflowDetected: false,
      shellObtained: false,
      stack: [
        { addr: "0xffffcefc", label: "return address", value: "0x080484a0", highlight: false },
        { addr: "0xffffcef8", label: "saved EBP",      value: "0xffffcef8", highlight: false },
        { addr: "0xffffcec0", label: "buf[63]",         value: "0x00",      highlight: false },
        { addr: "0xffffce9c", label: "buf[0]",          value: "0x00",      highlight: false },
      ],
      inputHistory: [],
    },
    systemPrompt: `You are a deliberately vulnerable 32-bit Linux auth service in an educational security lab.

Vulnerable C:
void win() { printf("Shell obtained!\\n"); execve("/bin/sh", NULL, NULL); }  // addr: 0x080484d0
void vuln() {
  char buf[64];
  printf("Enter token: ");
  gets(buf);  // no bounds check — stack overflow!
}
int main() { vuln(); return 0; }

Stack layout (low to high):
buf[0]  @ 0xffffce9c  (64 bytes for the buffer)
buf[63] @ 0xffffcec0
saved EBP @ 0xffffcedc  (4 bytes)
return addr @ 0xffffcefc  ← win() must land here

Always respond with ONLY a valid JSON object — no markdown fences, no explanation:
{
  "serverResponse": "What the program prints (normal output, crash message, or shell prompt)",
  "bytesAnalysis": "How many bytes sent, what they overwrite — mention specific addresses",
  "internalLog": "CPU/stack behavior — 1 sentence, technical",
  "newState": {},
  "exploitSuccess": false,
  "successMessage": null
}

Rules:
- Update bytesWritten to input.length
- If bytesWritten > 64: overflowDetected = true, update stack to show buf filling and bleeding into EBP/retaddr
- If input contains \\xd0\\x84\\x04\\x08 (or "win" or the hex address) AND bytesWritten >= 72: shellObtained = true, exploitSuccess = true
- If bytesWritten exactly matches the right payload (72+ bytes ending in win() address), trigger success
- Update stack array values to reflect what bytes were written there
- If no overflow yet: show "Enter token:" prompt in serverResponse`,
    buildUserMessage: (state, input) =>
      `Stack state: ${JSON.stringify(state.stack)}\nbufferSize: ${state.bufferSize}, overflowOffset: ${state.overflowOffset}, win() @ ${state.winAddress}\ncurrent retAddr: ${state.currentRetAddr}, inputHistory: ${JSON.stringify(state.inputHistory)}\nAttacker sends ${input.length} bytes: ${input}`,
  },
];

// ── Visual Renderers ──────────────────────────────────────────────────────────

function DatabaseViz({ state }) {
  const table = state.tables?.users || [];
  return (
    <div className="ar-viz ar-viz-db">
      <div className="ar-viz-header">
        <span className="ar-viz-badge">MySQL</span>
        <span className="ar-viz-title">vulnerable_corp.users</span>
      </div>
      <div className="ar-table-wrap">
        <table className="ar-table">
          <thead>
            <tr>
              <th>id</th><th>username</th><th>password_hash</th><th>role</th>
            </tr>
          </thead>
          <tbody>
            {table.map(row => (
              <tr key={row.id} className={state.authenticated && row.username === "admin" ? "ar-row-hit" : ""}>
                <td>{row.id}</td>
                <td>{row.username}</td>
                <td className="ar-hash">{row.password_hash}</td>
                <td><span className={`ar-badge-role ${row.role === "ADMIN" ? "ar-admin" : ""}`}>{row.role}</span></td>
              </tr>
            ))}
            {state.lastResult && Array.isArray(state.lastResult) && state.lastResult.map((row, i) => (
              !table.find(r => r.id === row.id) && (
                <tr key={`extra-${i}`} className="ar-row-hit">
                  <td>{row.id}</td>
                  <td>{row.username}</td>
                  <td className="ar-hash">{row.password_hash}</td>
                  <td><span className={`ar-badge-role ${row.role === "ADMIN" ? "ar-admin" : ""}`}>{row.role}</span></td>
                </tr>
              )
            ))}
          </tbody>
        </table>
      </div>
      <div className="ar-viz-section">
        <div className="ar-viz-label">LAST QUERY</div>
        <div className="ar-code-block">{state.currentQuery || "—"}</div>
      </div>
      <div className="ar-viz-section">
        <div className="ar-viz-label">AUTH STATE</div>
        <div className={`ar-status ${state.authenticated ? "ar-status-pwned" : "ar-status-safe"}`}>
          {state.authenticated ? "⚠ AUTHENTICATED (bypass success)" : "● Not authenticated"}
        </div>
      </div>
    </div>
  );
}

function ShellViz({ state }) {
  return (
    <div className="ar-viz ar-viz-shell">
      <div className="ar-viz-header">
        <span className="ar-viz-badge">bash</span>
        <span className="ar-viz-title">{state.hostname} — /var/www/html</span>
      </div>
      <div className="ar-file-tree">
        <div className="ar-tree-dir">/var/www/html/</div>
        {["index.php", "ping.php", "config.php"].map(f => (
          <div key={f} className="ar-tree-file">├── {f}</div>
        ))}
      </div>
      <div className="ar-viz-section">
        <div className="ar-viz-label">COMMAND LOG</div>
        <div className="ar-cmd-history">
          {state.commandHistory?.length ? state.commandHistory.map((cmd, i) => (
            <div key={i} className="ar-cmd-entry">
              <span className="ar-cmd-prompt">www-data@{state.hostname}:~$</span>
              <span className="ar-cmd-text"> {cmd}</span>
            </div>
          )) : <div className="ar-cmd-empty">No commands executed yet</div>}
        </div>
      </div>
      <div className="ar-viz-section">
        <div className="ar-viz-label">SHELL STATUS</div>
        <div className={`ar-status ${state.rootOwned ? "ar-status-pwned" : "ar-status-safe"}`}>
          {state.rootOwned ? "⚠ ROOT SHELL OBTAINED" : "● www-data (limited privileges)"}
        </div>
      </div>
    </div>
  );
}

function FilesystemViz({ state }) {
  const isEscaped = state.inWebroot === false;
  return (
    <div className="ar-viz ar-viz-fs">
      <div className="ar-viz-header">
        <span className="ar-viz-badge">VFS</span>
        <span className="ar-viz-title">File Server — /var/www/uploads/</span>
      </div>
      <div className="ar-path-diagram">
        <div className="ar-path-row">
          <span className="ar-path-label">WEBROOT</span>
          <span className="ar-path-value">/var/www/uploads/</span>
        </div>
        <div className="ar-path-row">
          <span className="ar-path-label">REQUEST</span>
          <span className="ar-path-value ar-path-input">{state.requestedFile || "—"}</span>
        </div>
        <div className={`ar-path-row ${isEscaped ? "ar-path-danger" : ""}`}>
          <span className="ar-path-label">RESOLVED</span>
          <span className={`ar-path-value ${isEscaped ? "ar-path-escape" : ""}`}>{state.resolvedPath || "—"}</span>
        </div>
      </div>
      <div className="ar-viz-section">
        <div className="ar-viz-label">AVAILABLE FILES</div>
        <div className="ar-file-tree">
          {["report_q1.pdf", "invoice_2024.pdf", "profile_pic.jpg"].map(f => (
            <div key={f} className="ar-tree-file">├── {f}</div>
          ))}
        </div>
      </div>
      <div className="ar-viz-section">
        <div className="ar-viz-label">BOUNDARY CHECK</div>
        <div className={`ar-status ${isEscaped ? "ar-status-pwned" : "ar-status-safe"}`}>
          {isEscaped ? "⚠ PATH ESCAPED WEBROOT" : state.resolvedPath ? "● Within /var/www/uploads/" : "● Awaiting request"}
        </div>
      </div>
    </div>
  );
}

function DomViz({ state }) {
  return (
    <div className="ar-viz ar-viz-dom">
      <div className="ar-viz-header">
        <span className="ar-viz-badge">DOM</span>
        <span className="ar-viz-title">blog.vulnerable-corp.com/post/1</span>
      </div>
      <div className="ar-comments-pane">
        {state.comments?.map(c => (
          <div key={c.id} className={`ar-comment ${c.author === "attacker" ? "ar-comment-attacker" : ""}`}>
            <div className="ar-comment-header">
              <span className="ar-comment-author">{c.author}</span>
              <span className="ar-comment-ts">{c.ts}</span>
            </div>
            <div className="ar-comment-body">{c.text}</div>
            {c.author === "attacker" && state.xssTriggered && (
              <div className="ar-xss-badge">⚡ XSS vector stored</div>
            )}
          </div>
        ))}
      </div>
      <div className="ar-viz-section">
        <div className="ar-viz-label">ADMIN COOKIE (HttpOnly=false)</div>
        <div className="ar-code-block ar-cookie">{state.cookieStolen ? state.adminCookie : "session=eyJhbGci... [not yet stolen]"}</div>
      </div>
      <div className="ar-viz-section">
        <div className="ar-viz-label">XSS STATUS</div>
        <div className={`ar-status ${state.xssTriggered ? "ar-status-pwned" : "ar-status-safe"}`}>
          {state.cookieStolen ? "⚠ COOKIE STOLEN — session hijack possible" :
           state.xssTriggered ? "⚠ XSS TRIGGERED — script executed" :
           "● No script injected yet"}
        </div>
      </div>
    </div>
  );
}

function MemoryViz({ state }) {
  return (
    <div className="ar-viz ar-viz-mem">
      <div className="ar-viz-header">
        <span className="ar-viz-badge">Stack</span>
        <span className="ar-viz-title">auth_service — vuln() frame</span>
      </div>
      <div className="ar-stack">
        <div className="ar-stack-note">HIGH ADDRESS</div>
        {state.stack?.map((frame, i) => (
          <div key={i} className={`ar-stack-frame ${frame.highlight ? "ar-frame-hit" : ""} ${frame.label === "return address" && state.overflowDetected ? "ar-frame-overflow" : ""}`}>
            <span className="ar-frame-addr">{frame.addr}</span>
            <span className="ar-frame-label">{frame.label}</span>
            <span className="ar-frame-val">{frame.value}</span>
          </div>
        ))}
        <div className="ar-stack-note">LOW ADDRESS</div>
      </div>
      <div className="ar-viz-section">
        <div className="ar-viz-label">INPUT</div>
        <div className="ar-code-block">{state.bytesWritten > 0 ? `${state.bytesWritten} bytes written` : "Awaiting input"}{state.overflowDetected ? " — ⚠ OVERFLOW!" : ""}</div>
      </div>
      <div className="ar-viz-section">
        <div className="ar-viz-label">EIP CONTROL</div>
        <div className={`ar-status ${state.shellObtained ? "ar-status-pwned" : state.overflowDetected ? "ar-status-warn" : "ar-status-safe"}`}>
          {state.shellObtained ? `⚠ EIP → win() — SHELL OBTAINED` :
           state.overflowDetected ? `⚠ Overflow detected — ret addr overwritten` :
           `● return addr = ${state.currentRetAddr}`}
        </div>
      </div>
    </div>
  );
}

function TargetViz({ scenario, state }) {
  if (!state) return null;
  switch (state.type) {
    case "database":   return <DatabaseViz state={state} />;
    case "shell":      return <ShellViz state={state} />;
    case "filesystem": return <FilesystemViz state={state} />;
    case "dom":        return <DomViz state={state} />;
    case "memory":     return <MemoryViz state={state} />;
    default:           return null;
  }
}

// ── Setup screen (no API key) ─────────────────────────────────────────────────

function SetupScreen({ onKey }) {
  const [val, setVal] = useState("");
  const [show, setShow] = useState(false);
  return (
    <div className="ar-setup">
      <div className="ar-setup-icon">🎯</div>
      <h1 className="ar-setup-title">Attack Range</h1>
      <p className="ar-setup-desc">
        An interactive exploitation playground. Pick a vulnerability, attack a simulated target,
        and watch the system state change in real time. Powered by Claude acting as the vulnerable server.
      </p>
      <div className="ar-privacy-box">
        <span>🔒</span>
        <span>Your API key is stored in <strong>session storage only</strong> — never sent to any server other than <code>api.anthropic.com</code>.</span>
      </div>
      <label className="ar-label">Anthropic API Key</label>
      <div className="ar-key-row">
        <input
          className="ar-input"
          type={show ? "text" : "password"}
          value={val}
          onChange={e => setVal(e.target.value)}
          placeholder="sk-ant-..."
          autoComplete="off"
          spellCheck={false}
        />
        <button type="button" className="ar-key-toggle" onClick={() => setShow(s => !s)}>
          {show ? "hide" : "show"}
        </button>
      </div>
      <button
        className="ar-btn-primary"
        disabled={!val.trim()}
        onClick={() => { sessionStorage.setItem(SESSION_KEY, val.trim()); onKey(val.trim()); }}
      >
        Enter the Range
      </button>
    </div>
  );
}

// ── Win Banner ────────────────────────────────────────────────────────────────

function WinBanner({ message, onDismiss }) {
  return (
    <div className="ar-win-overlay">
      <div className="ar-win-box">
        <div className="ar-win-icon">💀</div>
        <div className="ar-win-title">EXPLOIT SUCCESSFUL</div>
        <div className="ar-win-msg">{message}</div>
        <button className="ar-btn-primary ar-btn-small" onClick={onDismiss}>
          Try another scenario
        </button>
      </div>
    </div>
  );
}

// ── Main Component ────────────────────────────────────────────────────────────

export default function AttackRange() {
  const [apiKey, setApiKey] = useState(() => sessionStorage.getItem(SESSION_KEY) || "");
  const [scenarioIdx, setScenarioIdx] = useState(0);
  const [progState, setProgState] = useState(() => structuredClone(SCENARIOS[0].initialState));
  const [history, setHistory] = useState([]);
  const [inputVal, setInputVal] = useState("");
  const [loading, setLoading] = useState(false);
  const [exploitSuccess, setExploitSuccess] = useState(false);
  const [successMsg, setSuccessMsg] = useState(null);
  const [showHint, setShowHint] = useState(false);
  const [error, setError] = useState(null);
  const termRef = useRef(null);
  const inputRef = useRef(null);

  const scenario = SCENARIOS[scenarioIdx];

  // Scroll terminal to bottom whenever history changes
  useEffect(() => {
    if (termRef.current) {
      termRef.current.scrollTop = termRef.current.scrollHeight;
    }
  }, [history]);

  const switchScenario = useCallback((idx) => {
    setScenarioIdx(idx);
    setProgState(structuredClone(SCENARIOS[idx].initialState));
    setHistory([]);
    setInputVal("");
    setExploitSuccess(false);
    setSuccessMsg(null);
    setShowHint(false);
    setError(null);
  }, []);

  const run = useCallback(async () => {
    const input = inputVal.trim();
    if (!input || loading) return;

    setInputVal("");
    setError(null);
    setHistory(h => [...h, { type: "attacker", text: input }]);
    setLoading(true);

    try {
      const res = await fetch(API_URL, {
        method: "POST",
        headers: {
          "x-api-key": apiKey,
          "anthropic-version": "2023-06-01",
          "anthropic-dangerous-direct-browser-access": "true",
          "content-type": "application/json",
        },
        body: JSON.stringify({
          model: "claude-sonnet-4-6",
          max_tokens: 2048,
          system: scenario.systemPrompt,
          messages: [{ role: "user", content: scenario.buildUserMessage(progState, input) }],
        }),
      });

      if (!res.ok) {
        const err = await res.json().catch(() => ({}));
        throw new Error(err?.error?.message || `API error ${res.status}`);
      }

      const data = await res.json();
      const raw = data.content?.[0]?.text || "";

      // Strip markdown fences if present
      const cleaned = raw.replace(/^```(?:json)?\s*/i, "").replace(/\s*```\s*$/i, "").trim();
      let parsed;
      try {
        parsed = JSON.parse(cleaned);
      } catch {
        throw new Error("Response was malformed. Try again.");
      }

      const {
        serverResponse,
        sqlQuery, commandExecuted, resolvedPath, renderedHtml, bytesAnalysis,
        internalLog,
        newState,
        exploitSuccess: success,
        successMessage,
      } = parsed;

      // Build terminal entry for server response
      const details = [
        sqlQuery ? `SQL: ${sqlQuery}` : null,
        commandExecuted ? `CMD: ${commandExecuted}` : null,
        resolvedPath ? `PATH: ${resolvedPath}` : null,
        renderedHtml ? `HTML: ${renderedHtml}` : null,
        bytesAnalysis || null,
        internalLog ? `[${internalLog}]` : null,
      ].filter(Boolean).join("\n");

      setHistory(h => [
        ...h,
        { type: "server", text: serverResponse || "(no response)", details },
        ...(success ? [{ type: "win", text: successMessage || "Exploit successful!" }] : []),
      ]);

      // Merge newState back (preserve type + sensitiveFiles which Claude doesn't return)
      if (newState && typeof newState === "object") {
        setProgState(prev => ({
          ...prev,
          ...newState,
          type: prev.type,
          sensitiveFiles: prev.sensitiveFiles ?? undefined,
          adminCookie: prev.adminCookie ?? undefined,
        }));
      }

      if (success) {
        setExploitSuccess(true);
        setSuccessMsg(successMessage || "You pwned it.");
      }
    } catch (e) {
      setError(e.message);
      setHistory(h => [...h, { type: "error", text: e.message }]);
    } finally {
      setLoading(false);
      setTimeout(() => inputRef.current?.focus(), 50);
    }
  }, [apiKey, inputVal, loading, scenario, progState]);

  const handleKey = useCallback((e) => {
    if (e.key === "Enter") run();
  }, [run]);

  if (!apiKey) return <SetupScreen onKey={setApiKey} />;

  return (
    <div className="ar-root">
      {/* Scenario selector */}
      <div className="ar-scenarios">
        {SCENARIOS.map((s, i) => (
          <button
            key={s.id}
            className={`ar-scenario-btn ${scenarioIdx === i ? "ar-scenario-active" : ""}`}
            onClick={() => switchScenario(i)}
          >
            <span className="ar-scenario-icon">{s.icon}</span>
            <span className="ar-scenario-name">{s.name}</span>
            <span className="ar-scenario-diff" style={{ color: s.dc }}>{s.difficulty}</span>
          </button>
        ))}
      </div>

      {/* Info bar */}
      <div className="ar-infobar">
        <div className="ar-info-target">
          <span className="ar-info-label">TARGET</span>
          <span className="ar-info-val">{scenario.target}</span>
        </div>
        <div className="ar-info-objective">
          <span className="ar-info-label">OBJECTIVE</span>
          <span className="ar-info-val">{scenario.objective}</span>
        </div>
        <div className="ar-infobar-right">
          <button
            className={`ar-hint-btn ${showHint ? "ar-hint-active" : ""}`}
            onClick={() => setShowHint(s => !s)}
          >
            {showHint ? "Hide hint" : "Hint"}
          </button>
          <button
            className="ar-hint-btn"
            title="Re-enter API key"
            onClick={() => { sessionStorage.removeItem(SESSION_KEY); setApiKey(""); }}
          >
            🔑 Key
          </button>
        </div>
      </div>

      {showHint && (
        <div className="ar-hint-bar">
          💡 {scenario.hint}
        </div>
      )}

      {/* Main layout: terminal + visualizer */}
      <div className="ar-main">
        {/* Terminal */}
        <div className="ar-terminal-pane">
          <div className="ar-term-header">
            <span className="ar-dot ar-dot-r" />
            <span className="ar-dot ar-dot-y" />
            <span className="ar-dot ar-dot-g" />
            <span className="ar-term-title">attacker@kali — attack-range</span>
          </div>
          <div className="ar-term-body" ref={termRef}>
            {history.length === 0 && (
              <div className="ar-term-welcome">
                <span className="ar-term-dim">Attack Range ready. Send your first payload below.</span>
              </div>
            )}
            {history.map((entry, i) => (
              <div key={i} className={`ar-entry ar-entry-${entry.type}`}>
                {entry.type === "attacker" && (
                  <div className="ar-entry-line">
                    <span className="ar-prompt">attacker@kali:~$ </span>
                    <span className="ar-payload">{entry.text}</span>
                  </div>
                )}
                {entry.type === "server" && (
                  <div className="ar-entry-server">
                    <div className="ar-server-response">{entry.text}</div>
                    {entry.details && (
                      <div className="ar-server-details">{entry.details}</div>
                    )}
                  </div>
                )}
                {entry.type === "win" && (
                  <div className="ar-entry-win">
                    ███ EXPLOIT SUCCESS: {entry.text} ███
                  </div>
                )}
                {entry.type === "error" && (
                  <div className="ar-entry-error">Error: {entry.text}</div>
                )}
              </div>
            ))}
            {loading && (
              <div className="ar-entry ar-entry-loading">
                <span className="ar-loading-dot" />
                <span className="ar-loading-dot ar-d2" />
                <span className="ar-loading-dot ar-d3" />
              </div>
            )}
          </div>
          <div className="ar-term-input-row">
            <span className="ar-prompt">attacker@kali:~$ </span>
            <input
              ref={inputRef}
              className="ar-term-input"
              value={inputVal}
              onChange={e => setInputVal(e.target.value)}
              onKeyDown={handleKey}
              placeholder="enter payload…"
              disabled={loading || exploitSuccess}
              spellCheck={false}
              autoComplete="off"
            />
            <button
              className="ar-run-btn"
              onClick={run}
              disabled={loading || !inputVal.trim() || exploitSuccess}
            >
              {loading ? "…" : "▶"}
            </button>
          </div>
        </div>

        {/* Target visualizer */}
        <div className="ar-viz-pane">
          <TargetViz scenario={scenario} state={progState} />
        </div>
      </div>

      {/* Win overlay */}
      {exploitSuccess && (
        <WinBanner
          message={successMsg}
          onDismiss={() => {
            const next = (scenarioIdx + 1) % SCENARIOS.length;
            switchScenario(next);
          }}
        />
      )}
    </div>
  );
}
