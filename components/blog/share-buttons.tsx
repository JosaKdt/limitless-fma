"use client"

import { Share2, MessageCircle, Check } from "lucide-react"
import { useState } from "react"

interface ShareButtonsProps {
  title: string
}

export function ShareButtons({ title }: ShareButtonsProps) {
  const [copied, setCopied] = useState(false)

  const handleCopyLink = () => {
    if (typeof window !== "undefined") {
      navigator.clipboard.writeText(window.location.href)
      setCopied(true)
      setTimeout(() => setCopied(false), 2000)
    }
  }

  const shareUrl = typeof window !== "undefined" ? window.location.href : ""

  return (
    <div className="flex items-center gap-4">
      <span className="text-sm font-medium text-foreground">Partager :</span>
      <button
        onClick={handleCopyLink}
        className="flex items-center gap-1.5 rounded-sm border border-border bg-transparent px-3 py-1.5 text-xs text-muted-foreground transition-colors hover:border-primary hover:text-primary"
      >
        {copied ? (
          <>
            <Check className="h-3 w-3" />
            Copie !
          </>
        ) : (
          <>
            <Share2 className="h-3 w-3" />
            Copier le lien
          </>
        )}
      </button>
      <a
        href={`https://wa.me/?text=${encodeURIComponent(title + " - " + shareUrl)}`}
        target="_blank"
        rel="noopener noreferrer"
        className="flex items-center gap-1.5 rounded-sm border border-border bg-transparent px-3 py-1.5 text-xs text-muted-foreground transition-colors hover:border-[#25D366] hover:text-[#25D366]"
      >
        <MessageCircle className="h-3 w-3" />
        WhatsApp
      </a>
    </div>
  )
}
