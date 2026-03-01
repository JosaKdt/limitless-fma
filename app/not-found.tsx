import Link from "next/link"

export default function NotFound() {
  return (
    <section className="flex min-h-screen flex-col items-center justify-center bg-background px-4 text-center">
      <h1 className="font-[family-name:var(--font-heading)] text-8xl tracking-wider text-primary md:text-9xl">
        404
      </h1>
      <p className="mt-4 font-[family-name:var(--font-display)] text-2xl font-bold text-foreground">
        Page introuvable
      </p>
      <p className="mt-2 max-w-md text-sm text-muted-foreground">
        Cette page n&apos;existe pas ou a ete deplacee. Retourne a l&apos;accueil pour continuer.
      </p>
      <div className="mt-8 flex items-center gap-4">
        <Link
          href="/"
          className="rounded-sm bg-primary px-6 py-3 text-sm font-semibold uppercase tracking-wide text-primary-foreground transition-colors hover:bg-yellow hover:text-accent-foreground"
        >
          Retour a l&apos;accueil
        </Link>
        <Link
          href="/blog"
          className="rounded-sm border border-border px-6 py-3 text-sm font-medium text-foreground transition-colors hover:border-primary hover:text-primary"
        >
          Voir le blog
        </Link>
      </div>
    </section>
  )
}
