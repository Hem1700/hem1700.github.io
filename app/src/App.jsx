import { useCallback, useEffect, useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import HomePage from "./pages/Home";
import BlogsPage from "./pages/Blogs";
import PostPage from "./pages/Post";
import ProjectsPage from "./pages/ProjectsPage";
import CertificationsPage from "./pages/CertificationsPage";
import CveMapPage from "./pages/CveMap";
import ContactStrip from "./components/ContactStrip";
import ScrollProgress from "./components/ScrollProgress";
import BackToTop from "./components/BackToTop";
import MatrixRain from "./components/MatrixRain";
import { useTheme } from "./hooks/useTheme";

export default function App() {
  const { theme, toggleTheme, glowOn, toggleGlow } = useTheme();
  const [scanlinesOn, setScanlinesOn] = useState(true);
  const [noiseOn, setNoiseOn] = useState(true);

  const applyHudPrefs = useCallback(
    (nextScanlines, nextNoise) => {
      const body = document.body;
      if (!body) return;
      if (nextScanlines) body.classList.remove("hud-scanlines-off");
      else body.classList.add("hud-scanlines-off");

      if (nextNoise) body.classList.remove("hud-noise-off");
      else body.classList.add("hud-noise-off");
    },
    [],
  );

  useEffect(() => {
    try {
      const savedScanlines = localStorage.getItem("hud:scanlines") !== "off";
      const savedNoise = localStorage.getItem("hud:noise") !== "off";
      setScanlinesOn(savedScanlines);
      setNoiseOn(savedNoise);
      applyHudPrefs(savedScanlines, savedNoise);
    } catch (e) {
      applyHudPrefs(true, true);
    }
  }, [applyHudPrefs]);

  useEffect(() => {
    try {
      localStorage.setItem("hud:scanlines", scanlinesOn ? "on" : "off");
      localStorage.setItem("hud:noise", noiseOn ? "on" : "off");
    } catch (e) {
      // ignore
    }
    applyHudPrefs(scanlinesOn, noiseOn);
  }, [scanlinesOn, noiseOn, applyHudPrefs]);

  const resetLayout = useCallback(() => {
    if (typeof window !== "undefined") {
      window.dispatchEvent(new CustomEvent("hud:reset-layout", { detail: "all" }));
      try {
        Object.keys(localStorage)
          .filter((k) => k.startsWith("hud:window:") || k.startsWith("hud:"))
          .forEach((k) => localStorage.removeItem(k));
      } catch (err) {
        // ignore
      }
    }
  }, []);

  useEffect(() => {
    const onKey = (e) => {
      if (!((e.ctrlKey || e.metaKey) && e.shiftKey)) return;
      const key = e.key.toLowerCase();
      if (key === "r") {
        e.preventDefault();
        resetLayout();
      }
      if (key === "s") {
        e.preventDefault();
        setScanlinesOn((prev) => !prev);
      }
      if (key === "n") {
        e.preventDefault();
        setNoiseOn((prev) => !prev);
      }
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [resetLayout]);

  return (
    <Router>
      <div className="app-shell">
        <MatrixRain />
        <ScrollProgress />
        <Navbar onToggleTheme={toggleTheme} onToggleGlow={toggleGlow} glowOn={glowOn} theme={theme} />
        <main>
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/blogs" element={<BlogsPage />} />
            <Route path="/projects" element={<ProjectsPage />} />
            <Route path="/certifications" element={<CertificationsPage />} />
            <Route path="/blog/:slug" element={<PostPage />} />
            <Route path="/cve-map" element={<CveMapPage />} />
            <Route path="*" element={<HomePage />} />
          </Routes>
        </main>
        <ContactStrip />
        <Footer />
        <BackToTop />
      </div>
    </Router>
  );
}
