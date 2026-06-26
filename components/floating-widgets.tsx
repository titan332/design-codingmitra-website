"use client"

import { ArrowUp, MessageCircle } from "lucide-react"
import { useEffect, useState } from "react"
import { siteConfig } from "@/lib/site"
import { cn } from "@/lib/utils"

export function FloatingWidgets() {
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    const onScroll = () => setVisible(window.scrollY > 600)
    window.addEventListener("scroll", onScroll, { passive: true })
    return () => window.removeEventListener("scroll", onScroll)
  }, [])

  return (
    <div className="fixed bottom-5 right-5 z-50 flex flex-col items-center gap-3">
      <button
        type="button"
        aria-label="Back to top"
        onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
        className={cn(
          "flex size-11 items-center justify-center rounded-full border border-border bg-card text-foreground shadow-lg transition-all duration-300 hover:bg-secondary",
          visible
            ? "translate-y-0 opacity-100"
            : "pointer-events-none translate-y-3 opacity-0",
        )}
      >
        <ArrowUp className="size-5" />
      </button>
      <a
        href={`https://wa.me/${siteConfig.whatsapp}?text=${encodeURIComponent(
          "Hi CodingMitra, I'd like to know more about your services.",
        )}`}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Chat on WhatsApp"
        className="flex size-14 items-center justify-center rounded-full bg-[#25D366] text-white shadow-xl shadow-[#25D366]/30 transition-transform hover:scale-105"
      >
        <MessageCircle className="size-7" />
      </a>
    </div>
  )
}
