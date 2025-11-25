"use client"

import { useState } from "react"
import { DashboardHeader } from "@/components/dashboard/header"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Search, Filter, Download, ChevronDown, MapPin, Phone, Mail, ExternalLink, RefreshCw } from "lucide-react"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
  DropdownMenuSeparator,
  DropdownMenuLabel,
} from "@/components/ui/dropdown-menu"

const leadTypes = ["All Types", "Wholesale", "Purchase", "Probate", "Pre-Foreclosure", "Bankruptcy", "Missed Payment"]
const states = ["All States", "AZ", "CA", "CO", "FL", "GA", "TX", "NY", "NV", "OH", "PA"]
const distressLevels = ["All Levels", "High", "Medium", "Low"]

const mockLeads = [
  {
    id: 1,
    ownerName: "Michael Johnson",
    address: "1234 Oak Street",
    city: "Phoenix",
    state: "AZ",
    zip: "85001",
    type: "Pre-Foreclosure",
    equity: "$85,000",
    distress: "High",
    phone: "(602) 555-1234",
    email: "m.johnson@email.com",
    status: "New",
    daysOnList: 2,
  },
  {
    id: 2,
    ownerName: "Sarah Williams",
    address: "5678 Maple Ave",
    city: "Dallas",
    state: "TX",
    zip: "75201",
    type: "Probate",
    equity: "$120,000",
    distress: "Medium",
    phone: "(214) 555-5678",
    email: "s.williams@email.com",
    status: "New",
    daysOnList: 1,
  },
  {
    id: 3,
    ownerName: "Robert Davis",
    address: "9012 Pine Road",
    city: "Atlanta",
    state: "GA",
    zip: "30301",
    type: "Missed Payment",
    equity: "$65,000",
    distress: "High",
    phone: "(404) 555-9012",
    email: "r.davis@email.com",
    status: "New",
    daysOnList: 0,
  },
  {
    id: 4,
    ownerName: "Jennifer Martinez",
    address: "3456 Cedar Lane",
    city: "Denver",
    state: "CO",
    zip: "80201",
    type: "Bankruptcy",
    equity: "$95,000",
    distress: "High",
    phone: "(303) 555-3456",
    email: "j.martinez@email.com",
    status: "Contacted",
    daysOnList: 5,
  },
  {
    id: 5,
    ownerName: "David Anderson",
    address: "7890 Birch Blvd",
    city: "Miami",
    state: "FL",
    zip: "33101",
    type: "Wholesale",
    equity: "$150,000",
    distress: "Medium",
    phone: "(305) 555-7890",
    email: "d.anderson@email.com",
    status: "Viewed",
    daysOnList: 3,
  },
  {
    id: 6,
    ownerName: "Lisa Thompson",
    address: "2468 Elm Street",
    city: "Houston",
    state: "TX",
    zip: "77001",
    type: "Purchase",
    equity: "$72,000",
    distress: "Low",
    phone: "(713) 555-2468",
    email: "l.thompson@email.com",
    status: "New",
    daysOnList: 1,
  },
  {
    id: 7,
    ownerName: "James Wilson",
    address: "1357 Willow Way",
    city: "Orlando",
    state: "FL",
    zip: "32801",
    type: "Pre-Foreclosure",
    equity: "$88,000",
    distress: "High",
    phone: "(407) 555-1357",
    email: "j.wilson@email.com",
    status: "New",
    daysOnList: 0,
  },
  {
    id: 8,
    ownerName: "Emily Brown",
    address: "8642 Spruce Ave",
    city: "Las Vegas",
    state: "NV",
    zip: "89101",
    type: "Probate",
    equity: "$55,000",
    distress: "Medium",
    phone: "(702) 555-8642",
    email: "e.brown@email.com",
    status: "Viewed",
    daysOnList: 4,
  },
]

export default function LeadFeedPage() {
  const [selectedType, setSelectedType] = useState("All Types")
  const [selectedState, setSelectedState] = useState("All States")
  const [selectedDistress, setSelectedDistress] = useState("All Levels")
  const [searchQuery, setSearchQuery] = useState("")

  const filteredLeads = mockLeads.filter((lead) => {
    if (selectedType !== "All Types" && lead.type !== selectedType) return false
    if (selectedState !== "All States" && lead.state !== selectedState) return false
    if (selectedDistress !== "All Levels" && lead.distress !== selectedDistress) return false
    if (
      searchQuery &&
      !lead.address.toLowerCase().includes(searchQuery.toLowerCase()) &&
      !lead.ownerName.toLowerCase().includes(searchQuery.toLowerCase())
    )
      return false
    return true
  })

  return (
    <>
      <DashboardHeader title="Lead Feed" subtitle="Real-time distressed property leads" />

      <div className="p-6 space-y-6">
        {/* Filters */}
        <Card className="bg-card border-border">
          <CardContent className="p-4">
            <div className="flex flex-wrap items-center gap-4">
              <div className="relative flex-1 min-w-[200px]">
                <Search className="w-4 h-4 absolute left-3 top-1/2 -translate-y-1/2 text-muted-foreground" />
                <Input
                  placeholder="Search by address or owner..."
                  className="pl-10 bg-muted border-0"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                />
              </div>

              <DropdownMenu>
                <DropdownMenuTrigger asChild>
                  <Button variant="outline" className="min-w-[140px] bg-transparent">
                    <Filter className="w-4 h-4 mr-2" />
                    {selectedType}
                    <ChevronDown className="w-4 h-4 ml-2" />
                  </Button>
                </DropdownMenuTrigger>
                <DropdownMenuContent>
                  <DropdownMenuLabel>Lead Type</DropdownMenuLabel>
                  <DropdownMenuSeparator />
                  {leadTypes.map((type) => (
                    <DropdownMenuItem key={type} onClick={() => setSelectedType(type)}>
                      {type}
                    </DropdownMenuItem>
                  ))}
                </DropdownMenuContent>
              </DropdownMenu>

              <DropdownMenu>
                <DropdownMenuTrigger asChild>
                  <Button variant="outline" className="min-w-[120px] bg-transparent">
                    <MapPin className="w-4 h-4 mr-2" />
                    {selectedState}
                    <ChevronDown className="w-4 h-4 ml-2" />
                  </Button>
                </DropdownMenuTrigger>
                <DropdownMenuContent>
                  <DropdownMenuLabel>State</DropdownMenuLabel>
                  <DropdownMenuSeparator />
                  {states.map((state) => (
                    <DropdownMenuItem key={state} onClick={() => setSelectedState(state)}>
                      {state}
                    </DropdownMenuItem>
                  ))}
                </DropdownMenuContent>
              </DropdownMenu>

              <DropdownMenu>
                <DropdownMenuTrigger asChild>
                  <Button variant="outline" className="min-w-[130px] bg-transparent">
                    Distress: {selectedDistress}
                    <ChevronDown className="w-4 h-4 ml-2" />
                  </Button>
                </DropdownMenuTrigger>
                <DropdownMenuContent>
                  <DropdownMenuLabel>Distress Level</DropdownMenuLabel>
                  <DropdownMenuSeparator />
                  {distressLevels.map((level) => (
                    <DropdownMenuItem key={level} onClick={() => setSelectedDistress(level)}>
                      {level}
                    </DropdownMenuItem>
                  ))}
                </DropdownMenuContent>
              </DropdownMenu>

              <div className="flex gap-2 ml-auto">
                <Button variant="outline">
                  <RefreshCw className="w-4 h-4 mr-2" />
                  Refresh
                </Button>
                <Button className="bg-primary text-primary-foreground">
                  <Download className="w-4 h-4 mr-2" />
                  Export CSV
                </Button>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Results Count */}
        <div className="flex items-center justify-between">
          <p className="text-sm text-muted-foreground">
            Showing <span className="font-medium text-foreground">{filteredLeads.length}</span> leads
          </p>
          <div className="flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
            <span className="text-sm text-muted-foreground">Live updating</span>
          </div>
        </div>

        {/* Leads Table */}
        <Card className="bg-card border-border overflow-hidden">
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead className="bg-secondary/50">
                <tr>
                  <th className="text-left py-4 px-4 text-sm font-medium">Owner / Property</th>
                  <th className="text-left py-4 px-4 text-sm font-medium">Type</th>
                  <th className="text-left py-4 px-4 text-sm font-medium">Distress</th>
                  <th className="text-left py-4 px-4 text-sm font-medium">Est. Equity</th>
                  <th className="text-left py-4 px-4 text-sm font-medium">Contact</th>
                  <th className="text-left py-4 px-4 text-sm font-medium">Status</th>
                  <th className="text-left py-4 px-4 text-sm font-medium">Actions</th>
                </tr>
              </thead>
              <tbody>
                {filteredLeads.map((lead) => (
                  <tr key={lead.id} className="border-b border-border/50 hover:bg-secondary/30 transition-colors">
                    <td className="py-4 px-4">
                      <div className="font-medium">{lead.ownerName}</div>
                      <div className="text-sm text-muted-foreground">{lead.address}</div>
                      <div className="text-sm text-muted-foreground">
                        {lead.city}, {lead.state} {lead.zip}
                      </div>
                    </td>
                    <td className="py-4 px-4">
                      <span className="px-2 py-1 rounded-full bg-secondary text-xs font-medium">{lead.type}</span>
                    </td>
                    <td className="py-4 px-4">
                      <span
                        className={`px-2 py-1 rounded-full text-xs font-medium ${
                          lead.distress === "High"
                            ? "bg-red-500/10 text-red-500"
                            : lead.distress === "Medium"
                              ? "bg-yellow-500/10 text-yellow-500"
                              : "bg-green-500/10 text-green-500"
                        }`}
                      >
                        {lead.distress}
                      </span>
                    </td>
                    <td className="py-4 px-4">
                      <span className="text-primary font-semibold">{lead.equity}</span>
                    </td>
                    <td className="py-4 px-4">
                      <div className="flex flex-col gap-1">
                        <a
                          href={`tel:${lead.phone}`}
                          className="flex items-center gap-2 text-sm hover:text-primary transition-colors"
                        >
                          <Phone className="w-3 h-3" />
                          {lead.phone}
                        </a>
                        <a
                          href={`mailto:${lead.email}`}
                          className="flex items-center gap-2 text-sm text-muted-foreground hover:text-primary transition-colors"
                        >
                          <Mail className="w-3 h-3" />
                          {lead.email}
                        </a>
                      </div>
                    </td>
                    <td className="py-4 px-4">
                      <span
                        className={`px-2 py-1 rounded-full text-xs font-medium ${
                          lead.status === "New"
                            ? "bg-primary/10 text-primary"
                            : lead.status === "Viewed"
                              ? "bg-secondary text-secondary-foreground"
                              : "bg-green-500/10 text-green-500"
                        }`}
                      >
                        {lead.status}
                      </span>
                      <div className="text-xs text-muted-foreground mt-1">
                        {lead.daysOnList === 0 ? "Today" : `${lead.daysOnList}d ago`}
                      </div>
                    </td>
                    <td className="py-4 px-4">
                      <Button variant="ghost" size="sm">
                        <ExternalLink className="w-4 h-4" />
                      </Button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </Card>
      </div>
    </>
  )
}
