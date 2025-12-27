import { Card } from "./Card";

export function ServiceCard({ title, desc }: { title: string; desc: string }) {
  return (
    <Card className="h-full">
      <div className="flex items-start gap-3">
        <div className="mt-1 h-10 w-10 rounded-2xl bg-brand-50 ring-1 ring-border" />
        <div>
          <div className="text-base font-semibold text-ink">{title}</div>
          <p className="mt-2 text-sm text-body">{desc}</p>
        </div>
      </div>
    </Card>
  );
}
