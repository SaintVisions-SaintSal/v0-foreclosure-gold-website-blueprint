import { LeadProductPage } from "@/components/lead-product-page"
import { Bell } from "lucide-react"

export default function MissedPaymentLeadsPage() {
  return (
    <LeadProductPage
      title="Missed Payment Real-Time Alerts"
      subtitle="Our Flagship Product — Exclusive Early Intelligence"
      description="Find distressed homes before competitors even know they exist. Our proprietary data pipeline identifies properties with recently missed payments, giving you a 3-4 week head start on the competition."
      icon={Bell}
      features={[
        "Real-time payment monitoring",
        "3-4 week early warning",
        "Exclusive data source",
        "Daily refresh updates",
        "Payment history analysis",
        "Default probability scores",
        "Lender-specific insights",
        "First-to-market advantage",
      ]}
      dataFields={[
        "Owner Name",
        "Property Address",
        "Phone/Email",
        "Missed Payment Date",
        "Payments Behind",
        "Equity Estimate",
        "Loan Type",
        "Default Probability",
      ]}
      whoUses={[
        "Early-Stage Investors",
        "Note Buyers",
        "Pre-Foreclosure Specialists",
        "Hedge Funds",
        "Institutional Buyers",
      ]}
      sampleLeads={[
        { address: "1234 Alert Street", city: "Los Angeles", state: "CA", equity: "$215,000", status: "30 Days Late" },
        { address: "5678 Signal Ave", city: "San Diego", state: "CA", equity: "$168,000", status: "60 Days Late" },
        { address: "9012 Warning Lane", city: "Riverside", state: "CA", equity: "$89,000", status: "30 Days Late" },
        { address: "3456 Notice Court", city: "San Jose", state: "CA", equity: "$245,000", status: "45 Days Late" },
        { address: "7890 Intel Drive", city: "Fresno", state: "CA", equity: "$72,000", status: "30 Days Late" },
      ]}
    />
  )
}
