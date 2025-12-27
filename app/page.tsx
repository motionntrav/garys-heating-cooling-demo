import { Container } from "@/components/Container";
import { Button } from "@/components/Button";
import { Badge } from "@/components/Badge";
import { SectionHeading } from "@/components/SectionHeading";
import { ServiceCard } from "@/components/ServiceCard";
import { TestimonialCard } from "@/components/TestimonialCard";
import { FAQ } from "@/components/FAQ";
import { ContactForm } from "@/components/ContactForm";
import { site } from "@/lib/site";

export default function HomePage() {
  const tel = `tel:${site.phone.replace(/[^0-9+]/g, "")}`;

  return (
    <>
      {/* Hero */}
      <section className="bg-white">
        <Container className="py-14 sm:py-20">
          <div className="grid items-center gap-10 md:grid-cols-2">
            <div>
              <div className="flex flex-wrap gap-2">
                <Badge>Fast scheduling</Badge>
                <Badge>Honest pricing</Badge>
                <Badge>Clean work</Badge>
              </div>

              <h1 className="mt-6 text-4xl font-extrabold tracking-tight text-ink sm:text-5xl">
                Heating & Air Done Right in Indianapolis
              </h1>
              <p className="mt-4 text-lg text-body">
                Repairs, installs, and maintenance—built around clear communication and comfort that
                lasts.
              </p>

              <div className="mt-6 flex flex-col gap-3 sm:flex-row">
                <Button href={tel}>Call {site.phone}</Button>
                <Button href="/contact" variant="secondary">
                  Request Service
                </Button>
              </div>

              <div className="mt-8 grid gap-4 rounded-2xl border border-border bg-stonebg p-5 sm:grid-cols-3">
                <Stat label="Response" value="Same-day options" />
                <Stat label="Service" value="Most major brands" />
                <Stat label="Support" value="Clear next steps" />
              </div>
            </div>

            <div className="relative">
              <div className="absolute -inset-4 -z-10 rounded-[32px] bg-brand-50" />
              <div className="rounded-[32px] border border-border bg-white p-6 shadow-soft">
                <div className="flex items-center justify-between">
                  <div className="text-sm font-semibold text-ink">Quick Request</div>
                  <span className="text-xs text-body">Takes ~1 minute</span>
                </div>
                <div className="mt-4">
                  <ContactForm />
                </div>
              </div>
            </div>
          </div>
        </Container>
      </section>

      {/* Services */}
      <section className="border-t border-border bg-white">
        <Container className="py-14 sm:py-20">
          <div className="grid gap-10 md:grid-cols-2 md:items-start">
            <SectionHeading
              eyebrow="Services"
              title="Heating, cooling, and comfort upgrades."
              subtitle="Straightforward recommendations, quality workmanship, and a clean finish."
            />
            <div className="grid gap-4 sm:grid-cols-2">
              {site.services.slice(0, 6).map((s) => (
                <ServiceCard key={s.title} title={s.title} desc={s.desc} />
              ))}
            </div>
          </div>

          <div className="mt-10 flex flex-col items-start justify-between gap-4 rounded-2xl border border-border bg-stonebg p-6 sm:flex-row sm:items-center">
            <div>
              <div className="text-base font-semibold text-ink">Not sure what you need?</div>
              <p className="mt-1 text-sm text-body">
                Describe the issue and we’ll help you choose the right next step.
              </p>
            </div>
            <Button href="/contact">Request Service</Button>
          </div>
        </Container>
      </section>

      {/* Why us */}
      <section className="border-t border-border bg-stonebg">
        <Container className="py-14 sm:py-20">
          <div className="grid gap-10 md:grid-cols-2 md:items-center">
            <div className="rounded-[32px] border border-border bg-white p-6 shadow-sm">
              <img src="/hero-hvac.svg" alt="" className="w-full" />
            </div>
            <div>
              <SectionHeading
                eyebrow="Why Chooses Us?"
                title="A calm, professional experience—start to finish."
                subtitle="We focus on clear communication, respectful service, and solutions that fit your home."
              />
              <ul className="mt-6 space-y-3 text-sm text-body">
                <li className="rounded-2xl border border-border bg-white p-4">
                  <span className="font-semibold text-ink">Upfront options</span> — you’ll understand the fix before we start.
                </li>
                <li className="rounded-2xl border border-border bg-white p-4">
                  <span className="font-semibold text-ink">Clean work</span> — shoe covers, tidy workspace, and a proper walkthrough.
                </li>
                <li className="rounded-2xl border border-border bg-white p-4">
                  <span className="font-semibold text-ink">Comfort-first sizing</span> — installs planned for your home, not guesses.
                </li>
              </ul>

              <div className="mt-7 flex flex-wrap gap-3">
                <Button href="/services">Explore Services</Button>
                <Button href="/reviews" variant="secondary">
                  Read Reviews
                </Button>
              </div>
            </div>
          </div>
        </Container>
      </section>

      {/* Reviews */}
      <section className="border-t border-border bg-white">
        <Container className="py-14 sm:py-20">
          <div className="grid gap-10 md:grid-cols-2">
            <SectionHeading
              eyebrow="Reviews"
              title="Trusted by Indianapolis homeowners."
              subtitle="Here’s what customers say about our communication, quality, and professionalism."
            />
            <div className="grid gap-4 sm:grid-cols-2">
              {site.testimonials.map((t) => (
                <TestimonialCard key={t.name} quote={t.quote} name={t.name} location={t.location} />
              ))}
            </div>
          </div>

          <div className="mt-10 rounded-2xl border border-border bg-stonebg p-6">
            <div className="flex flex-col items-start justify-between gap-3 sm:flex-row sm:items-center">
              <div>
                <div className="text-base font-semibold text-ink">Want an estimate?</div>
                <p className="mt-1 text-sm text-body">
                  Tell us what’s going on and we’ll schedule the next step.
                </p>
              </div>
              <Button href="/contact">Request Service</Button>
            </div>
          </div>
        </Container>
      </section>

      {/* FAQ */}
      <section className="border-t border-border bg-stonebg">
        <Container className="py-14 sm:py-20">
          <div className="grid gap-10 md:grid-cols-2 md:items-start">
            <SectionHeading
              eyebrow="FAQ"
              title="Quick answers."
              subtitle="If you don’t see your question, call us and we’ll help."
            />
            <FAQ items={site.faqs} />
          </div>
        </Container>
      </section>

      {/* Footer CTA */}
      <section className="border-t border-border bg-white">
        <Container className="py-14 sm:py-20">
          <div className="grid gap-10 rounded-[36px] border border-border bg-brand-50 p-8 md:grid-cols-2 md:items-center md:p-12">
            <div>
              <div className="text-sm font-semibold text-brand-700">Ready when you are</div>
              <h2 className="mt-2 text-2xl font-bold text-ink sm:text-3xl">
                Get your home comfortable again.
              </h2>
              <p className="mt-3 text-body">
                Call now or submit a request. We’ll confirm details and schedule your service.
              </p>
            </div>
            <div className="flex flex-col gap-3 sm:flex-row sm:justify-end">
              <Button href={tel}>Call {site.phone}</Button>
              <Button href="/contact" variant="secondary">
                Request Service
              </Button>
            </div>
          </div>
        </Container>
      </section>

      {/* JSON-LD */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessSchema(), null, 0) }}
      />
    </>
  );
}

function Stat({ label, value }: { label: string; value: string }) {
  return (
    <div>
      <div className="text-xs font-semibold uppercase tracking-wide text-body">{label}</div>
      <div className="mt-1 text-sm font-semibold text-ink">{value}</div>
    </div>
  );
}

function localBusinessSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "HVACBusiness",
    name: site.name,
    url: site.url,
    telephone: site.phone,
    email: site.email,
    address: {
      "@type": "PostalAddress",
      addressLocality: site.address.city,
      addressRegion: site.address.region,
      postalCode: site.address.postalCode,
      addressCountry: site.address.country
    },
    areaServed: site.serviceAreas,
    description: site.description
  };
}
