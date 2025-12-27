"use client";

import { useState } from "react";
import { Button } from "./Button";
import { Card } from "./Card";

type Status = "idle" | "sending" | "sent" | "error";

export function ContactForm() {
  const [status, setStatus] = useState<Status>("idle");
  const [message, setMessage] = useState<string>("");

  async function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus("sending");
    setMessage("");

    const form = new FormData(e.currentTarget);
    // honeypot
    const company = String(form.get("company") || "");
    if (company.trim().length > 0) {
      setStatus("sent");
      setMessage("Thanks! We'll be in touch shortly.");
      e.currentTarget.reset();
      return;
    }

    const payload = {
      name: String(form.get("name") || ""),
      phone: String(form.get("phone") || ""),
      email: String(form.get("email") || ""),
      service: String(form.get("service") || ""),
      message: String(form.get("message") || "")
    };

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload)
      });
      const data = await res.json().catch(() => ({}));
      if (!res.ok) throw new Error(data?.error || "Failed to send");

      setStatus("sent");
      setMessage("Request received. We’ll reach out soon.");
      e.currentTarget.reset();
    } catch (err: any) {
      setStatus("error");
      setMessage(err?.message || "Something went wrong. Please try again.");
    }
  }

  return (
    <Card className="shadow-soft">
      <div className="text-lg font-bold text-ink">Request Service</div>
      <p className="mt-2 text-sm text-body">
        Tell us what you need and we’ll contact you to schedule.
      </p>

      <form onSubmit={onSubmit} className="mt-5 grid gap-4">
        <input
          name="company"
          className="hidden"
          tabIndex={-1}
          autoComplete="off"
          aria-hidden="true"
        />

        <div className="grid gap-4 sm:grid-cols-2">
          <Field label="Name">
            <input
              name="name"
              required
              className="w-full rounded-2xl border border-border px-4 py-3 text-sm outline-none focus:ring-2 focus:ring-brand-100"
              placeholder="Your name"
            />
          </Field>

          <Field label="Phone">
            <input
              name="phone"
              required
              className="w-full rounded-2xl border border-border px-4 py-3 text-sm outline-none focus:ring-2 focus:ring-brand-100"
              placeholder="(317) 555-0123"
            />
          </Field>
        </div>

        <Field label="Email (optional)">
          <input
            name="email"
            type="email"
            className="w-full rounded-2xl border border-border px-4 py-3 text-sm outline-none focus:ring-2 focus:ring-brand-100"
            placeholder="you@email.com"
          />
        </Field>

        <Field label="Service needed">
          <select
            name="service"
            className="w-full rounded-2xl border border-border bg-white px-4 py-3 text-sm outline-none focus:ring-2 focus:ring-brand-100"
            defaultValue=""
            required
          >
            <option value="" disabled>
              Select a service
            </option>
            <option>AC Repair</option>
            <option>Furnace Repair</option>
            <option>Installation / Replacement</option>
            <option>Maintenance / Tune-Up</option>
            <option>Indoor Air Quality</option>
            <option>Thermostat</option>
            <option>Other</option>
          </select>
        </Field>

        <Field label="Details">
          <textarea
            name="message"
            required
            rows={5}
            className="w-full rounded-2xl border border-border px-4 py-3 text-sm outline-none focus:ring-2 focus:ring-brand-100"
            placeholder="What’s going on? Any helpful details (brand/model, symptoms, etc.)"
          />
        </Field>

        <div className="flex items-center gap-3">
          <Button type="submit" variant="primary" className="w-full sm:w-auto">
            {status === "sending" ? "Sending..." : "Submit Request"}
          </Button>
          <span className="text-sm text-body">
            {status === "sent" ? message : status === "error" ? message : ""}
          </span>
        </div>

        <p className="text-xs text-body">
          By submitting, you agree we may contact you about your request. No spam.
        </p>
      </form>
    </Card>
  );
}

function Field({ label, children }: { label: string; children: React.ReactNode }) {
  return (
    <label className="grid gap-2">
      <span className="text-sm font-semibold text-ink">{label}</span>
      {children}
    </label>
  );
}
