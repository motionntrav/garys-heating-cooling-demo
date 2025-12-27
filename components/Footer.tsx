import Image from "next/image";
import Link from "next/link";
import { Container } from "./Container";
import { site } from "@/lib/site";

export function Footer() {
  const tel = `tel:${site.phone.replace(/[^0-9+]/g, "")}`;
  return (
    <footer className="border-t border-border bg-white">
      <Container className="py-12">
        <div className="grid gap-10 md:grid-cols-3">
          <div>
            <div className="flex items-center gap-3">
              <span className="inline-flex h-10 w-10 items-center justify-center rounded-2xl bg-brand-50">
                <Image
                  src="/logo.png"
                  alt="Your HVAC Company logo"
                  width={32}
                  height={32}
                />
                
              </span>
              <div>
                <div className="font-bold text-ink">{site.name}</div>
                <div className="text-sm text-body">Heating • Cooling • Maintenance</div>
              </div>
            </div>
            <p className="mt-4 text-sm text-body">
              Dependable heating and cooling services for Indianapolis homeowners. Clean work, clear
              communication, and comfort that lasts.
            </p>
          </div>

          <div>
            <div className="text-sm font-semibold text-ink">Contact</div>
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
            <div className="mt-5 text-sm font-semibold text-ink">Hours</div>
            <div className="mt-2 space-y-1 text-sm text-body">
              {site.hours.map((h) => (
                <div key={h.days} className="flex items-center justify-between gap-6">
                  <span>{h.days}</span>
                  <span className="text-ink">{h.hours}</span>
                </div>
              ))}
            </div>
          </div>

          <div>
            <div className="text-sm font-semibold text-ink">Links</div>
            <div className="mt-3 grid gap-2 text-sm">
              <Link href="/services">Services</Link>
              <Link href="/financing">Financing</Link>
              <Link href="/reviews">Reviews</Link>
              <Link href="/service-area">Service Area</Link>
              <Link href="/contact">Request Service</Link>
            </div>
            <p className="mt-6 text-xs text-body">
              © {new Date().getFullYear()} {site.name}. All rights reserved.
            </p>
          </div>
        </div>
      </Container>
    </footer>
  );
}
