import { useEffect, useRef, useState } from "react";
import * as THREE from "three";

const lanePositions = [-1.8, 0, 1.8];

const clamp = (value, min, max) => Math.min(max, Math.max(min, value));

const randomFrom = (list) => {
  if (!list.length) return null;
  const idx = Math.floor(Math.random() * list.length);
  return list[idx];
};

export default function CveRunnerGame({ entries = [] }) {
  const canvasRef = useRef(null);
  const containerRef = useRef(null);
  const actionsRef = useRef({});
  const messageTimerRef = useRef(null);

  const [status, setStatus] = useState("idle");
  const [score, setScore] = useState(0);
  const [patched, setPatched] = useState(0);
  const [lastPatch, setLastPatch] = useState("");
  const [best, setBest] = useState(() => {
    if (typeof window === "undefined") return 0;
    const stored = Number(window.localStorage.getItem("cveRunnerBest") || 0);
    return Number.isFinite(stored) ? stored : 0;
  });
  const bestRef = useRef(best);

  useEffect(() => {
    bestRef.current = best;
  }, [best]);

  useEffect(() => {
    const canvas = canvasRef.current;
    const container = containerRef.current;
    if (!canvas || !container) return undefined;

    const renderer = new THREE.WebGLRenderer({
      canvas,
      antialias: true,
      alpha: true,
      powerPreference: "high-performance",
    });
    renderer.setPixelRatio(Math.min(window.devicePixelRatio || 1, 2));
    renderer.setClearColor(0x000000, 0);

    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(45, 1, 0.1, 100);
    camera.position.set(0, 4.2, 8.4);
    camera.lookAt(0, 1, 0);

    const ambient = new THREE.AmbientLight(0xffffff, 0.6);
    const keyLight = new THREE.DirectionalLight(0xffffff, 0.65);
    keyLight.position.set(3, 6, 4);
    const rimLight = new THREE.PointLight(0xff642f, 0.4, 14);
    rimLight.position.set(-4, 2, 2);
    scene.add(ambient, keyLight, rimLight);

    const groundMaterial = new THREE.MeshStandardMaterial({
      color: new THREE.Color("#f1f0ec"),
      roughness: 0.85,
      metalness: 0.05,
    });
    const ground = new THREE.Mesh(new THREE.PlaneGeometry(18, 120), groundMaterial);
    ground.rotation.x = -Math.PI / 2;
    ground.position.y = 0;
    ground.position.z = -40;
    scene.add(ground);

    const grid = new THREE.GridHelper(18, 36, "#1d1d1d", "#1d1d1d");
    grid.position.y = 0.02;
    grid.position.z = -40;
    const setGridMaterial = (updater) => {
      if (Array.isArray(grid.material)) {
        grid.material.forEach(updater);
      } else {
        updater(grid.material);
      }
    };
    setGridMaterial((mat) => {
      mat.transparent = true;
      mat.opacity = 0.2;
    });
    scene.add(grid);

    const railMaterial = new THREE.MeshStandardMaterial({
      color: new THREE.Color("#1d1d1d"),
      roughness: 0.4,
      metalness: 0.4,
    });
    const leftRail = new THREE.Mesh(new THREE.BoxGeometry(0.2, 0.2, 120), railMaterial);
    const rightRail = new THREE.Mesh(new THREE.BoxGeometry(0.2, 0.2, 120), railMaterial);
    leftRail.position.set(-3, 0.1, -40);
    rightRail.position.set(3, 0.1, -40);
    scene.add(leftRail, rightRail);

    const playerMaterial = new THREE.MeshStandardMaterial({
      color: new THREE.Color("#1d1d1d"),
      emissive: new THREE.Color("#1d1d1d"),
      emissiveIntensity: 0.2,
      roughness: 0.35,
      metalness: 0.3,
    });
    const player = new THREE.Mesh(new THREE.BoxGeometry(0.9, 1.2, 0.9), playerMaterial);
    player.position.set(0, 0.6, 0);
    scene.add(player);

    const obstacleMaterial = new THREE.MeshStandardMaterial({
      color: new THREE.Color("#1d1d1d"),
      emissive: new THREE.Color("#1d1d1d"),
      emissiveIntensity: 0.2,
      roughness: 0.4,
      metalness: 0.2,
    });
    const collectibleMaterial = new THREE.MeshStandardMaterial({
      color: new THREE.Color("#ff642f"),
      emissive: new THREE.Color("#ff642f"),
      emissiveIntensity: 0.6,
      roughness: 0.25,
      metalness: 0.4,
    });
    const obstacleGeometry = new THREE.BoxGeometry(0.8, 0.8, 0.8);
    const collectibleGeometry = new THREE.TorusGeometry(0.35, 0.12, 12, 22);

    const obstacleGroup = new THREE.Group();
    const collectibleGroup = new THREE.Group();
    scene.add(obstacleGroup, collectibleGroup);

    const updateTheme = () => {
      const isDark = document.body.classList.contains("dark");
      const main = isDark ? "#e5e4e0" : "#1d1d1d";
      const groundColor = isDark ? "#252525" : "#f1f0ec";
      const accent = isDark ? "#ff7b6b" : "#ff642f";

      groundMaterial.color.set(groundColor);
      setGridMaterial((mat) => {
        if (mat.color) mat.color.set(main);
        mat.opacity = isDark ? 0.35 : 0.2;
      });
      railMaterial.color.set(main);
      playerMaterial.color.set(main);
      playerMaterial.emissive.set(main);
      obstacleMaterial.color.set(main);
      obstacleMaterial.emissive.set(main);
      collectibleMaterial.color.set(accent);
      collectibleMaterial.emissive.set(accent);
      rimLight.color.set(accent);

      ambient.intensity = isDark ? 0.5 : 0.6;
      keyLight.intensity = isDark ? 0.5 : 0.65;
    };

    updateTheme();
    const themeObserver = new MutationObserver(updateTheme);
    themeObserver.observe(document.body, { attributes: true, attributeFilter: ["class"] });

    const state = {
      running: false,
      speed: 6,
      time: 0,
      score: 0,
      patched: 0,
      laneIndex: 1,
      targetX: lanePositions[1],
      playerVelocity: 0,
      grounded: true,
      obstacles: [],
      collectibles: [],
      obstacleTimer: 0,
      collectibleTimer: 0,
      obstacleInterval: 0.85,
      collectibleInterval: 1.35,
      hudTimer: 0,
    };

    const clearGroup = (group) => {
      while (group.children.length) {
        const child = group.children[0];
        group.remove(child);
      }
    };

    const resetGame = () => {
      state.running = true;
      state.speed = 6;
      state.time = 0;
      state.score = 0;
      state.patched = 0;
      state.laneIndex = 1;
      state.targetX = lanePositions[1];
      state.playerVelocity = 0;
      state.grounded = true;
      state.obstacles = [];
      state.collectibles = [];
      state.obstacleTimer = 0;
      state.collectibleTimer = 0;
      state.obstacleInterval = 0.85;
      state.collectibleInterval = 1.35;
      state.hudTimer = 0;
      player.position.set(0, 0.6, 0);
      clearGroup(obstacleGroup);
      clearGroup(collectibleGroup);
      setPatched(0);
      setScore(0);
      setLastPatch("");
      setStatus("running");
    };

    const endGame = () => {
      state.running = false;
      setStatus("over");
      const finalScore = Math.floor(state.score);
      if (finalScore > bestRef.current) {
        setBest(finalScore);
        if (typeof window !== "undefined") {
          window.localStorage.setItem("cveRunnerBest", String(finalScore));
        }
      }
      if (messageTimerRef.current) {
        window.clearTimeout(messageTimerRef.current);
      }
      setLastPatch("Breach detected. Press Space to restart.");
    };

    const spawnObstacle = () => {
      const lane = Math.floor(Math.random() * lanePositions.length);
      const mesh = new THREE.Mesh(obstacleGeometry, obstacleMaterial);
      mesh.position.set(lanePositions[lane], 0.4, -42);
      obstacleGroup.add(mesh);
      state.obstacles.push(mesh);
    };

    const spawnCollectible = () => {
      const lane = Math.floor(Math.random() * lanePositions.length);
      const mesh = new THREE.Mesh(collectibleGeometry, collectibleMaterial);
      mesh.rotation.x = Math.PI / 2;
      mesh.position.set(lanePositions[lane], 1.4, -42);
      mesh.userData.entry = randomFrom(entries);
      collectibleGroup.add(mesh);
      state.collectibles.push(mesh);
    };

    const moveLane = (dir) => {
      if (!state.running) return;
      state.laneIndex = clamp(state.laneIndex + dir, 0, lanePositions.length - 1);
      state.targetX = lanePositions[state.laneIndex];
    };

    const jump = () => {
      if (!state.running || !state.grounded) return;
      state.playerVelocity = 7;
      state.grounded = false;
    };

    const startOrRestart = () => {
      if (state.running) {
        jump();
        return;
      }
      resetGame();
    };

    actionsRef.current = {
      moveLeft: () => moveLane(-1),
      moveRight: () => moveLane(1),
      jump,
      start: startOrRestart,
    };

    const handleKeyDown = (event) => {
      if (["ArrowLeft", "ArrowRight", "Space", "ArrowUp"].includes(event.code)) {
        event.preventDefault();
      }
      if (event.code === "ArrowLeft") moveLane(-1);
      if (event.code === "ArrowRight") moveLane(1);
      if (event.code === "ArrowUp") jump();
      if (event.code === "Space") startOrRestart();
    };

    window.addEventListener("keydown", handleKeyDown);

    const updateSize = () => {
      const width = container.clientWidth || 1;
      const height = container.clientHeight || 1;
      renderer.setSize(width, height, false);
      camera.aspect = width / height;
      camera.updateProjectionMatrix();
    };

    let resizeObserver = null;
    if (typeof ResizeObserver !== "undefined") {
      resizeObserver = new ResizeObserver(updateSize);
      resizeObserver.observe(container);
    } else {
      window.addEventListener("resize", updateSize);
    }
    updateSize();

    const showPatchMessage = (entry) => {
      if (messageTimerRef.current) {
        window.clearTimeout(messageTimerRef.current);
      }
      if (entry?.id) {
        setLastPatch(`Patched ${entry.id}`);
      } else {
        setLastPatch("Patch acquired.");
      }
      messageTimerRef.current = window.setTimeout(() => {
        setLastPatch("");
      }, 1400);
    };

    const updateHud = (dt) => {
      state.hudTimer += dt;
      if (state.hudTimer < 0.12) return;
      state.hudTimer = 0;
      setScore(Math.floor(state.score));
      setPatched(state.patched);
    };

    const clock = new THREE.Clock();
    let frameId = 0;
    const animate = () => {
      const dt = Math.min(clock.getDelta(), 0.032);
      if (state.running) {
        state.time += dt;
        state.speed = Math.min(13, 6 + state.time * 0.2);
        state.score += dt * (8 + state.speed);

        state.playerVelocity += -18 * dt;
        player.position.y += state.playerVelocity * dt;
        if (player.position.y <= 0.6) {
          player.position.y = 0.6;
          state.playerVelocity = 0;
          state.grounded = true;
        }

        player.position.x += (state.targetX - player.position.x) * 0.2;

        state.obstacleTimer += dt;
        if (state.obstacleTimer >= state.obstacleInterval) {
          state.obstacleTimer = 0;
          state.obstacleInterval = 0.7 + Math.random() * 0.6;
          spawnObstacle();
        }

        state.collectibleTimer += dt;
        if (state.collectibleTimer >= state.collectibleInterval) {
          state.collectibleTimer = 0;
          state.collectibleInterval = 1.1 + Math.random() * 0.7;
          spawnCollectible();
        }

        state.obstacles = state.obstacles.filter((mesh) => {
          mesh.position.z += state.speed * dt;
          if (mesh.position.z > 6) {
            obstacleGroup.remove(mesh);
            return false;
          }
          const hitZ = Math.abs(mesh.position.z - player.position.z) < 0.55;
          const hitX = Math.abs(mesh.position.x - player.position.x) < 0.65;
          const hitY = player.position.y < 0.95;
          if (hitZ && hitX && hitY) {
            endGame();
            return false;
          }
          return true;
        });

        state.collectibles = state.collectibles.filter((mesh) => {
          mesh.position.z += state.speed * dt;
          mesh.rotation.y += dt * 2;
          if (mesh.position.z > 6) {
            collectibleGroup.remove(mesh);
            return false;
          }
          const dist = mesh.position.distanceTo(player.position);
          if (dist < 0.8) {
            collectibleGroup.remove(mesh);
            state.score += 120;
            state.patched += 1;
            showPatchMessage(mesh.userData.entry);
            return false;
          }
          return true;
        });

        updateHud(dt);
      }

      renderer.render(scene, camera);
      frameId = requestAnimationFrame(animate);
    };

    animate();

    return () => {
      cancelAnimationFrame(frameId);
      window.removeEventListener("keydown", handleKeyDown);
      if (resizeObserver) {
        resizeObserver.disconnect();
      } else {
        window.removeEventListener("resize", updateSize);
      }
      themeObserver.disconnect();
      obstacleGeometry.dispose();
      collectibleGeometry.dispose();
      grid.geometry.dispose();
      setGridMaterial((mat) => mat.dispose());
      groundMaterial.dispose();
      railMaterial.dispose();
      playerMaterial.dispose();
      obstacleMaterial.dispose();
      collectibleMaterial.dispose();
      renderer.dispose();
    };
  }, [entries]);

  useEffect(() => () => {
    if (messageTimerRef.current) {
      window.clearTimeout(messageTimerRef.current);
    }
  }, []);

  const overlayTitle = status === "idle" ? "Press Space to Start" : "Breach detected";
  const overlayText = status === "idle"
    ? "Use arrow keys to change lanes. Space to jump."
    : "Press Space to restart.";

  return (
    <div className="cve-game" ref={containerRef}>
      <canvas ref={canvasRef} className="cve-game__canvas" />
      <div className="cve-game__hud">
        <div className="game-card">
          <span className="game-label">Score</span>
          <span className="game-value">{score}</span>
        </div>
        <div className="game-card">
          <span className="game-label">Patched</span>
          <span className="game-value">{patched}</span>
        </div>
        <div className="game-card">
          <span className="game-label">Best</span>
          <span className="game-value">{best}</span>
        </div>
      </div>
      {lastPatch && <div className="game-toast">{lastPatch}</div>}
      <div className={`game-overlay ${status === "running" ? "" : "show"}`}>
        <div className="game-overlay-card">
          <div className="game-overlay-title">{overlayTitle}</div>
          <div className="game-overlay-text">{overlayText}</div>
          <button className="button primary" type="button" onClick={() => actionsRef.current.start?.()}>
            {status === "idle" ? "Start run" : "Restart"}
          </button>
        </div>
      </div>
      <div className="game-controls">
        <button className="pill" type="button" onClick={() => actionsRef.current.moveLeft?.()}>
          ←
        </button>
        <button className="pill" type="button" onClick={() => actionsRef.current.jump?.()}>
          Jump
        </button>
        <button className="pill" type="button" onClick={() => actionsRef.current.moveRight?.()}>
          →
        </button>
      </div>
    </div>
  );
}
