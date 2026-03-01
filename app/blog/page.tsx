import type { Metadata } from "next"
import { AnimatedSection } from "@/components/animated-section"
import { BlogFilters } from "@/components/blog/blog-filters"
import { client } from "@/sanity/lib/client"

export const metadata: Metadata = {
  title: "Blog",
  description:
    "Articles et ressources sur les offres, les leads et les business models. Contenu actionnable pour entrepreneurs francophones.",
}

async function getPosts() {
  return await client.fetch(
    `*[_type == "post"] | order(publishedAt desc) {
      _id,
      title,
      slug,
      excerpt,
      mainImage,
      videoUrl,
      pdfFile,
      category,
      persona,
      publishedAt,
      estimatedReadTime
    }`
  )
}

export default async function BlogPage() {
  const posts = await getPosts()

  return (
    <section className="bg-background pt-32 pb-20 lg:pt-40 lg:pb-32">
      <div className="mx-auto max-w-7xl px-4 lg:px-8">
        <AnimatedSection>
          <div className="flex flex-col items-center text-center">
            <span className="inline-block rounded-sm bg-primary/10 px-3 py-1 text-xs font-semibold uppercase tracking-widest text-primary">
              Blog
            </span>
            <h1 className="mt-6 font-[family-name:var(--font-heading)] text-5xl tracking-wide text-foreground sm:text-6xl md:text-7xl lg:text-8xl text-balance">
              CONTENU QUI FAIT{" "}
              <span className="text-primary">SCALER</span>
            </h1>
            <p className="mt-4 max-w-2xl text-base leading-relaxed text-muted-foreground md:text-lg">
              Articles, frameworks et strategies actionables. Pas de blabla motivationnel, que du concret.
            </p>
          </div>
        </AnimatedSection>

        <div className="mt-12">
          <BlogFilters posts={posts} />
        </div>
      </div>
    </section>
  )
}