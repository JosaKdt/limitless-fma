"use client"

import Link from "next/link"
import { motion } from "framer-motion"
import { ArrowRight, Zap } from "lucide-react"

const stats = [
  { value: "6", label: "Personas cibles" },
  { value: "3", label: "Piliers du systeme" },
  { value: "900+", label: "Scripts actionables" },
]

export function Hero() {
  return (
    <section className="relative flex min-h-screen items-center overflow-hidden bg-background pt-20">
      {/* Background glow */}
      <div className="pointer-events-none absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
        <div className="h-[600px] w-[600px] rounded-full bg-primary/5 blur-[120px]" />
      </div>

      <div className="relative mx-auto max-w-7xl px-4 py-20 lg:px-8 lg:py-32">
        <div className="flex flex-col items-center text-center">
          {/* Badge */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            <span className="inline-flex items-center gap-2 rounded-full border border-primary/30 bg-primary/5 px-4 py-1.5 text-xs font-semibold uppercase tracking-widest text-primary">
              <Zap className="h-3 w-3" />
              Coaching Business
            </span>
          </motion.div>

          {/* Main headline */}
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="mt-8 font-[family-name:var(--font-heading)] text-5xl leading-none tracking-wide text-foreground sm:text-7xl md:text-8xl lg:text-9xl text-balance"
          >
            TU AS LES{" "}
            <span className="text-primary">COMPETENCES.</span>
            <br />
            IL TE MANQUE{" "}
            <span className="text-primary">LE SYSTEME.</span>
          </motion.h1>

          {/* Subtitle */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="mt-6 max-w-2xl text-base leading-relaxed text-muted-foreground md:text-lg"
          >
            Pas de motivation creuse. Un systeme. Des offres structurees, des leads qualifies,
            un business model qui scale.
          </motion.p>

          {/* CTAs */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.5 }}
            className="mt-10 flex flex-col gap-4 sm:flex-row"
          >
            <Link
              href="/contact"
              className="inline-flex items-center justify-center gap-2 rounded-sm bg-primary px-8 py-4 text-base font-semibold uppercase tracking-wide text-primary-foreground transition-colors hover:bg-yellow hover:text-accent-foreground"
            >
              Reserver un Diagnostic Gratuit
              <ArrowRight className="h-4 w-4" />
            </Link>
            <Link
              href="/offres"
              className="inline-flex items-center justify-center gap-2 rounded-sm border border-border bg-transparent px-8 py-4 text-base font-semibold uppercase tracking-wide text-foreground transition-colors hover:border-primary hover:text-primary"
            >
              Decouvrir le Systeme
            </Link>
          </motion.div>

          {/* Stats */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.7 }}
            className="mt-16 flex flex-wrap justify-center gap-8 md:gap-16"
          >
            {stats.map((stat) => (
              <div key={stat.label} className="flex flex-col items-center gap-1">
                <span className="font-[family-name:var(--font-heading)] text-4xl tracking-wide text-primary md:text-5xl">
                  {stat.value}
                </span>
                <span className="text-xs font-medium uppercase tracking-widest text-muted-foreground">
                  {stat.label}
                </span>
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  )
}
