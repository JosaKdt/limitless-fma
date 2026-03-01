import type { Metadata } from "next"
import Link from "next/link"
import { AnimatedSection } from "@/components/animated-section"
import { SectionHeading } from "@/components/section-heading"
import { Ticker } from "@/components/ticker"
import { FinalCta } from "@/components/home/final-cta"
import { Check, ArrowRight, MessageCircle } from "lucide-react"
import { cn } from "@/lib/utils"

export const metadata: Metadata = {
  title: "Offres",
  description:
    "Decouvrez les 3 niveaux d'accompagnement LIMITLESS_FMA : Diagnostic Gratuit, Accompagnement sur mesure, et Programme High-Ticket.",
}

const offers = [
  {
    tier: "Decouverte",
    title: "Diagnostic Gratuit",
    price: "GRATUIT",
    subtitle: "30 minutes qui changent tout",
    description:
      "Un audit complet et personnalise de ton business. On analyse les 8 fonctions cles, on identifie les blocages et on te donne un plan d'action concret. Zero engagement, 100% valeur.",
    features: [
      "Audit des 8 fonctions business (offre, marketing, vente, delivery, finance, equipe, systemes, mindset)",
      "Analyse de ton positionnement actuel sur le marche",
      "Identification des quick wins a impact immediat",
      "Recommandations personnalisees et plan d'action",
      "Appel de 30 minutes en visio ou WhatsApp",
    ],
    ideal: "Tu veux savoir ou tu en es et ce qui bloque ta croissance.",
    cta: "Reserver Mon Diagnostic",
    ctaLink: "/contact",
    ctaStyle: "primary" as const,
    featured: false,
  },
  {
    tier: "Croissance",
    title: "Accompagnement",
    price: "Sur Mesure",
    subtitle: "Coaching individuel adapte a ton profil",
    description:
      "On travaille ensemble pour construire tes offres, ton systeme de leads et ton business model. Un accompagnement structure avec des resultats mesurables, pas du coaching motivationnel.",
    features: [
      "Coaching 1-to-1 avec sessions regulieres",
      "Construction de ton offre irresistible (methode 100M Offers)",
      "Mise en place de ton systeme de generation de leads",
      "Scripts de vente et templates prets a l'emploi",
      "Suivi des KPIs et ajustements continus",
      "Support WhatsApp entre les sessions",
      "Acces a la bibliotheque de ressources LIMITLESS",
    ],
    ideal: "Tu as deja un business et tu veux le structurer pour scaler.",
    cta: "Demander un Devis",
    ctaLink: "/contact",
    ctaStyle: "primary" as const,
    featured: true,
  },
  {
    tier: "Transformation",
    title: "Programme High-Ticket",
    price: "500K FCFA+",
    subtitle: "Transformation complete en 3 mois",
    description:
      "Le programme le plus intensif. 3 mois d'implementation guidee pour transformer radicalement ton business. On ne parle pas, on fait. Resultats mesurables ou on continue jusqu'a ce que tu les obtiennes.",
    features: [
      "Programme intensif de 3 mois avec implementation guidee",
      "Sessions de coaching hebdomadaires",
      "Construction complete de ton systeme business",
      "Acces VIP a toutes les ressources et scripts (900+)",
      "Support prioritaire WhatsApp 7j/7",
      "Integration dans la communaute privee LIMITLESS",
      "Audit mensuel de performance",
      "Garantie de resultats : on continue jusqu'a ce que tu y sois",
    ],
    ideal: "Tu veux une transformation complete et rapide de ton business.",
    cta: "Postuler au Programme",
    ctaLink: "/contact",
    ctaStyle: "primary" as const,
    featured: false,
  },
]

const faqs = [
  {
    question: "Le diagnostic est vraiment gratuit ?",
    answer:
      "Oui, 100% gratuit et sans engagement. C'est un vrai appel de 30 minutes ou j'analyse ton business et te donne des recommandations concretes. Pas de pitch de vente cache.",
  },
  
  {
    question: "Est-ce que ca marche pour mon secteur ?",
    answer:
      "Le systeme LIMITLESS s'applique a tout business qui vend un produit ou un service. Les principes sont universels : offre, leads, business model. On les adapte a ton secteur specifique pendant le coaching.",
  },
  {
    question: "Combien de temps avant de voir des resultats ?",
    answer:
      "Ca depend de ton point de depart et de ton implication. Certains clients voient des resultats des la premiere semaine (quick wins). Pour une transformation complete, compte 2-3 mois d'implementation serieuse.",
  },
  {
    question: "Comment se passent les sessions de coaching ?",
    answer:
      "En visio (Zoom ou Google Meet) ou par WhatsApp selon ta preference. Chaque session est structuree avec un objectif clair, des exercices pratiques et des actions a implementer avant la prochaine session.",
  },
  {
    question: "Je peux payer en plusieurs fois ?",
    answer:
      "Oui, des facilites de paiement sont disponibles pour l'accompagnement et le programme High-Ticket. On en discute pendant le diagnostic gratuit.",
  },
]

export default function OffresPage() {
  return (
    <>
      {/* Hero */}
      <section className="bg-background pt-32 pb-20 lg:pt-40 lg:pb-28">
        <div className="mx-auto max-w-7xl px-4 lg:px-8">
          <AnimatedSection>
            <div className="flex flex-col items-center text-center">
              <span className="inline-block rounded-sm bg-primary/10 px-3 py-1 text-xs font-semibold uppercase tracking-widest text-primary">
                Offres
              </span>
              <h1 className="mt-6 font-[family-name:var(--font-heading)] text-5xl tracking-wide text-foreground sm:text-6xl md:text-7xl lg:text-8xl text-balance">
                INVESTIS DANS{" "}
                <span className="text-primary">TON SYSTEME</span>
              </h1>
              <p className="mt-4 max-w-2xl text-base leading-relaxed text-muted-foreground md:text-lg">
                Pas de formule magique. Un systeme structure, adapte a ton profil, avec des resultats mesurables.
              </p>
            </div>
          </AnimatedSection>
        </div>
      </section>

      <Ticker />

      {/* Offers detail */}
      <section className="bg-background py-20 lg:py-32">
        <div className="mx-auto max-w-7xl px-4 lg:px-8">
          <div className="flex flex-col gap-20">
            {offers.map((offer, index) => (
              <AnimatedSection key={offer.title}>
                <div
                  className={cn(
                    "grid gap-8 rounded-sm border p-6 lg:grid-cols-2 lg:p-10",
                    offer.featured
                      ? "border-primary bg-primary/5"
                      : "border-border bg-card"
                  )}
                >
                  {/* Left content */}
                  <div>
                    <div className="flex items-center gap-3">
                      <span className="font-[family-name:var(--font-heading)] text-5xl text-primary/20">
                        {String(index + 1).padStart(2, "0")}
                      </span>
                      <div>
                        <span className="text-xs font-semibold uppercase tracking-widest text-primary">
                          {offer.tier}
                        </span>
                        <h2 className="font-[family-name:var(--font-display)] text-2xl font-bold text-foreground">
                          {offer.title}
                        </h2>
                      </div>
                    </div>

                    <p className="mt-2 font-[family-name:var(--font-heading)] text-3xl tracking-wider text-foreground">
                      {offer.price}
                    </p>
                    <p className="mt-1 text-sm text-muted-foreground">
                      {offer.subtitle}
                    </p>

                    <p className="mt-6 text-base leading-relaxed text-muted-foreground">
                      {offer.description}
                    </p>

                    <div className="mt-6 rounded-sm border border-primary/20 bg-primary/5 p-4">
                      <p className="text-sm font-medium text-foreground">
                        <span className="text-primary">Ideal si : </span>
                        {offer.ideal}
                      </p>
                    </div>

                    <div className="mt-6 flex flex-col gap-3 sm:flex-row">
                      <Link
                        href={offer.ctaLink}
                        className="inline-flex items-center justify-center gap-2 rounded-sm bg-primary px-6 py-3 text-sm font-semibold uppercase tracking-wide text-primary-foreground transition-colors hover:bg-yellow hover:text-accent-foreground"
                      >
                        {offer.cta}
                        <ArrowRight className="h-4 w-4" />
                      </Link>
                      <a
                        href={`https://wa.me/${process.env.NEXT_PUBLIC_WHATSAPP_NUMBER || "22998972610"}`}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center justify-center gap-2 rounded-sm border border-border bg-transparent px-6 py-3 text-sm font-semibold uppercase tracking-wide text-foreground transition-colors hover:border-primary hover:text-primary"
                      >
                        <MessageCircle className="h-4 w-4" />
                        WhatsApp
                      </a>
                    </div>
                  </div>

                  {/* Right - features */}
                  <div>
                    <h3 className="font-[family-name:var(--font-display)] text-sm font-bold uppercase tracking-widest text-foreground">
                      Ce qui est inclus
                    </h3>
                    <ul className="mt-4 flex flex-col gap-3">
                      {offer.features.map((feature) => (
                        <li key={feature} className="flex items-start gap-3">
                          <Check className="mt-0.5 h-4 w-4 shrink-0 text-primary" />
                          <span className="text-sm leading-relaxed text-foreground/80">
                            {feature}
                          </span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="bg-deep-black py-20 lg:py-32">
        <div className="mx-auto max-w-3xl px-4 lg:px-8">
          <AnimatedSection>
            <SectionHeading
              label="FAQ"
              title="Questions Frequentes"
              description="Les reponses aux questions que tu te poses (probablement)."
            />
          </AnimatedSection>

          <div className="mt-12 flex flex-col gap-4">
            {faqs.map((faq, index) => (
              <AnimatedSection key={index} delay={index * 0.05}>
                <details className="group rounded-sm border border-border bg-card">
                  <summary className="flex cursor-pointer items-center justify-between px-6 py-5 text-base font-medium text-foreground transition-colors hover:text-primary">
                    {faq.question}
                    <span className="ml-4 shrink-0 text-muted-foreground transition-transform group-open:rotate-45">
                      +
                    </span>
                  </summary>
                  <div className="px-6 pb-5">
                    <p className="text-sm leading-relaxed text-muted-foreground">
                      {faq.answer}
                    </p>
                  </div>
                </details>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      <FinalCta />
    </>
  )
}
