import { DashboardHeader } from "@/components/dashboard/header"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { MessageCircle, Mail, Phone, FileText, Sparkles } from "lucide-react"

const faqs = [
  {
    q: "How do I export leads to CSV?",
    a: "Go to the Lead Feed page and click the 'Export CSV' button in the top right corner.",
  },
  {
    q: "How fresh is the data?",
    a: "Our leads are updated in real-time. Most leads appear within 15 minutes of being filed.",
  },
  {
    q: "Can I change my subscription plan?",
    a: "Yes, visit the Billing page to upgrade, downgrade, or modify your subscription.",
  },
  { q: "How do I use the API?", a: "Check the API & Docs page for your API key and comprehensive documentation." },
]

export default function SupportPage() {
  return (
    <>
      <DashboardHeader title="Support Center" subtitle="Get help with your CookinForeclosures account" />

      <div className="p-6 space-y-6">
        {/* SaintSal Promo */}
        <Card className="bg-gradient-to-br from-primary/10 to-primary/5 border-primary/30">
          <CardContent className="p-6">
            <div className="flex items-start gap-4">
              <div className="w-14 h-14 rounded-2xl bg-primary flex items-center justify-center shrink-0">
                <Sparkles className="w-7 h-7 text-primary-foreground" />
              </div>
              <div>
                <h3 className="text-xl font-bold mb-2">Chat with SaintSal™</h3>
                <p className="text-muted-foreground mb-4">
                  Our AI assistant is available 24/7 to help you with any questions about leads, billing, API
                  integration, and more.
                </p>
                <p className="text-sm text-primary">Click the chat icon in the bottom right corner to get started.</p>
              </div>
            </div>
          </CardContent>
        </Card>

        <div className="grid lg:grid-cols-2 gap-6">
          <Card className="bg-card border-border">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <MessageCircle className="w-5 h-5" />
                Submit a Ticket
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="w-full overflow-hidden rounded-xl">
                <iframe
                  src="https://api.leadconnectorhq.com/widget/form/gPGc1pTZGRvxybqPpDRL"
                  style={{ width: "100%", height: "500px", border: "none" }}
                  id="support-gPGc1pTZGRvxybqPpDRL"
                  data-layout="{'id':'INLINE'}"
                  data-trigger-type="alwaysShow"
                  data-trigger-value=""
                  data-activation-type="alwaysActivated"
                  data-activation-value=""
                  data-deactivation-type="neverDeactivate"
                  data-deactivation-value=""
                  data-form-name="Apply Now SVG2"
                  data-height="500"
                  data-layout-iframe-id="support-gPGc1pTZGRvxybqPpDRL"
                  data-form-id="gPGc1pTZGRvxybqPpDRL"
                  title="Apply Now SVG2"
                />
              </div>
            </CardContent>
          </Card>

          {/* Contact Info - Updated email to support@cookin.io */}
          <div className="space-y-6">
            <Card className="bg-card border-border">
              <CardHeader>
                <CardTitle>Contact Us</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex items-center gap-4 p-4 rounded-xl bg-secondary/50">
                  <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center">
                    <Mail className="w-5 h-5 text-primary" />
                  </div>
                  <div>
                    <div className="text-sm text-muted-foreground">Email Support</div>
                    <a href="mailto:support@cookin.io" className="font-medium hover:text-primary">
                      support@cookin.io
                    </a>
                  </div>
                </div>
                <div className="flex items-center gap-4 p-4 rounded-xl bg-secondary/50">
                  <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center">
                    <Phone className="w-5 h-5 text-primary" />
                  </div>
                  <div>
                    <div className="text-sm text-muted-foreground">Phone Support</div>
                    <a href="tel:+18885554653" className="font-medium hover:text-primary">
                      (888) 555-GOLD
                    </a>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="bg-card border-border">
              <CardHeader>
                <CardTitle>Business Hours</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-2 text-sm">
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">Monday - Friday</span>
                    <span>8am - 6pm EST</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">Saturday</span>
                    <span>9am - 2pm EST</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">Sunday</span>
                    <span>Closed</span>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* FAQs */}
        <Card className="bg-card border-border">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <FileText className="w-5 h-5" />
              Frequently Asked Questions
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid sm:grid-cols-2 gap-4">
              {faqs.map((faq) => (
                <div key={faq.q} className="p-4 rounded-xl bg-secondary/50">
                  <h4 className="font-medium mb-2">{faq.q}</h4>
                  <p className="text-sm text-muted-foreground">{faq.a}</p>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>
      <script src="https://link.msgsndr.com/js/form_embed.js" async />
    </>
  )
}
