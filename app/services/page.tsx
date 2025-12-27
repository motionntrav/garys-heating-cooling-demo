import type { Metadata } from "next";
import { Container } from "@/components/Container";
import { SectionHeading } from "@/components/SectionHeading";
import { ServiceCard } from "@/components/ServiceCard";
import { Button } from "@/components/Button";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: "Services",
  description: "Heating, cooling, installation, and maintenance services in Indianapolis."
};

export default function ServicesPage() {
  return (
    <Container className="py-14 sm:py-20">
      <div className="grid gap-10 md:grid-cols-2 md:items-start">
        <SectionHeading
          eyebrow="Services"
          title="Solutions that fit your home."
          subtitle="We diagnose, explain options, and deliver clean work you can trust."
        />
        <div className="rounded-2xl border border-border bg-stonebg p-6">
          <div className="text-sm font-semibold text-ink">How it works</div>
          <ol className="mt-3 space-y-2 text-sm text-body">
            <li><span className="font-semibold text-ink">1)</span> You tell us the issue.</li>
            <li><span className="font-semibold text-ink">2)</span> We diagnose and explain options.</li>
            <li><span className="font-semibold text-ink">3)</span> You approve the plan.</li>
            <li><span className="font-semibold text-ink">4)</span> We complete the work and walk you through it.</li>
          </ol>
          <div className="mt-5">
            <Button href="/contact">Request Service</Button>
          </div>
        </div>
      </div>

      <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {site.services.map((s) => (
          <ServiceCard key={s.title} title={s.title} desc={s.desc} />
        ))}
      </div>

      <div className="mt-14 grid gap-6 rounded-[32px] border border-border bg-white p-8 shadow-sm md:grid-cols-2 md:items-center">
        <div>
          <div className="text-sm font-semibold text-brand-700">Maintenance Plans</div>
          <h2 className="mt-2 text-2xl font-bold text-ink">Reduce breakdowns with seasonal tune-ups.</h2>
          <p className="mt-3 text-body">
            Regular maintenance helps prevent surprise failures and keeps efficiency up. Ask about a plan
            that covers heating and cooling.
          </p>
        </div>
        <div className="rounded-2xl border border-border bg-stonebg p-6">
          <div className="text-base font-semibold text-ink">Plan includes</div>
          <ul className="mt-3 list-disc space-y-2 pl-5 text-sm text-body">
            <li>Seasonal system inspection</li>
            <li>Safety checks</li>
            <li>Efficiency optimization</li>
            <li>Priority scheduling (if available)</li>
          </ul>
          <div className="mt-5 flex flex-wrap gap-3">
            <Button href="/contact">Ask About Plans</Button>
            <Button href="/financing" variant="secondary">Financing Options</Button>
          </div>
        </div>
      </div>
    </Container>
  );
}
