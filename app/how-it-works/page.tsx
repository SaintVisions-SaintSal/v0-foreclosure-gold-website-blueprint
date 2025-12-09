import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { SaintSalAssistant } from "@/components/saint-sal-assistant"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import { ArrowRight, MousePointerClick, MapPin, Zap, Download, Mail, FileSpreadsheet, Code, Plug } from "lucide-react"

const steps = [
  {
    number: "01",
    title: "Choose Your Lead Category",
    description: "Select from 6 specialized lead types tailored to your investment strategy",
    icon: MousePointerClick,
    details: [
      { name: "Wholesale Leads", desc: "Off-market properties for assignment" },
      { name: "Purchase Leads", desc: "Motivated sellers ready to sell" },
      { name: "Probate Leads", desc: "Estate liquidation opportunities" },
      { name: "Stop Sale / Pre-Foreclosure", desc: "Urgent auction situations" },
      { name: "Bankruptcy Gold", desc: "Chapter 7, 11, 13 properties" },
      { name: "Missed Payment Alerts", desc: "Early intelligence on distress" },
    ],
  },
  {
    number: "02",
    title: "Select State / County",
    description: "Target your specific markets with precision geographic filtering",
    icon: MapPin,
    details: [
      { name: "50 States", desc: "Complete nationwide coverage" },
      { name: "3,143 Counties", desc: "Every county in the USA" },
      { name: "Custom Territories", desc: "Save your target markets" },
      { name: "Multi-Select", desc: "Target multiple regions at once" },
    ],
  },
  {
    number: "03",
    title: "Choose Delivery Method",
    description: "Get your leads delivered exactly how you need them",
    icon: Download,
    details: [
      { name: "Daily Email", desc: "Fresh leads in your inbox", icon: Mail },
      { name: "CSV Export", desc: "Download for your systems", icon: FileSpreadsheet },
      { name: "API Access", desc: "Direct data integration", icon: Code },
      { name: "CRM Integration", desc: "Zapier, Podio, REI Blackbook", icon: Plug },
    ],
  },
  {
    number: "04",
    title: "Start Receiving Leads Immediately",
    description: "Access your real-time feed and start connecting with motivated sellers",
    icon: Zap,
    features: [
      "Real-time dashboard access",
      "Sortable by county, distress level",
      "New lead indicators",
      "Contact information included",
    ],
  },
]

export default function HowItWorksPage() {
  return (
    <main className="min-h-screen bg-background">
      <Navigation />

      {/* Hero */}
      <section className="pt-32 pb-20 px-4">
        <div className="max-w-7xl mx-auto text-center">
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6">
            How <span className="text-gold-gradient">CookinForeclosures</span> Works
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto mb-8">
            Get started in minutes. Our streamlined process gets you from sign-up to receiving real-time distressed
            property leads in four simple steps.
          </p>
        </div>
      </section>

      {/* Steps */}
      <section className="pb-24 px-4">
        <div className="max-w-6xl mx-auto space-y-24">
          {steps.map((step, index) => (
            <div
              key={step.number}
              className={`flex flex-col lg:flex-row items-center gap-12 ${
                index % 2 === 1 ? "lg:flex-row-reverse" : ""
              }`}
            >
              {/* Content */}
              <div className="flex-1 space-y-6">
                <div className="inline-flex items-center gap-3">
                  <span className="text-6xl font-bold text-primary/20">{step.number}</span>
                  <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center">
                    <step.icon className="w-6 h-6 text-primary" />
                  </div>
                </div>
                <h2 className="text-3xl font-bold">{step.title}</h2>
                <p className="text-lg text-muted-foreground">{step.description}</p>

                {step.details && (
                  <div className="grid sm:grid-cols-2 gap-3 pt-4">
                    {step.details.map((detail) => (
                      <div
                        key={detail.name}
                        className="flex items-start gap-3 p-4 rounded-xl bg-card border border-border"
                      >
                        <div className="w-2 h-2 rounded-full bg-primary mt-2 shrink-0" />
                        <div>
                          <div className="font-medium">{detail.name}</div>
                          <div className="text-sm text-muted-foreground">{detail.desc}</div>
                        </div>
                      </div>
                    ))}
                  </div>
                )}

                {step.features && (
                  <ul className="space-y-3 pt-4">
                    {step.features.map((feature) => (
                      <li key={feature} className="flex items-center gap-3">
                        <div className="w-5 h-5 rounded-full bg-primary/10 flex items-center justify-center">
                          <div className="w-2 h-2 rounded-full bg-primary" />
                        </div>
                        <span className="text-muted-foreground">{feature}</span>
                      </li>
                    ))}
                  </ul>
                )}
              </div>

              {/* Visual */}
              <div className="flex-1 w-full max-w-lg">
                <div className="aspect-square rounded-2xl bg-gradient-to-br from-primary/10 to-primary/5 border border-border p-8 flex items-center justify-center">
                  <step.icon className="w-32 h-32 text-primary/30" />
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 bg-secondary/30">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-3xl sm:text-4xl font-bold mb-6">
            Ready to Get <span className="text-gold-gradient">Started</span>?
          </h2>
          <p className="text-lg text-muted-foreground mb-8">
            Join thousands of investors who are already accessing real-time distressed property leads.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link href="/signup">
              <Button size="lg" className="bg-primary text-primary-foreground hover:bg-primary/90 h-14 px-8">
                Start Your Free Trial
                <ArrowRight className="ml-2 w-5 h-5" />
              </Button>
            </Link>
            <Link href="/pricing">
              <Button size="lg" variant="outline" className="h-14 px-8 bg-transparent">
                View Pricing
              </Button>
            </Link>
          </div>
        </div>
      </section>

      <Footer />
      <SaintSalAssistant />
    </main>
  )
}
