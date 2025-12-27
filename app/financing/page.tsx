import type { Metadata } from "next";
import { Container } from "@/components/Container";
import { SectionHeading } from "@/components/SectionHeading";
import { Card } from "@/components/Card";
import { Button } from "@/components/Button";

export const metadata: Metadata = {
  title: "Financing",
  description: "Financing information for HVAC installations and major repairs."
};

export default function FinancingPage() {
  return (
    <Container className="py-14 sm:py-20">
      <div className="grid gap-10 md:grid-cols-2 md:items-start">
        <SectionHeading
          eyebrow="Financing"
          title="Make comfort upgrades easier to manage."
          subtitle="Replace or upgrade your system with flexible payment options. Ask about current plans."
        />
        <Card className="bg-stonebg">
          <div className="text-sm font-semibold text-ink">What we can finance</div>
          <ul className="mt-3 list-disc space-y-2 pl-5 text-sm text-body">
            <li>Full HVAC system replacement</li>
            <li>New AC or furnace installation</li>
            <li>Major repairs (case-by-case)</li>
            <li>IAQ upgrades (select options)</li>
          </ul>
          <div className="mt-6 flex gap-3">
            <Button href="/contact">Request Details</Button>
            <Button href="/services" variant="secondary">See Services</Button>
          </div>
          <p className="mt-4 text-xs text-body">
            Note: Financing availability, terms, and approval depend on the provider. This page is informational.
          </p>
        </Card>
      </div>

      <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        <Card>
          <div className="text-base font-semibold text-ink">Step 1</div>
          <p className="mt-2 text-sm text-body">
            We assess your home and recommend properly sized equipment options.
          </p>
        </Card>
        <Card>
          <div className="text-base font-semibold text-ink">Step 2</div>
          <p className="mt-2 text-sm text-body">
            You choose the best fit for comfort and budget. We explain the quote clearly.
          </p>
        </Card>
        <Card>
          <div className="text-base font-semibold text-ink">Step 3</div>
          <p className="mt-2 text-sm text-body">
            If you want financing, we’ll share the application link and next steps.
          </p>
        </Card>
      </div>
    </Container>
  );
}
