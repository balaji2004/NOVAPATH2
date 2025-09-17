"use client";

import { useState, useEffect, useCallback, useRef } from "react";
import { usePathname } from "next/navigation";
import { Bot, Sparkles, X } from "lucide-react";
import {
  provideContextualHelp,
  type ProvideContextualHelpOutput,
} from "@/ai/flows/provide-contextual-help";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { useToast } from "@/hooks/use-toast";

export function AIAvatar() {
  const [help, setHelp] = useState<ProvideContextualHelpOutput | null>(null);
  const [isOpen, setIsOpen] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const pathname = usePathname();
  const { toast } = useToast();
  const timeoutRef = useRef<NodeJS.Timeout | null>(null);

  const pageDescriptions: { [key: string]: string } = {
    "/": "The user is on the homepage, which gives an overview of EduVoyager's features.",
    "/career-path":
      "The user is on the Career Path page, where they can input their interests, skills, and academic history to get AI-generated career recommendations.",
    "/timeline":
      "The user is on the Interactive Timeline page, viewing important academic and career-related dates.",
    "/campus-tour":
      "The user is on the Interactive Campus Tour page, exploring virtual college campuses.",
    "/achievements":
      "The user is on the Achievements page, viewing their unlocked badges and progress.",
  };

  const getHelp = useCallback(async () => {
    setIsLoading(true);
    setIsOpen(false);
    try {
      const result = await provideContextualHelp({
        pageContent: pageDescriptions[pathname] || "A page on EduVoyager.",
        userActivity: "User has been on the page for a short while, potentially looking for guidance.",
      });

      if (result.shouldProvideHelp) {
        setHelp(result);
        setIsOpen(true);
      } else {
        setHelp(null);
        setIsOpen(false);
      }
    } catch (error) {
      console.error("Error providing contextual help:", error);
      toast({
        variant: "destructive",
        title: "AI Error",
        description: "Could not get contextual help.",
      });
    } finally {
      setIsLoading(false);
    }
  }, [pathname, toast]);

  useEffect(() => {
    // Clear any existing timeouts when the page changes
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current);
    }
    setIsOpen(false); // Close bubble on navigation
    setHelp(null);

    // Set a new timeout to fetch help after a delay
    timeoutRef.current = setTimeout(() => {
      getHelp();
    }, 10000); // 10 seconds delay

    // Cleanup timeout on component unmount
    return () => {
      if (timeoutRef.current) {
        clearTimeout(timeoutRef.current);
      }
    };
  }, [pathname, getHelp]);

  const handleAvatarClick = () => {
    if (isOpen) {
      setIsOpen(false);
    } else if (help) {
      setIsOpen(true);
    } else {
      getHelp();
    }
  };

  return (
    <div className="fixed bottom-6 right-6 z-50">
      {isOpen && help?.shouldProvideHelp && (
        <Card className="mb-2 w-72 glass-card animate-in fade-in slide-in-from-bottom-5">
          <CardContent className="p-4 relative">
            <Button
              variant="ghost"
              size="icon"
              className="absolute top-2 right-2 h-6 w-6"
              onClick={() => setIsOpen(false)}
            >
              <X className="h-4 w-4" />
            </Button>
            <div className="flex items-start gap-3">
              <Sparkles className="h-5 w-5 text-accent flex-shrink-0 mt-1" />
              <p className="text-sm text-foreground/90">{help.helpMessage}</p>
            </div>
          </CardContent>
        </Card>
      )}
      <Button
        size="icon"
        className="rounded-full w-14 h-14 bg-primary hover:bg-primary/90 shadow-2xl shadow-primary/40 pulse-button"
        onClick={handleAvatarClick}
        disabled={isLoading}
      >
        <Bot
          className={`h-7 w-7 transition-transform duration-300 ${
            isLoading ? "animate-spin" : ""
          }`}
        />
        <span className="sr-only">AI Career Guide</span>
      </Button>
    </div>
  );
}
