import type { Metadata } from "next"
import Link from "next/link"
import { notFound } from "next/navigation"
import { AnimatedSection } from "@/components/animated-section"
import { ShareButtons } from "@/components/blog/share-buttons"
import { ArrowLeft, Clock, User, FileText } from "lucide-react"
import { client } from "@/sanity/lib/client"

interface ArticlePageProps {
  params: Promise<{ slug: string }>
}

async function getPost(slug: string) {
  return await client.fetch(
    `*[_type == "post" && slug.current == $slug][0] {
      _id, title, slug, excerpt, body, mainImage,
      videoUrl, pdfFile, category, persona,
      publishedAt, estimatedReadTime
    }`,
    { slug }
  )
}

export async function generateMetadata({ params }: ArticlePageProps): Promise<Metadata> {
  const { slug } = await params
  const post = await getPost(slug)
  if (!post) return { title: "Article non trouve" }
  return {
    title: post.title,
    description: post.excerpt,
  }
}

export default async function ArticlePage({ params }: ArticlePageProps) {
  const { slug } = await params
  const post = await getPost(slug)
  if (!post) notFound()

  const pdfUrl = post.pdfFile?.asset?._ref
    ? `https://cdn.sanity.io/files/p5aj5ft9/production/${post.pdfFile.asset._ref
        .replace("file-", "")
        .replace(/-([a-z0-9]+)$/, ".$1")}`
    : null

  const videoEmbedUrl = post.videoUrl
  ? (() => {
      const url = post.videoUrl
      // Format normal : youtube.com/watch?v=ID
      const watchMatch = url.match(/youtube\.com\/watch\?v=([a-zA-Z0-9_-]+)/)
      if (watchMatch) return `https://www.youtube.com/embed/${watchMatch[1]}?rel=0&modestbranding=1`
      // Format court : youtu.be/ID
      const shortMatch = url.match(/youtu\.be\/([a-zA-Z0-9_-]+)/)
      if (shortMatch) return `https://www.youtube.com/embed/${shortMatch[1]}?rel=0&modestbranding=1`
      // Format Shorts : youtube.com/shorts/ID
      const shortsMatch = url.match(/youtube\.com\/shorts\/([a-zA-Z0-9_-]+)/)
      if (shortsMatch) return `https://www.youtube.com/embed/${shortsMatch[1]}?rel=0&modestbranding=1`
if (url.includes("youtube.com/embed/")) return url
      return null
    })()
  : null

  return (
    <article className="bg-background pt-32 pb-20 lg:pt-40 lg:pb-32">
      <div className="mx-auto max-w-3xl px-4 lg:px-8">
        <AnimatedSection>
          <Link
            href="/blog"
            className="inline-flex items-center gap-2 text-sm text-muted-foreground transition-colors hover:text-primary"
          >
            <ArrowLeft className="h-4 w-4" />
            Retour au blog
          </Link>

          <div className="mt-8 flex flex-wrap items-center gap-3">
            {post.category && (
              <span className="rounded-sm bg-primary/10 px-2 py-0.5 text-xs font-semibold uppercase tracking-widest text-primary">
                {post.category}
              </span>
            )}
            {post.persona && (
              <span className="text-xs text-muted-foreground">{post.persona}</span>
            )}
            {post.publishedAt && (
              <span className="text-xs text-muted-foreground">
                {new Date(post.publishedAt).toLocaleDateString("fr-FR", {
                  year: "numeric",
                  month: "long",
                  day: "numeric",
                })}
              </span>
            )}
            {post.estimatedReadTime && (
              <span className="flex items-center gap-1 text-xs text-muted-foreground">
                <Clock className="h-3 w-3" />
                {post.estimatedReadTime} min de lecture
              </span>
            )}
          </div>

          <h1 className="mt-6 font-[family-name:var(--font-display)] text-3xl font-bold leading-tight text-foreground md:text-4xl lg:text-5xl text-balance">
            {post.title}
          </h1>

          <div className="mt-6 flex items-center gap-3 border-b border-border pb-6">
            <div className="flex h-10 w-10 items-center justify-center rounded-full bg-primary/10">
              <User className="h-5 w-5 text-primary" />
            </div>
            <div>
              <p className="text-sm font-medium text-foreground">Folawe Milarepa AGLI</p>
              <p className="text-xs text-muted-foreground">LIMITLESS_FMA</p>
            </div>
          </div>
        </AnimatedSection>

        <AnimatedSection delay={0.15}>
          {videoEmbedUrl && (
            <div className="mt-8 aspect-video w-full overflow-hidden rounded-sm">
              <iframe
                src={videoEmbedUrl}
                className="h-full w-full"
                allowFullScreen
                title={post.title}
              />
            </div>
          )}

          {pdfUrl && (
            <div className="mt-6">
              <a
                href={pdfUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-sm bg-primary px-5 py-2.5 text-sm font-semibold text-primary-foreground hover:bg-primary/90"
              >
                <FileText className="h-4 w-4" />
                Telecharger le PDF
              </a>
            </div>
          )}

          {post.excerpt && (
            <p className="mt-8 text-base leading-relaxed text-muted-foreground">
              {post.excerpt}
            </p>
          )}
        </AnimatedSection>

        <AnimatedSection delay={0.2}>
          <div className="mt-12 flex flex-col gap-6 border-t border-border pt-8">
            <ShareButtons title={post.title} />
            <div className="rounded-sm border border-primary/30 bg-primary/5 p-6 text-center">
              <h3 className="font-[family-name:var(--font-display)] text-xl font-bold text-foreground">
                Pret a passer a l&apos;action ?
              </h3>
              <p className="mt-2 text-sm text-muted-foreground">
                Reserve ton diagnostic gratuit et on applique ces concepts a ton business.
              </p>
              <Link
                href="/contact"
                className="mt-4 inline-flex items-center gap-2 rounded-sm bg-primary px-6 py-3 text-sm font-semibold uppercase tracking-wide text-primary-foreground transition-colors hover:bg-yellow hover:text-accent-foreground"
              >
                Reserver Mon Diagnostic
              </Link>
            </div>
          </div>
        </AnimatedSection>
      </div>
    </article>
  )
}