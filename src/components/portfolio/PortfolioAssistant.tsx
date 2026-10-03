"use client";

import { useChat } from "@ai-sdk/react";
import { DefaultChatTransport, type UIMessage } from "ai";
import { Bot, RotateCcw } from "lucide-react";
import { useEffect, useRef, useState } from "react";
import { Conversation, ConversationContent, ConversationEmptyState, ConversationScrollButton } from "@/components/ai-elements/conversation";
import { Message, MessageContent, MessageResponse } from "@/components/ai-elements/message";
import { PromptInput, PromptInputFooter, PromptInputSubmit, PromptInputTextarea } from "@/components/ai-elements/prompt-input";
import { Shimmer } from "@/components/ai-elements/shimmer";
import { Button } from "@/components/ui/button";

const STORAGE_KEY = "sarwat-portfolio-conversation";
const suggestions = ["What are Sarwat's strongest skills?", "Tell me about the AI Content Studio", "Is Sarwat available for work?"];

export function PortfolioAssistant() {
  const [hydrated, setHydrated] = useState(false);
  const textareaRef = useRef<HTMLTextAreaElement>(null);
  const { messages, sendMessage, setMessages, status, stop, error } = useChat({
    id: "sarwat-portfolio-assistant",
    transport: new DefaultChatTransport({ api: "/api/chat" }),
  });

  useEffect(() => {
    try {
      const saved = window.localStorage.getItem(STORAGE_KEY);
      if (saved) setMessages(JSON.parse(saved) as UIMessage[]);
    } catch {
      window.localStorage.removeItem(STORAGE_KEY);
    }
    setHydrated(true);
  }, [setMessages]);

  useEffect(() => {
    if (!hydrated) return;
    window.localStorage.setItem(STORAGE_KEY, JSON.stringify(messages));
  }, [hydrated, messages]);

  const ask = (text: string) => {
    if (!text.trim() || status === "submitted" || status === "streaming") return;
    void sendMessage({ text: text.trim() });
  };

  return (
    <div className="assistant-shell grid min-h-[560px] overflow-hidden border border-border bg-card lg:grid-cols-[0.78fr_1.22fr]">
      <div className="flex flex-col justify-between border-b border-border bg-ink p-7 text-ink-foreground lg:border-b-0 lg:border-r lg:p-10">
        <div>
          <div className="mb-8 grid size-11 place-items-center rounded-md border border-ink-foreground/15 bg-ink-foreground/5 text-teal"><Bot className="size-5" /></div>
          <p className="eyebrow text-teal">Portfolio intelligence</p>
          <h3 className="mt-4 font-display text-3xl font-bold sm:text-4xl">Ask about my work.</h3>
          <p className="mt-5 max-w-sm text-sm leading-7 text-ink-muted">Grounded only in verified portfolio details—skills, projects, services, learning, availability, and how to connect.</p>
        </div>
        <div className="mt-10 space-y-2">
          {suggestions.map((suggestion) => (
            <Button key={suggestion} variant="ghost" className="h-auto w-full justify-start whitespace-normal border border-ink-foreground/10 px-4 py-3 text-left text-ink-muted hover:bg-ink-foreground/5 hover:text-ink-foreground" onClick={() => ask(suggestion)}>{suggestion}</Button>
          ))}
        </div>
      </div>
      <div className="flex min-h-[520px] flex-col bg-background p-4 sm:p-6">
        <div className="mb-3 flex items-center justify-between border-b border-border pb-3">
          <div><p className="text-sm font-semibold">Sarwat&apos;s assistant</p><p className="text-xs text-muted-foreground">One conversation saved in this browser</p></div>
          <Button variant="ghost" size="icon-sm" aria-label="Reset conversation" title="Reset conversation" onClick={() => { setMessages([]); window.localStorage.removeItem(STORAGE_KEY); textareaRef.current?.focus(); }}><RotateCcw /></Button>
        </div>
        <Conversation className="min-h-0 flex-1">
          <ConversationContent className="px-1 py-5 sm:px-3">
            {messages.length === 0 ? <ConversationEmptyState icon={<Bot className="size-7" />} title="Ask a portfolio question" description="Try a suggested question or write your own." /> : messages.map((message) => (
              <Message from={message.role} key={message.id}>
                <MessageContent>
                  {message.parts.map((part, index) => part.type === "text" ? <MessageResponse key={`${message.id}-${index}`}>{part.text}</MessageResponse> : null)}
                </MessageContent>
              </Message>
            ))}
            {status === "submitted" && <Shimmer className="text-sm">Thinking with portfolio context...</Shimmer>}
          </ConversationContent>
          <ConversationScrollButton />
        </Conversation>
        {error && <p role="alert" className="mb-3 text-sm text-destructive">{error.message}</p>}
        <PromptInput className="bg-card" onSubmit={({ text }) => ask(text)}>
          <PromptInputTextarea ref={textareaRef} placeholder="Ask about skills, projects, services, or availability..." />
          <PromptInputFooter className="justify-end"><PromptInputSubmit status={status} disabled={status === "submitted"} onStop={stop} /></PromptInputFooter>
        </PromptInput>
      </div>
    </div>
  );
}