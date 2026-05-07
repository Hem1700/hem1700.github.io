// APPS = id -> static metadata. Default window size, dock icon class, title.
export const APPS = {
  readme:   { title: "README.txt",          g: "g-readme", w: 620, h: 520 },
  finder:   { title: "Finder — About",      g: "g-finder", w: 760, h: 560 },
  notes:    { title: "Notes — Writing",     g: "g-notes",  w: 820, h: 560 },
  files:    { title: "Files — Projects",    g: "g-files",  w: 720, h: 540 },
  terminal: { title: "Terminal — hem@hemos", g: "g-term",   w: 720, h: 480 },
  timeline: { title: "Timeline — Experience", g: "g-time",  w: 700, h: 560 },
  mail:     { title: "Mail — Contact",      g: "g-mail",   w: 760, h: 540 },
  system:   { title: "System Monitor",      g: "g-system", w: 680, h: 540 },
  games:    { title: "Games — CVE Range",   g: "g-games",  w: 900, h: 600 },
};

// Order in the dock + mobile tab bar. Readme is intentionally not in the dock —
// it's auto-launched on first boot only and reachable via spotlight.
export const DOCK_ORDER = [
  "finder",
  "notes",
  "files",
  "terminal",
  "timeline",
  "mail",
  "system",
  "games",
];

// All apps, including readme — used by spotlight and mobile tab bar.
export const ALL_APPS = ["readme", ...DOCK_ORDER];
