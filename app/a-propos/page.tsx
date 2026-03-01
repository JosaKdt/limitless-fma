import type { Metadata } from "next"
import Image from "next/image"
import { AnimatedSection } from "@/components/animated-section"
import { SectionHeading } from "@/components/section-heading"
import { Ticker } from "@/components/ticker"
import { FinalCta } from "@/components/home/final-cta"

export const metadata: Metadata = {
  title: "A Propos",
  description:
    "Decouvrez Folawe Milarepa AGLI, fondateur de LIMITLESS_FMA. Coaching business  pour entrepreneurs francophones.",
}

const principles = [
  {
    number: "01",
    title: "Les systemes battent la motivation",
    description:
      "La motivation est temporaire. Les systemes sont permanents. On construit des process repeteables, pas des habitudes fragiles.",
  },
  {
    number: "02",
    title: "Ton offre est ton arme principale",
    description:
      "Si ton offre n'est pas irresistible, rien d'autre ne marche. Le marketing, les leads, la vente -- tout commence par une offre structuree.",
  },
  {
    number: "03",
    title: "La valeur avant le prix",
    description:
      "Augmente la valeur percue avant de toucher au prix. Quand la valeur est 10x le prix, la vente devient facile.",
  },
  {
    number: "04",
    title: "Les leads sont un systeme, pas de la chance",
    description:
      "Attirer des clients n'est pas un coup de poker. C'est un systeme reproductible qu'on peut optimiser et scaler.",
  },
  {
    number: "05",
    title: "Mesure tout",
    description:
      "Ce qui ne se mesure pas ne s'ameliore pas. KPIs clairs, tracking rigoureux, decisions basees sur les donnees.",
  },
  {
    number: "06",
    title: "L'execution > la strategie",
    description:
      "Une strategie mediocre bien executee bat une strategie brillante mal executee. L'action prime sur la reflexion.",
  },
  {
    number: "07",
    title: "Simplifie pour scaler",
    description:
      "La complexite tue la croissance. Simplifie ton offre, tes process, ta communication. Moins c'est plus.",
  },
  {
    number: "08",
    title: "Investis dans toi-meme",
    description:
      "Le meilleur investissement est celui que tu fais dans tes competences et tes systemes. Le ROI est infini.",
  },
  {
    number: "09",
    title: "Le marche a toujours raison",
    description:
      "Ecoute le marche, pas ton ego. Teste, itere, adapte. Le feedback du marche est ton meilleur conseiller.",
  },
  {
    number: "10",
    title: "Zero excuse",
    description:
      "Les excuses sont le plus grand frein a la croissance. Prends la responsabilite, agis, ajuste. Pas de place pour les excuses.",
  },
]

const timeline = [
  {
    period: "Mois 1-3",
    title: "Fondations",
    description:
      "Lancement de la plateforme, premiers diagnostics gratuits, construction de la communaute francophone.",
  },
  {
    period: "Mois 4-6",
    title: "Croissance",
    description:
      "Lancement du programme High-Ticket, premiers resultats clients documentes, expansion du contenu blog.",
  },
  {
    period: "Mois 7-9",
    title: "Scale",
    description:
      "Automatisation des systemes, lancement de formations en ligne, partenariats strategiques en Afrique francophone.",
  },
  {
    period: "Mois 10-12",
    title: "Impact",
    description:
      "100 entrepreneurs accompagnes, communaute active de 1000+ membres, lancement de l'evenement annuel LIMITLESS.",
  },
]

export default function AProposPage() {
  return (
    <>
      {/* Hero */}
      <section className="bg-background pt-32 pb-20 lg:pt-40 lg:pb-28">
        <div className="mx-auto max-w-7xl px-4 lg:px-8">
          <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-20">
            {/* Image */}
            <AnimatedSection>
              <div className="relative mx-auto aspect-[3/4] w-full max-w-md overflow-hidden rounded-sm border-2 border-primary/20">
                <Image
                  src="/images/folawe-portrait.jpg"
                  alt="Folawe Milarepa AGLI - Fondateur de LIMITLESS_FMA"
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, 400px"
                  priority
                />
                <div className="absolute top-4 right-4 h-16 w-16 border-t-2 border-r-2 border-primary" />
                <div className="absolute bottom-4 left-4 h-16 w-16 border-b-2 border-l-2 border-primary" />
                {/* Name overlay */}
                <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-background to-transparent p-6">
                  <p className="font-[family-name:var(--font-heading)] text-3xl tracking-wider text-primary">
                    FOLAWE
                  </p>
                  <p className="font-[family-name:var(--font-heading)] text-3xl tracking-wider text-foreground">
                    MILAREPA AGLI
                  </p>
                </div>
              </div>
            </AnimatedSection>

            {/* Content */}
            <AnimatedSection delay={0.2}>
              <span className="inline-block rounded-sm bg-primary/10 px-3 py-1 text-xs font-semibold uppercase tracking-widest text-primary">
                A Propos
              </span>
              <h1 className="mt-6 font-[family-name:var(--font-heading)] text-5xl tracking-wide text-foreground sm:text-6xl md:text-7xl text-balance">
                LE DECLENCHEUR
              </h1>
              <div className="mt-6 flex flex-col gap-4">
                <p className="text-base leading-relaxed text-muted-foreground">
                  J&apos;ai vu trop d&apos;entrepreneurs talentueux echouer. Pas par manque de
                  competences ou de motivation, mais par manque de systeme. Ils improvaient
                  la ou il fallait structurer.
                </p>
                <p className="text-base leading-relaxed text-muted-foreground">
                  LIMITLESS_FMA est ne de cette frustration. L&apos;objectif : donner aux
                  entrepreneurs francophones -- en particulier en Afrique -- les memes outils
                  et frameworks que les meilleurs business au monde utilisent.
                </p>
                <p className="text-base leading-relaxed text-muted-foreground">
                  Ma philosophie est directe : pas de discours motivationnel creux, pas de
                  promesses vides. Des systemes, des scripts, des modeles. Tu appliques, tu
                  mesures, tu ajustes. La structure remplace la chance.
                </p>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      <Ticker />

      {/* 10 Principles */}
      <section className="bg-background py-20 lg:py-32">
        <div className="mx-auto max-w-7xl px-4 lg:px-8">
          <AnimatedSection>
            <SectionHeading
              label="Philosophie"
              title="10 Principes Inalterables"
              description="Les regles du jeu. Non negociables."
            />
          </AnimatedSection>

          <div className="mt-16 grid gap-4 md:grid-cols-2">
            {principles.map((principle, index) => (
              <AnimatedSection key={principle.number} delay={index * 0.05}>
                <div className="group flex gap-4 rounded-sm border border-border bg-card p-5 transition-all hover:border-primary">
                  <span className="font-[family-name:var(--font-heading)] text-3xl text-primary/30 transition-colors group-hover:text-primary">
                    {principle.number}
                  </span>
                  <div>
                    <h3 className="font-[family-name:var(--font-display)] text-base font-bold text-foreground">
                      {principle.title}
                    </h3>
                    <p className="mt-1 text-sm leading-relaxed text-muted-foreground">
                      {principle.description}
                    </p>
                  </div>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* Vision Timeline */}
      <section className="bg-deep-black py-20 lg:py-32">
        <div className="mx-auto max-w-4xl px-4 lg:px-8">
          <AnimatedSection>
            <SectionHeading
              label="Vision"
              title="Roadmap 12 Mois"
              description="La ou on va. Pas des reves, un plan."
            />
          </AnimatedSection>

          <div className="relative mt-16">
            {/* Vertical line */}
            <div className="absolute top-0 bottom-0 left-4 w-px bg-border md:left-1/2 md:-translate-x-px" />

            <div className="flex flex-col gap-12">
              {timeline.map((item, index) => (
                <AnimatedSection key={item.period} delay={index * 0.1}>
                  <div className="relative flex gap-8 pl-12 md:pl-0">
                    {/* Dot */}
                    <div className="absolute left-2.5 top-1 h-3 w-3 rounded-full bg-primary md:left-1/2 md:-translate-x-1.5" />

                    <div
                      className={`md:w-1/2 ${
                        index % 2 === 0
                          ? "md:pr-12 md:text-right"
                          : "md:ml-auto md:pl-12"
                      }`}
                    >
                      <span className="font-[family-name:var(--font-heading)] text-xl tracking-wider text-primary">
                        {item.period}
                      </span>
                      <h3 className="mt-1 font-[family-name:var(--font-display)] text-lg font-bold text-foreground">
                        {item.title}
                      </h3>
                      <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                        {item.description}
                      </p>
                    </div>
                  </div>
                </AnimatedSection>
              ))}
            </div>
          </div>
        </div>
      </section>

      <FinalCta />
    </>
  )
}
