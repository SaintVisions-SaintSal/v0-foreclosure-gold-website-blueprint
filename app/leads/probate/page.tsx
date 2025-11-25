import { LeadProductPage } from "@/components/lead-product-page"
import { FileText } from "lucide-react"

export default function ProbateLeadsPage() {
  return (
    <LeadProductPage
      title="Probate Leads"
      subtitle="Estate Liquidation Opportunities"
      description="Estate-owned properties requiring fast liquidation. Executors and heirs often need quick sales to settle estates and distribute assets."
      icon={FileText}
      features={[
        "Court-verified probate filings",
        "Executor contact information",
        "Property ownership confirmed",
        "Estate timeline tracking",
        "Multi-property estates flagged",
        "Attorney information included",
        "Heir contact details",
        "Filing date records",
      ]}
      dataFields={[
        "Decedent Name",
        "Property Address",
        "Executor Name",
        "Executor Phone/Email",
        "Filing Date",
        "Equity Estimate",
        "Property Characteristics",
        "Attorney on Record",
      ]}
      whoUses={["Probate Specialists", "Estate Liquidators", "Real Estate Investors", "Wholesalers", "Cash Buyers"]}
      sampleLeads={[
        { address: "4567 Heritage Lane", city: "Sacramento", state: "CA", equity: "$180,000", status: "New Filing" },
        { address: "8901 Legacy Court", city: "Nashville", state: "TN", equity: "$95,000", status: "30 Days" },
        { address: "2345 Estate Drive", city: "Portland", state: "OR", equity: "$145,000", status: "60 Days" },
        { address: "6789 Memorial Ave", city: "Columbus", state: "OH", equity: "$78,000", status: "90 Days" },
        { address: "1234 Ancestral Rd", city: "Indianapolis", state: "IN", equity: "$62,000", status: "New Filing" },
      ]}
    />
  )
}
