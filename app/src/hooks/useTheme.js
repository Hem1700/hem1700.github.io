import { useEffect, useState } from "react";

export function useTheme() {
  const [theme, setTheme] = useState(() => {
    if (typeof window === "undefined") return "light";
    return localStorage.getItem("theme") || "light";
  });
  const [glowOn, setGlowOn] = useState(() => {
    if (typeof window === "undefined") return true;
    return localStorage.getItem("glow") !== "off";
  });

  useEffect(() => {
    const body = document.body;
    body.classList.remove("light", "dark");
    body.classList.add(theme);
    localStorage.setItem("theme", theme);
  }, [theme]);

  useEffect(() => {
    const body = document.body;
    if (glowOn) {
      body.classList.remove("glow-off");
    } else {
      body.classList.add("glow-off");
    }
    localStorage.setItem("glow", glowOn ? "on" : "off");
  }, [glowOn]);

  const toggleTheme = () => {
    setTheme((prev) => (prev === "light" ? "dark" : "light"));
  };

  const toggleGlow = () => {
    setGlowOn((prev) => !prev);
  };

  return { theme, toggleTheme, glowOn, toggleGlow };
}
