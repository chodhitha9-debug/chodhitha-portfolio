import { Search } from "lucide-react";

const targets = [
  { id: "projects", label: "Projects" },
  { id: "skills", label: "Skills" },
  { id: "journey", label: "Journey" },
  { id: "contact", label: "Contact" },
];

export function CommandPanel() {
  return (
    <div className="surface-card p-4">
      <p className="flex items-center gap-2 text-xs font-medium text-muted-foreground">
        <Search className="size-3.5 text-primary" aria-hidden="true" />
        Explore Chodhitha's work
      </p>
      <div className="mt-3 flex flex-wrap gap-2">
        {targets.map((t) => (
          <a
            key={t.id}
            href={`#${t.id}`}
            className="rounded-lg border border-border bg-secondary/60 px-3 py-1.5 text-xs font-medium transition-colors hover:border-primary hover:bg-primary-soft hover:text-primary"
          >
            {t.label}
          </a>
        ))}
      </div>
    </div>
  );
}
