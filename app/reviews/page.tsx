import type { Metadata } from "next";
import { Container } from "@/components/Container";
import { SectionHeading } from "@/components/SectionHeading";
import { TestimonialCard } from "@/components/TestimonialCard";
import { Button } from "@/components/Button";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: "Reviews",
  description: "Customer reviews for True Comfort Heating & Air in Indianapolis."
};

export default function ReviewsPage() {
  return (
    <Container className="py-14 sm:py-20">
      <div className="grid gap-10 md:grid-cols-2 md:items-start">
        <SectionHeading
          eyebrow="Reviews"
          title="Real feedback from local homeowners."
          subtitle="We focus on clear communication, clean work, and results you can feel."
        />
        <div className="rounded-2xl border border-border bg-stonebg p-6">
          <div className="text-sm font-semibold text-ink">Pro tip</div>
          <p className="mt-2 text-sm text-body">
            If you have a Google Business Profile link, we can embed it here and add a “Leave a review” button.
          </p>
          <div className="mt-5 flex gap-3">
            <Button href="/contact">Request Service</Button>
            <Button href="/services" variant="secondary">Services</Button>
          </div>
        </div>
      </div>

      <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {site.testimonials.map((t) => (
          <TestimonialCard key={t.name} quote={t.quote} name={t.name} location={t.location} />
        ))}
      </div>
    </Container>
  );
}
