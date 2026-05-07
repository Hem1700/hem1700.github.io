import { useEffect, useState } from "react";

const BREAKPOINT = 768;

export function useIsMobile() {
  const [isMobile, setIsMobile] = useState(() => {
    if (typeof window === "undefined") return false;
    return window.innerWidth <= BREAKPOINT;
  });

  useEffect(() => {
    const onResize = () => setIsMobile(window.innerWidth <= BREAKPOINT);
    window.addEventListener("resize", onResize);
    return () => window.removeEventListener("resize", onResize);
  }, []);

  return isMobile;
}
