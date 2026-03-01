"use client"

import { useState } from "react"
import { useForm } from "react-hook-form"
import { zodResolver } from "@hookform/resolvers/zod"
import { z } from "zod"
import { Send, Loader2, CheckCircle2, ChevronDown, RotateCcw, Phone } from "lucide-react"

const countries = [
  { code: "+229", name: "Benin", flag: "BJ" },
  { code: "+225", name: "Cote d'Ivoire", flag: "CI" },
  { code: "+228", name: "Togo", flag: "TG" },
  { code: "+226", name: "Burkina Faso", flag: "BF" },
  { code: "+221", name: "Senegal", flag: "SN" },
  { code: "+223", name: "Mali", flag: "ML" },
  { code: "+227", name: "Niger", flag: "NE" },
  { code: "+224", name: "Guinee", flag: "GN" },
  { code: "+237", name: "Cameroun", flag: "CM" },
  { code: "+243", name: "RD Congo", flag: "CD" },
  { code: "+242", name: "Congo", flag: "CG" },
  { code: "+241", name: "Gabon", flag: "GA" },
  { code: "+235", name: "Tchad", flag: "TD" },
  { code: "+222", name: "Mauritanie", flag: "MR" },
  { code: "+261", name: "Madagascar", flag: "MG" },
  { code: "+250", name: "Rwanda", flag: "RW" },
  { code: "+257", name: "Burundi", flag: "BI" },
  { code: "+236", name: "Centrafrique", flag: "CF" },
  { code: "+234", name: "Nigeria", flag: "NG" },
  { code: "+233", name: "Ghana", flag: "GH" },
  { code: "+212", name: "Maroc", flag: "MA" },
  { code: "+216", name: "Tunisie", flag: "TN" },
  { code: "+213", name: "Algerie", flag: "DZ" },
  { code: "+33", name: "France", flag: "FR" },
  { code: "+32", name: "Belgique", flag: "BE" },
  { code: "+41", name: "Suisse", flag: "CH" },
  { code: "+1", name: "Canada", flag: "CA" },
  { code: "+1", name: "USA", flag: "US" },
]

const contactSchema = z.object({
  name: z.string().min(2, "Le nom doit contenir au moins 2 caracteres"),
  email: z.string().email("Email invalide"),
  countryCode: z.string().min(1, "Selectionne ton pays"),
  whatsapp: z.string().min(6, "Numero WhatsApp invalide").regex(/^[0-9\s]+$/, "Le numero ne doit contenir que des chiffres"),
  persona: z.string().min(1, "Selectionne ton profil"),
  message: z.string().min(10, "Decris ton probleme en au moins 10 caracteres"),
})

type ContactFormData = z.infer<typeof contactSchema>

const personas = [
  "Freelance Plafonne",
  "Createur Invisible",
  "E-commerce Sans Systeme",
  "Coach Sans Clients",
  "Agence Qui Ne Scale Pas",
  "Commercant Local",
  "Autre",
]

export function ContactForm() {
  const [status, setStatus] = useState<"idle" | "sending" | "success" | "error">("idle")
  const [countryOpen, setCountryOpen] = useState(false)

  const {
    register,
    handleSubmit,
    reset,
    setValue,
    watch,
    formState: { errors },
  } = useForm<ContactFormData>({
    resolver: zodResolver(contactSchema),
    defaultValues: {
      countryCode: "+229",
    },
  })

  const selectedCode = watch("countryCode")
  const selectedCountry = countries.find((c) => c.code === selectedCode) || countries[0]

  const onSubmit = async (data: ContactFormData) => {
    setStatus("sending")
    try {
      const fullWhatsApp = data.countryCode.replace("+", "") + data.whatsapp.replace(/\s/g, "")
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          ...data,
          whatsapp: fullWhatsApp,
        }),
      })

      if (!res.ok) throw new Error("Erreur serveur")

      setStatus("success")
      reset()
    } catch {
      setStatus("error")
    }
  }

  if (status === "success") {
    return (
      <div className="flex flex-col items-center gap-5 rounded-sm border border-primary/30 bg-primary/5 p-8 text-center md:p-10">
        <div className="flex h-16 w-16 items-center justify-center rounded-full bg-primary/10">
          <CheckCircle2 className="h-8 w-8 text-primary" />
        </div>
        <h3 className="font-[family-name:var(--font-display)] text-2xl font-bold text-foreground">
          Demande envoyee !
        </h3>
        <p className="max-w-sm text-sm leading-relaxed text-muted-foreground">
          Merci pour ta demande de diagnostic gratuit. On te recontacte par WhatsApp ou email dans les 24 heures pour planifier ton appel de 30 minutes.
        </p>
        <div className="mt-2 flex items-center gap-3 rounded-sm border border-border bg-card px-5 py-3">
          <Phone className="h-4 w-4 text-primary" />
          <p className="text-sm text-foreground">
            Verifie tes messages WhatsApp et ta boite email
          </p>
        </div>
        <button
          onClick={() => setStatus("idle")}
          className="mt-2 inline-flex items-center gap-2 rounded-sm border border-border bg-transparent px-6 py-2.5 text-sm font-medium text-foreground transition-colors hover:border-primary hover:text-primary"
        >
          <RotateCcw className="h-3.5 w-3.5" />
          Envoyer un autre message
        </button>
      </div>
    )
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col gap-5">
      {/* Name */}
      <div className="flex flex-col gap-1.5">
        <label htmlFor="name" className="text-sm font-medium text-foreground">
          Nom complet
        </label>
        <input
          id="name"
          type="text"
          placeholder="Ton nom"
          {...register("name")}
          className="rounded-sm border border-border bg-card px-4 py-3 text-sm text-foreground placeholder:text-muted-foreground focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary"
        />
        {errors.name && (
          <p className="text-xs text-destructive">{errors.name.message}</p>
        )}
      </div>

      {/* Email */}
      <div className="flex flex-col gap-1.5">
        <label htmlFor="email" className="text-sm font-medium text-foreground">
          Email
        </label>
        <input
          id="email"
          type="email"
          placeholder="ton@email.com"
          {...register("email")}
          className="rounded-sm border border-border bg-card px-4 py-3 text-sm text-foreground placeholder:text-muted-foreground focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary"
        />
        {errors.email && (
          <p className="text-xs text-destructive">{errors.email.message}</p>
        )}
      </div>

      {/* WhatsApp with Country Selector */}
      <div className="flex flex-col gap-1.5">
        <label className="text-sm font-medium text-foreground">
          Numero WhatsApp
        </label>
        <div className="flex gap-2">
          {/* Country code selector */}
          <div className="relative">
            <button
              type="button"
              onClick={() => setCountryOpen(!countryOpen)}
              className="flex h-full min-w-[120px] items-center gap-2 rounded-sm border border-border bg-card px-3 py-3 text-sm text-foreground transition-colors hover:border-primary focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary"
            >
              <span className="text-xs font-semibold text-muted-foreground">{selectedCountry.flag}</span>
              <span className="font-medium">{selectedCode}</span>
              <ChevronDown className="ml-auto h-3.5 w-3.5 text-muted-foreground" />
            </button>
            {countryOpen && (
              <div className="absolute top-full left-0 z-50 mt-1 max-h-60 w-64 overflow-y-auto rounded-sm border border-border bg-card shadow-lg shadow-black/40">
                {countries.map((country, i) => (
                  <button
                    key={`${country.code}-${country.flag}-${i}`}
                    type="button"
                    onClick={() => {
                      setValue("countryCode", country.code)
                      setCountryOpen(false)
                    }}
                    className="flex w-full items-center gap-3 px-4 py-2.5 text-sm text-foreground transition-colors hover:bg-primary/10 hover:text-primary"
                  >
                    <span className="text-xs font-semibold text-muted-foreground">{country.flag}</span>
                    <span className="flex-1 text-left">{country.name}</span>
                    <span className="font-medium text-muted-foreground">{country.code}</span>
                  </button>
                ))}
              </div>
            )}
          </div>

          {/* Phone number input */}
          <input
            id="whatsapp"
            type="tel"
            placeholder="97 00 00 00"
            {...register("whatsapp")}
            className="flex-1 rounded-sm border border-border bg-card px-4 py-3 text-sm text-foreground placeholder:text-muted-foreground focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary"
          />
        </div>
        <input type="hidden" {...register("countryCode")} />
        {errors.whatsapp && (
          <p className="text-xs text-destructive">{errors.whatsapp.message}</p>
        )}
        {errors.countryCode && (
          <p className="text-xs text-destructive">{errors.countryCode.message}</p>
        )}
      </div>

      {/* Persona */}
      <div className="flex flex-col gap-1.5">
        <label htmlFor="persona" className="text-sm font-medium text-foreground">
          Tu es plutot...
        </label>
        <select
          id="persona"
          {...register("persona")}
          className="rounded-sm border border-border bg-card px-4 py-3 text-sm text-foreground focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary"
          defaultValue=""
        >
          <option value="" disabled>
            Choisis ton profil
          </option>
          {personas.map((p) => (
            <option key={p} value={p}>
              {p}
            </option>
          ))}
        </select>
        {errors.persona && (
          <p className="text-xs text-destructive">{errors.persona.message}</p>
        )}
      </div>

      {/* Message */}
      <div className="flex flex-col gap-1.5">
        <label htmlFor="message" className="text-sm font-medium text-foreground">
          Decris ton probleme principal
        </label>
        <textarea
          id="message"
          rows={5}
          placeholder="Qu'est-ce qui bloque dans ton business aujourd'hui ?"
          {...register("message")}
          className="resize-none rounded-sm border border-border bg-card px-4 py-3 text-sm text-foreground placeholder:text-muted-foreground focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary"
        />
        {errors.message && (
          <p className="text-xs text-destructive">{errors.message.message}</p>
        )}
      </div>

      {/* Error message */}
      {status === "error" && (
        <p className="rounded-sm border border-destructive/30 bg-destructive/5 px-4 py-3 text-sm text-destructive">
          Erreur lors de l&apos;envoi. Reessaie ou contacte-nous sur WhatsApp.
        </p>
      )}

      {/* Submit */}
      <button
        type="submit"
        disabled={status === "sending"}
        className="inline-flex items-center justify-center gap-2 rounded-sm bg-primary px-8 py-4 text-base font-semibold uppercase tracking-wide text-primary-foreground transition-colors hover:bg-yellow hover:text-accent-foreground disabled:opacity-60"
      >
        {status === "sending" ? (
          <>
            <Loader2 className="h-4 w-4 animate-spin" />
            Envoi en cours...
          </>
        ) : (
          <>
            <Send className="h-4 w-4" />
            Reserver Mon Diagnostic Gratuit
          </>
        )}
      </button>

      <p className="text-center text-xs text-muted-foreground">
        Zero engagement. On te recontacte en 24h max.
      </p>
    </form>
  )
}
