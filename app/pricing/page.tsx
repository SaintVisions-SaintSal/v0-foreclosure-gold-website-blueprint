import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { SaintSalAssistant } from "@/components/saint-sal-assistant"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import { Check, ArrowRight, Sparkles, Building2, Phone } from "lucide-react"

const plans = [
  {
    name: "Pay Per Lead",
    description: "Perfect for getting started or occasional use",
    price: "$25",
    period: "per lead",
    features: [
      "All 6 lead types available",
      "Any state, any county",
      "Full contact information",
      "CSV download included",
      "Email delivery option",
      "No commitment required",
    ],
    cta: "Buy Leads",
    href: "/signup?plan=payperuse",
    popular: false,
  },
  {
    name: "Unlimited Access",
    description: "Best value for serious investors — includes blog & market insights",
    price: "$29.99",
    period: "/month",
    features: [
      "Unlimited lead access",
      "All 6 lead categories",
      "All 50 states coverage",
      "Real-time dashboard",
      "CSV + daily email delivery",
      "API access included",
      "CRM integrations",
      "Weekly market insights blog",
      "Priority support",
    ],
    cta: "Start Free Trial",
    href: "/signup?plan=unlimited",
    popular: true,
  },
  {
    name: "Enterprise",
    description: "Custom solutions for large operations",
    price: "Custom",
    period: "pricing",
    features: [
      "Everything in Unlimited",
      "Dedicated account manager",
      "Custom data fields",
      "White-label options",
      "SLA guarantees",
      "Volume discounts",
      "Custom integrations",
      "Training & onboarding",
    ],
    cta: "Book a Call",
    href: "/contact?enterprise=true",
    popular: false,
    enterprise: true,
  },
]

const faqs = [
  {
    q: "What's included in each lead?",
    a: "Every lead includes owner name, property address, phone/email (when available), type of distress, status, equity estimate, property characteristics, and auction date when applicable.",
  },
  {
    q: "How fresh is the data?",
    a: "Our leads are updated in real-time. Most leads are delivered within 15 minutes of hitting our pipeline. Our Missed Payment Alerts give you a 3-4 week advantage over public records.",
  },
  {
    q: "Can I cancel anytime?",
    a: "Absolutely. Our Unlimited plan is month-to-month with no long-term commitment. Cancel anytime from your dashboard.",
  },
  {
    q: "Do you offer a free trial?",
    a: "Yes! New users get 7 days free on the Unlimited plan. No credit card required to start exploring.",
  },
  {
    q: "What's included in the blog & market insights?",
    a: "Subscribers get access to weekly market recaps, county-level analysis, investment strategy tips, and early trend alerts to stay ahead of the competition.",
  },
  {
    q: "What integrations are available?",
    a: "We integrate with Zapier, Podio, REI Blackbook, and offer a full REST API for custom integrations. Enterprise clients can request custom integrations.",
  },
]

export default function PricingPage() {
  return (
    <main className="min-h-screen bg-background">
      <Navigation />

      {/* Hero */}
      <section className="pt-24 sm:pt-32 pb-12 sm:pb-16 px-4">
        <div className="max-w-7xl mx-auto text-center">
          <h1 className="text-3xl sm:text-4xl lg:text-6xl font-bold mb-4 sm:mb-6 text-balance">
            Simple, Transparent <span className="text-gold-gradient">Pricing</span>
          </h1>
          <p className="text-lg sm:text-xl text-muted-foreground max-w-2xl mx-auto text-balance">
            Choose the plan that fits your investment strategy. No hidden fees, no surprises.
          </p>
        </div>
      </section>

      <section className="pb-16 sm:pb-24 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="grid gap-6 lg:grid-cols-3 lg:gap-8">
            {plans.map((plan) => (
              <div
                key={plan.name}
                className={`relative rounded-2xl border p-6 sm:p-8 flex flex-col ${
                  plan.popular
                    ? "bg-gradient-to-b from-primary/10 to-primary/5 border-primary shadow-2xl shadow-primary/10 lg:scale-105"
                    : "bg-card border-border"
                }`}
              >
                {plan.popular && (
                  <div className="absolute -top-3 left-1/2 -translate-x-1/2">
                    <span className="inline-flex items-center gap-1.5 px-4 py-1.5 rounded-full bg-primary text-primary-foreground text-sm font-semibold">
                      <Sparkles className="w-4 h-4" />
                      Best Value
                    </span>
                  </div>
                )}

                <div className="mb-4 sm:mb-6">
                  <div className="flex items-center gap-2 mb-2">
                    {plan.enterprise ? <Building2 className="w-5 h-5 text-primary" /> : null}
                    <h3 className="text-xl font-bold">{plan.name}</h3>
                  </div>
                  <p className="text-sm text-muted-foreground">{plan.description}</p>
                </div>

                <div className="mb-6 sm:mb-8">
                  <span className="text-4xl sm:text-5xl font-bold">{plan.price}</span>
                  <span className="text-muted-foreground ml-1">{plan.period}</span>
                </div>

                <ul className="space-y-3 sm:space-y-4 mb-6 sm:mb-8 flex-1">
                  {plan.features.map((feature) => (
                    <li key={feature} className="flex items-start gap-3">
                      <div className="w-5 h-5 rounded-full bg-primary/10 flex items-center justify-center shrink-0 mt-0.5">
                        <Check className="w-3 h-3 text-primary" />
                      </div>
                      <span className="text-sm">{feature}</span>
                    </li>
                  ))}
                </ul>

                <Link href={plan.href}>
                  <Button
                    className={`w-full h-12 sm:h-14 text-base ${
                      plan.popular
                        ? "bg-primary text-primary-foreground hover:bg-primary/90"
                        : "bg-secondary text-secondary-foreground hover:bg-secondary/80"
                    }`}
                  >
                    {plan.enterprise && <Phone className="w-4 h-4 mr-2" />}
                    {plan.cta}
                    {!plan.enterprise && <ArrowRight className="w-4 h-4 ml-2" />}
                  </Button>
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 sm:py-24 bg-secondary/30 px-4">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-2xl sm:text-3xl font-bold text-center mb-8 sm:mb-12">
            Compare <span className="text-gold-gradient">Plans</span>
          </h2>
          <div className="overflow-x-auto -mx-4 px-4">
            <table className="w-full min-w-[600px]">
              <thead>
                <tr className="border-b border-border">
                  <th className="text-left py-4 px-3 sm:px-4 font-semibold text-sm sm:text-base">Feature</th>
                  <th className="text-center py-4 px-3 sm:px-4 font-semibold text-sm sm:text-base">Pay Per Lead</th>
                  <th className="text-center py-4 px-3 sm:px-4 font-semibold text-primary text-sm sm:text-base">
                    Unlimited
                  </th>
                  <th className="text-center py-4 px-3 sm:px-4 font-semibold text-sm sm:text-base">Enterprise</th>
                </tr>
              </thead>
              <tbody>
                {[
                  { feature: "Lead Categories", pay: "All 6", unlimited: "All 6", enterprise: "All 6 + Custom" },
                  {
                    feature: "Geographic Coverage",
                    pay: "All States",
                    unlimited: "All States",
                    enterprise: "All States",
                  },
                  { feature: "Contact Information", pay: true, unlimited: true, enterprise: true },
                  { feature: "CSV Download", pay: true, unlimited: true, enterprise: true },
                  { feature: "Email Delivery", pay: true, unlimited: true, enterprise: true },
                  { feature: "Real-Time Dashboard", pay: false, unlimited: true, enterprise: true },
                  { feature: "API Access", pay: false, unlimited: true, enterprise: true },
                  { feature: "CRM Integrations", pay: false, unlimited: true, enterprise: true },
                  { feature: "Blog & Market Insights", pay: false, unlimited: true, enterprise: true },
                  { feature: "Priority Support", pay: false, unlimited: true, enterprise: true },
                  { feature: "Dedicated Manager", pay: false, unlimited: false, enterprise: true },
                  { feature: "Custom Fields", pay: false, unlimited: false, enterprise: true },
                  { feature: "White-Label", pay: false, unlimited: false, enterprise: true },
                ].map((row) => (
                  <tr key={row.feature} className="border-b border-border/50">
                    <td className="py-3 sm:py-4 px-3 sm:px-4 font-medium text-sm">{row.feature}</td>
                    <td className="py-3 sm:py-4 px-3 sm:px-4 text-center">
                      {typeof row.pay === "boolean" ? (
                        row.pay ? (
                          <Check className="w-5 h-5 text-primary mx-auto" />
                        ) : (
                          <span className="text-muted-foreground">—</span>
                        )
                      ) : (
                        <span className="text-xs sm:text-sm">{row.pay}</span>
                      )}
                    </td>
                    <td className="py-3 sm:py-4 px-3 sm:px-4 text-center bg-primary/5">
                      {typeof row.unlimited === "boolean" ? (
                        row.unlimited ? (
                          <Check className="w-5 h-5 text-primary mx-auto" />
                        ) : (
                          <span className="text-muted-foreground">—</span>
                        )
                      ) : (
                        <span className="text-xs sm:text-sm">{row.unlimited}</span>
                      )}
                    </td>
                    <td className="py-3 sm:py-4 px-3 sm:px-4 text-center">
                      {typeof row.enterprise === "boolean" ? (
                        row.enterprise ? (
                          <Check className="w-5 h-5 text-primary mx-auto" />
                        ) : (
                          <span className="text-muted-foreground">—</span>
                        )
                      ) : (
                        <span className="text-xs sm:text-sm">{row.enterprise}</span>
                      )}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* FAQs */}
      <section className="py-16 sm:py-24 px-4">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-2xl sm:text-3xl font-bold text-center mb-8 sm:mb-12">
            Frequently Asked <span className="text-gold-gradient">Questions</span>
          </h2>
          <div className="space-y-4 sm:space-y-6">
            {faqs.map((faq) => (
              <div key={faq.q} className="p-5 sm:p-6 rounded-xl bg-card border border-border">
                <h3 className="font-semibold mb-2 text-sm sm:text-base">{faq.q}</h3>
                <p className="text-muted-foreground text-sm">{faq.a}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 sm:py-24 bg-gradient-to-br from-primary/10 to-primary/5 border-t border-border">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-2xl sm:text-4xl font-bold mb-4 sm:mb-6 text-balance">
            Ready to Start <span className="text-gold-gradient">Investing</span>?
          </h2>
          <p className="text-base sm:text-lg text-muted-foreground mb-6 sm:mb-8 text-balance">
            Join thousands of investors who trust ForeclosureGold for their distressed property leads.
          </p>
          <Link href="/signup?plan=unlimited">
            <Button
              size="lg"
              className="bg-primary text-primary-foreground hover:bg-primary/90 h-14 px-8 w-full sm:w-auto"
            >
              Start Your Free Trial
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
