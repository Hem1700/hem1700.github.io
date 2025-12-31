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
    if (!data?.children?.length) return { nodes: [], links: [] };
    const width = 960;
    const height = 640;
    const center = { x: width / 2, y: height / 2 };
    const groups = data.children;
    const groupRadius = Math.min(width, height) / 2 - 120;
    const nodes = [];
    const links = [];

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

    return { nodes, links };
  }, [data]);

  const nodesById = useMemo(() => {
    const m = new Map();
    layout.nodes.forEach((n) => m.set(n.id, n));
    return m;
  }, [layout.nodes]);

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
          {layout.links.map((link) => (
            <line
              key={`${link.source}-${link.target}`}
              x1={nodesById.get(link.source)?.x}
              y1={nodesById.get(link.source)?.y}
              x2={nodesById.get(link.target)?.x}
              y2={nodesById.get(link.target)?.y}
              stroke="rgba(180, 180, 180, 0.3)"
              strokeWidth={hoveredId && (link.source === hoveredId || link.target === hoveredId) ? 2 : 1}
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
                <circle
                  r={r}
                  fill={fill}
                  fillOpacity={isHighlight ? 1 : 0.6}
                  stroke={isHighlight ? "#d5d5d5" : "rgba(255,255,255,0.15)"}
                  strokeWidth={isHighlight ? 2 : 1}
                />
                {node.type !== "cve" ? (
                  <text textAnchor="middle" dy="0.35em" fontSize={11} fill="#b0b0b0">
                    {node.name}
                  </text>
                ) : null}
              </g>
            );
          })}
        </g>
      </svg>
    </div>
  );
}
