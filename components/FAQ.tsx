"use client";

import { useState } from "react";
import { Card } from "./Card";

export function FAQ({ items }: { items: { q: string; a: string }[] }) {
  return (
    <div className="space-y-3">
      {items.map((item, idx) => (
        <FAQItem key={idx} q={item.q} a={item.a} />
      ))}
    </div>
  );
}

function FAQItem({ q, a }: { q: string; a: string }) {
  const [open, setOpen] = useState(false);
  return (
    <Card className="p-0">
      <button
        type="button"
        onClick={() => setOpen((v) => !v)}
        className="flex w-full items-center justify-between gap-4 p-5 text-left"
        aria-expanded={open}
      >
        <div className="font-semibold text-ink">{q}</div>
        <span className="text-body">{open ? "–" : "+"}</span>
      </button>
      {open ? <div className="px-5 pb-5 text-sm text-body">{a}</div> : null}
    </Card>
  );
}
