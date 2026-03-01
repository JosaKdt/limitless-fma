import { AnimatedSection } from "@/components/animated-section"
import { SectionHeading } from "@/components/section-heading"
import { Target, TrendingUp, Layers } from "lucide-react"

const pillars = [
  {
    icon: Target,
    tag: "OFFERS",
    title: "Offres Irresistibles",
    description:
      "Construis des offres que ton marche ne peut pas refuser. Pricing, packaging, positionnement -- tout est structure pour maximiser ta valeur percue et tes conversions.",
  },
  {
    icon: TrendingUp,
    tag: "LEADS",
    title: "Generation de Leads",
    description:
      "Attire des prospects qualifies avec un systeme repeatable. Contenu, funnels, scripts de vente -- chaque point de contact est optimise pour convertir.",
  },
  {
    icon: Layers,
    tag: "MODELS",
    title: "Business Models",
    description:
      "Choisis le bon modele pour scaler. Que tu vendes du service, du produit ou du digital, on trouve la structure qui te permet de croitre sans t'epuiser.",
  },
]

export function SystemPillars() {
  return (
    <section className="bg-deep-black py-20 lg:py-32">
      <div className="mx-auto max-w-7xl px-4 lg:px-8">
        <AnimatedSection>
          <SectionHeading
            label="Le Systeme"
            title="3 Piliers. Zero Improvisation."
            description="Tout business qui scale repose sur ces 3 fondations. On les construit ensemble."
          />
        </AnimatedSection>

        <div className="mt-16 grid gap-8 md:grid-cols-3">
          {pillars.map((pillar, index) => (
            <AnimatedSection key={pillar.tag} delay={index * 0.15}>
              <div className="group relative flex flex-col items-center rounded-sm border border-border bg-card p-8 text-center transition-all hover:border-primary lg:p-10">
                {/* Number accent */}
                <span className="absolute top-4 right-4 font-[family-name:var(--font-heading)] text-6xl leading-none text-primary/10">
                  {String(index + 1).padStart(2, "0")}
                </span>

                <div className="flex h-16 w-16 items-center justify-center rounded-sm bg-primary/10">
                  <pillar.icon className="h-8 w-8 text-primary" />
                </div>

                <span className="mt-6 font-[family-name:var(--font-heading)] text-2xl tracking-widest text-primary">
                  {pillar.tag}
                </span>

                <h3 className="mt-2 font-[family-name:var(--font-display)] text-xl font-bold text-foreground">
                  {pillar.title}
                </h3>

                <p className="mt-4 text-sm leading-relaxed text-muted-foreground">
                  {pillar.description}
                </p>
              </div>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>
  )
}
