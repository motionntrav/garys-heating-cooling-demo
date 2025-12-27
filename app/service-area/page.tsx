import type { Metadata } from "next";
import { Container } from "@/components/Container";
import { SectionHeading } from "@/components/SectionHeading";
import { Card } from "@/components/Card";
import { Button } from "@/components/Button";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: "Service Area",
  description: "Service areas around Indianapolis for True Comfort Heating & Air."
};

export default function ServiceAreaPage() {
  return (
    <Container className="py-14 sm:py-20">
      <div className="grid gap-10 md:grid-cols-2 md:items-start">
        <SectionHeading
          eyebrow="Service Area"
          title="Proudly serving Indianapolis and nearby communities."
          subtitle="If you’re close but don’t see your city listed, contact us—there’s a good chance we can help."
        />
        <Card className="bg-stonebg">
          <div className="text-sm font-semibold text-ink">Areas we commonly serve</div>
          <div className="mt-3 grid gap-2 text-sm text-body sm:grid-cols-2">
            {site.serviceAreas.map((a) => (
              <div key={a} className="rounded-2xl border border-border bg-white px-4 py-3">
                {a}
              </div>
            ))}
          </div>
          <div className="mt-6">
            <Button href="/contact">Request Service</Button>
          </div>
        </Card>
      </div>

      <div className="mt-12 grid gap-6 md:grid-cols-2 md:items-start">
        <Card>
          <div className="text-base font-semibold text-ink">Service expectations</div>
          <ul className="mt-3 list-disc space-y-2 pl-5 text-sm text-body">
            <li>Arrival window confirmation</li>
            <li>Clear explanation of options</li>
            <li>Work area kept clean</li>
            <li>Walkthrough before we leave</li>
          </ul>
        </Card>

        <Card>
          <div className="text-base font-semibold text-ink">Map</div>
          <p className="mt-2 text-sm text-body">
            Add your Google Maps embed here once your Google Business Profile is set up.
          </p>
          <div className="mt-4 aspect-video w-full rounded-2xl border border-border bg-stonebg" />
        </Card>
      </div>
    </Container>
  );
}
