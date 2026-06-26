import { GraduationCap } from "lucide-react"

const partners = [
  "Institute of Technology",
  "National College",
  "City University",
  "Engineering Academy",
  "Skill Development Centre",
  "Global Institute",
  "Polytechnic College",
  "Science & Arts College",
]

function Track() {
  return (
    <div className="animate-marquee flex shrink-0 items-center gap-4 pr-4">
      {partners.map((name) => (
        <div
          key={name}
          className="flex items-center gap-2 whitespace-nowrap rounded-xl border border-border bg-card px-5 py-3 text-sm font-semibold text-muted-foreground grayscale transition-all duration-300 hover:text-foreground hover:grayscale-0"
        >
          <GraduationCap className="size-5 text-accent" />
          {name}
        </div>
      ))}
    </div>
  )
}

export function TrustedBy() {
  return (
    <section className="border-y border-border bg-secondary/30 py-14">
      <div className="mx-auto max-w-7xl px-4 text-center sm:px-6 lg:px-8">
        <h2 className="font-heading text-xl font-bold tracking-tight sm:text-2xl">
          Trusted by Educational Institutions
        </h2>
        <p className="mx-auto mt-3 max-w-2xl text-sm leading-relaxed text-muted-foreground">
          We collaborate with colleges, universities and educational
          organizations to provide industry-focused training, internships,
          workshops and placement support.
        </p>
      </div>

      <div className="marquee-pause relative mt-10 flex overflow-hidden [mask-image:linear-gradient(to_right,transparent,black_8%,black_92%,transparent)]">
        <Track />
        <Track />
      </div>
    </section>
  )
}
