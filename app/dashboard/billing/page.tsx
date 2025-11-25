import { DashboardHeader } from "@/components/dashboard/header"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { CreditCard, Download, Check, AlertCircle } from "lucide-react"

const invoices = [
  { id: "INV-001", date: "Nov 1, 2025", amount: "$29.99", status: "Paid" },
  { id: "INV-002", date: "Oct 1, 2025", amount: "$29.99", status: "Paid" },
  { id: "INV-003", date: "Sep 1, 2025", amount: "$29.99", status: "Paid" },
  { id: "INV-004", date: "Aug 1, 2025", amount: "$29.99", status: "Paid" },
]

export default function BillingPage() {
  return (
    <>
      <DashboardHeader title="Billing" subtitle="Manage your subscription and payment methods" />

      <div className="p-6 space-y-6">
        {/* Current Plan */}
        <Card className="bg-gradient-to-br from-primary/10 to-primary/5 border-primary/30">
          <CardContent className="p-6">
            <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-6">
              <div>
                <div className="flex items-center gap-2 mb-2">
                  <span className="px-3 py-1 rounded-full bg-primary text-primary-foreground text-sm font-semibold">
                    Current Plan
                  </span>
                </div>
                <h2 className="text-3xl font-bold mb-2">Unlimited Access</h2>
                <p className="text-muted-foreground">Unlimited leads, all categories, all 50 states</p>
              </div>
              <div className="text-right">
                <div className="text-4xl font-bold">
                  $29.99<span className="text-lg font-normal text-muted-foreground">/mo</span>
                </div>
                <p className="text-sm text-muted-foreground mt-1">Next billing: Dec 1, 2025</p>
              </div>
            </div>
          </CardContent>
        </Card>

        <div className="grid lg:grid-cols-2 gap-6">
          {/* Payment Method */}
          <Card className="bg-card border-border">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <CreditCard className="w-5 h-5" />
                Payment Method
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="flex items-center justify-between p-4 rounded-xl bg-secondary/50 mb-4">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-8 rounded bg-gradient-to-r from-blue-600 to-blue-400 flex items-center justify-center text-white text-xs font-bold">
                    VISA
                  </div>
                  <div>
                    <div className="font-medium">•••• •••• •••• 4242</div>
                    <div className="text-sm text-muted-foreground">Expires 12/26</div>
                  </div>
                </div>
                <span className="px-2 py-1 rounded-full bg-green-500/10 text-green-500 text-xs font-medium">
                  Default
                </span>
              </div>
              <Button variant="outline" className="w-full bg-transparent">
                Update Payment Method
              </Button>
            </CardContent>
          </Card>

          {/* Plan Features */}
          <Card className="bg-card border-border">
            <CardHeader>
              <CardTitle>Plan Features</CardTitle>
            </CardHeader>
            <CardContent>
              <ul className="space-y-3">
                {[
                  "Unlimited lead access",
                  "All 6 lead categories",
                  "All 50 states coverage",
                  "Real-time dashboard",
                  "CSV + email delivery",
                  "API access",
                  "CRM integrations",
                  "Priority support",
                ].map((feature) => (
                  <li key={feature} className="flex items-center gap-3">
                    <div className="w-5 h-5 rounded-full bg-primary/10 flex items-center justify-center">
                      <Check className="w-3 h-3 text-primary" />
                    </div>
                    <span className="text-sm">{feature}</span>
                  </li>
                ))}
              </ul>
            </CardContent>
          </Card>
        </div>

        {/* Invoices */}
        <Card className="bg-card border-border">
          <CardHeader>
            <CardTitle>Billing History</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead>
                  <tr className="border-b border-border">
                    <th className="text-left py-3 px-4 text-sm font-medium text-muted-foreground">Invoice</th>
                    <th className="text-left py-3 px-4 text-sm font-medium text-muted-foreground">Date</th>
                    <th className="text-left py-3 px-4 text-sm font-medium text-muted-foreground">Amount</th>
                    <th className="text-left py-3 px-4 text-sm font-medium text-muted-foreground">Status</th>
                    <th className="text-left py-3 px-4 text-sm font-medium text-muted-foreground">Action</th>
                  </tr>
                </thead>
                <tbody>
                  {invoices.map((invoice) => (
                    <tr key={invoice.id} className="border-b border-border/50">
                      <td className="py-4 px-4 font-medium">{invoice.id}</td>
                      <td className="py-4 px-4 text-muted-foreground">{invoice.date}</td>
                      <td className="py-4 px-4">{invoice.amount}</td>
                      <td className="py-4 px-4">
                        <span className="px-2 py-1 rounded-full bg-green-500/10 text-green-500 text-xs font-medium">
                          {invoice.status}
                        </span>
                      </td>
                      <td className="py-4 px-4">
                        <Button variant="ghost" size="sm">
                          <Download className="w-4 h-4 mr-1" />
                          PDF
                        </Button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </CardContent>
        </Card>

        {/* Danger Zone */}
        <Card className="bg-card border-destructive/30">
          <CardHeader>
            <CardTitle className="flex items-center gap-2 text-destructive">
              <AlertCircle className="w-5 h-5" />
              Cancel Subscription
            </CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-muted-foreground mb-4">
              Once you cancel, you'll lose access to all leads and features at the end of your current billing period.
            </p>
            <Button
              variant="outline"
              className="text-destructive border-destructive/30 hover:bg-destructive/10 bg-transparent"
            >
              Cancel Subscription
            </Button>
          </CardContent>
        </Card>
      </div>
    </>
  )
}
