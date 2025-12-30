import { useEffect, useMemo, useRef, useState } from "react";
import * as d3 from "d3";

const typeColors = {
  domain: "#00e18a",
  technology: "#39ff14",
  cluster: "#22d3ee",
  cve: "#8ef3b4",
};

function flattenHierarchy(root, expanded) {
  const nodes = [];
  const links = [];

  const walk = (node, parentId = null, depth = 0) => {
    const id = node.id || node.name || `${node.nodeType}-${nodes.length}`;
    nodes.push({
      id,
      name: node.name,
      type: node.nodeType || (node.children ? "group" : "cve"),
      metrics: node.metrics,
      info: node,
      depth,
    });
    if (parentId) {
      links.push({ source: parentId, target: id });
    }

    const isExpanded = expanded.has(id);
    const childType = node.children?.[0]?.nodeType || null;

    // Always render domains and technologies; render deeper levels only when expanded
    const shouldRenderChildren = depth < 2 || isExpanded;
    if (!shouldRenderChildren || !node.children) return;

    for (const child of node.children) {
      // For CVEs, require expansion of their parent cluster
      if (child.nodeType === "cve" && !isExpanded) continue;
      walk(child, id, depth + 1);
    }

    // If we hid children but there are more, add a collapsed marker hint
    if (!isExpanded && node.children && childType !== "cve" && node.children.length) {
      const markerId = `${id}-collapsed`;
      nodes.push({
        id: markerId,
        name: "+",
        type: "collapsed",
        depth: depth + 1,
        info: { hint: `${node.children.length} hidden` },
      });
      links.push({ source: id, target: markerId });
    }
  };

  walk(root, null, 0);
  return { nodes, links };
}

export default function CveMindMap({ data, onSelectCve, highlightId, onHover, onFocusPath }) {
  const svgRef = useRef(null);
  const [expanded, setExpanded] = useState(new Set());
  const [positions, setPositions] = useState({ nodes: [], links: [] });
  const [zoomTransform, setZoomTransform] = useState(d3.zoomIdentity);
  const draggingId = useRef(null);
  const pointerIdRef = useRef(null);

  const { nodes, links } = useMemo(() => flattenHierarchy(data, expanded), [data, expanded]);
  const nodesById = useMemo(() => {
    const m = new Map();
    positions.nodes.forEach((n) => m.set(n.id, n));
    return m;
  }, [positions.nodes]);

  // recompute focus path when highlight changes
  useEffect(() => {
    if (!highlightId || !data) return;
    const path = [];
    const dfs = (node, acc) => {
      const id = node.id || node.name;
      const nextAcc = [...acc, node.name];
      if (id?.toLowerCase() === highlightId.toLowerCase()) {
        path.push(...nextAcc);
        return true;
      }
      if (!node.children) return false;
      for (const c of node.children) {
        if (dfs(c, nextAcc)) return true;
      }
      return false;
    };
    dfs(data, []);
    if (path.length) onFocusPath?.(path);
  }, [highlightId, data, onFocusPath]);

  useEffect(() => {
    if (!nodes.length) return;
    const svg = d3.select(svgRef.current);
    const width = 960;
    const height = 640;

    const sim = d3
      .forceSimulation(nodes)
      .force(
        "link",
        d3
          .forceLink(links)
          .id((d) => d.id)
          .distance((d) => {
            if (d.target.type === "cve") return 90;
            if (d.target.type === "cluster") return 140;
            return 200;
          })
          .strength(0.8),
      )
      .force("charge", d3.forceManyBody().strength(-260))
      .force("center", d3.forceCenter(width / 2, height / 2))
      .force("collision", d3.forceCollide().radius((d) => (d.type === "cve" ? 26 : 38)))
      .stop();

    for (let i = 0; i < 200; i += 1) sim.tick();

    setPositions({
      nodes: [...sim.nodes()],
      links: links.map((l) => ({
        source: l.source.id,
        target: l.target.id,
      })),
    });

    return () => sim.stop();
  }, [nodes, links]);

  useEffect(() => {
    const svg = d3.select(svgRef.current);
    const zoom = d3
      .zoom()
      .scaleExtent([0.6, 2.5])
      .on("zoom", (event) => setZoomTransform(event.transform));
    svg.call(zoom);
    return () => svg.on(".zoom", null);
  }, []);

  useEffect(() => {
    const svg = svgRef.current;
    if (!svg) return () => {};

    const getCoords = (e) => {
      const rect = svg.getBoundingClientRect();
      const x = (e.clientX - rect.left - zoomTransform.x) / zoomTransform.k;
      const y = (e.clientY - rect.top - zoomTransform.y) / zoomTransform.k;
      return { x, y };
    };

    const onPointerMove = (e) => {
      if (!draggingId.current) return;
      const { x, y } = getCoords(e);
      const id = draggingId.current;
      setPositions((prev) => {
        const nodesNext = prev.nodes.map((n) => (n.id === id ? { ...n, x, y } : n));
        return { ...prev, nodes: nodesNext };
      });
    };

    const onPointerUp = (e) => {
      if (pointerIdRef.current !== null) {
        svg.releasePointerCapture(pointerIdRef.current);
      }
      draggingId.current = null;
      pointerIdRef.current = null;
    };

    svg.addEventListener("pointermove", onPointerMove);
    svg.addEventListener("pointerup", onPointerUp);
    svg.addEventListener("pointerleave", onPointerUp);
    return () => {
      svg.removeEventListener("pointermove", onPointerMove);
      svg.removeEventListener("pointerup", onPointerUp);
      svg.removeEventListener("pointerleave", onPointerUp);
    };
  }, [zoomTransform]);

  const toggleExpand = (node) => {
    const id = node.id;
    if (!id) return;
    setExpanded((prev) => {
      const next = new Set(prev);
      if (next.has(id)) next.delete(id);
      else next.add(id);
      return next;
    });
  };

  const handleClick = (node) => {
    if (node.type === "cve") {
      onSelectCve?.(node.info);
    } else if (node.type === "collapsed") {
      // expand its parent by removing the marker
      const parentId = node.id.replace("-collapsed", "");
      setExpanded((prev) => new Set([...prev, parentId]));
    } else {
      toggleExpand(node);
    }
  };

  return (
    <div className="cve-mindmap">
      <svg ref={svgRef} viewBox="0 0 960 640" role="presentation">
        <defs>
          <filter id="glow">
            <feGaussianBlur stdDeviation="2.5" result="coloredBlur" />
            <feMerge>
              <feMergeNode in="coloredBlur" />
              <feMergeNode in="SourceGraphic" />
            </feMerge>
          </filter>
        </defs>
        <g transform={`translate(${zoomTransform.x},${zoomTransform.y}) scale(${zoomTransform.k})`}>
          {positions.links.map((link) => (
            <line
              key={`${link.source.id}-${link.target.id}`}
              x1={nodesById.get(link.source)?.x}
              y1={nodesById.get(link.source)?.y}
              x2={nodesById.get(link.target)?.x}
              y2={nodesById.get(link.target)?.y}
              stroke="rgba(0, 225, 138, 0.45)"
              strokeWidth={1.5}
              strokeDasharray={link.target.type === "collapsed" ? "4 4" : "0"}
            />
          ))}
          {positions.nodes.map((node) => {
            const r = node.type === "cve" ? 14 : node.type === "cluster" ? 18 : 24;
            const isHighlight = highlightId && node.id?.toLowerCase() === highlightId.toLowerCase();
            const fill = typeColors[node.type] || "#8fd6ff";
            return (
              <g
                key={node.id}
                transform={`translate(${node.x},${node.y})`}
                className={`mindmap-node ${node.type}`}
                onClick={() => handleClick(node)}
                onPointerDown={(e) => {
                  draggingId.current = node.id;
                  pointerIdRef.current = e.pointerId;
                  svgRef.current?.setPointerCapture(e.pointerId);
                  e.stopPropagation();
                }}
                onMouseEnter={() => onHover?.(node)}
                onMouseLeave={() => onHover?.(null)}
                style={{ cursor: node.type === "cve" ? "pointer" : "grab" }}
              >
                <circle
                  r={r}
                  fill={fill}
                  fillOpacity={isHighlight ? 1 : 0.8}
                  stroke={isHighlight ? "#ffdd70" : "rgba(255,255,255,0.15)"}
                  strokeWidth={isHighlight ? 3 : 1}
                  filter="url(#glow)"
                />
                <text textAnchor="middle" dy="0.35em" fontSize={11} fill="#0a101a">
                  {node.type === "collapsed" ? "+" : node.name}
                </text>
              </g>
            );
          })}
        </g>
      </svg>
    </div>
  );
}
