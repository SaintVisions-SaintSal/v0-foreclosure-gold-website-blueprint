import { LeadProductPage } from "@/components/lead-product-page"
import { Scale } from "lucide-react"

export default function BankruptcyLeadsPage() {
  return (
    <LeadProductPage
      title="Bankruptcy Gold"
      subtitle="Chapter 7, 11, 13 Properties"
      description="Properties in active Chapter 7, 11, or 13 bankruptcy with high motivation. Court-supervised sales often mean faster closings and cleaner titles."
      icon={Scale}
      features={[
        "Court filing verified",
        "Chapter type identified",
        "Trustee information",
        "Property schedule details",
        "Creditor meeting dates",
        "Discharge timeline",
        "Asset valuation data",
        "Exemption status",
      ]}
      dataFields={[
        "Debtor Name",
        "Property Address",
        "Phone/Email",
        "Chapter Type",
        "Filing Date",
        "Equity Estimate",
        "Trustee Name",
        "Case Number",
      ]}
      whoUses={[
        "Bankruptcy Attorneys",
        "Distressed Asset Buyers",
        "Investment Funds",
        "REO Specialists",
        "Auction Buyers",
      ]}
      sampleLeads={[
        { address: "4444 Recovery Lane", city: "Chicago", state: "IL", equity: "$92,000", status: "Chapter 7" },
        { address: "8888 Restart Ave", city: "Seattle", state: "WA", equity: "$135,000", status: "Chapter 13" },
        { address: "2222 Fresh Start Dr", city: "Boston", state: "MA", equity: "$108,000", status: "Chapter 7" },
        { address: "6666 New Begin Ct", city: "Minneapolis", state: "MN", equity: "$76,000", status: "Chapter 11" },
        { address: "1010 Resolve Road", city: "St. Louis", state: "MO", equity: "$58,000", status: "Chapter 13" },
      ]}
    />
  )
}
