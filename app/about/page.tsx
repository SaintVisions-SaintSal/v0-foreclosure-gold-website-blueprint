import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { SaintSalAssistant } from "@/components/saint-sal-assistant"
import { Building2, Users, Zap, Shield } from "lucide-react"

export default function AboutPage() {
  return (
    <main className="min-h-screen bg-background">
      <Navigation />

      {/* Hero */}
      <section className="pt-32 pb-16 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6">
              About <span className="text-gold-gradient">CookinForeclosures</span>
            </h1>
            <p className="text-xl text-muted-foreground">
              Welcome to the Capital of CAPITAL - Where Responsible Intelligence Meets Real Estate Investment
            </p>
          </div>
        </div>
      </section>

      {/* Company Story */}
      <section className="pb-16 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl sm:text-4xl font-bold mb-6">
                Powered by <span className="text-gold-gradient">Responsible Intelligence</span>
              </h2>
              <div className="space-y-4 text-muted-foreground">
                <p>
                  CookinForeclosures is a Saint Vision Technologies LLC company, founded and led by CEO Ryan Capatosto.
                  We're revolutionizing the distressed property lead industry through the power of responsible AI.
                </p>
                <p>
                  Our platform is operated by SaintSal™, our proprietary AI agent that delivers real-time foreclosure,
                  probate, and distressed property leads across all 50 states. With Managing Director Darren Brown
                  overseeing lead operations, we ensure every lead meets our high standards for quality and accuracy.
                </p>
                <p>
                  We believe in using artificial intelligence responsibly - providing investors with the competitive
                  edge they need while maintaining ethical standards and data integrity.
                </p>
              </div>
            </div>
            <div className="relative">
              <div className="aspect-square rounded-2xl bg-gradient-to-br from-primary/20 to-primary/5 border border-primary/20 flex items-center justify-center">
                <div className="text-center p-8">
                  <Building2 className="w-24 h-24 text-primary mx-auto mb-6" />
                  <h3 className="text-2xl font-bold mb-2">Saint Vision Technologies LLC</h3>
                  <p className="text-muted-foreground">The Capital of CAPITAL</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Leadership Team */}
      <section className="py-16 px-4 bg-secondary/30">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold mb-4">Leadership Team</h2>
            <p className="text-xl text-muted-foreground">Powered by AI, Led by Vision</p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {/* Ryan Capatosto */}
            <div className="p-8 rounded-2xl bg-card border border-border text-center">
              <div className="w-24 h-24 rounded-full bg-gradient-to-br from-primary to-primary/50 mx-auto mb-4 flex items-center justify-center">
                <span className="text-4xl font-bold text-primary-foreground">RC</span>
              </div>
              <h3 className="text-xl font-bold mb-1">Ryan Capatosto</h3>
              <p className="text-primary font-medium mb-2">CEO & Founder</p>
              <p className="text-sm text-muted-foreground">
                Visionary leader driving the future of AI-powered real estate intelligence
              </p>
            </div>

            {/* SaintSal AI */}
            <div className="p-8 rounded-2xl bg-card border border-primary/50 text-center ring-2 ring-primary/20">
              <div className="w-24 h-24 rounded-full bg-gradient-to-br from-primary via-yellow-500 to-primary mx-auto mb-4 flex items-center justify-center">
                <Zap className="w-12 h-12 text-primary-foreground" />
              </div>
              <h3 className="text-xl font-bold mb-1">SaintSal™ AI</h3>
              <p className="text-primary font-medium mb-2">Proprietary AI Agent</p>
              <p className="text-sm text-muted-foreground">
                Advanced AI system managing platform operations, lead delivery, and customer support 24/7
              </p>
            </div>

            {/* Darren Brown */}
            <div className="p-8 rounded-2xl bg-card border border-border text-center">
              <div className="w-24 h-24 rounded-full bg-gradient-to-br from-primary to-primary/50 mx-auto mb-4 flex items-center justify-center">
                <span className="text-4xl font-bold text-primary-foreground">DB</span>
              </div>
              <h3 className="text-xl font-bold mb-1">Darren Brown</h3>
              <p className="text-primary font-medium mb-2">Managing Director</p>
              <p className="text-sm text-muted-foreground">
                Oversees lead operations and quality assurance, ensuring every lead meets our standards
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-16 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold mb-4">Our Values</h2>
            <p className="text-xl text-muted-foreground">What Drives Us</p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            <div className="p-8 rounded-2xl bg-card border border-border">
              <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-4">
                <Shield className="w-6 h-6 text-primary" />
              </div>
              <h3 className="text-xl font-bold mb-3">Responsible Intelligence</h3>
              <p className="text-muted-foreground">
                We believe AI should be used ethically and responsibly. Our platform prioritizes data integrity,
                privacy, and transparency in every interaction.
              </p>
            </div>

            <div className="p-8 rounded-2xl bg-card border border-border">
              <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-4">
                <Zap className="w-6 h-6 text-primary" />
              </div>
              <h3 className="text-xl font-bold mb-3">Real-Time Advantage</h3>
              <p className="text-muted-foreground">
                Speed matters in real estate. SaintSal delivers leads instantly as they hit county pipelines, giving you
                the competitive edge you need to succeed.
              </p>
            </div>

            <div className="p-8 rounded-2xl bg-card border border-border">
              <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-4">
                <Users className="w-6 h-6 text-primary" />
              </div>
              <h3 className="text-xl font-bold mb-3">Investor-First Approach</h3>
              <p className="text-muted-foreground">
                Every feature we build is designed with real estate investors in mind. We understand your challenges and
                build solutions that work.
              </p>
            </div>

            <div className="p-8 rounded-2xl bg-card border border-border">
              <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-4">
                <Building2 className="w-6 h-6 text-primary" />
              </div>
              <h3 className="text-xl font-bold mb-3">The Capital of CAPITAL</h3>
              <p className="text-muted-foreground">
                We're building the premier destination for distressed property intelligence. Where smart investors come
                to find their next opportunity.
              </p>
            </div>
          </div>
        </div>
      </section>

      <Footer />
      <SaintSalAssistant />
    </main>
  )
}
