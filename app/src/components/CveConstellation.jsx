import { useEffect, useRef } from "react";
import * as THREE from "three";

const severityPalette = {
  Critical: "#ff642f",
  High: "#facb0e",
  Medium: "#78bae6",
  Low: "#bfbebe",
  Info: "#d5d5d5",
};

const clamp = (value, min, max) => Math.min(max, Math.max(min, value));

const seededRandom = (seed) => {
  const s = Math.sin(seed) * 10000;
  return s - Math.floor(s);
};

export default function CveConstellation({ data, onSelectCve, onHover, highlightId }) {
  const canvasRef = useRef(null);
  const containerRef = useRef(null);
  const hoverRef = useRef(onHover);
  const selectRef = useRef(onSelectCve);
  const highlightRef = useRef(highlightId);

  useEffect(() => {
    hoverRef.current = onHover;
  }, [onHover]);

  useEffect(() => {
    selectRef.current = onSelectCve;
  }, [onSelectCve]);

  useEffect(() => {
    highlightRef.current = highlightId;
  }, [highlightId]);

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
    const camera = new THREE.PerspectiveCamera(38, 1, 0.1, 100);
    camera.position.set(0, 0, 8);

    const constellation = new THREE.Group();
    scene.add(constellation);

    const starGeometry = new THREE.BufferGeometry();
    const starCount = 700;
    const starPositions = new Float32Array(starCount * 3);
    for (let i = 0; i < starCount; i += 1) {
      const spread = 26;
      starPositions[i * 3] = (Math.random() - 0.5) * spread;
      starPositions[i * 3 + 1] = (Math.random() - 0.5) * spread * 0.6;
      starPositions[i * 3 + 2] = (Math.random() - 0.5) * spread;
    }
    starGeometry.setAttribute("position", new THREE.BufferAttribute(starPositions, 3));
    const starMaterial = new THREE.PointsMaterial({
      color: new THREE.Color("#1d1d1d"),
      size: 0.06,
      sizeAttenuation: true,
      transparent: true,
      opacity: 0.35,
      depthWrite: false,
    });
    const stars = new THREE.Points(starGeometry, starMaterial);
    scene.add(stars);

    const ambient = new THREE.AmbientLight(0xffffff, 0.6);
    const keyLight = new THREE.DirectionalLight(0xffffff, 0.45);
    keyLight.position.set(3, 2, 4);
    const rimLight = new THREE.PointLight(0xff642f, 0.45, 16);
    rimLight.position.set(-5, 1.5, 5);
    scene.add(ambient, keyLight, rimLight);

    const groupMaterial = new THREE.MeshStandardMaterial({
      color: new THREE.Color("#1d1d1d"),
      emissive: new THREE.Color("#1d1d1d"),
      emissiveIntensity: 0.2,
      roughness: 0.35,
      metalness: 0.2,
      transparent: true,
      opacity: 0.9,
    });

    const cveMaterials = Object.entries(severityPalette).reduce((acc, [key, color]) => {
      acc[key] = new THREE.MeshStandardMaterial({
        color: new THREE.Color(color),
        emissive: new THREE.Color(color),
        emissiveIntensity: 0.45,
        roughness: 0.25,
        metalness: 0.3,
        transparent: true,
        opacity: 0.95,
      });
      return acc;
    }, {});

    const lineMaterial = new THREE.LineBasicMaterial({
      color: new THREE.Color("#1d1d1d"),
      transparent: true,
      opacity: 0.16,
    });

    const groupGeometry = new THREE.SphereGeometry(0.26, 32, 32);
    const cveGeometry = new THREE.SphereGeometry(0.14, 26, 26);

    const pickables = [];
    const cveMeshes = [];
    let lineGeometry = null;

    const buildConstellation = () => {
      constellation.clear();
      cveMeshes.length = 0;
      pickables.length = 0;

      const groups = data?.children || [];
      if (!groups.length) return;

      const groupCount = groups.length;
      const orbitRadius = groupCount > 1 ? 3.4 + groupCount * 0.25 : 0;
      const lines = [];

      groups.forEach((group, groupIndex) => {
        const groupId = group.id || group.name || `group-${groupIndex}`;
        const groupSeed = groupId.length + groupIndex * 11.7;
        const angle = groupCount > 1 ? (groupIndex / groupCount) * Math.PI * 2 : 0;
        const radial = orbitRadius;
        const jitter = (seededRandom(groupSeed) - 0.5) * 0.6;
        const x = Math.cos(angle) * radial + jitter;
        const z = Math.sin(angle) * radial * 0.7 + jitter * 0.4;
        const y = (groupIndex - (groupCount - 1) / 2) * 0.35 + (seededRandom(groupSeed + 3.1) - 0.5) * 0.4;
        const groupPosition = new THREE.Vector3(x, y, z);

        const groupMesh = new THREE.Mesh(groupGeometry, groupMaterial);
        groupMesh.position.copy(groupPosition);
        groupMesh.userData = {
          type: "group",
          payload: {
            id: groupId,
            name: group.name || groupId,
            info: group,
          },
        };
        constellation.add(groupMesh);

        const cves = group.children || [];
        const cveRadius = 0.7 + Math.min(0.8, cves.length * 0.06);
        cves.forEach((cve, cveIndex) => {
          const cveSeed = groupSeed + cveIndex * 7.33;
          const phi = (cveIndex + 1) * 2.399963229728653;
          const localRadius = cveRadius + seededRandom(cveSeed + 2.2) * 0.4;
          const localY = (seededRandom(cveSeed + 4.4) - 0.5) * 0.8;
          const cx = Math.cos(phi) * localRadius;
          const cz = Math.sin(phi) * localRadius;
          const cvePosition = new THREE.Vector3(cx, localY, cz).add(groupPosition);
          const severity = cve.severity || "Info";
          const material = cveMaterials[severity] || cveMaterials.Info;

          const cveMesh = new THREE.Mesh(cveGeometry, material);
          cveMesh.position.copy(cvePosition);
          cveMesh.userData = {
            type: "cve",
            info: cve,
            payload: {
              id: cve.id || cve.title,
              name: cve.id || cve.title,
              info: cve,
            },
            baseScale: 1,
            hover: false,
            selected: false,
            wiggle: seededRandom(cveSeed + 9.1) * Math.PI * 2,
          };
          cveMeshes.push(cveMesh);
          pickables.push(cveMesh);
          constellation.add(cveMesh);

          lines.push(groupPosition.x, groupPosition.y, groupPosition.z);
          lines.push(cvePosition.x, cvePosition.y, cvePosition.z);
        });
      });

      if (lines.length) {
        lineGeometry = new THREE.BufferGeometry();
        lineGeometry.setAttribute("position", new THREE.BufferAttribute(new Float32Array(lines), 3));
        const lineSegments = new THREE.LineSegments(lineGeometry, lineMaterial);
        lineSegments.renderOrder = 0;
        constellation.add(lineSegments);
      }
    };

    buildConstellation();

    const updateTheme = () => {
      const isDark = document.body.classList.contains("dark");
      const groupColor = isDark ? "#e5e4e0" : "#1d1d1d";
      groupMaterial.color.set(groupColor);
      groupMaterial.emissive.set(groupColor);
      groupMaterial.opacity = isDark ? 0.85 : 0.9;

      lineMaterial.color.set(groupColor);
      lineMaterial.opacity = isDark ? 0.22 : 0.16;

      starMaterial.color.set(groupColor);
      starMaterial.opacity = isDark ? 0.5 : 0.35;

      Object.values(cveMaterials).forEach((material) => {
        material.emissiveIntensity = isDark ? 0.6 : 0.45;
      });

      ambient.intensity = isDark ? 0.5 : 0.6;
      rimLight.intensity = isDark ? 0.35 : 0.45;
    };

    updateTheme();
    const themeObserver = new MutationObserver(updateTheme);
    themeObserver.observe(document.body, { attributes: true, attributeFilter: ["class"] });

    const raycaster = new THREE.Raycaster();
    const pointer = new THREE.Vector2();
    const hoveredRef = { current: null };
    const dragState = { active: false, moved: false, startX: 0, startY: 0, rotX: 0, rotY: 0 };

    const updateHover = (event) => {
      const rect = canvas.getBoundingClientRect();
      pointer.x = ((event.clientX - rect.left) / rect.width) * 2 - 1;
      pointer.y = -((event.clientY - rect.top) / rect.height) * 2 + 1;
      raycaster.setFromCamera(pointer, camera);
      const intersects = raycaster.intersectObjects(pickables, false);
      const next = intersects.length ? intersects[0].object : null;

      if (hoveredRef.current && hoveredRef.current !== next) {
        hoveredRef.current.userData.hover = false;
      }

      hoveredRef.current = next;
      if (next) {
        next.userData.hover = true;
        canvas.style.cursor = "pointer";
        hoverRef.current?.({
          node: next.userData.payload,
          screen: { x: event.clientX + 12, y: event.clientY + 12 },
        });
      } else {
        canvas.style.cursor = "grab";
        hoverRef.current?.(null);
      }
    };

    const handlePointerMove = (event) => {
      if (dragState.active) {
        const dx = event.clientX - dragState.startX;
        const dy = event.clientY - dragState.startY;
        if (Math.abs(dx) + Math.abs(dy) > 4) dragState.moved = true;
        constellation.rotation.y = dragState.rotY + dx * 0.0045;
        constellation.rotation.x = clamp(dragState.rotX + dy * 0.0035, -0.6, 0.6);
        if (dragState.moved && hoveredRef.current) {
          hoveredRef.current.userData.hover = false;
          hoveredRef.current = null;
          hoverRef.current?.(null);
        }
        return;
      }
      updateHover(event);
    };

    const handlePointerDown = (event) => {
      dragState.active = true;
      dragState.moved = false;
      dragState.startX = event.clientX;
      dragState.startY = event.clientY;
      dragState.rotX = constellation.rotation.x;
      dragState.rotY = constellation.rotation.y;
      canvas.style.cursor = "grabbing";
      canvas.setPointerCapture(event.pointerId);
    };

    const handlePointerUp = (event) => {
      if (!dragState.active) return;
      dragState.active = false;
      try {
        canvas.releasePointerCapture(event.pointerId);
      } catch (err) {
        // ignore if already released
      }
      if (!dragState.moved && hoveredRef.current?.userData.type === "cve") {
        selectRef.current?.(hoveredRef.current.userData.info);
      }
      canvas.style.cursor = hoveredRef.current ? "pointer" : "grab";
    };

    const handlePointerLeave = () => {
      dragState.active = false;
      dragState.moved = false;
      if (hoveredRef.current) {
        hoveredRef.current.userData.hover = false;
        hoveredRef.current = null;
        hoverRef.current?.(null);
      }
      canvas.style.cursor = "grab";
    };

    canvas.addEventListener("pointermove", handlePointerMove);
    canvas.addEventListener("pointerdown", handlePointerDown);
    canvas.addEventListener("pointerup", handlePointerUp);
    canvas.addEventListener("pointerleave", handlePointerLeave);
    canvas.style.cursor = "grab";

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

    const clock = new THREE.Clock();
    let frameId = 0;
    const animate = () => {
      const t = clock.getElapsedTime();
      constellation.rotation.y += 0.0008;
      stars.rotation.y -= 0.0004;

      cveMeshes.forEach((mesh) => {
        const activeId = highlightRef.current;
        const id = mesh.userData.info?.id;
        mesh.userData.selected = Boolean(activeId && id && id.toLowerCase() === activeId.toLowerCase());
        const base = mesh.userData.baseScale || 1;
        const wiggle = Math.sin(t * 1.1 + mesh.userData.wiggle) * 0.05;
        const hoverBoost = mesh.userData.hover ? 0.5 : 0;
        const selectBoost = mesh.userData.selected ? 0.8 : 0;
        const target = base * (1 + hoverBoost + selectBoost) + wiggle;
        const next = mesh.scale.x + (target - mesh.scale.x) * 0.12;
        mesh.scale.setScalar(next);
      });

      renderer.render(scene, camera);
      frameId = requestAnimationFrame(animate);
    };

    animate();

    return () => {
      cancelAnimationFrame(frameId);
      canvas.removeEventListener("pointermove", handlePointerMove);
      canvas.removeEventListener("pointerdown", handlePointerDown);
      canvas.removeEventListener("pointerup", handlePointerUp);
      canvas.removeEventListener("pointerleave", handlePointerLeave);
      themeObserver.disconnect();
      if (resizeObserver) {
        resizeObserver.disconnect();
      } else {
        window.removeEventListener("resize", updateSize);
      }
      starGeometry.dispose();
      starMaterial.dispose();
      groupGeometry.dispose();
      cveGeometry.dispose();
      groupMaterial.dispose();
      Object.values(cveMaterials).forEach((material) => material.dispose());
      lineMaterial.dispose();
      if (lineGeometry) lineGeometry.dispose();
      renderer.dispose();
    };
  }, [data]);

  return (
    <div className="cve-constellation" ref={containerRef}>
      <canvas ref={canvasRef} className="cve-constellation__canvas" />
    </div>
  );
}
