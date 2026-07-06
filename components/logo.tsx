"use client"

import Image from "next/image"
import Link from "next/link"
import { cn } from "@/lib/utils"
import { useTheme } from "next-themes"
import { useEffect, useState } from "react"

export function Logo({ className }: { className?: string }) {
  const { resolvedTheme } = useTheme()
  const [mounted, setMounted] = useState(false)

  useEffect(() => setMounted(true), [])

  const isDark = resolvedTheme === "dark"
  const logoSrc = isDark ? "/logo-dark.png" : "/codingmitra-logo.webp"

  return (
    <Link
      href="/"
      aria-label="CodingMitra home"
      className={cn("inline-flex items-center", className)}
    >
      <Image
        src={mounted ? logoSrc : "/codingmitra-logo.webp"}
        alt="CodingMitra Pvt. Ltd. logo"
        width={180}
        height={56}
        priority
        className="h-16 w-auto"
      />
    </Link>
  )
}
