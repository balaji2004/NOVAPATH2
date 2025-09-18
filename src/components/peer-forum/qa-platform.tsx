"use client";

import { useState } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Textarea } from '@/components/ui/textarea';
import { HelpCircle, Send } from 'lucide-react';
import { Checkbox } from '../ui/checkbox';
import { Label } from '../ui/label';

export function QAPlatform() {
  const [question, setQuestion] = useState('');
  const [isAnonymous, setIsAnonymous] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = () => {
    if (!question) return;
    setIsSubmitting(true);
    console.log('New Question:', { question, isAnonymous });
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSubmitted(true);
      setQuestion('');
      setIsAnonymous(false);
      setTimeout(() => setIsSubmitted(false), 3000);
    }, 1000);
  };

  return (
    <Card className="glass-card overflow-hidden">
      <CardHeader>
        <CardTitle className="flex items-center gap-2 text-2xl font-headline">
          <HelpCircle className="text-primary" />
          Ask a Question
        </CardTitle>
        <CardDescription>
          Ask questions openly. Your identity can be kept anonymous. Get answers from senior peers.
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
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-2">
              <Checkbox id="anonymous" checked={isAnonymous} onCheckedChange={(checked) => setIsAnonymous(!!checked)} />
              <Label htmlFor="anonymous" className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70">
                Ask Anonymously
              </Label>
            </div>
            <Button onClick={handleSubmit} disabled={isSubmitting || !question} className="w-full max-w-xs">
              <Send className="mr-2 h-4 w-4" />
              {isSubmitting ? 'Submitting...' : 'Submit Question'}
            </Button>
          </div>
          {isSubmitted && (
            <p className="text-sm text-green-500 text-center animate-in fade-in-50">
              Your question has been submitted successfully! It will now appear in the forum feed.
            </p>
          )}
        </div>
      </CardContent>
    </Card>
  );
}