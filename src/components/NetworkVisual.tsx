const nodes = [
  { label: "Python", x: 18, y: 22 },
  { label: "Machine Learning", x: 62, y: 12 },
  { label: "NLP", x: 12, y: 62 },
  { label: "RAG", x: 70, y: 52 },
  { label: "Scikit-learn", x: 34, y: 84 },
  { label: "AI", x: 46, y: 45 },
];

const edges: [number, number][] = [
  [5, 0],
  [5, 1],
  [5, 2],
  [5, 3],
  [5, 4],
  [0, 2],
  [1, 3],
];

export function NetworkVisual() {
  return (
    <div className="relative mx-auto aspect-square w-full max-w-md" aria-hidden="true">
      <div className="absolute inset-0 rounded-3xl border border-border bg-card/60 shadow-[var(--shadow-soft)] backdrop-blur-sm" />

      <svg viewBox="0 0 100 100" className="absolute inset-0 size-full p-4">
        {edges.map(([a, b], i) => (
          <line
            key={i}
            x1={nodes[a].x}
            y1={nodes[a].y}
            x2={nodes[b].x}
            y2={nodes[b].y}
            className="flow-line"
            stroke="var(--primary)"
            strokeOpacity="0.35"
            strokeWidth="0.4"
          />
        ))}
        {nodes.map((n) => (
          <circle key={n.label} cx={n.x} cy={n.y} r="0.9" fill="var(--primary)" opacity="0.6" />
        ))}
      </svg>

      {nodes.map((n, i) => (
        <span
          key={n.label}
          className="float-slow absolute -translate-x-1/2 -translate-y-1/2 rounded-full border border-border bg-card px-3 py-1.5 text-[11px] font-medium text-secondary-foreground shadow-[var(--shadow-soft)] transition-all duration-300 hover:-translate-y-[calc(50%+3px)] hover:border-primary hover:text-primary"
          style={{ left: `${n.x}%`, top: `${n.y}%`, animationDelay: `${i * 0.6}s` }}
        >
          {n.label}
        </span>
      ))}
    </div>
  );
}
