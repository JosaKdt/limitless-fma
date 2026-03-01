"use client"

import { useState } from "react"
import { AnimatedSection } from "@/components/animated-section"
import { SectionHeading } from "@/components/section-heading"
import { Star, ChevronLeft, ChevronRight, Quote } from "lucide-react"

const testimonials = [
  {
    name: "Amadou K.",
    persona: "Freelance",
    quote:
      "Avant, je facturais a l'heure sans strategie. Apres 2 mois avec Folawe, j'ai triple mon tarif moyen et j'ai un pipeline de clients qui ne s'arrete plus.",
    rating: 5,
  },
  {
    name: "Sade O.",
    persona: "E-commerce",
    quote:
      "Le diagnostic m'a ouvert les yeux. Je vendais sans systeme. Aujourd'hui, mon tunnel de vente convertit a 8% et mes offres sont structurees pour scaler.",
    rating: 5,
  },
  {
    name: "Kwame D.",
    persona: "Coach",
    quote:
      "J'avais l'expertise mais zero clients. Le systeme de leads de LIMITLESS m'a permis de remplir mon agenda en 6 semaines. Pas de magie, juste de la structure.",
    rating: 5,
  },
  {
    name: "Fatou M.",
    persona: "Agence",
    quote:
      "Mon agence stagnait a 5 clients. Avec le programme High-Ticket, j'ai appris a packager mes offres et a deleguer. On est a 15 clients recurrents maintenant.",
    rating: 5,
  },
]

export function Testimonials() {
  const [current, setCurrent] = useState(0)

  const prev = () =>
    setCurrent((c) => (c === 0 ? testimonials.length - 1 : c - 1))
  const next = () =>
    setCurrent((c) => (c === testimonials.length - 1 ? 0 : c + 1))

  return (
    <section className="bg-background py-20 lg:py-32">
      <div className="mx-auto max-w-7xl px-4 lg:px-8">
        <AnimatedSection>
          <SectionHeading
            label="Temoignages"
            title="Ils ont structure leur business"
            description="Des entrepreneurs francophones qui ont applique le systeme et obtenu des resultats concrets."
          />
        </AnimatedSection>

        <AnimatedSection delay={0.2}>
          <div className="relative mx-auto mt-16 max-w-3xl">
            {/* Quote */}
            <div className="rounded-sm border border-border bg-card p-8 lg:p-12">
              <Quote className="h-10 w-10 text-primary/30" />
              <blockquote className="mt-6 text-lg leading-relaxed text-foreground md:text-xl">
                {testimonials[current].quote}
              </blockquote>

              <div className="mt-8 flex items-center gap-4">
                <div className="flex h-12 w-12 items-center justify-center rounded-full bg-primary/10">
                  <span className="font-[family-name:var(--font-heading)] text-xl text-primary">
                    {testimonials[current].name[0]}
                  </span>
                </div>
                <div>
                  <p className="font-semibold text-foreground">
                    {testimonials[current].name}
                  </p>
                  <p className="text-sm text-muted-foreground">
                    {testimonials[current].persona}
                  </p>
                </div>
                <div className="ml-auto flex gap-0.5">
                  {Array.from({ length: testimonials[current].rating }).map(
                    (_, i) => (
                      <Star
                        key={i}
                        className="h-4 w-4 fill-yellow text-yellow"
                      />
                    )
                  )}
                </div>
              </div>
            </div>

            {/* Navigation */}
            <div className="mt-6 flex items-center justify-center gap-4">
              <button
                onClick={prev}
                className="flex h-10 w-10 items-center justify-center rounded-sm border border-border bg-card text-foreground transition-colors hover:border-primary hover:text-primary"
                aria-label="Temoignage precedent"
              >
                <ChevronLeft className="h-5 w-5" />
              </button>
              <span className="text-sm text-muted-foreground">
                {current + 1} / {testimonials.length}
              </span>
              <button
                onClick={next}
                className="flex h-10 w-10 items-center justify-center rounded-sm border border-border bg-card text-foreground transition-colors hover:border-primary hover:text-primary"
                aria-label="Temoignage suivant"
              >
                <ChevronRight className="h-5 w-5" />
              </button>
            </div>
          </div>
        </AnimatedSection>
      </div>
    </section>
  )
}
