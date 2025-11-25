import Link from "next/link"
import { ArrowRight, Home, DollarSign, FileText, AlertTriangle, Scale, Bell } from "lucide-react"
import { Button } from "@/components/ui/button"

const categories = [
  {
    icon: Home,
    title: "Wholesale Leads",
    description: "Off-market, investor-friendly properties ready for assignment deals.",
    href: "/leads/wholesale",
    badge: "Popular",
  },
  {
    icon: DollarSign,
    title: "Purchase Leads",
    description: "Motivated sellers looking for quick, fair offers.",
    href: "/leads/purchase",
  },
  {
    icon: FileText,
    title: "Probate Leads",
    description: "Estate-owned properties requiring fast liquidation.",
    href: "/leads/probate",
  },
  {
    icon: AlertTriangle,
    title: "Stop Sale / Pre-Foreclosure",
    description: "Homeowners facing auction needing immediate help.",
    href: "/leads/stop-sale",
    badge: "High Intent",
  },
  {
    icon: Scale,
    title: "Bankruptcy Gold",
    description: "Properties in active Chapter 7, 11, or 13 with high motivation.",
    href: "/leads/bankruptcy",
  },
  {
    icon: Bell,
    title: "Missed Payment Real-Time Alerts",
    description: "Our flagship product: Properties with recently missed payments—exclusive early intelligence.",
    href: "/leads/missed-payment",
    badge: "Flagship",
    featured: true,
  },
]

export function LeadCategories() {
  return (
    <section className="py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold mb-4">
            Lead <span className="text-gold-gradient">Categories</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Choose from our comprehensive range of distressed property lead types
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {categories.map((category) => (
            <div
              key={category.title}
              className={`group relative p-6 rounded-2xl border transition-all duration-300 ${
                category.featured
                  ? "bg-gradient-to-br from-primary/10 to-primary/5 border-primary/30 hover:border-primary"
                  : "bg-card border-border hover:border-primary/50"
              }`}
            >
              {category.badge && (
                <span
                  className={`absolute top-4 right-4 px-2 py-1 text-xs font-semibold rounded-full ${
                    category.featured ? "bg-primary text-primary-foreground" : "bg-primary/10 text-primary"
                  }`}
                >
                  {category.badge}
                </span>
              )}
              <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors">
                <category.icon className="w-6 h-6 text-primary" />
              </div>
              <h3 className="text-lg font-semibold mb-2">{category.title}</h3>
              <p className="text-sm text-muted-foreground mb-4 leading-relaxed">{category.description}</p>
              <Link href={category.href}>
                <Button variant="ghost" className="p-0 h-auto text-primary hover:text-primary/80 group/btn">
                  Learn More
                  <ArrowRight className="ml-1 w-4 h-4 group-hover/btn:translate-x-1 transition-transform" />
                </Button>
              </Link>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
