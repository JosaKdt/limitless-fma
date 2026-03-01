import { AnimatedSection } from "@/components/animated-section"
import { SectionHeading } from "@/components/section-heading"
import { client } from "@/sanity/lib/client"
import { urlFor } from "@/sanity/lib/image"
import { User } from "lucide-react"

async function getAuthor() {
  return await client.fetch(
    `*[_type == "author"][0] {
      name, bio, image
    }`
  )
}

export async function AboutPreview() {
  const author = await getAuthor()

  return (
    <section className="bg-background py-20 lg:py-32">
      <div className="mx-auto max-w-7xl px-4 lg:px-8">
        <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-20">
          {/* Image */}
          <AnimatedSection>
            <div className="relative mx-auto aspect-square w-full max-w-md overflow-hidden rounded-sm border-2 border-primary/20 bg-card">
              {author?.image ? (
                <img
                  src={urlFor(author.image).width(600).height(600).url()}
                  alt={author.name || "Folawe Milarepa AGLI"}
                  className="h-full w-full object-cover"
                />
              ) : (
                <div className="flex h-full items-center justify-center">
                  <User className="h-32 w-32 text-primary/20" />
                </div>
              )}
              <div className="absolute top-4 right-4 h-12 w-12 border-t-2 border-r-2 border-primary" />
              <div className="absolute bottom-4 left-4 h-12 w-12 border-b-2 border-l-2 border-primary" />
            </div>
          </AnimatedSection>

          {/* Content */}
          <AnimatedSection delay={0.2}>
            <SectionHeading
              label="Qui je suis"
              title={author?.name || "Folawe Milarepa AGLI"}
              align="left"
            />
            <div className="mt-6 flex flex-col gap-4">
              <p className="text-base leading-relaxed text-muted-foreground">
                Entrepreneur, coach business et stratege commercial. Mon approche est simple :
                pas de discours motivationnel creux, mais des systemes actionables. Je structure
                ton business pour qu&apos;il genere des resultats mesurables.
              </p>
              <p className="text-base leading-relaxed text-muted-foreground">
                J'ai développé un cadre adapté aux entrepreneurs francophones : 3 piliers, 6 personas, des scripts prêts à l'emploi. Pas de chance, pas d'improvisation — juste un système qui fonctionne.
              </p>
            </div>

            <div className="mt-8 flex flex-wrap gap-3">
              {[
                "100M Offers",
                "100M Leads",
                "Systemes Business",
              ].map((badge) => (
                <span
                  key={badge}
                  className="rounded-sm border border-border bg-card px-3 py-1.5 text-xs font-medium uppercase tracking-wider text-foreground/70"
                >
                  {badge}
                </span>
              ))}
            </div>
          </AnimatedSection>
        </div>
      </div>
    </section>
  )
}