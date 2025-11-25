import { Zap, Globe, Target } from "lucide-react"

const features = [
  {
    icon: Zap,
    title: "Real-Time Data",
    description: "Leads delivered instantly as they hit the county or lender pipeline. No delays, no stale data.",
  },
  {
    icon: Globe,
    title: "Nationwide Coverage",
    description: "Every state. Every county. Every day. Complete coverage of the US distressed property market.",
  },
  {
    icon: Target,
    title: "High-Intent Leads",
    description: "Verified owners who need solutions fast. Pre-qualified motivation indicators on every lead.",
  },
]

export function WhySection() {
  return (
    <section className="py-24 bg-secondary/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold mb-4">
            Why <span className="text-gold-gradient">ForeclosureGold</span>?
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            The competitive edge you need in distressed property investing
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {features.map((feature) => (
            <div
              key={feature.title}
              className="group p-8 rounded-2xl bg-card border border-border hover:border-primary/50 transition-all duration-300"
            >
              <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center mb-6 group-hover:bg-primary/20 transition-colors">
                <feature.icon className="w-7 h-7 text-primary" />
              </div>
              <h3 className="text-xl font-semibold mb-3">{feature.title}</h3>
              <p className="text-muted-foreground leading-relaxed">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
