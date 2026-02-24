"use client"

import { useState, useRef, useEffect, useCallback, type FormEvent } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { MessageSquare, X, Send, Bot, User, Sparkles } from "lucide-react"

interface Message {
  id: string
  role: "user" | "assistant"
  content: string
}

function TypingIndicator() {
  return (
    <div className="flex items-center gap-1.5 px-1 py-1">
      {[0, 1, 2].map((i) => (
        <span
          key={i}
          className="h-1.5 w-1.5 rounded-full bg-primary/60 animate-bounce"
          style={{ animationDelay: `${i * 0.15}s` }}
        />
      ))}
    </div>
  )
}

export function AiChat() {
  const [isOpen, setIsOpen] = useState(false)
  const [messages, setMessages] = useState<Message[]>([])
  const [input, setInput] = useState("")
  const [isLoading, setIsLoading] = useState(false)
  const messagesEndRef = useRef<HTMLDivElement>(null)
  const inputRef = useRef<HTMLInputElement>(null)

  const scrollToBottom = useCallback(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" })
  }, [])

  useEffect(() => {
    scrollToBottom()
  }, [messages, isLoading, scrollToBottom])

  useEffect(() => {
    if (isOpen && inputRef.current) {
      inputRef.current.focus()
    }
  }, [isOpen])

  const sendMessage = async (e: FormEvent) => {
    e.preventDefault()
    const trimmed = input.trim()
    if (!trimmed || isLoading) return

    const userMessage: Message = {
      id: Date.now().toString(),
      role: "user",
      content: trimmed,
    }

    setMessages((prev) => [...prev, userMessage])
    setInput("")
    setIsLoading(true)

    try {
      const res = await fetch("https://abhay-portfolio-backend.up.railway.app/chat", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ message: trimmed }),
      })

      if (!res.ok) throw new Error("Failed to fetch")

      const data = await res.json()

      const assistantMessage: Message = {
        id: (Date.now() + 1).toString(),
        role: "assistant",
        content: data.reply,
      }

      setMessages((prev) => [...prev, assistantMessage])
    } catch {
      const errorMessage: Message = {
        id: (Date.now() + 1).toString(),
        role: "assistant",
        content: "Sorry, I couldn't connect to the AI server right now.",
      }
      setMessages((prev) => [...prev, errorMessage])
    } finally {
      setIsLoading(false)
    }
  }

  return (
    <>
      <button
        onClick={() => setIsOpen(true)}
        className={`fixed right-4 bottom-4 sm:right-6 sm:bottom-6 z-50 flex h-14 w-14 sm:h-16 sm:w-16 items-center justify-center rounded-full bg-primary text-primary-foreground shadow-2xl transition-all hover:scale-110 active:scale-90 cursor-pointer ${
          isOpen ? "pointer-events-none opacity-0 scale-0" : "scale-100 opacity-100"
        }`}
        aria-label="Open AI Chat"
        title="Open AI Chat"
      >
        <MessageSquare className="h-6 w-6 sm:h-7 sm:w-7" />
        <span className="absolute -top-1 -right-1 flex h-5 w-5 items-center justify-center rounded-full bg-foreground text-[10px] font-black text-background border-2 border-primary">
          AI
        </span>
      </button>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 100, scale: 0.9 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 100, scale: 0.9 }}
            transition={{ type: "spring", damping: 25, stiffness: 200 }}
            className="fixed bottom-0 right-0 left-0 z-50 flex h-[90vh] flex-col overflow-hidden rounded-t-[2rem] border-t border-x border-border bg-background shadow-[0_-10px_40px_-15px_rgba(0,0,0,0.3)] sm:bottom-6 sm:right-6 sm:left-auto sm:h-[650px] sm:max-h-[calc(100vh-80px)] sm:w-[420px] sm:rounded-3xl sm:border"
          >
            {/* Header */}
            <div className="flex items-center justify-between border-b border-border bg-muted/30 px-6 py-5 sm:py-6">
              <div className="flex items-center gap-4">
                <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-primary/10">
                  <Sparkles className="h-6 w-6 text-primary" />
                </div>
                <div>
                  <h3 className="text-sm font-black text-foreground tracking-tight">
                    TECHNICAL ASSISTANT
                  </h3>
                  <div className="flex items-center gap-2">
                    <span className="h-2 w-2 rounded-full bg-green-500 animate-pulse" />
                    <p className="text-[10px] font-bold text-muted-foreground uppercase tracking-widest">
                      Online
                    </p>
                  </div>
                </div>
              </div>
              <button
                onClick={() => setIsOpen(false)}
                className="flex h-12 w-12 items-center justify-center rounded-2xl transition-all hover:bg-muted hover:rotate-90 active:scale-90"
                aria-label="Close chat"
              >
                <X className="h-6 w-6 text-muted-foreground" />
              </button>
            </div>

            {/* Messages */}
            <div className="flex-1 overflow-y-auto px-5 py-8 sm:px-6">
              {messages.length === 0 && (
                <div className="flex h-full flex-col items-center justify-center text-center px-4">
                  <div className="mb-6 rounded-3xl bg-secondary/30 p-6">
                    <Bot className="h-12 w-12 text-primary" />
                  </div>
                  <h4 className="mb-3 text-lg font-black text-foreground uppercase tracking-widest">
                    AI CONCIERGE
                  </h4>
                  <p className="mb-10 max-w-[280px] text-sm font-medium leading-relaxed text-muted-foreground">
                    I&apos;m here to answer any questions about Abhay&apos;s technical background and projects.
                  </p>
                  <div className="flex flex-col gap-3 w-full max-w-[320px]">
                    {[
                      "What is his tech stack?",
                      "Tell me about his work experience",
                      "Show me his top projects",
                    ].map((suggestion) => (
                      <button
                        key={suggestion}
                        onClick={() => {
                          setInput(suggestion)
                          inputRef.current?.focus()
                        }}
                        className="rounded-2xl border-2 border-border bg-background px-5 py-4 text-left text-sm font-bold text-muted-foreground transition-all hover:border-primary/50 hover:bg-muted/50 hover:text-foreground active:scale-95"
                      >
                        {suggestion}
                      </button>
                    ))}
                  </div>
                </div>
              )}

              <div className="flex flex-col gap-6">
                {messages.map((message) => (
                  <div
                    key={message.id}
                    className={`flex gap-4 ${
                      message.role === "user" ? "flex-row-reverse" : ""
                    }`}
                  >
                    <div
                      className={`flex h-9 w-9 shrink-0 items-center justify-center rounded-xl shadow-sm ${
                        message.role === "user"
                          ? "bg-primary text-primary-foreground"
                          : "bg-secondary text-foreground"
                      }`}
                    >
                      {message.role === "user" ? (
                        <User className="h-5 w-5" />
                      ) : (
                        <Bot className="h-5 w-5" />
                      )}
                    </div>
                    <div
                      className={`max-w-[85%] rounded-2xl px-5 py-4 text-sm font-medium leading-relaxed shadow-sm ${
                        message.role === "user"
                          ? "bg-primary/10 border-2 border-primary/20 text-foreground"
                          : "border-2 border-border bg-background text-foreground"
                      }`}
                    >
                      {message.content}
                    </div>
                  </div>
                ))}
              </div>

              {isLoading && (
                <div className="mt-6 flex gap-4">
                  <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-xl bg-secondary text-foreground shadow-sm">
                    <Bot className="h-5 w-5" />
                  </div>
                  <div className="rounded-2xl border-2 border-border bg-background px-4 py-3 shadow-sm">
                    <TypingIndicator />
                  </div>
                </div>
              )}

              <div ref={messagesEndRef} className="h-4" />
            </div>

            {/* Input form */}
            <form
              onSubmit={sendMessage}
              className="border-t border-border bg-muted/10 p-5 sm:p-6"
            >
              <div className="flex items-center gap-3 rounded-2xl border-2 border-border bg-background p-2 transition-all focus-within:border-primary/50 focus-within:shadow-lg focus-within:shadow-primary/5">
                <input
                  ref={inputRef}
                  type="text"
                  value={input}
                  onChange={(e) => setInput(e.target.value)}
                  placeholder="Ask a question..."
                  className="flex-1 bg-transparent py-3 px-3 text-sm font-bold text-foreground outline-none placeholder:text-muted-foreground/60"
                  disabled={isLoading}
                />
                <button
                  type="submit"
                  disabled={isLoading || !input.trim()}
                  className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-primary text-primary-foreground shadow-lg shadow-primary/20 transition-all disabled:opacity-50 hover:bg-primary/90 active:scale-90"
                  aria-label="Send message"
                >
                  <Send className="h-5 w-5" />
                </button>
              </div>
            </form>
          </motion.div>
        )}
      </AnimatePresence>

    </>
  )
}

