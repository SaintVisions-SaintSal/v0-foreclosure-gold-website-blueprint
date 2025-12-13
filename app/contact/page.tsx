import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { SaintSalAssistant } from "@/components/saint-sal-assistant"
import { Mail, Phone, MapPin, Clock } from "lucide-react"

export default function ContactPage() {
  return (
    <main className="min-h-screen bg-background">
      <Navigation />

      {/* Hero */}
      <section className="pt-32 pb-16 px-4">
        <div className="max-w-7xl mx-auto text-center">
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6">
            Get in <span className="text-gold-gradient">Touch</span>
          </h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Have questions? Our team, led by SaintSal AI and Managing Director Darren Brown, is here to help you find
            the perfect lead solution.
          </p>
        </div>
      </section>

      {/* Contact Form & Info */}
      <section className="pb-24 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="grid lg:grid-cols-5 gap-12">
            <div className="lg:col-span-3">
              <div className="p-4 sm:p-8 rounded-2xl bg-card border border-border">
                <h2 className="text-2xl font-bold mb-6">Send Us a Message</h2>
                <div className="w-full overflow-hidden rounded-xl">
                  <iframe
                    src="https://api.leadconnectorhq.com/widget/form/gPGc1pTZGRvxybqPpDRL"
                    style={{ width: "100%", height: "700px", border: "none" }}
                    id="contact-gPGc1pTZGRvxybqPpDRL"
                    data-layout="{'id':'INLINE'}"
                    data-trigger-type="alwaysShow"
                    data-trigger-value=""
                    data-activation-type="alwaysActivated"
                    data-activation-value=""
                    data-deactivation-type="neverDeactivate"
                    data-deactivation-value=""
                    data-form-name="Apply Now SVG2"
                    data-height="700"
                    data-layout-iframe-id="contact-gPGc1pTZGRvxybqPpDRL"
                    data-form-id="gPGc1pTZGRvxybqPpDRL"
                    title="Apply Now SVG2"
                  />
                </div>
              </div>
            </div>

            {/* Contact Info - Updated email to support@cookin.io */}
            <div className="lg:col-span-2 space-y-6">
              <div className="p-6 rounded-xl bg-card border border-border">
                <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-4">
                  <Mail className="w-6 h-6 text-primary" />
                </div>
                <h3 className="font-semibold mb-1">Email Us</h3>
                <p className="text-muted-foreground text-sm mb-2">SaintSal AI typically responds within minutes</p>
                <a href="mailto:support@cookin.io" className="text-primary hover:underline">
                  support@cookin.io
                </a>
              </div>

              <div className="p-6 rounded-xl bg-card border border-border">
                <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-4">
                  <Phone className="w-6 h-6 text-primary" />
                </div>
                <h3 className="font-semibold mb-1">Call Us</h3>
                <p className="text-muted-foreground text-sm mb-2">Mon-Fri from 8am to 6pm EST</p>
                <a href="tel:+18885554653" className="text-primary hover:underline">
                  (888) 555-GOLD
                </a>
              </div>

              <div className="p-6 rounded-xl bg-card border border-border">
                <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-4">
                  <MapPin className="w-6 h-6 text-primary" />
                </div>
                <h3 className="font-semibold mb-1">Visit Us</h3>
                <p className="text-muted-foreground text-sm mb-2">Saint Vision Technologies LLC</p>
                <p className="text-sm">
                  100 Wall Street, Suite 2500
                  <br />
                  New York, NY 10005
                </p>
              </div>

              <div className="p-6 rounded-xl bg-card border border-border">
                <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-4">
                  <Clock className="w-6 h-6 text-primary" />
                </div>
                <h3 className="font-semibold mb-1">Business Hours</h3>
                <p className="text-muted-foreground text-sm mb-2">SaintSal AI available 24/7</p>
                <p className="text-sm">
                  AI Support: 24/7/365
                  <br />
                  Phone Support: Mon-Fri, 8am - 6pm EST
                  <br />
                  Saturday: 9am - 2pm EST
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
      <SaintSalAssistant />
      <script src="https://link.msgsndr.com/js/form_embed.js" async />
    </main>
  )
}
