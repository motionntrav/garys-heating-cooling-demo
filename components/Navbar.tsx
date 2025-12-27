import Image from "next/image";
import Link from "next/link";
import { Container } from "./Container";
import { Button } from "./Button";
import { site } from "@/lib/site";

const nav = [
  { href: "/services", label: "Services" },
  { href: "/financing", label: "Financing" },
  { href: "/reviews", label: "Reviews" },
  { href: "/service-area", label: "Service Area" },
  { href: "/contact", label: "Contact" }
];

export function Navbar() {
  const tel = `tel:${site.phone.replace(/[^0-9+]/g, "")}`;

  return (
    <header className="sticky top-0 z-40 border-b border-border bg-white/80 backdrop-blur">
      <Container>
        <div className="flex h-16 items-center justify-between">
          <Link href="/" className="flex items-center gap-3">
            <span className="inline-flex h-9 w-9 items-center justify-center rounded-2xl bg-brand-50">
             <Image
                src="/logo.png"
                alt="Your HVAC Company logo"
                width={32}
                height={32}
                priority
             />   

            </span>
            <div className="leading-tight">
              <div className="text-sm font-bold text-ink">{site.name}</div>
              <div className="text-xs text-body">Indianapolis, IN</div>
            </div>
          </Link>

          <nav className="hidden items-center gap-6 md:flex">
            {nav.map((item) => (
              <Link key={item.href} href={item.href} className="text-sm text-body hover:text-ink">
                {item.label}
              </Link>
            ))}
          </nav>

          <div className="flex items-center gap-2">
            <Button href={tel} variant="secondary" className="hidden sm:inline-flex">
              Call {site.phone}
            </Button>
            <Button href="/contact">Request Service</Button>
          </div>
        </div>
      </Container>
    </header>
  );
}
