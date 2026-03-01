import { AnimatedSection } from "@/components/animated-section"
import { SectionHeading } from "@/components/section-heading"
import {
  Palette,
  ShoppingCart,
  Users,
  Megaphone,
  Store,
  Briefcase,
} from "lucide-react"

const personas = [
  {
    icon: Briefcase,
    title: "Freelance Plafonne",
    problem: "Tu travailles beaucoup mais tes revenus stagnent.",
    solution:
      "On structure ton offre pour sortir du temps-contre-argent et augmenter ta valeur percue.",
  },
  {
    icon: Palette,
    title: "Createur Invisible",
    problem: "Tu crees du contenu mais personne ne convertit.",
    solution:
      "On transforme ton audience en clients avec un systeme de leads et une offre claire.",
  },
  {
    icon: ShoppingCart,
    title: "E-commerce Sans Systeme",
    problem: "Tu vends en ligne mais sans strategie ni process repeteble.",
    solution:
      "On implemente un tunnel de conversion et une strategie d'offres irresistibles.",
  },
  {
    icon: Users,
    title: "Coach Sans Clients",
    problem: "Tu as l'expertise mais pas les clients.",
    solution:
      "On construit ton systeme d'acquisition et ton positionnement premium.",
  },
  {
    icon: Megaphone,
    title: "Agence Qui Ne Scale Pas",
    problem: "Tu es deborde et tu ne peux pas prendre plus de clients.",
    solution:
      "On structure tes process, tes offres packagées et ta delegation pour scaler.",
  },
  {
    icon: Store,
    title: "Commercant Local",
    problem: "Tu as un commerce physique et tu veux passer au digital.",
    solution:
      "On cree ta presence en ligne avec une offre adaptee et un systeme de generation de leads local.",
  },
]

export function Personas() {
  return (
    <section className="bg-background py-20 lg:py-32">
      <div className="mx-auto max-w-7xl px-4 lg:px-8">
        <AnimatedSection>
          <SectionHeading
            label="Pour Qui"
            title="Tu te reconnais ?"
            description="6 profils d'entrepreneurs. 6 problemes differents. Un meme systeme pour en sortir."
          />
        </AnimatedSection>

        <div className="mt-16 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {personas.map((persona, index) => (
            <AnimatedSection key={persona.title} delay={index * 0.1}>
              <div className="group flex h-full flex-col rounded-sm border border-border bg-card p-6 transition-all hover:border-primary hover:scale-[1.02] lg:p-8">
                <div className="flex h-12 w-12 items-center justify-center rounded-sm bg-primary/10">
                  <persona.icon className="h-6 w-6 text-primary" />
                </div>

                <h3 className="mt-4 font-[family-name:var(--font-display)] text-lg font-bold text-foreground">
                  {persona.title}
                </h3>

                <p className="mt-2 text-sm leading-relaxed text-primary/80">
                  {persona.problem}
                </p>

                <p className="mt-3 flex-1 text-sm leading-relaxed text-muted-foreground">
                  {persona.solution}
                </p>
              </div>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>
  )
}
