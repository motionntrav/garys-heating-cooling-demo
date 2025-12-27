import type { Metadata } from "next";
import { Container } from "@/components/Container";
import { SectionHeading } from "@/components/SectionHeading";
import { ContactForm } from "@/components/ContactForm";
import { Card } from "@/components/Card";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: "Contact",
  description: "Request HVAC service in Indianapolis — True Comfort Heating & Air."
};

export default function ContactPage() {
  const tel = `tel:${site.phone.replace(/[^0-9+]/g, "")}`;

  return (
    <Container className="py-14 sm:py-20">
      <div className="grid gap-10 md:grid-cols-2 md:items-start">
        <SectionHeading
          eyebrow="Contact"
          title="Request service or ask a question."
          subtitle="Call for the fastest help. Or submit a request and we’ll reach out to schedule."
        />

        <div className="space-y-4">
          <ContactForm />
          <Card className="bg-stonebg">
            <div className="text-sm font-semibold text-ink">Direct contact</div>
            <div className="mt-3 space-y-2 text-sm text-body">
              <div>
                Phone:{" "}
                <a href={tel} className="font-semibold text-ink hover:text-brand-700">
                  {site.phone}
                </a>
              </div>
              <div>
                Email:{" "}
                <a href={`mailto:${site.email}`} className="font-semibold text-ink hover:text-brand-700">
                  {site.email}
                </a>
              </div>
              <div>Location: Indianapolis, IN</div>
            </div>
          </Card>
        </div>
      </div>
    </Container>
  );
}
