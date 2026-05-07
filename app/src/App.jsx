import { useEffect, useState } from "react";
import {
  BrowserRouter,
  Routes,
  Route,
  useParams,
  useSearchParams,
} from "react-router-dom";
import Boot from "./shell/Boot";
import Desktop from "./shell/Desktop";
import MobileShell from "./shell/MobileShell";
import { useIsMobile } from "./hooks/useIsMobile";

const BOOT_FLAG = "hemos:bootSeen";

// Single shell rendered per-route. Each route invocation tells the shell
// which app to auto-open (or which post slug to show in PostViewer).
function ShellGate({ autoOpen, autoOpenSlug }) {
  const [params] = useSearchParams();
  const isMobile = useIsMobile();
  const forceBoot = params.get("boot") === "1";
  const isDeepLink = Boolean(autoOpen) || Boolean(autoOpenSlug);
  const [phase, setPhase] = useState(() => {
    if (forceBoot) return "boot";
    if (isDeepLink) return "shell";
    try {
      if (typeof window !== "undefined" && localStorage.getItem(BOOT_FLAG) === "1") {
        return "shell";
      }
    } catch (_) {
      // localStorage may throw in restricted contexts; fall through to boot.
    }
    return "boot";
  });

  // Was this a fresh boot? Track so Desktop knows whether to auto-launch Readme.
  const [freshBoot, setFreshBoot] = useState(false);

  useEffect(() => {
    if (phase === "shell") {
      // Always set body class; only one theme.
      document.body.classList.add("dark");
    }
  }, [phase]);

  if (phase === "boot") {
    return (
      <Boot
        onDone={() => {
          try { localStorage.setItem(BOOT_FLAG, "1"); } catch (_) {}
          setFreshBoot(true);
          setPhase("shell");
        }}
      />
    );
  }

  return isMobile ? (
    <MobileShell autoOpen={autoOpen} autoOpenSlug={autoOpenSlug} />
  ) : (
    <Desktop autoOpen={autoOpen} autoOpenSlug={autoOpenSlug} freshBoot={freshBoot} />
  );
}

function PostRoute() {
  const { slug } = useParams();
  return <ShellGate autoOpenSlug={slug} />;
}

function HomeRoute() {
  return <ShellGate />;
}

function AppRoute({ app }) {
  return <ShellGate autoOpen={app} />;
}

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomeRoute />} />
        <Route path="/blog/:slug" element={<PostRoute />} />
        <Route path="/blogs" element={<AppRoute app="notes" />} />
        <Route path="/projects" element={<AppRoute app="files" />} />
        <Route path="/certifications" element={<AppRoute app="timeline" />} />
        <Route path="/cve-map" element={<AppRoute app="games" />} />
        <Route path="*" element={<HomeRoute />} />
      </Routes>
    </BrowserRouter>
  );
}
