import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { SaintSalAssistant } from "@/components/saint-sal-assistant"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import { ArrowRight, Check, Eye, Lock } from "lucide-react"
import type { LucideIcon } from "lucide-react"

interface LeadProductPageProps {
  title: string
  subtitle: string
  description: string
  icon: LucideIcon
  features: string[]
  dataFields: string[]
  whoUses: string[]
  sampleLeads: {
    address: string
    city: string
    state: string
    equity: string
    status: string
  }[]
}

export function LeadProductPage({
  title,
  subtitle,
  description,
  icon: Icon,
  features,
  dataFields,
  whoUses,
  sampleLeads,
}: LeadProductPageProps) {
  return (
    <main className="min-h-screen bg-background">
      <Navigation />

      {/* Hero */}
      <section className="pt-32 pb-16 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="flex items-center gap-4 mb-6">
            <div className="w-16 h-16 rounded-2xl bg-primary/10 flex items-center justify-center">
              <Icon className="w-8 h-8 text-primary" />
            </div>
            <div>
              <h1 className="text-4xl sm:text-5xl font-bold">{title}</h1>
              <p className="text-primary font-medium">{subtitle}</p>
            </div>
          </div>
          <p className="text-xl text-muted-foreground max-w-3xl">{description}</p>
        </div>
      </section>

      {/* What's Included */}
      <section className="py-16 px-4 bg-secondary/30">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-2xl font-bold mb-8">What This Lead Type Includes</h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {features.map((feature) => (
              <div key={feature} className="flex items-center gap-3 p-4 rounded-xl bg-card border border-border">
                <div className="w-6 h-6 rounded-full bg-primary/10 flex items-center justify-center shrink-0">
                  <Check className="w-4 h-4 text-primary" />
                </div>
                <span>{feature}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Data Fields */}
      <section className="py-16 px-4">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-2xl font-bold mb-8">Data Fields Example</h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {dataFields.map((field) => (
              <div key={field} className="p-4 rounded-xl bg-card border border-border">
                <div className="w-2 h-2 rounded-full bg-primary mb-2" />
                <span className="text-sm font-medium">{field}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Who Uses */}
      <section className="py-16 px-4 bg-secondary/30">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-2xl font-bold mb-8">Who Uses This Lead Type</h2>
          <div className="flex flex-wrap gap-3">
            {whoUses.map((user) => (
              <span key={user} className="px-4 py-2 rounded-full bg-card border border-border text-sm font-medium">
                {user}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* Sample Leads */}
      <section className="py-16 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="flex items-center justify-between mb-8">
            <h2 className="text-2xl font-bold">Sample Leads</h2>
            <div className="flex items-center gap-2 text-sm text-muted-foreground">
              <Eye className="w-4 h-4" />
              <span>Preview Only</span>
            </div>
          </div>
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr className="border-b border-border">
                  <th className="text-left py-4 px-4 font-semibold">Address</th>
                  <th className="text-left py-4 px-4 font-semibold">City</th>
                  <th className="text-left py-4 px-4 font-semibold">State</th>
                  <th className="text-left py-4 px-4 font-semibold">Est. Equity</th>
                  <th className="text-left py-4 px-4 font-semibold">Status</th>
                  <th className="text-left py-4 px-4 font-semibold">Contact</th>
                </tr>
              </thead>
              <tbody>
                {sampleLeads.map((lead, index) => (
                  <tr key={index} className="border-b border-border/50 hover:bg-secondary/30 transition-colors">
                    <td className="py-4 px-4 font-medium">{lead.address}</td>
                    <td className="py-4 px-4 text-muted-foreground">{lead.city}</td>
                    <td className="py-4 px-4 text-muted-foreground">{lead.state}</td>
                    <td className="py-4 px-4 text-primary font-medium">{lead.equity}</td>
                    <td className="py-4 px-4">
                      <span className="px-2 py-1 rounded-full bg-primary/10 text-primary text-xs font-medium">
                        {lead.status}
                      </span>
                    </td>
                    <td className="py-4 px-4">
                      <div className="flex items-center gap-2 text-muted-foreground">
                        <Lock className="w-4 h-4" />
                        <span className="text-sm blur-sm select-none">Subscribe to view</span>
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 bg-gradient-to-br from-primary/10 to-primary/5 border-t border-border">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-3xl sm:text-4xl font-bold mb-6">
            Ready to Access <span className="text-gold-gradient">{title}</span>?
          </h2>
          <p className="text-lg text-muted-foreground mb-8">Subscribe now and start receiving real-time leads today.</p>
          <Link href="/signup">
            <Button size="lg" className="bg-primary text-primary-foreground hover:bg-primary/90 h-14 px-8">
              Subscribe Now
              <ArrowRight className="ml-2 w-5 h-5" />
            </Button>
          </Link>
        </div>
      </section>

      <Footer />
      <SaintSalAssistant />
    </main>
  )
}
