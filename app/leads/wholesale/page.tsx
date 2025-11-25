import { LeadProductPage } from "@/components/lead-product-page"
import { Home } from "lucide-react"

export default function WholesaleLeadsPage() {
  return (
    <LeadProductPage
      title="Wholesale Leads"
      subtitle="Off-Market Investment Opportunities"
      description="Access off-market, investor-friendly properties ready for assignment deals. These properties are sourced directly from distressed situations before they hit the market."
      icon={Home}
      features={[
        "Off-market properties only",
        "Assignment-ready deals",
        "Verified owner contact info",
        "Equity estimates included",
        "Property characteristics",
        "Motivation indicators",
        "Days on market tracking",
        "Comparable sales data",
      ]}
      dataFields={[
        "Owner Name",
        "Property Address",
        "Phone/Email",
        "Type of Distress",
        "Status",
        "Equity Estimate",
        "Property Characteristics",
        "Auction Date (if applicable)",
      ]}
      whoUses={[
        "Real Estate Wholesalers",
        "Fix & Flip Investors",
        "Buy & Hold Investors",
        "Real Estate Agents",
        "Investment Funds",
      ]}
      sampleLeads={[
        { address: "1234 Oak Street", city: "Phoenix", state: "AZ", equity: "$85,000", status: "Pre-Foreclosure" },
        { address: "5678 Maple Ave", city: "Dallas", state: "TX", equity: "$120,000", status: "Probate" },
        { address: "9012 Pine Road", city: "Atlanta", state: "GA", equity: "$65,000", status: "Missed Payment" },
        { address: "3456 Cedar Lane", city: "Denver", state: "CO", equity: "$95,000", status: "Tax Lien" },
        { address: "7890 Birch Blvd", city: "Miami", state: "FL", equity: "$150,000", status: "Bankruptcy" },
      ]}
    />
  )
}
