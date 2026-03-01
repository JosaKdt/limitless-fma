import { NextResponse } from "next/server"
import { z } from "zod"

const contactSchema = z.object({
  name: z.string().min(2),
  email: z.string().email(),
  countryCode: z.string().optional(),
  whatsapp: z.string().min(6),
  persona: z.string().min(1),
  message: z.string().min(10),
})

export async function POST(request: Request) {
  try {
    const body = await request.json()
    const data = contactSchema.parse(body)

    // If Resend API key is configured, send email
    const resendApiKey = process.env.RESEND_API_KEY
    if (resendApiKey) {
      const { Resend } = await import("resend")
      const resend = new Resend(resendApiKey)

      // Send notification to admin
      await resend.emails.send({
        from: "LIMITLESS_FMA <onboarding@resend.dev>",
        to: process.env.ADMIN_EMAIL || "onboarding@resend.dev",
        subject: `Nouveau diagnostic - ${data.name} (${data.persona})`,
        html: `
          <h2>Nouvelle demande de diagnostic</h2>
          <table style="border-collapse: collapse; width: 100%;">
            <tr><td style="padding: 8px; font-weight: bold;">Nom</td><td style="padding: 8px;">${data.name}</td></tr>
            <tr><td style="padding: 8px; font-weight: bold;">Email</td><td style="padding: 8px;">${data.email}</td></tr>
            <tr><td style="padding: 8px; font-weight: bold;">WhatsApp</td><td style="padding: 8px;">${data.whatsapp}</td></tr>
            <tr><td style="padding: 8px; font-weight: bold;">Profil</td><td style="padding: 8px;">${data.persona}</td></tr>
            <tr><td style="padding: 8px; font-weight: bold;">Message</td><td style="padding: 8px;">${data.message}</td></tr>
          </table>
        `,
      })

      // Send confirmation to user
      await resend.emails.send({
        from: "LIMITLESS_FMA <onboarding@resend.dev>",
        to: data.email,
        subject: "Demande de diagnostic recue - LIMITLESS_FMA",
        html: `
          <h2>Merci ${data.name} !</h2>
          <p>Ta demande de diagnostic gratuit a bien ete recue.</p>
          <p>On te recontacte dans les 24 heures pour planifier ton appel de 30 minutes.</p>
          <p>En attendant, tu peux consulter nos ressources sur <a href="https://limitless-fma.vercel.app/blog">notre blog</a>.</p>
          <br/>
          <p>A tres vite,<br/>Folawe - LIMITLESS_FMA</p>
          <p style="color: #FF4D00; font-weight: bold;">No Limit. Full Structure.</p>
        `,
      })
    }

    return NextResponse.json({ success: true })
  } catch (error) {
    if (error instanceof z.ZodError) {
      return NextResponse.json(
        { error: "Donnees invalides", details: error.errors },
        { status: 400 }
      )
    }
    console.error("Contact form error:", error)
    return NextResponse.json(
      { error: "Erreur interne du serveur" },
      { status: 500 }
    )
  }
}
