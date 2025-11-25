import { LeadProductPage } from "@/components/lead-product-page"
import { DollarSign } from "lucide-react"

export default function PurchaseLeadsPage() {
  return (
    <LeadProductPage
      title="Purchase Leads"
      subtitle="Motivated Sellers Ready to Deal"
      description="Connect with motivated sellers who are actively looking for quick, fair offers. These homeowners need to sell fast and are open to working with investors."
      icon={DollarSign}
      features={[
        "Verified motivated sellers",
        "Quick sale indicators",
        "Direct contact information",
        "Motivation score ranking",
        "Property condition notes",
        "Asking price estimates",
        "Time urgency flags",
        "Negotiation insights",
      ]}
      dataFields={[
        "Owner Name",
        "Property Address",
        "Phone/Email",
        "Motivation Level",
        "Reason for Selling",
        "Equity Estimate",
        "Property Condition",
        "Timeline to Sell",
      ]}
      whoUses={[
        "Cash Buyers",
        "Real Estate Investors",
        "Property Management Companies",
        "REITs",
        "Private Equity Firms",
      ]}
      sampleLeads={[
        { address: "2468 Elm Street", city: "Houston", state: "TX", equity: "$72,000", status: "Job Relocation" },
        { address: "1357 Willow Way", city: "Orlando", state: "FL", equity: "$88,000", status: "Divorce" },
        { address: "8642 Spruce Ave", city: "Las Vegas", state: "NV", equity: "$55,000", status: "Inherited" },
        { address: "9753 Ash Court", city: "Charlotte", state: "NC", equity: "$110,000", status: "Downsizing" },
        { address: "3141 Palm Drive", city: "San Antonio", state: "TX", equity: "$67,000", status: "Medical Bills" },
      ]}
    />
  )
}
