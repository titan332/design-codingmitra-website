import Image from "next/image"
import Link from "next/link"
import { cn } from "@/lib/utils"

export function Logo({ className }: { className?: string }) {
  return (
    <Link
      href="/"
      aria-label="CodingMitra home"
      className={cn("inline-flex items-center", className)}
    >
      <Image
        src="/codingmitra-logo.webp"
        alt="CodingMitra Pvt. Ltd. logo"
        width={180}
        height={56}
        priority
        className="h-16 w-auto"
      />
    </Link>
  )
}
