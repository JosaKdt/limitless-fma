import type { Metadata } from "next"
import { AnimatedSection } from "@/components/animated-section"
import { ContactForm } from "@/components/contact/contact-form"
import { MessageCircle, Mail, Clock } from "lucide-react"

export const metadata: Metadata = {
  title: "Contact",
  description:
    "Reservez votre diagnostic gratuit ou contactez LIMITLESS_FMA. 30 minutes pour analyser votre business et identifier vos leviers de croissance.",
}

export default function ContactPage() {
  const phoneNumber = process.env.NEXT_PUBLIC_WHATSAPP_NUMBER || "22998972610"

  return (
    <>
      <section className="bg-background pt-32 pb-20 lg:pt-40 lg:pb-32">
        <div className="mx-auto max-w-7xl px-4 lg:px-8">
          <div className="grid gap-12 lg:grid-cols-2 lg:gap-20">
            {/* Left - Info */}
            <AnimatedSection>
              <span className="inline-block rounded-sm bg-primary/10 px-3 py-1 text-xs font-semibold uppercase tracking-widest text-primary">
                Contact
              </span>
              <h1 className="mt-6 font-[family-name:var(--font-heading)] text-5xl tracking-wide text-foreground sm:text-6xl md:text-7xl text-balance">
                RESERVE TON{" "}
                <span className="text-primary">DIAGNOSTIC GRATUIT</span>
              </h1>
              <p className="mt-4 text-base leading-relaxed text-muted-foreground md:text-lg">
                30 minutes. Zero engagement. On analyse ton business, on identifie
                les blocages, et on te donne un plan d&apos;action concret.
              </p>

              {/* Info cards */}
              <div className="mt-10 flex flex-col gap-4">
                <div className="flex items-start gap-4 rounded-sm border border-border bg-card p-5">
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-sm bg-primary/10">
                    <Clock className="h-5 w-5 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-foreground">30 min, pas plus</h3>
                    <p className="mt-1 text-sm text-muted-foreground">
                      Un appel structure avec un diagnostic precis. Pas de blabla.
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4 rounded-sm border border-border bg-card p-5">
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-sm bg-primary/10">
                    <Mail className="h-5 w-5 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-foreground">Reponse en 24h</h3>
                    <p className="mt-1 text-sm text-muted-foreground">
                      Tu recevras une confirmation par email avec les details du rendez-vous.
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4 rounded-sm border border-border bg-card p-5">
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-sm bg-[#25D366]/10">
                    <MessageCircle className="h-5 w-5 text-[#25D366]" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-foreground">Ou ecris directement</h3>
                    <p className="mt-1 text-sm text-muted-foreground">
                      Prefere WhatsApp ?{" "}
                      <a
                        href={`https://wa.me/${phoneNumber}`}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="font-medium text-[#25D366] underline"
                      >
                        Envoie un message ici
                      </a>
                    </p>
                  </div>
                </div>
              </div>
            </AnimatedSection>

            {/* Right - Form */}
            <AnimatedSection delay={0.2}>
              <div className="rounded-sm border border-border bg-card p-6 lg:p-8">
                <h2 className="font-[family-name:var(--font-display)] text-xl font-bold text-foreground">
                  Remplis le formulaire
                </h2>
                <p className="mt-1 text-sm text-muted-foreground">
                  On te recontacte pour planifier ton diagnostic.
                </p>
                <div className="mt-6">
                  <ContactForm />
                </div>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>
    </>
  )
}
