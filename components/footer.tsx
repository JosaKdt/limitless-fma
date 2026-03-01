import Link from "next/link"

const navLinks = [
  { href: "/", label: "Accueil" },
  { href: "/blog", label: "Blog" },
  { href: "/offres", label: "Offres" },
  { href: "/a-propos", label: "A Propos" },
  { href: "/contact", label: "Contact" },
]

const resourceLinks = [
  { href: "/blog?category=offers", label: "Offres & Pricing" },
  { href: "/blog?category=leads", label: "Leads & Marketing" },
  { href: "/blog?category=models", label: "Business Models" },
]

export function Footer() {
  return (
    <footer className="border-t border-border bg-deep-black">
      <div className="mx-auto max-w-7xl px-4 py-16 lg:px-8">
        <div className="grid gap-12 md:grid-cols-2 lg:grid-cols-4">
          {/* Brand */}
          <div className="lg:col-span-1">
            <Link href="/" className="inline-flex items-center gap-1">
              <span className="font-[family-name:var(--font-heading)] text-3xl tracking-wider text-primary">
                LIMITLESS
              </span>
              <span className="font-[family-name:var(--font-heading)] text-3xl tracking-wider text-offwhite">
                _FMA
              </span>
            </Link>
            <p className="mt-4 text-sm leading-relaxed text-muted-foreground">
              No Limit. Full Structure. Coaching business pour entrepreneurs francophones qui veulent scaler avec des systemes.
            </p>
          </div>

          {/* Navigation */}
          <div>
            <h3 className="font-[family-name:var(--font-display)] text-sm font-bold uppercase tracking-widest text-foreground">
              Navigation
            </h3>
            <ul className="mt-4 flex flex-col gap-3">
              {navLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm text-muted-foreground transition-colors hover:text-primary"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Resources */}
          <div>
            <h3 className="font-[family-name:var(--font-display)] text-sm font-bold uppercase tracking-widest text-foreground">
              Ressources
            </h3>
            <ul className="mt-4 flex flex-col gap-3">
              {resourceLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm text-muted-foreground transition-colors hover:text-primary"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="font-[family-name:var(--font-display)] text-sm font-bold uppercase tracking-widest text-foreground">
              Contact
            </h3>
            <ul className="mt-4 flex flex-col gap-3">
              <li>
                <Link
                  href="/contact"
                  className="text-sm text-muted-foreground transition-colors hover:text-primary"
                >
                  Reserver un Diagnostic
                </Link>
              </li>
              <li>
                <a
                  href={`https://wa.me/${process.env.NEXT_PUBLIC_WHATSAPP_NUMBER || "22998972610"}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm text-muted-foreground transition-colors hover:text-primary"
                >
                  WhatsApp
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom */}
        <div className="mt-12 flex flex-col items-center justify-between gap-4 border-t border-border pt-8 md:flex-row">
          <p className="text-xs text-muted-foreground">
            &copy; {new Date().getFullYear()} LIMITLESS_FMA. Tous droits reserves.
          </p>
          <p className="text-xs text-muted-foreground">
            Folawe Milarepa AGLI
          </p>
        </div>
      </div>
    </footer>
  )
}
