import Link from "next/link"
import { AnimatedSection } from "@/components/animated-section"
import { ArrowRight, MessageCircle } from "lucide-react"

export function FinalCta() {
  const phoneNumber = process.env.NEXT_PUBLIC_WHATSAPP_NUMBER || "22998972610"
  const message = encodeURIComponent(
    "Bonjour ! Je veux reserver mon diagnostic gratuit avec LIMITLESS_FMA."
  )

  return (
    <section className="bg-primary py-20 lg:py-28">
      <div className="mx-auto max-w-7xl px-4 lg:px-8">
        <AnimatedSection>
          <div className="flex flex-col items-center text-center">
            <h2 className="font-[family-name:var(--font-heading)] text-4xl tracking-wide text-accent-foreground sm:text-5xl md:text-6xl lg:text-7xl text-balance">
              PRET A STRUCTURER TON BUSINESS ?
            </h2>
            <p className="mt-4 max-w-xl text-base leading-relaxed text-accent-foreground/80 md:text-lg">
              Arrete d&apos;improviser. Commence par un diagnostic gratuit de 30 minutes. Zero engagement, 100% valeur.
            </p>

            <div className="mt-10 flex flex-col gap-4 sm:flex-row">
              <Link
                href="/contact"
                className="inline-flex items-center justify-center gap-2 rounded-sm bg-accent-foreground px-8 py-4 text-base font-semibold uppercase tracking-wide text-primary transition-colors hover:bg-foreground"
              >
                Reserver Mon Diagnostic
                <ArrowRight className="h-4 w-4" />
              </Link>
              <a
                href={`https://wa.me/${phoneNumber}?text=${message}`}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 rounded-sm border-2 border-accent-foreground/30 bg-transparent px-8 py-4 text-base font-semibold uppercase tracking-wide text-accent-foreground transition-colors hover:border-accent-foreground hover:bg-accent-foreground/10"
              >
                <MessageCircle className="h-5 w-5" />
                Ecrire sur WhatsApp
              </a>
            </div>
          </div>
        </AnimatedSection>
      </div>
    </section>
  )
}
