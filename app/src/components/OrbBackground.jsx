import { useEffect, useRef } from "react";
import * as THREE from "three";

const palettes = {
  light: {
    base: "#f1f0ec",
    hot: "#facb0e",
    warm: "#ff642f",
    cool: "#78bae6",
    accent: "#f06ba8",
  },
  dark: {
    base: "#1d1d1d",
    hot: "#facb0e",
    warm: "#ff642f",
    cool: "#78bae6",
    accent: "#f06ba8",
  },
};

export default function OrbBackground() {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return undefined;

    const renderer = new THREE.WebGLRenderer({
      canvas,
      antialias: true,
      alpha: true,
      powerPreference: "high-performance",
    });
    renderer.setPixelRatio(Math.min(window.devicePixelRatio || 1, 2));
    renderer.setClearColor(0x000000, 0);

    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(35, 1, 0.1, 100);
    camera.position.set(0, 0, 7);

    const group = new THREE.Group();
    scene.add(group);

    const gradientCanvas = document.createElement("canvas");
    gradientCanvas.width = 512;
    gradientCanvas.height = 512;
    const gradientCtx = gradientCanvas.getContext("2d");
    if (!gradientCtx) {
      renderer.dispose();
      return undefined;
    }

    const gradientTexture = new THREE.CanvasTexture(gradientCanvas);
    gradientTexture.wrapS = THREE.RepeatWrapping;
    gradientTexture.wrapT = THREE.RepeatWrapping;
    gradientTexture.center.set(0.5, 0.5);

    const material = new THREE.MeshStandardMaterial({
      map: gradientTexture,
      emissiveMap: gradientTexture,
      emissive: new THREE.Color("#ffffff"),
      emissiveIntensity: 0.6,
      metalness: 0.15,
      roughness: 0.3,
      transparent: true,
      opacity: 0.95,
    });

    const sphere = new THREE.Mesh(new THREE.SphereGeometry(2.1, 128, 128), material);
    group.add(sphere);

    const ringMaterial = new THREE.MeshBasicMaterial({
      color: new THREE.Color("#1d1d1d"),
      transparent: true,
      opacity: 0.22,
    });

    const ring = new THREE.Mesh(new THREE.TorusGeometry(2.9, 0.02, 16, 180), ringMaterial);
    ring.rotation.set(Math.PI * 0.4, Math.PI * 0.15, 0);
    group.add(ring);

    const ring2 = new THREE.Mesh(new THREE.TorusGeometry(3.25, 0.015, 16, 180), ringMaterial.clone());
    ring2.rotation.set(Math.PI * 0.9, Math.PI * 0.2, 0.2);
    ring2.material.opacity = 0.14;
    group.add(ring2);

    const ambient = new THREE.AmbientLight(0xffffff, 0.65);
    const keyLight = new THREE.DirectionalLight(0xffffff, 0.5);
    keyLight.position.set(4, 2, 5);
    const rimLight = new THREE.PointLight(0xff642f, 0.45, 20);
    rimLight.position.set(-6, 1, 6);
    scene.add(ambient, keyLight, rimLight);

    const drawGradient = (palette) => {
      const size = gradientCanvas.width;
      gradientCtx.clearRect(0, 0, size, size);
      gradientCtx.fillStyle = palette.base;
      gradientCtx.fillRect(0, 0, size, size);

      const g1 = gradientCtx.createRadialGradient(
        size * 0.28,
        size * 0.28,
        size * 0.1,
        size * 0.55,
        size * 0.55,
        size * 0.6
      );
      g1.addColorStop(0, palette.hot);
      g1.addColorStop(0.35, palette.warm);
      g1.addColorStop(0.7, palette.cool);
      g1.addColorStop(1, "rgba(0,0,0,0)");
      gradientCtx.globalCompositeOperation = "screen";
      gradientCtx.fillStyle = g1;
      gradientCtx.fillRect(0, 0, size, size);

      const g2 = gradientCtx.createRadialGradient(
        size * 0.75,
        size * 0.2,
        size * 0.08,
        size * 0.7,
        size * 0.2,
        size * 0.45
      );
      g2.addColorStop(0, palette.accent);
      g2.addColorStop(1, "rgba(0,0,0,0)");
      gradientCtx.fillStyle = g2;
      gradientCtx.fillRect(0, 0, size, size);

      gradientCtx.globalCompositeOperation = "source-over";
      gradientTexture.needsUpdate = true;
    };

    const applyTheme = () => {
      const dark = document.body.classList.contains("dark");
      drawGradient(dark ? palettes.dark : palettes.light);
      material.emissiveIntensity = dark ? 0.45 : 0.6;
      material.opacity = dark ? 0.88 : 0.95;
      ring.material.color.set(dark ? "#e5e4e0" : "#1d1d1d");
      ring.material.opacity = dark ? 0.26 : 0.22;
      ring2.material.color.set(dark ? "#e5e4e0" : "#1d1d1d");
      ring2.material.opacity = dark ? 0.18 : 0.14;
      ambient.intensity = dark ? 0.45 : 0.65;
      rimLight.intensity = dark ? 0.35 : 0.45;
    };

    let baseX = 2.1;
    let baseY = 1.2;
    const updateLayout = () => {
      const width = window.innerWidth;
      const height = window.innerHeight;
      renderer.setSize(width, height, false);
      camera.aspect = width / height;
      camera.updateProjectionMatrix();

      const isWide = width / height > 1.05;
      const scale = isWide ? 1 : 0.82;
      group.scale.setScalar(scale);
      baseX = isWide ? 2.1 : 1.3;
      baseY = isWide ? 1.2 : 0.6;
      group.position.set(baseX, baseY, 0);
    };

    updateLayout();
    applyTheme();

    const observer = new MutationObserver(applyTheme);
    observer.observe(document.body, { attributes: true, attributeFilter: ["class"] });
    window.addEventListener("resize", updateLayout);

    let frameId = 0;
    const clock = new THREE.Clock();
    const animate = () => {
      const t = clock.getElapsedTime();
      sphere.rotation.y = t * 0.18;
      sphere.rotation.x = Math.sin(t * 0.2) * 0.08;
      ring.rotation.z = t * 0.08;
      ring2.rotation.z = -t * 0.06;
      group.position.y = baseY + Math.sin(t * 0.3) * 0.08;
      gradientTexture.rotation = Math.sin(t * 0.08) * 0.04;
      gradientTexture.offset.set(Math.sin(t * 0.03) * 0.02, Math.cos(t * 0.04) * 0.02);
      renderer.render(scene, camera);
      frameId = requestAnimationFrame(animate);
    };

    animate();

    return () => {
      window.removeEventListener("resize", updateLayout);
      observer.disconnect();
      if (frameId) cancelAnimationFrame(frameId);
      sphere.geometry.dispose();
      material.dispose();
      gradientTexture.dispose();
      ring.geometry.dispose();
      ringMaterial.dispose();
      ring2.geometry.dispose();
      ring2.material.dispose();
      renderer.dispose();
    };
  }, []);

  return (
    <div className="orb-field" aria-hidden="true">
      <canvas ref={canvasRef} className="orb-canvas" />
    </div>
  );
}
