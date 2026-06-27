import { Analytics } from "@vercel/analytics/next"
import type { Metadata, Viewport } from "next"
import { Geist, Geist_Mono, Sora } from "next/font/google"
import { ThemeProvider } from "@/components/theme-provider"
import { SiteHeader } from "@/components/site-header"
import { SiteFooter } from "@/components/site-footer"
import "./globals.css"

const geistSans = Geist({ variable: "--font-geist-sans", subsets: ["latin"] })
const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
})
const sora = Sora({
  variable: "--font-sora",
  subsets: ["latin"],
  weight: ["500", "600", "700", "800"],
})

const SITE_URL = "https://codingmitra.com"

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: "CodingMitra Pvt. Ltd. — IT Services, Software Products & Tech Training",
    template: "%s | CodingMitra Pvt. Ltd.",
  },
  description:
    "CodingMitra Pvt. Ltd. is a trusted technology partner delivering custom software, web & AI solutions, MVP and product development, plus industry-focused training and internships for businesses, startups and educational institutions.",
  keywords: [
    "software development company",
    "web development",
    "AI solutions",
    "AI automation",
    "MVP development",
    "CMS development",
    "product development",
    "software training",
    "internship programs",
    "college partnerships",
    "CodingMitra",
  ],
  authors: [{ name: "CodingMitra Pvt. Ltd." }],
  creator: "CodingMitra Pvt. Ltd.",
  openGraph: {
    type: "website",
    locale: "en_IN",
    url: SITE_URL,
    siteName: "CodingMitra Pvt. Ltd.",
    title: "CodingMitra Pvt. Ltd. — IT Services, Software Products & Tech Training",
    description:
      "Your trusted technology partner for custom software, web & AI solutions, product development, training and internships.",
  },
  twitter: {
    card: "summary_large_image",
    title: "CodingMitra Pvt. Ltd. — IT Services, Software Products & Tech Training",
    description:
      "Your trusted technology partner for custom software, web & AI solutions, product development, training and internships.",
  },
  robots: {
    index: true,
    follow: true,
  },
  generator: "v0.app",
  icons: {
    icon: [
      { url: "/icon-light-32x32.png", media: "(prefers-color-scheme: light)" },
      { url: "/icon-dark-32x32.png", media: "(prefers-color-scheme: dark)" },
      { url: "/icon.svg", type: "image/svg+xml" },
    ],
    apple: "/apple-icon.png",
  },
}

export const viewport: Viewport = {
  colorScheme: "light dark",
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#ffffff" },
    { media: "(prefers-color-scheme: dark)", color: "#0d1b2e" },
  ],
}

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: "CodingMitra Pvt. Ltd.",
  url: SITE_URL,
  description:
    "IT Services, Product Development, Software Training and Internship company.",
  sameAs: [],
  contactPoint: {
    "@type": "ContactPoint",
    contactType: "sales",
    email: "hello@codingmitra.com",
    telephone: "+91-00000-00000",
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html
      lang="en"
      suppressHydrationWarning
      className={`${geistSans.variable} ${geistMono.variable} ${sora.variable} bg-background`}
    >
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        {process.env.NODE_ENV === "production" && <Analytics />}
      </head>
      <body className="font-sans antialiased">
        <ThemeProvider
          attribute="class"
          defaultTheme="light"
          enableSystem
          disableTransitionOnChange
        >
          <SiteHeader />
          {children}
          <SiteFooter />
        </ThemeProvider>
      </body>
    </html>
  )
}
