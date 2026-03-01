import Link from "next/link"
import { AnimatedSection } from "@/components/animated-section"
import { SectionHeading } from "@/components/section-heading"
import { ArrowRight, Check } from "lucide-react"
import { cn } from "@/lib/utils"

const offers = [
  {
    tier: "Decouverte",
    title: "Diagnostic Gratuit",
    price: "GRATUIT",
    description:
      "30 minutes pour auditer les 8 fonctions cles de ton business et identifier les points de blocage.",
    features: [
      "Audit des 8 fonctions business",
      "Analyse de ton offre actuelle",
      "Identification des quick wins",
      "Recommandations personnalisees",
    ],
    cta: "Reserver Mon Diagnostic",
    ctaLink: "/contact",
    featured: false,
  },
  {
    tier: "Croissance",
    title: "Accompagnement",
    price: "Sur Mesure",
    description:
      "Coaching individuel adapte a ton profil. On construit ensemble tes offres, ton systeme de leads et ton business model.",
    features: [
      "Coaching 1-to-1 personnalise",
      "Construction de ton offre irresistible",
      "Systeme de generation de leads",
      "Suivi et ajustements continus",
      "Acces aux scripts et templates",
    ],
    cta: "Decouvrir l'Accompagnement",
    ctaLink: "/offres",
    featured: true,
  },
  {
    tier: "Transformation",
    title: "High-Ticket",
    price: "500K FCFA+",
    description:
      "Programme intensif de 3 mois. Transformation complete de ton business avec implementation guidee.",
    features: [
      "Programme intensif 3 mois",
      "Implementation guidee",
      "Acces VIP aux ressources",
      "Support prioritaire WhatsApp",
      "Communaute privee",
      "Resultats garantis",
    ],
    cta: "Postuler au Programme",
    ctaLink: "/contact",
    featured: false,
  },
]

export function OffersPreview() {
  return (
    <section className="bg-deep-black py-20 lg:py-32">
      <div className="mx-auto max-w-7xl px-4 lg:px-8">
        <AnimatedSection>
          <SectionHeading
            label="Mon Offre"
            title="3 niveaux pour scaler ton business"
            description="Que tu demarres ou que tu veuilles exploser, il y a un niveau pour toi."
          />
        </AnimatedSection>

        <div className="mt-16 grid gap-6 md:grid-cols-3">
          {offers.map((offer, index) => (
            <AnimatedSection key={offer.title} delay={index * 0.15}>
              <div
                className={cn(
                  "relative flex h-full flex-col rounded-sm border p-6 transition-all lg:p-8",
                  offer.featured
                    ? "border-primary bg-primary/5 scale-[1.02]"
                    : "border-border bg-card hover:border-primary/50"
                )}
              >
                {offer.featured && (
                  <span className="absolute -top-3 left-6 rounded-sm bg-primary px-3 py-1 text-xs font-bold uppercase tracking-widest text-primary-foreground">
                    Populaire
                  </span>
                )}

                <span className="text-xs font-semibold uppercase tracking-widest text-primary">
                  {offer.tier}
                </span>

                <h3 className="mt-2 font-[family-name:var(--font-display)] text-xl font-bold text-foreground">
                  {offer.title}
                </h3>

                <p className="mt-2 font-[family-name:var(--font-heading)] text-3xl tracking-wider text-foreground">
                  {offer.price}
                </p>

                <p className="mt-4 text-sm leading-relaxed text-muted-foreground">
                  {offer.description}
                </p>

                <ul className="mt-6 flex flex-1 flex-col gap-3">
                  {offer.features.map((feature) => (
                    <li key={feature} className="flex items-start gap-2">
                      <Check className="mt-0.5 h-4 w-4 shrink-0 text-primary" />
                      <span className="text-sm text-foreground/80">{feature}</span>
                    </li>
                  ))}
                </ul>

                <Link
                  href={offer.ctaLink}
                  className={cn(
                    "mt-8 inline-flex items-center justify-center gap-2 rounded-sm px-6 py-3 text-sm font-semibold uppercase tracking-wide transition-colors",
                    offer.featured
                      ? "bg-primary text-primary-foreground hover:bg-yellow hover:text-accent-foreground"
                      : "border border-border bg-transparent text-foreground hover:border-primary hover:text-primary"
                  )}
                >
                  {offer.cta}
                  <ArrowRight className="h-4 w-4" />
                </Link>
              </div>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>
  )
}
