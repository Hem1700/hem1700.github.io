import * as THREE from 'three';
import { Sky } from './vendor/Sky.js';
const LENGTH = 3200;
export function roadX(z) { return Math.sin(z * .0038) * 72 + Math.sin(z * .0105) * 15; }
function roadY(z) { return 4 + Math.sin(z * .004) * 4 + z * .009; }
function height(x, z) { const d = Math.abs(x - roadX(z)); const ramp = THREE.MathUtils.smoothstep(d, 8, 70); return roadY(z) - .12 + ramp * (12 + Math.sin(x * .026 + z * .008) * 10 + Math.sin(z * .019) * 5) + Math.max(0, d - 65) * .35; }
export function createGame(container, onUpdate) {
    const scene = new THREE.Scene();
    scene.background = new THREE.Color('#a2b8b4');
    scene.fog = new THREE.FogExp2('#adbbb0', .0016);
    const renderer = new THREE.WebGLRenderer({ antialias: true, powerPreference: 'high-performance' });
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 1.8));
    renderer.setSize(container.clientWidth, container.clientHeight);
    renderer.shadowMap.enabled = true;
    renderer.shadowMap.type = THREE.PCFShadowMap;
    renderer.toneMapping = THREE.ACESFilmicToneMapping;
    renderer.toneMappingExposure = .85;
    container.appendChild(renderer.domElement);
    const camera = new THREE.PerspectiveCamera(53, container.clientWidth / container.clientHeight, .1, 2200);
    scene.add(new THREE.HemisphereLight('#c8e2ef', '#66715b', 2));
    const sun = new THREE.DirectionalLight('#ffe0a0', 3.2);
    sun.position.set(-150, 140, 280);
    sun.castShadow = true;
    sun.shadow.mapSize.set(2048, 2048);
    sun.shadow.camera.left = -75;
    sun.shadow.camera.right = 75;
    sun.shadow.camera.top = 75;
    sun.shadow.camera.bottom = -75;
    sun.shadow.camera.far = 500;
    sun.shadow.bias = -.0003;
    scene.add(sun, sun.target);
    const sky = new Sky();
    sky.scale.setScalar(15000);
    sky.material.uniforms.turbidity.value = 4;
    sky.material.uniforms.rayleigh.value = 1.3;
    sky.material.uniforms.mieCoefficient.value = .005;
    sky.material.uniforms.mieDirectionalG.value = .82;
    const sunV = new THREE.Vector3(-.5, .19, 1).normalize();
    sky.material.uniforms.sunPosition.value.copy(sunV);
    scene.add(sky);
    const pmrem = new THREE.PMREMGenerator(renderer);
    const env = pmrem.fromScene(sky, .02);
    scene.environment = env.texture;
    const grass = new THREE.MeshStandardMaterial({ vertexColors: true, roughness: 1 });
    const groundGeo = new THREE.PlaneGeometry(1800, 4300, 180, 430);
    groundGeo.rotateX(-Math.PI / 2);
    groundGeo.translate(0, 0, 1800);
    const pos = groundGeo.attributes.position;
    const colors = [];
    const color = new THREE.Color();
    for (let i = 0; i < pos.count; i++) {
        const x = pos.getX(i), z = pos.getZ(i);
        const y = height(x, z);
        pos.setY(i, y);
        const n = (Math.sin(x * 3.12 + z * 5.78) * 437.8) % 1;
        const d = Math.abs(x - roadX(z));
        color.set(d > 140 ? '#818376' : d > 22 ? '#69774a' : '#939174').multiplyScalar(.85 + n * .1);
        colors.push(color.r, color.g, color.b);
    }
    groundGeo.setAttribute('color', new THREE.Float32BufferAttribute(colors, 3));
    groundGeo.computeVertexNormals();
    const ground = new THREE.Mesh(groundGeo, grass);
    ground.receiveShadow = true;
    scene.add(ground);
    function ribbon(offset, width, material) { const vs = [], inds = []; for (let i = 0; i <= 1700; i++) {
        const z = -150 + i * 2;
        for (const dx of [-width / 2, width / 2]) {
            vs.push(roadX(z) + offset + dx, roadY(z) + .018, z);
        }
        if (i < 1700) {
            const a = i * 2;
            inds.push(a, a + 2, a + 1, a + 1, a + 2, a + 3);
        }
    } const g = new THREE.BufferGeometry(); g.setAttribute('position', new THREE.Float32BufferAttribute(vs, 3)); g.setIndex(inds); g.computeVertexNormals(); const m = new THREE.Mesh(g, material); m.receiveShadow = true; scene.add(m); }
    // A fine-grained asphalt texture uses deterministic noise, repeated along the road.
    const pixels = new Uint8Array(128 * 128 * 4);
    for (let i = 0; i < 128 * 128; i++) {
        const n = 50 + Math.floor((Math.sin(i * 78.233) * 43758.5453 % 1) * 12);
        pixels[i * 4] = n;
        pixels[i * 4 + 1] = n + 2;
        pixels[i * 4 + 2] = n + 1;
        pixels[i * 4 + 3] = 255;
    }
    const tex = new THREE.DataTexture(pixels, 128, 128);
    tex.wrapS = tex.wrapT = THREE.RepeatWrapping;
    tex.needsUpdate = true;
    ribbon(0, 14, new THREE.MeshStandardMaterial({ color: '#555951', roughness: .96 }));
    ribbon(0, 11, new THREE.MeshStandardMaterial({ color: '#444a49', roughness: .87 }));
    const paint = new THREE.MeshStandardMaterial({ color: '#e6e2c9', roughness: .7 });
    ribbon(-5.1, .12, paint);
    ribbon(5.1, .12, paint);
    const dashGeo = new THREE.BoxGeometry(.14, .025, 3.6);
    const dashMesh = new THREE.InstancedMesh(dashGeo, paint, 420);
    const dummy = new THREE.Object3D();
    for (let i = 0; i < 420; i++) {
        const z = i * 8 - 80;
        dummy.position.set(roadX(z), roadY(z) + .04, z);
        dummy.rotation.set(0, Math.atan((roadX(z + 1) - roadX(z - 1)) / 2), 0);
        dummy.updateMatrix();
        dashMesh.setMatrixAt(i, dummy.matrix);
    }
    scene.add(dashMesh);
    const railMat = new THREE.MeshStandardMaterial({ color: '#909993', metalness: .7, roughness: .4 });
    const railGeo = new THREE.BoxGeometry(.13, .28, 8.2);
    const rails = new THREE.InstancedMesh(railGeo, railMat, 840);
    for (let i = 0; i < 840; i++) {
        let z = Math.floor(i / 2) * 8 - 80;
        dummy.position.set(roadX(z) + (i % 2 ? 6.4 : -6.4), roadY(z) + .75, z);
        dummy.rotation.set(0, Math.atan((roadX(z + 1) - roadX(z - 1)) / 2), 0);
        dummy.updateMatrix();
        rails.setMatrixAt(i, dummy.matrix);
    }
    scene.add(rails);
    const posts = new THREE.InstancedMesh(new THREE.BoxGeometry(.14, .8, .15), railMat, 840);
    for (let i = 0; i < 840; i++) {
        let z = Math.floor(i / 2) * 8 - 80;
        dummy.position.set(roadX(z) + (i % 2 ? 6.4 : -6.4), roadY(z) + .4, z);
        dummy.rotation.set(0, 0, 0);
        dummy.updateMatrix();
        posts.setMatrixAt(i, dummy.matrix);
    }
    scene.add(posts);
    let seed = 17;
    const random = () => { seed = (seed * 1664525 + 1013904223) >>> 0; return seed / 4294967296; };
    const treeCount = 1900;
    const trees = new THREE.InstancedMesh(new THREE.ConeGeometry(1, 1, 7), new THREE.MeshStandardMaterial({ color: '#294a35', roughness: 1 }), treeCount * 3);
    const trunks = new THREE.InstancedMesh(new THREE.CylinderGeometry(.13, .24, 1, 5), new THREE.MeshStandardMaterial({ color: '#514434' }), treeCount);
    for (let i = 0; i < treeCount; i++) {
        const z = random() * 3650 - 100;
        const side = random() < .5 ? -1 : 1;
        const x = roadX(z) + side * (12 + random() * 360);
        const h = 5 + random() * 12;
        const y = height(x, z);
        dummy.position.set(x, y + h * .28, z);
        dummy.rotation.set(0, random() * 6, 0);
        dummy.scale.set(1, h * .55, 1);
        dummy.updateMatrix();
        trunks.setMatrixAt(i, dummy.matrix);
        for (let j = 0; j < 3; j++) {
            dummy.position.y = y + h * (.43 + j * .22);
            dummy.scale.set(h * (.29 - j * .06), h * .57, h * (.29 - j * .06));
            dummy.updateMatrix();
            trees.setMatrixAt(i * 3 + j, dummy.matrix);
            color.setHSL(.29 + random() * .07, .20 + random() * .12, .13 + random() * .08);
            trees.setColorAt(i * 3 + j, color);
        }
    }
    trees.castShadow = true;
    scene.add(trees, trunks);
    dummy.scale.set(1, 1, 1);
    const rockMat = new THREE.MeshStandardMaterial({ color: '#8a8980', roughness: 1, flatShading: true });
    const rocks = new THREE.InstancedMesh(new THREE.IcosahedronGeometry(1, 1), rockMat, 350);
    for (let i = 0; i < 350; i++) {
        const z = random() * 3500;
        const x = roadX(z) + (random() < .5 ? -1 : 1) * (10 + random() * 180);
        dummy.position.set(x, height(x, z), z);
        dummy.scale.set(1 + random() * 5, 1 + random() * 4, 1 + random() * 5);
        dummy.rotation.set(random() * 2, random() * 3, random() * 2);
        dummy.updateMatrix();
        rocks.setMatrixAt(i, dummy.matrix);
    }
    rocks.castShadow = true;
    scene.add(rocks);
    // Distant ridgelines remain part of the navigable 3D world.
    for (let i = 0; i < 24; i++) {
        const g = new THREE.ConeGeometry(180 + random() * 170, 230 + random() * 350, 7, 5);
        const m = new THREE.Mesh(g, new THREE.MeshStandardMaterial({ color: i % 3 === 0 ? '#8c968f' : '#768b83', roughness: 1, flatShading: true }));
        m.position.set((i % 2 ? -1 : 1) * (650 + random() * 450), 100, i * 180 - 200);
        scene.add(m);
    }
    const checkpoints = [];
    for (let i = 1; i <= 6; i++) {
        const z = [420, 950, 1480, 2010, 2540, 3050][i - 1] + 20;
        const gate = new THREE.Group();
        const mat = new THREE.MeshStandardMaterial({ color: '#dcf08c', emissive: '#b1d25c', emissiveIntensity: .3 });
        for (const x of [-5.7, 5.7]) {
            const pole = new THREE.Mesh(new THREE.CylinderGeometry(.06, .06, 5.3, 8), mat);
            pole.position.set(x, 2.65, 0);
            gate.add(pole);
            const flag = new THREE.Mesh(new THREE.BoxGeometry(.8, 1.5, .06), mat);
            flag.position.set(x - Math.sign(x) * .4, 4.55, 0);
            gate.add(flag);
        }
        gate.position.set(roadX(z), roadY(z), z);
        const canvas = document.createElement('canvas');
        canvas.width = 1024;
        canvas.height = 256;
        const ctx = canvas.getContext('2d');
        ctx.fillStyle = '#172b28';
        ctx.fillRect(0, 0, 1024, 256);
        ctx.strokeStyle = '#dfee8d';
        ctx.lineWidth = 10;
        ctx.strokeRect(5, 5, 1014, 246);
        ctx.fillStyle = '#dfee8d';
        ctx.font = '40px sans-serif';
        ctx.fillText('0' + i + ' / HEM PAREKH', 48, 74);
        ctx.fillStyle = 'white';
        ctx.font = 'bold 72px sans-serif';
        ctx.fillText(['OVERVIEW', 'FINDINGS', 'PROJECTS', 'WRITING', 'ABOUT', 'CONTACT'][i - 1], 48, 178);
        const sign = new THREE.Mesh(new THREE.PlaneGeometry(7, 1.75), new THREE.MeshBasicMaterial({ map: new THREE.CanvasTexture(canvas), side: THREE.DoubleSide }));
        sign.rotation.y = Math.PI;
        sign.position.set(0, 5.7, 0);
        gate.add(sign);
        scene.add(gate);
        checkpoints.push(gate);
    }
    const car = new THREE.Group();
    const bodyMat = new THREE.MeshPhysicalMaterial({ color: '#b9c5b9', metalness: .8, roughness: .25, clearcoat: 1 });
    const glass = new THREE.MeshPhysicalMaterial({ color: '#16282c', metalness: .45, roughness: .12, clearcoat: 1 });
    const black = new THREE.MeshStandardMaterial({ color: '#101817', roughness: .65 });
    function box(w, h, d, x, y, z, mat) { const m = new THREE.Mesh(new THREE.BoxGeometry(w, h, d), mat); m.position.set(x, y, z); m.castShadow = true; car.add(m); return m; }
    box(1.92, .43, 4.2, 0, .62, 0, bodyMat);
    box(1.82, .24, 1.3, 0, .86, 1.3, bodyMat);
    box(1.8, .2, .9, 0, .83, -1.55, bodyMat);
    box(1.61, .5, 1.9, 0, 1.08, -.15, glass);
    box(1.53, .08, 1.25, 0, 1.37, -.3, bodyMat);
    box(1.94, .13, 4.18, 0, .38, 0, black);
    box(1.85, .13, .13, 0, .92, -1.97, bodyMat);
    for (const x of [-.88, .88]) {
        box(.08, .51, 1.9, x, 1.08, -.15, bodyMat);
        box(.22, .12, .31, x * 1.2, 1.03, .65, bodyMat);
    }
    const tailMat = new THREE.MeshStandardMaterial({ color: '#ff3422', emissive: '#ff190a', emissiveIntensity: 1.4 });
    box(1.6, .085, .06, 0, .72, -2.12, tailMat);
    box(.55, .18, .065, 0, .52, -2.13, new THREE.MeshStandardMaterial({ color: '#d5d5bf' }));
    for (const x of [-.65, .65]) {
        box(.4, .10, .07, x, .8, 2.13, new THREE.MeshStandardMaterial({ color: '#ffffcf', emissive: '#ffffd9', emissiveIntensity: 2 }));
        box(.25, .12, .1, x, .37, -2.15, black);
    }
    const wheels = [];
    for (const x of [-.98, .98])
        for (const z of [-1.27, 1.28]) {
            const w = new THREE.Mesh(new THREE.CylinderGeometry(.38, .38, .25, 24), black);
            w.rotation.z = Math.PI / 2;
            w.position.set(x, .4, z);
            w.castShadow = true;
            car.add(w);
            wheels.push(w);
            const hub = new THREE.Mesh(new THREE.CylinderGeometry(.25, .25, .26, 12), new THREE.MeshStandardMaterial({ color: '#899394', metalness: .9, roughness: .25 }));
            hub.rotation.z = Math.PI / 2;
            hub.position.copy(w.position);
            car.add(hub);
        }
    scene.add(car);
    let data = { speed: 0, distance: 0, time: 0, checkpoint: 0, status: 'ready', offroad: false };
    let z = 20, x = roadX(20), velocity = 0, yaw = 0, view = 0, last = 0, frame = 0, update = 0;
    const keys = new Set();
    let audio, osc, gain;
    let soundOn = false;
    const emit = () => onUpdate({ ...data });
    const start = () => { if (data.status === 'ready') {
        data.status = 'driving';
        emit();
    } };
    const reset = () => { z = 20; x = roadX(z); velocity = 0; yaw = 0; keys.clear(); data = { speed: 0, distance: 0, time: 0, checkpoint: 0, status: 'ready', offroad: false }; emit(); };
    const pause = () => { if (data.status === 'driving')
        data.status = 'paused';
    else if (data.status === 'paused')
        data.status = 'driving'; keys.clear(); emit(); };
    const input = (key, v) => { if (v)
        keys.add(key);
    else
        keys.delete(key); };
    const keydown = (e) => { const k = e.key.toLowerCase();
        if (e.target?.closest('button,a') && [' ', 'Enter'].includes(e.key)) return; if (e.target?.closest('input,textarea,select,dialog'))
        return; if (['arrowup', 'arrowdown', 'arrowleft', 'arrowright', ' ', 'w', 'a', 's', 'd', 'escape', 'c', 'r', 'enter'].includes(k)) {
        e.preventDefault();
        if (e.repeat)
            return;
        if (k === 'c')
            view = (view + 1) % 2;
        else if (!['escape', 'r', 'enter'].includes(k))
            input(k, true);
    } };
    const keyup = (e) => input(e.key.toLowerCase(), false);
    const blur = () => { keys.clear(); if (data.status === 'driving')
        pause(); };
    window.addEventListener('keydown', keydown);
    window.addEventListener('keyup', keyup);
    window.addEventListener('blur', blur);
    const resize = () => { camera.aspect = container.clientWidth / container.clientHeight; camera.updateProjectionMatrix(); renderer.setSize(container.clientWidth, container.clientHeight); };
    window.addEventListener('resize', resize);
    function animate(now) {
        frame = requestAnimationFrame(animate);
        const dt = Math.min((now - last) / 1000, .04) || .016;
        last = now;
        if (data.status === 'driving') {
            const throttle = keys.has('w') || keys.has('arrowup');
            const brake = keys.has('s') || keys.has('arrowdown');
            const steer = Number(keys.has('a') || keys.has('arrowleft')) - Number(keys.has('d') || keys.has('arrowright'));
            const off = Math.abs(x - roadX(z)) > 5.1;
            const hand = keys.has(' ');
            velocity += ((throttle ? 12 : 0) - (brake ? 24 : 0) - (hand ? 18 : 0) - .7 - velocity * velocity * .004 - (off ? velocity * .8 : 0)) * dt;
            velocity = THREE.MathUtils.clamp(velocity, 0, 48);
            yaw += steer * dt * (.35 + velocity * .018) * (hand ? 1.7 : 1);
            yaw = THREE.MathUtils.clamp(yaw, -.7, .7);
            if (!steer)
                yaw *= Math.exp(-1.9 * dt);
            x += Math.sin(yaw) * velocity * dt;
            z += Math.cos(yaw) * velocity * dt;
            const center = roadX(z);
            if (Math.abs(x - center) > 5.43) {
                x = center + Math.sign(x - center) * 5.43;
                velocity *= Math.exp(-2.6 * dt);
                yaw *= .96;
            }
            data.distance = Math.min(LENGTH, z - 20);
            data.time += dt;
            data.speed = velocity * 3.6;
            data.offroad = off;
            data.checkpoint = Math.min(6, Math.floor(z / (LENGTH / 6)));
            if (z >= LENGTH + 20) {
                data.distance = LENGTH;
                data.checkpoint = 6;
                data.status = 'finished';
                velocity = 0;
            }
            tailMat.emissiveIntensity = brake || hand ? 4 : 1.4;
            for (const w of wheels)
                w.rotation.x += velocity * dt / .38;
        }
        car.position.set(x, roadY(z), z);
        car.rotation.set(-Math.atan((roadY(z + 1) - roadY(z - 1)) / 2), yaw, 0);
        const target = new THREE.Vector3();
        if (data.status === 'ready') {
            target.set(x + 8, roadY(z) + 4.1, z - 11);
            camera.position.lerp(target, 1 - Math.exp(-dt * 2));
            camera.lookAt(x - 1, roadY(z) + 1, z + 8);
        }
        else {
            target.set(x - Math.sin(yaw) * (view ? 2.2 : 9), roadY(z) + (view ? 1.6 : 4.3), z - Math.cos(yaw) * (view ? 2.2 : 9));
            camera.position.lerp(target, 1 - Math.exp(-dt * 6));
            camera.lookAt(x + Math.sin(yaw) * 12, roadY(z) + 1.1, z + 14);
        }
        sun.position.set(x - 80, roadY(z) + 130, z + 70);
        sun.target.position.set(x, roadY(z), z);
        if (osc && gain && audio) {
            osc.frequency.setTargetAtTime(30 + velocity * 2.8, audio.currentTime, .1);
            gain.gain.setTargetAtTime(soundOn && data.status === 'driving' ? .045 : 0, audio.currentTime, .08);
        }
        renderer.render(scene, camera);
        if (now - update > 90) {
            emit();
            update = now;
        }
    }
    camera.position.set(x + 8, roadY(z) + 4.1, z - 11);
    frame = requestAnimationFrame(animate);
    return { start, reset, pause, input, travel: (distance) => { z = distance + 20; x = roadX(z); velocity = 0; yaw = 0; keys.clear(); data.distance = distance; data.speed = 0; data.status = 'paused'; emit(); }, setPaused: (value) => { data.status = value ? 'paused' : 'driving'; keys.clear(); emit(); }, camera: () => { view = (view + 1) % 2; }, sound: (v) => { soundOn = v; if (v && !audio) {
            audio = new AudioContext();
            osc = audio.createOscillator();
            gain = audio.createGain();
            osc.type = 'sawtooth';
            gain.gain.value = 0;
            const filter = audio.createBiquadFilter();
            filter.type = 'lowpass';
            filter.frequency.value = 230;
            osc.connect(filter);
            filter.connect(gain);
            gain.connect(audio.destination);
            osc.start();
        } if (v)
            void audio?.resume(); }, dispose: () => { cancelAnimationFrame(frame); window.removeEventListener('keydown', keydown); window.removeEventListener('keyup', keyup); window.removeEventListener('blur', blur); window.removeEventListener('resize', resize); void audio?.close(); scene.traverse(o => { if (o instanceof THREE.Mesh) {
            o.geometry.dispose();
            for (const m of Array.isArray(o.material) ? o.material : [o.material])
                m.dispose();
        } }); tex.dispose(); env.dispose(); pmrem.dispose(); renderer.dispose(); renderer.domElement.remove(); } };
}
