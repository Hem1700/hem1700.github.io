import { useEffect, useMemo, useRef, useState } from "react";
import * as d3 from "d3";

const typeColors = {
  cluster: "#c0c0c0",
  cve: "#d5d5d5",
};

export default function CveMindMap({ data, onSelectCve, highlightId, hoveredId, onHover, onFocusPath }) {
  const svgRef = useRef(null);
  const [zoomTransform, setZoomTransform] = useState(d3.zoomIdentity);

  const layout = useMemo(() => {
    if (!data?.children?.length) {
      return {
        nodes: [],
        links: [],
        rooms: [],
        center: { x: 480, y: 320 },
        width: 960,
        height: 640,
      };
    }
    const width = 960;
    const height = 640;
    const center = { x: width / 2, y: height / 2 };
    const groups = data.children;
    const groupRadius = Math.min(width, height) / 2 - 120;
    const nodes = [];
    const links = [];
    const rooms = [];

    groups.forEach((group, idx) => {
      const angle = (idx / groups.length) * Math.PI * 2;
      const gx = center.x + Math.cos(angle) * groupRadius;
      const gy = center.y + Math.sin(angle) * groupRadius;
      const groupId = group.id || group.name || `group-${idx}`;
      const groupNode = {
        id: groupId,
        name: group.name,
        type: "cluster",
        x: gx,
        y: gy,
        info: group,
      };
      nodes.push(groupNode);

      const cves = group.children || [];
      const innerRadius = 80 + Math.min(60, cves.length * 2);
      rooms.push({
        id: `${groupId}-room`,
        x: gx,
        y: gy,
        r: innerRadius + 26,
        glyphR: innerRadius + 12,
      });
      cves.forEach((cve, cIdx) => {
        const cAngle = (cIdx / cves.length) * Math.PI * 2;
        const cx = gx + Math.cos(cAngle) * innerRadius;
        const cy = gy + Math.sin(cAngle) * innerRadius;
        const cveId = cve.id || `${groupId}-cve-${cIdx}`;
        const cveNode = {
          id: cveId,
          name: cve.name || cveId,
          type: "cve",
          x: cx,
          y: cy,
          info: cve,
        };
        nodes.push(cveNode);
        links.push({ source: groupId, target: cveId });
      });
    });

    return { nodes, links, rooms, center, width, height };
  }, [data]);

  const nodesById = useMemo(() => {
    const m = new Map();
    layout.nodes.forEach((n) => m.set(n.id, n));
    return m;
  }, [layout.nodes]);

  const buildThreads = (groupBy) => {
    const buckets = new Map();
    layout.nodes
      .filter((n) => n.type === "cve")
      .forEach((n) => {
        const key = groupBy(n);
        if (!key) return;
        if (!buckets.has(key)) buckets.set(key, []);
        buckets.get(key).push(n);
      });
    const threads = [];
    const center = layout.center || { x: 0, y: 0 };
    buckets.forEach((list) => {
      if (list.length < 2) return;
      const ordered = [...list].sort((a, b) => {
        const aAngle = Math.atan2(a.y - center.y, a.x - center.x);
        const bAngle = Math.atan2(b.y - center.y, b.x - center.x);
        return aAngle - bAngle;
      });
      const maxPairs = Math.min(ordered.length, 8);
      for (let i = 0; i < maxPairs - 1; i++) {
        const source = ordered[i];
        const target = ordered[i + 1];
        threads.push({
          source: source.id,
          target: target.id,
          wiggle: 22 + Math.random() * 26,
          dash: 12 + Math.random() * 10,
        });
      }
      if (ordered.length > 3) {
        threads.push({
          source: ordered[0].id,
          target: ordered[ordered.length - 1].id,
          wiggle: 18 + Math.random() * 20,
          dash: 10 + Math.random() * 10,
        });
      }
    });
    return threads;
  };

  const threadLinksYear = useMemo(() => buildThreads((n) => n.info?.year || "Unknown"), [layout.nodes, layout.center]);
  const threadLinksSeverity = useMemo(() => buildThreads((n) => n.info?.severity || "Info"), [layout.nodes, layout.center]);

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
    const svg = d3.select(svgRef.current);
    const zoom = d3
      .zoom()
      .scaleExtent([0.6, 2.5])
      .on("zoom", (event) => setZoomTransform(event.transform));
    svg.call(zoom);
    return () => svg.on(".zoom", null);
  }, []);

  const handleClick = (node) => {
    if (node.type === "cve") {
      onSelectCve?.(node.info);
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
          {layout.rooms.map((room) => (
            <g key={room.id} className="mindmap-room">
              <circle
                cx={room.x}
                cy={room.y}
                r={room.r}
                fill="rgba(255,255,255,0.02)"
                stroke="rgba(200,200,200,0.08)"
                strokeWidth="1.2"
              />
              <g className="glyph-ring" transform-origin={`${room.x} ${room.y}`}>
                {Array.from({ length: 12 }).map((_, idx) => {
                  const a = (idx / 12) * Math.PI * 2;
                  const r1 = room.glyphR;
                  const r2 = r1 + 8;
                  const x1 = room.x + Math.cos(a) * r1;
                  const y1 = room.y + Math.sin(a) * r1;
                  const x2 = room.x + Math.cos(a) * r2;
                  const y2 = room.y + Math.sin(a) * r2;
                  return (
                    <line
                      key={`${room.id}-tick-${idx}`}
                      x1={x1}
                      y1={y1}
                      x2={x2}
                      y2={y2}
                      stroke="rgba(200,200,200,0.4)"
                      strokeWidth={idx % 3 === 0 ? 1.3 : 0.7}
                      opacity={0.7}
                    />
                  );
                })}
              </g>
            </g>
          ))}
          {threadLinksYear.map((thread, idx) => {
            const source = nodesById.get(thread.source);
            const target = nodesById.get(thread.target);
            if (!source || !target) return null;
            const mx = (source.x + target.x) / 2;
            const my = (source.y + target.y) / 2;
            const dx = target.y - source.y;
            const dy = source.x - target.x;
            const len = Math.hypot(dx, dy) || 1;
            const nx = (dx / len) * thread.wiggle;
            const ny = (dy / len) * thread.wiggle;
            const cx = mx + nx;
            const cy = my + ny;
            const active = hoveredId && (hoveredId === thread.source || hoveredId === thread.target);
            return (
              <path
                key={`thread-year-${idx}`}
                d={`M ${source.x} ${source.y} Q ${cx} ${cy} ${target.x} ${target.y}`}
                className={`memory-thread${active ? " active" : ""}`}
                strokeDasharray={`${thread.dash} ${thread.dash * 1.6}`}
                style={{ animationDelay: `${idx * 120}ms` }}
              />
            );
          })}
          {threadLinksSeverity.map((thread, idx) => {
            const source = nodesById.get(thread.source);
            const target = nodesById.get(thread.target);
            if (!source || !target) return null;
            const mx = (source.x + target.x) / 2;
            const my = (source.y + target.y) / 2;
            const dx = target.y - source.y;
            const dy = source.x - target.x;
            const len = Math.hypot(dx, dy) || 1;
            const nx = (dx / len) * thread.wiggle * 0.6;
            const ny = (dy / len) * thread.wiggle * 0.6;
            const cx = mx + nx;
            const cy = my + ny;
            const active = hoveredId && (hoveredId === thread.source || hoveredId === thread.target);
            return (
              <path
                key={`thread-sev-${idx}`}
                d={`M ${source.x} ${source.y} Q ${cx} ${cy} ${target.x} ${target.y}`}
                className={`memory-thread severity${active ? " active" : ""}`}
                strokeDasharray={`${thread.dash} ${thread.dash * 1.8}`}
                style={{ animationDelay: `${idx * 140}ms` }}
              />
            );
          })}
          {layout.links.map((link) => (
            <line
              key={`${link.source}-${link.target}`}
              x1={nodesById.get(link.source)?.x}
              y1={nodesById.get(link.source)?.y}
              x2={nodesById.get(link.target)?.x}
              y2={nodesById.get(link.target)?.y}
              stroke="rgba(180, 180, 180, 0.25)"
              strokeWidth={hoveredId && (link.source === hoveredId || link.target === hoveredId) ? 2.2 : 1}
            />
          ))}
          {layout.nodes.map((node) => {
            const r = node.type === "cve" ? 11 : 18;
            const isHighlight = highlightId && node.id?.toLowerCase() === highlightId.toLowerCase();
            const fill = typeColors[node.type] || "#d5d5d5";
            return (
              <g
                key={node.id}
                transform={`translate(${node.x},${node.y})`}
                className={`mindmap-node ${node.type}`}
                onClick={() => handleClick(node)}
                onMouseEnter={() => {
                  if (onHover) {
                    const [sx, sy] = zoomTransform.apply([node.x, node.y]);
                    const rect = svgRef.current?.getBoundingClientRect();
                    onHover({
                      node,
                      screen: {
                        x: rect ? rect.left + sx : sx,
                        y: rect ? rect.top + sy : sy,
                      },
                    });
                  }
                }}
                onMouseLeave={() => onHover?.(null)}
                style={{ cursor: "pointer" }}
              >
                <circle className="node-spotlight" r={r + 16} />
                <circle
                  r={r}
                  fill={fill}
                  fillOpacity={isHighlight ? 1 : 0.6}
                  stroke={isHighlight ? "#d5d5d5" : "rgba(255,255,255,0.15)"}
                  strokeWidth={isHighlight ? 2 : 1}
                />
                <circle className="node-halo" r={r + 4} />
              </g>
            );
          })}
        </g>
      </svg>
    </div>
  );
}
