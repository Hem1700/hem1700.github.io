import { useEffect, useMemo, useState } from "react";
import * as d3 from "d3";

const palette = ["#f2d35f", "#8fd6ff", "#c3a3ff", "#7be0b5", "#ffb3b3"];

function getColor(depth) {
  const idx = depth % palette.length;
  return palette[idx];
}

export default function CveCirclePack({ data, onSelectCve, onFocusPath }) {
  const diameter = 760;
  const [root, setRoot] = useState(null);
  const [nodes, setNodes] = useState([]);
  const [focus, setFocus] = useState(null);
  const [view, setView] = useState([diameter / 2, diameter / 2, diameter / 2]);

  useEffect(() => {
    if (!data) return;
    const hierarchy = d3
      .hierarchy(data)
      .sum((d) => d.value || 1)
      .sort((a, b) => (b.value || 0) - (a.value || 0));
    const pack = d3.pack().size([diameter, diameter]).padding(6);
    const packed = pack(hierarchy);
    setRoot(packed);
    setNodes(packed.descendants());
    setFocus(packed);
    setView([packed.x, packed.y, packed.r]);
    onFocusPath?.([packed.data.name]);
  }, [data, onFocusPath]);

  const k = useMemo(() => (focus ? diameter / (view[2] * 2) : 1), [focus, view, diameter]);
  const offset = useMemo(() => {
    if (!focus) return [0, 0];
    return [diameter / 2 - view[0] * k, diameter / 2 - view[1] * k];
  }, [focus, view, k, diameter]);

  const zoomTo = (node) => {
    setFocus(node);
    setView([node.x, node.y, node.r]);
    const path = node
      .ancestors()
      .reverse()
      .map((n) => n.data.name);
    onFocusPath?.(path);
  };

  const handleClick = (node) => {
    if (!node) return;
    if (node.data.nodeType === "cve") {
      onSelectCve?.(node.data);
      return;
    }
    zoomTo(node);
  };

  if (!root) return <div className="card-placeholder">Loading CVE map…</div>;

  return (
    <div className="cve-map-viz">
      <svg viewBox={`0 0 ${diameter} ${diameter}`} role="presentation">
        <g>
          {nodes.map((node) => {
            const x = node.x * k + offset[0];
            const y = node.y * k + offset[1];
            const r = Math.max(2, node.r * k);
            const depth = node.depth;
            const isLeaf = !node.children;
            const fill = isLeaf ? "#1f2430" : getColor(depth);
            const textColor = isLeaf ? "#f2f2f2" : "#1f2430";
            const showLabel = r > 30;
            return (
              <g
                key={`${node.data.name}-${node.depth}-${node.x}-${node.y}`}
                className={`cve-node depth-${depth} ${isLeaf ? "leaf" : "branch"}`}
                transform={`translate(${x},${y})`}
                onClick={() => handleClick(node)}
                style={{ cursor: "pointer" }}
              >
                <circle r={r} fill={fill} fillOpacity={isLeaf ? 0.9 : 0.7} stroke="#1f2430" strokeOpacity={0.08} />
                {showLabel && (
                  <text textAnchor="middle" dy="0.35em" fontSize={Math.min(18, r / 4)} fill={textColor}>
                    {node.data.name}
                  </text>
                )}
              </g>
            );
          })}
        </g>
      </svg>
    </div>
  );
}
