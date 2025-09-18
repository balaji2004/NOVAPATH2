"use client";

import { useState } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Textarea } from '@/components/ui/textarea';
import { HelpCircle, Send } from 'lucide-react';

export function QAPlatform() {
  const [question, setQuestion] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = () => {
    if (!question) return;
    setIsSubmitting(true);
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSubmitted(true);
      setQuestion('');
      setTimeout(() => setIsSubmitted(false), 3000);
    }, 1000);
  };

  return (
    <Card className="glass-card overflow-hidden">
      <CardHeader>
        <CardTitle className="flex items-center gap-2 text-2xl font-headline">
          <HelpCircle className="text-primary" />
          Anonymous Q&A Platform
        </CardTitle>
        <CardDescription>
          Ask questions openly without revealing your identity. Get answers from senior peers.
        </CardDescription>
      </CardHeader>
      <CardContent>
        <div className="space-y-4">
          <Textarea
            placeholder="e.g., How much time should I dedicate to competitive programming in my first year?"
            value={question}
            onChange={(e) => setQuestion(e.target.value)}
            rows={4}
          />
          <Button onClick={handleSubmit} disabled={isSubmitting || !question} className="w-full">
            <Send className="mr-2 h-4 w-4" />
            {isSubmitting ? 'Submitting...' : 'Ask Anonymously'}
          </Button>
          {isSubmitted && (
            <p className="text-sm text-green-500 text-center animate-in fade-in-50">
              Your question has been submitted successfully! Answers will appear in the forum feed.
            </p>
          )}
        </div>
      </CardContent>
    </Card>
  );
}
