"use client"

import { Menu, X } from "lucide-react"
import { useState } from "react"
import { Logo } from "@/components/logo"
import { ThemeToggle } from "@/components/theme-toggle"
import { Button } from "@/components/ui/button"
import { navLinks } from "@/lib/site"
import { cn } from "@/lib/utils"

export function SiteHeader() {
  const [open, setOpen] = useState(false)

  return (
    <header
      className={cn(
        "fixed inset-x-0 top-0 z-50 transition-all duration-300 bg-background",
      )}
    >
      <div className="mx-auto flex h-20 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
        <Logo />

        <nav className="hidden items-center gap-1 lg:flex" aria-label="Primary">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="rounded-md px-3 py-2 text-sm font-medium text-muted-foreground transition-colors hover:text-foreground"
            >
              {link.label}
            </a>
          ))}
        </nav>

        <div className="hidden items-center gap-2 lg:flex">
          <ThemeToggle className="cursor-pointer" />
          {/* <Button asChild className="rounded-full">
            <a href="#contact">Book Consultation</a>
          </Button> */}
          <Button className="hidden lg:inline-flex rounded-full bg-brand text-white hover:opacity-90 hover:scale-105 cursor-pointer border-0" style={{ backgroundClip: 'border-box', WebkitBackgroundClip: 'border-box' }} onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}>
            Book Consultation
          </Button>
        </div>

        <div className="flex items-center gap-1 lg:hidden">
          <ThemeToggle />
          <Button
            variant="ghost"
            size="icon"
            aria-label={open ? "Close menu" : "Open menu"}
            aria-expanded={open}
            onClick={() => setOpen((v) => !v)}
          >
            {open ? <X className="size-5" /> : <Menu className="size-5" />}
          </Button>
        </div>
      </div>

      {open ? (
        <div className="glass border-t border-border/70 lg:hidden">
          <nav
            className="mx-auto flex max-w-7xl flex-col gap-1 px-4 py-4"
            aria-label="Mobile"
          >
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setOpen(false)}
                className="rounded-md px-3 py-3 text-sm font-medium text-muted-foreground transition-colors hover:bg-secondary hover:text-foreground"
              >
                {link.label}
              </a>
            ))}
            <Button className="mt-2 rounded-full bg-brand text-white hover:opacity-90 border-0" style={{ backgroundClip: 'border-box', WebkitBackgroundClip: 'border-box' }} onClick={() => { setOpen(false); document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' }); }}>
              Book Consultation
            </Button>
          </nav>
        </div>
      ) : null}
    </header>
  )
}
