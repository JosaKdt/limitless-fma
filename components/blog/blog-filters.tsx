"use client"

import { useState } from "react"
import Link from "next/link"
import { cn } from "@/lib/utils"
import { Clock, ArrowRight } from "lucide-react"

interface SanityPost {
  _id: string
  title: string
  slug: { current: string } | string
  excerpt?: string
  category?: string
  persona?: string
  estimatedReadTime?: number
  videoUrl?: string
  pdfFile?: any
}

const categories = [
  { value: "Offers", label: "Offers" },
  { value: "Leads", label: "Leads" },
  { value: "Models", label: "Models" },
]

const personas = [
  { value: "Freelancer", label: "Freelancer" },
  { value: "Createur", label: "Createur" },
  { value: "E-commerce", label: "E-commerce" },
  { value: "Coach", label: "Coach" },
  { value: "Agence", label: "Agence" },
  { value: "Commercant", label: "Commercant" },
]

interface BlogFiltersProps {
  posts: SanityPost[]
}

function getSlug(slug: { current: string } | string): string {
  if (typeof slug === "string") return slug
  return slug?.current || ""
}

export function BlogFilters({ posts }: BlogFiltersProps) {
  const [activeCategory, setActiveCategory] = useState("all")
  const [activePersona, setActivePersona] = useState("all")

  const filteredPosts = posts.filter((post) => {
    const matchCategory = activeCategory === "all" || post.category === activeCategory
    const matchPersona = activePersona === "all" || post.persona === activePersona
    return matchCategory && matchPersona
  })

  return (
    <div>
      {/* Category filters */}
      <div className="flex flex-wrap gap-2">
        <button
          onClick={() => setActiveCategory("all")}
          className={cn(
            "rounded-sm px-4 py-2 text-xs font-semibold uppercase tracking-widest transition-colors",
            activeCategory === "all"
              ? "bg-primary text-primary-foreground"
              : "border border-border bg-transparent text-muted-foreground hover:border-primary hover:text-primary"
          )}
        >
          Tous
        </button>
        {categories.map((cat) => (
          <button
            key={cat.value}
            onClick={() => setActiveCategory(cat.value)}
            className={cn(
              "rounded-sm px-4 py-2 text-xs font-semibold uppercase tracking-widest transition-colors",
              activeCategory === cat.value
                ? "bg-primary text-primary-foreground"
                : "border border-border bg-transparent text-muted-foreground hover:border-primary hover:text-primary"
            )}
          >
            {cat.label}
          </button>
        ))}
      </div>

      {/* Persona filters */}
      <div className="mt-3 flex flex-wrap gap-2">
        <button
          onClick={() => setActivePersona("all")}
          className={cn(
            "rounded-sm px-3 py-1.5 text-xs transition-colors",
            activePersona === "all"
              ? "bg-card text-foreground border border-primary"
              : "border border-border bg-transparent text-muted-foreground hover:text-foreground"
          )}
        >
          Tous les profils
        </button>
        {personas.map(({ value, label }) => (
          <button
            key={value}
            onClick={() => setActivePersona(value)}
            className={cn(
              "rounded-sm px-3 py-1.5 text-xs transition-colors",
              activePersona === value
                ? "bg-card text-foreground border border-primary"
                : "border border-border bg-transparent text-muted-foreground hover:text-foreground"
            )}
          >
            {label}
          </button>
        ))}
      </div>

      {/* Posts grid */}
      <div className="mt-10 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {filteredPosts.map((post) => (
          <BlogCard key={post._id} post={post} />
        ))}
      </div>

      {filteredPosts.length === 0 && (
        <div className="mt-16 flex flex-col items-center gap-4 text-center">
          <p className="text-lg text-muted-foreground">Aucun article pour ces filtres.</p>
          <button
            onClick={() => {
              setActiveCategory("all")
              setActivePersona("all")
            }}
            className="text-sm text-primary underline"
          >
            Reinitialiser les filtres
          </button>
        </div>
      )}
    </div>
  )
}

function BlogCard({ post }: { post: SanityPost }) {
  const categoryLabel = categories.find((c) => c.value === post.category)?.label || post.category
  const personaLabel = personas.find((p) => p.value === post.persona)?.label || post.persona
  const slug = getSlug(post.slug)

  return (
    <Link
      href={`/blog/${slug}`}
      className="group flex flex-col rounded-sm border border-border bg-card transition-all hover:border-primary"
    >
      <div className="h-1 w-full bg-primary" />

      <div className="flex flex-1 flex-col p-6">
        <div className="flex items-center gap-2">
          <span className="rounded-sm bg-primary/10 px-2 py-0.5 text-xs font-semibold uppercase tracking-widest text-primary">
            {categoryLabel}
          </span>
          <span className="text-xs text-muted-foreground">{personaLabel}</span>
        </div>

        <h3 className="mt-3 font-[family-name:var(--font-display)] text-lg font-bold leading-tight text-foreground group-hover:text-primary transition-colors text-balance">
          {post.title}
        </h3>

        <p className="mt-2 flex-1 text-sm leading-relaxed text-muted-foreground line-clamp-3">
          {post.excerpt}
        </p>

        <div className="mt-4 flex items-center justify-between">
          <div className="flex items-center gap-1.5 text-xs text-muted-foreground">
            <Clock className="h-3 w-3" />
            {post.estimatedReadTime || "?"} min
          </div>
          <span className="flex items-center gap-1 text-xs font-medium text-primary opacity-0 transition-opacity group-hover:opacity-100">
            Lire <ArrowRight className="h-3 w-3" />
          </span>
        </div>
      </div>
    </Link>
  )
}