"use client"

import { useState, useRef, useEffect } from "react"
import { X, Send, Sparkles, Minimize2 } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"

interface Message {
  id: string
  role: "user" | "assistant"
  content: string
  timestamp: Date
}

const quickActions = [
  "How does pricing work?",
  "What lead types do you offer?",
  "Help me get started",
  "Contact support",
]

export function SaintSalAssistant() {
  const [isOpen, setIsOpen] = useState(false)
  const [isMinimized, setIsMinimized] = useState(false)
  const [messages, setMessages] = useState<Message[]>([
    {
      id: "1",
      role: "assistant",
      content:
        "Hello! I'm SaintSal™, your CookinForeclosures AI assistant. How can I help you find the perfect distressed property leads today?",
      timestamp: new Date(),
    },
  ])
  const [input, setInput] = useState("")
  const [isTyping, setIsTyping] = useState(false)
  const messagesEndRef = useRef<HTMLDivElement>(null)

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" })
  }

  useEffect(() => {
    scrollToBottom()
  }, [messages])

  const handleSend = async () => {
    if (!input.trim()) return

    const userMessage: Message = {
      id: Date.now().toString(),
      role: "user",
      content: input,
      timestamp: new Date(),
    }

    setMessages((prev) => [...prev, userMessage])
    setInput("")
    setIsTyping(true)

    // Simulate AI response
    setTimeout(() => {
      const responses: Record<string, string> = {
        pricing:
          "Our pricing is designed to fit every investor's needs:\n\n• **Pay Per Lead**: $25 per lead\n• **Unlimited Access**: $29.99/month for unlimited leads + weekly market insights blog\n\nBoth options include all 6 lead categories and nationwide coverage. Would you like me to help you sign up?",
        "lead types":
          "We offer 6 powerful lead categories:\n\n1. **Wholesale Leads** - Off-market properties\n2. **Purchase Leads** - Motivated sellers\n3. **Probate Leads** - Estate properties\n4. **Stop Sale/Pre-Foreclosure** - High urgency\n5. **Bankruptcy Gold** - Chapter 7, 11, 13\n6. **Missed Payment Alerts** - Exclusive early intel\n\nWhich category interests you most?",
        "get started":
          "Getting started is easy!\n\n1. Click 'Get Started' in the navigation\n2. Choose your subscription plan\n3. Select your target states/counties\n4. Start receiving leads instantly!\n\nWould you like me to walk you through the sign-up process?",
        support:
          "I'm here to help! For immediate assistance:\n\n• **Email**: support@cookinforeclosures.com\n• **Phone**: (888) 555-GOLD\n• **Live Chat**: You're using it now!\n\nWhat specific issue can I help you with?",
      }

      let response =
        "I'd be happy to help you with that! CookinForeclosures provides real-time distressed property leads across all 50 states. Is there something specific about our services you'd like to know?"

      const lowerInput = userMessage.content.toLowerCase()
      if (lowerInput.includes("pricing") || lowerInput.includes("cost") || lowerInput.includes("price")) {
        response = responses.pricing
      } else if (
        lowerInput.includes("lead type") ||
        lowerInput.includes("categories") ||
        lowerInput.includes("what lead")
      ) {
        response = responses["lead types"]
      } else if (lowerInput.includes("start") || lowerInput.includes("begin") || lowerInput.includes("sign up")) {
        response = responses["get started"]
      } else if (lowerInput.includes("support") || lowerInput.includes("contact") || lowerInput.includes("help")) {
        response = responses.support
      }

      const assistantMessage: Message = {
        id: (Date.now() + 1).toString(),
        role: "assistant",
        content: response,
        timestamp: new Date(),
      }

      setMessages((prev) => [...prev, assistantMessage])
      setIsTyping(false)
    }, 1500)
  }

  const handleQuickAction = (action: string) => {
    setInput(action)
    setTimeout(() => handleSend(), 100)
  }

  if (!isOpen) {
    return (
      <button
        onClick={() => setIsOpen(true)}
        className="fixed bottom-4 right-4 sm:bottom-6 sm:right-6 z-50 group pb-safe pr-safe"
        aria-label="Open SaintSal AI Assistant"
      >
        <div className="relative">
          <div className="absolute inset-0 bg-primary rounded-full blur-lg opacity-50 group-hover:opacity-75 transition-opacity" />
          <div className="relative w-14 h-14 sm:w-16 sm:h-16 bg-primary rounded-full flex items-center justify-center shadow-2xl hover:scale-105 active:scale-95 transition-transform">
            <Sparkles className="w-6 h-6 sm:w-7 sm:h-7 text-primary-foreground" />
          </div>
          <span className="absolute -top-1 -right-1 w-4 h-4 bg-green-500 rounded-full border-2 border-background animate-pulse" />
        </div>
        <div className="absolute bottom-full right-0 mb-2 px-3 py-1.5 bg-card border border-border rounded-lg shadow-lg opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap pointer-events-none">
          <span className="text-sm font-medium">Chat with SaintSal™</span>
        </div>
      </button>
    )
  }

  return (
    <div
      className={`fixed bottom-0 right-0 sm:bottom-6 sm:right-6 z-50 w-full sm:w-96 bg-card border-t sm:border border-border sm:rounded-2xl shadow-2xl overflow-hidden transition-all duration-300 pb-safe pr-safe ${
        isMinimized ? "h-16" : "h-[85vh] sm:h-[600px]"
      }`}
    >
      {/* Header */}
      <div className="flex items-center justify-between px-4 py-3 bg-primary text-primary-foreground">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-full bg-primary-foreground/20 flex items-center justify-center">
            <Sparkles className="w-5 h-5" />
          </div>
          <div>
            <h3 className="font-semibold">SaintSal™</h3>
            <p className="text-xs opacity-80">AI Assistant</p>
          </div>
        </div>
        <div className="flex items-center gap-1">
          <Button
            variant="ghost"
            size="icon"
            onClick={() => setIsMinimized(!isMinimized)}
            className="text-primary-foreground hover:bg-primary-foreground/20 min-w-[44px] min-h-[44px]"
            aria-label={isMinimized ? "Maximize chat" : "Minimize chat"}
          >
            <Minimize2 className="w-4 h-4" />
          </Button>
          <Button
            variant="ghost"
            size="icon"
            onClick={() => setIsOpen(false)}
            className="text-primary-foreground hover:bg-primary-foreground/20 min-w-[44px] min-h-[44px]"
            aria-label="Close chat"
          >
            <X className="w-4 h-4" />
          </Button>
        </div>
      </div>

      {!isMinimized && (
        <>
          {/* Messages */}
          <div className="h-[calc(85vh-240px)] sm:h-[400px] overflow-y-auto p-4 space-y-4">
            {messages.map((message) => (
              <div key={message.id} className={`flex ${message.role === "user" ? "justify-end" : "justify-start"}`}>
                <div
                  className={`max-w-[85%] px-4 py-3 rounded-2xl ${
                    message.role === "user"
                      ? "bg-primary text-primary-foreground rounded-br-md"
                      : "bg-muted text-foreground rounded-bl-md"
                  }`}
                >
                  <p className="text-sm whitespace-pre-line">{message.content}</p>
                </div>
              </div>
            ))}
            {isTyping && (
              <div className="flex justify-start">
                <div className="bg-muted px-4 py-3 rounded-2xl rounded-bl-md">
                  <div className="flex gap-1">
                    <span
                      className="w-2 h-2 bg-muted-foreground rounded-full animate-bounce"
                      style={{ animationDelay: "0ms" }}
                    />
                    <span
                      className="w-2 h-2 bg-muted-foreground rounded-full animate-bounce"
                      style={{ animationDelay: "150ms" }}
                    />
                    <span
                      className="w-2 h-2 bg-muted-foreground rounded-full animate-bounce"
                      style={{ animationDelay: "300ms" }}
                    />
                  </div>
                </div>
              </div>
            )}
            <div ref={messagesEndRef} />
          </div>

          {/* Quick Actions */}
          <div className="px-4 py-2 border-t border-border">
            <div className="flex flex-wrap gap-2">
              {quickActions.map((action) => (
                <button
                  key={action}
                  onClick={() => handleQuickAction(action)}
                  className="px-3 py-2 text-xs bg-secondary hover:bg-secondary/80 active:bg-secondary/60 rounded-full transition-colors min-h-[36px]"
                >
                  {action}
                </button>
              ))}
            </div>
          </div>

          {/* Input */}
          <div className="p-4 border-t border-border">
            <form
              onSubmit={(e) => {
                e.preventDefault()
                handleSend()
              }}
              className="flex gap-2"
            >
              <Input
                value={input}
                onChange={(e) => setInput(e.target.value)}
                placeholder="Ask SaintSal anything..."
                className="flex-1 bg-muted border-0 h-12"
              />
              <Button type="submit" size="icon" className="bg-primary text-primary-foreground h-12 w-12 shrink-0">
                <Send className="w-5 h-5" />
              </Button>
            </form>
          </div>
        </>
      )}
    </div>
  )
}
