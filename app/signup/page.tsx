"use client"

import type React from "react"
import { Eye, EyeOff, ArrowRight, Check, Sparkles } from "lucide-react"

import Link from "next/link"
import { useState } from "react"
import { useSearchParams } from "next/navigation"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"

const leadTypes = [
  "Wholesale Leads",
  "Purchase Leads",
  "Probate Leads",
  "Stop Sale / Pre-Foreclosure",
  "Bankruptcy Gold",
  "Missed Payment Alerts",
]

const states = [
  "Alabama",
  "Alaska",
  "Arizona",
  "Arkansas",
  "California",
  "Colorado",
  "Connecticut",
  "Delaware",
  "Florida",
  "Georgia",
  "Hawaii",
  "Idaho",
  "Illinois",
  "Indiana",
  "Iowa",
  "Kansas",
  "Kentucky",
  "Louisiana",
  "Maine",
  "Maryland",
  "Massachusetts",
  "Michigan",
  "Minnesota",
  "Mississippi",
  "Missouri",
  "Montana",
  "Nebraska",
  "Nevada",
  "New Hampshire",
  "New Jersey",
  "New Mexico",
  "New York",
  "North Carolina",
  "North Dakota",
  "Ohio",
  "Oklahoma",
  "Oregon",
  "Pennsylvania",
  "Rhode Island",
  "South Carolina",
  "South Dakota",
  "Tennessee",
  "Texas",
  "Utah",
  "Vermont",
  "Virginia",
  "Washington",
  "West Virginia",
  "Wisconsin",
  "Wyoming",
]

export default function SignupPage() {
  const searchParams = useSearchParams()
  const plan = searchParams.get("plan") || "unlimited"

  const [showPassword, setShowPassword] = useState(false)
  const [isLoading, setIsLoading] = useState(false)
  const [selectedLeadTypes, setSelectedLeadTypes] = useState<string[]>([])
  const [selectedStates, setSelectedStates] = useState<string[]>([])
  const [step, setStep] = useState(1)
  const [showGHLForm, setShowGHLForm] = useState(false)

  const toggleLeadType = (type: string) => {
    setSelectedLeadTypes((prev) => (prev.includes(type) ? prev.filter((t) => t !== type) : [...prev, type]))
  }

  const toggleState = (state: string) => {
    setSelectedStates((prev) => (prev.includes(state) ? prev.filter((s) => s !== state) : [...prev, state]))
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    if (step < 3) {
      setStep(step + 1)
      return
    }
    setShowGHLForm(true)
  }

  if (showGHLForm) {
    return (
      <main className="min-h-screen bg-background flex flex-col pt-safe pb-safe">
        <div className="p-4 border-b border-border">
          <Link href="/" className="flex items-center gap-2">
            <div className="w-10 h-10 rounded-lg overflow-hidden">
              <img src="/saintsal-logo.png" alt="SaintSal" className="w-full h-full object-contain" />
            </div>
            <span className="text-xl font-bold">
              <span className="text-gold-gradient">Cookin</span>
              <span className="text-foreground">Foreclosures</span>
            </span>
          </Link>
        </div>
        <div className="flex-1 flex flex-col items-center justify-center p-4">
          <div className="w-full max-w-2xl text-center mb-6">
            <h1 className="text-2xl sm:text-3xl font-bold mb-2">
              Almost there! Complete your <span className="text-gold-gradient">Application</span>
            </h1>
            <p className="text-muted-foreground">Fill out the form below to finalize your account setup</p>
          </div>
          <div className="w-full max-w-2xl bg-card rounded-2xl border border-border overflow-hidden">
            <iframe
              src="https://api.leadconnectorhq.com/widget/form/gPGc1pTZGRvxybqPpDRL"
              style={{ width: "100%", height: "700px", border: "none" }}
              id="inline-gPGc1pTZGRvxybqPpDRL"
              data-layout="{'id':'INLINE'}"
              data-trigger-type="alwaysShow"
              data-trigger-value=""
              data-activation-type="alwaysActivated"
              data-activation-value=""
              data-deactivation-type="neverDeactivate"
              data-deactivation-value=""
              data-form-name="Apply Now SVG2"
              data-height="700"
              data-layout-iframe-id="inline-gPGc1pTZGRvxybqPpDRL"
              data-form-id="gPGc1pTZGRvxybqPpDRL"
              title="Apply Now SVG2"
            />
          </div>
          <div className="mt-6">
            <Link href="/dashboard">
              <Button variant="outline" className="h-12 bg-transparent">
                Skip for now & Go to Dashboard
                <ArrowRight className="ml-2 w-4 h-4" />
              </Button>
            </Link>
          </div>
        </div>
        <script src="https://link.msgsndr.com/js/form_embed.js" async />
      </main>
    )
  }

  return (
    <main className="min-h-screen bg-background flex pt-safe pb-safe">
      {/* Left Side - Branding */}
      <div className="hidden lg:flex lg:w-1/2 bg-secondary/30 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-transparent to-primary/5" />
        <div className="relative z-10 flex flex-col justify-between p-12 w-full">
          <Link href="/" className="flex items-center gap-2">
            <div className="w-10 h-10 rounded-lg overflow-hidden">
              <img src="/saintsal-logo.png" alt="SaintSal" className="w-full h-full object-contain" />
            </div>
            <span className="text-xl font-bold">
              <span className="text-gold-gradient">Cookin</span>
              <span className="text-foreground">Foreclosures</span>
            </span>
          </Link>

          <div className="max-w-md">
            <h2 className="text-4xl font-bold mb-6">
              Start finding <span className="text-gold-gradient">Golden</span> opportunities today
            </h2>
            <p className="text-muted-foreground text-lg mb-8">
              Join thousands of investors accessing real-time distressed property leads nationwide.
            </p>

            {/* Plan Summary */}
            <div className="p-6 rounded-xl bg-card border border-border">
              <div className="flex items-center justify-between mb-4">
                <span className="text-sm font-medium">Selected Plan</span>
                <span className="px-3 py-1 rounded-full bg-primary/10 text-primary text-sm font-semibold">
                  {plan === "unlimited" ? "Unlimited Access" : "Pay Per Lead"}
                </span>
              </div>
              <div className="text-3xl font-bold mb-2">
                {plan === "unlimited" ? "$29.99" : "$25"}
                <span className="text-base font-normal text-muted-foreground">
                  {plan === "unlimited" ? "/month" : "/lead"}
                </span>
              </div>
              <p className="text-sm text-muted-foreground">
                {plan === "unlimited"
                  ? "Unlimited leads, all categories, all states + market insights blog"
                  : "Pay only for the leads you need"}
              </p>
            </div>
          </div>

          <p className="text-sm text-muted-foreground">
            © {new Date().getFullYear()} CookinForeclosures. All rights reserved.
          </p>
        </div>
      </div>

      {/* Right Side - Form */}
      <div className="flex-1 flex items-start sm:items-center justify-center p-6 sm:p-8 overflow-y-auto">
        <div className="w-full max-w-md">
          <Link href="/" className="flex items-center gap-2 mb-6 lg:hidden">
            <div className="w-10 h-10 rounded-lg overflow-hidden">
              <img src="/saintsal-logo.png" alt="SaintSal" className="w-full h-full object-contain" />
            </div>
            <span className="text-xl font-bold">
              <span className="text-gold-gradient">Cookin</span>
              <span className="text-foreground">Foreclosures</span>
            </span>
          </Link>

          <div className="flex items-center gap-2 mb-6 sm:mb-8">
            {[1, 2, 3].map((s) => (
              <div key={s} className="flex items-center">
                <div
                  className={`w-8 h-8 sm:w-10 sm:h-10 rounded-full flex items-center justify-center text-sm font-semibold ${
                    step >= s ? "bg-primary text-primary-foreground" : "bg-muted text-muted-foreground"
                  }`}
                >
                  {step > s ? <Check className="w-4 h-4" /> : s}
                </div>
                {s < 3 && <div className={`w-8 sm:w-12 h-0.5 ${step > s ? "bg-primary" : "bg-muted"}`} />}
              </div>
            ))}
          </div>

          <div className="mb-6 sm:mb-8">
            <h1 className="text-2xl sm:text-3xl font-bold mb-2">
              {step === 1 && "Create your account"}
              {step === 2 && "Choose lead types"}
              {step === 3 && "Select your markets"}
            </h1>
            <p className="text-muted-foreground text-sm sm:text-base">
              {step === 1 && (
                <>
                  Already have an account?{" "}
                  <Link href="/login" className="text-primary hover:underline">
                    Sign in
                  </Link>
                </>
              )}
              {step === 2 && "Select the lead categories you're interested in"}
              {step === 3 && "Choose the states you want to target"}
            </p>
          </div>

          <form onSubmit={handleSubmit} className="space-y-4 sm:space-y-6">
            {step === 1 && (
              <>
                <div>
                  <label className="text-sm font-medium mb-2 block">Full Name</label>
                  <Input type="text" placeholder="John Doe" className="bg-muted border-0 h-12" required />
                </div>

                <div>
                  <label className="text-sm font-medium mb-2 block">Email address</label>
                  <Input type="email" placeholder="you@example.com" className="bg-muted border-0 h-12" required />
                </div>

                <div>
                  <label className="text-sm font-medium mb-2 block">Phone Number</label>
                  <Input type="tel" placeholder="(555) 123-4567" className="bg-muted border-0 h-12" required />
                </div>

                <div>
                  <label className="text-sm font-medium mb-2 block">Password</label>
                  <div className="relative">
                    <Input
                      type={showPassword ? "text" : "password"}
                      placeholder="Create a strong password"
                      className="bg-muted border-0 h-12 pr-12"
                      required
                    />
                    <button
                      type="button"
                      onClick={() => setShowPassword(!showPassword)}
                      className="absolute right-4 top-1/2 -translate-y-1/2 text-muted-foreground hover:text-foreground p-1"
                      aria-label={showPassword ? "Hide password" : "Show password"}
                    >
                      {showPassword ? <EyeOff className="w-5 h-5" /> : <Eye className="w-5 h-5" />}
                    </button>
                  </div>
                </div>
              </>
            )}

            {step === 2 && (
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {leadTypes.map((type) => (
                  <button
                    key={type}
                    type="button"
                    onClick={() => toggleLeadType(type)}
                    className={`p-4 rounded-xl border text-left transition-all min-h-[56px] ${
                      selectedLeadTypes.includes(type)
                        ? "bg-primary/10 border-primary"
                        : "bg-card border-border hover:border-primary/50 active:bg-muted"
                    }`}
                  >
                    <div className="flex items-center justify-between">
                      <span className="text-sm font-medium">{type}</span>
                      {selectedLeadTypes.includes(type) && <Check className="w-4 h-4 text-primary" />}
                    </div>
                  </button>
                ))}
              </div>
            )}

            {step === 3 && (
              <div className="max-h-[50vh] sm:max-h-[400px] overflow-y-auto space-y-2 pr-2 -mr-2">
                <button
                  type="button"
                  onClick={() => setSelectedStates(selectedStates.length === states.length ? [] : [...states])}
                  className="w-full p-3 rounded-xl bg-primary/10 border border-primary text-left mb-4 min-h-[48px]"
                >
                  <span className="text-sm font-medium text-primary">
                    {selectedStates.length === states.length ? "Deselect All" : "Select All States"}
                  </span>
                </button>
                <div className="grid grid-cols-2 gap-2">
                  {states.map((state) => (
                    <button
                      key={state}
                      type="button"
                      onClick={() => toggleState(state)}
                      className={`p-3 rounded-lg border text-left text-sm transition-all min-h-[44px] ${
                        selectedStates.includes(state)
                          ? "bg-primary/10 border-primary"
                          : "bg-card border-border hover:border-primary/50 active:bg-muted"
                      }`}
                    >
                      <div className="flex items-center justify-between">
                        <span className="truncate">{state}</span>
                        {selectedStates.includes(state) && <Check className="w-3 h-3 text-primary shrink-0 ml-1" />}
                      </div>
                    </button>
                  ))}
                </div>
              </div>
            )}

            <div className="flex gap-3 pt-2">
              {step > 1 && (
                <Button
                  type="button"
                  variant="outline"
                  onClick={() => setStep(step - 1)}
                  className="flex-1 h-12 sm:h-14"
                >
                  Back
                </Button>
              )}
              <Button
                type="submit"
                className="flex-1 h-12 sm:h-14 bg-primary text-primary-foreground hover:bg-primary/90"
                disabled={
                  isLoading ||
                  (step === 2 && selectedLeadTypes.length === 0) ||
                  (step === 3 && selectedStates.length === 0)
                }
              >
                {isLoading ? (
                  <div className="w-5 h-5 border-2 border-primary-foreground/30 border-t-primary-foreground rounded-full animate-spin" />
                ) : (
                  <>
                    {step < 3 ? "Continue" : "Create Account"}
                    <ArrowRight className="ml-2 w-5 h-5" />
                  </>
                )}
              </Button>
            </div>
          </form>

          {step === 1 && (
            <div className="mt-6 sm:mt-8 p-4 rounded-xl bg-primary/5 border border-primary/20">
              <div className="flex items-center gap-2 mb-2">
                <Sparkles className="w-4 h-4 text-primary" />
                <span className="text-sm font-medium">7-Day Free Trial</span>
              </div>
              <p className="text-sm text-muted-foreground">
                Start your free trial today. No credit card required to explore.
              </p>
            </div>
          )}
        </div>
      </div>
    </main>
  )
}
