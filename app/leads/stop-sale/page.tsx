import { LeadProductPage } from "@/components/lead-product-page"
import { AlertTriangle } from "lucide-react"

export default function StopSaleLeadsPage() {
  return (
    <LeadProductPage
      title="Stop Sale / Pre-Foreclosure Leads"
      subtitle="High-Urgency Auction Prevention"
      description="Homeowners facing auction who need immediate help. These leads represent the highest urgency situations where time is critical."
      icon={AlertTriangle}
      features={[
        "Auction date confirmed",
        "Days until sale countdown",
        "Owner contact verified",
        "Loan amount estimates",
        "Equity calculations",
        "Lender information",
        "NOD/NTS filing dates",
        "Reinstatement amounts",
      ]}
      dataFields={[
        "Owner Name",
        "Property Address",
        "Phone/Email",
        "Auction Date",
        "Days Until Sale",
        "Equity Estimate",
        "Loan Balance",
        "Lender Name",
      ]}
      whoUses={[
        "Pre-Foreclosure Specialists",
        "Short Sale Negotiators",
        "Loss Mitigation Experts",
        "Real Estate Attorneys",
        "Investor Groups",
      ]}
      sampleLeads={[
        { address: "5555 Urgent Street", city: "Tampa", state: "FL", equity: "$45,000", status: "7 Days" },
        { address: "7777 Critical Ave", city: "Cleveland", state: "OH", equity: "$38,000", status: "14 Days" },
        { address: "3333 Emergency Ln", city: "Detroit", state: "MI", equity: "$28,000", status: "21 Days" },
        { address: "9999 Priority Road", city: "Memphis", state: "TN", equity: "$52,000", status: "10 Days" },
        { address: "1111 Deadline Blvd", city: "Baltimore", state: "MD", equity: "$41,000", status: "5 Days" },
      ]}
    />
  )
}
