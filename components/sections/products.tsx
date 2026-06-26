import { ArrowRight, Check } from "lucide-react"
import Image from "next/image"
import { Reveal } from "@/components/reveal"
import { SectionHeading } from "@/components/section-heading"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"

type Product = {
  name: string
  tagline: string
  image: string
  features: string[]
  cta: string
  status?: string
}

const products: Product[] = [
  {
    name: "DailyMock",
    tagline: "AI-powered online assessment platform",
    image: "/product-dailymock.png",
    features: [
      "Online Mock Exams",
      "Coding Tests",
      "Performance Analytics",
      "Leaderboards",
      "Detailed Reports",
      "Certificates",
    ],
    cta: "Learn More",
    status: "Live",
  },
  {
    name: "KidsMate",
    tagline: "Interactive coding platform for children",
    image: "/product-kidsmate.png",
    features: [
      "Live Coding Classes",
      "Coding Curriculum",
      "Parent Dashboard",
      "Progress Tracking",
      "Certificates",
    ],
    cta: "Explore Product",
    status: "Live",
  },
]

export function Products() {
  return (
    <section id="products" className="py-20 sm:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow="Our Products"
          title="SaaS products built and trusted in production"
          description="We don't just build software for others — we ship and scale our own platforms used by students, professionals and institutions."
        />

        <div className="mt-14 grid gap-8 lg:grid-cols-2">
          {products.map((product, i) => (
            <Reveal key={product.name} delay={i * 0.1}>
              <article className="group flex h-full flex-col overflow-hidden rounded-2xl border border-border bg-card transition-all duration-300 hover:-translate-y-1 hover:shadow-2xl">
                <div className="relative overflow-hidden border-b border-border bg-secondary/40">
                  <Image
                    src={product.image}
                    alt={`${product.name} product interface`}
                    width={1024}
                    height={640}
                    className="h-56 w-full object-cover object-top transition-transform duration-500 group-hover:scale-105 sm:h-64"
                  />
                  {product.status ? (
                    <Badge className="absolute left-4 top-4 bg-accent text-accent-foreground">
                      {product.status}
                    </Badge>
                  ) : null}
                </div>
                <div className="flex flex-1 flex-col p-7">
                  <h3 className="font-heading text-2xl font-bold">
                    {product.name}
                  </h3>
                  <p className="mt-1 text-sm text-muted-foreground">
                    {product.tagline}
                  </p>
                  <ul className="mt-5 grid flex-1 grid-cols-1 gap-2.5 sm:grid-cols-2">
                    {product.features.map((f) => (
                      <li
                        key={f}
                        className="flex items-center gap-2 text-sm text-foreground/80"
                      >
                        <Check className="size-4 text-accent" />
                        {f}
                      </li>
                    ))}
                  </ul>
                  <Button asChild className="mt-7 w-fit rounded-full">
                    <a href="#contact">
                      {product.cta}
                      <ArrowRight className="size-4" />
                    </a>
                  </Button>
                </div>
              </article>
            </Reveal>
          ))}
        </div>

        <Reveal className="mt-8">
          <div className="rounded-2xl border border-dashed border-border bg-secondary/30 p-6 text-center text-sm text-muted-foreground">
            More products are on the way — our platform is built to grow with
            your needs.
          </div>
        </Reveal>
      </div>
    </section>
  )
}
