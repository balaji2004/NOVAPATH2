import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

export default function QuizPage() {
  return (
    <div className="container mx-auto px-4 py-12">
      <div className="text-center mb-12">
        <h1 className="text-4xl md:text-5xl font-extrabold tracking-tighter font-headline holographic-text">
          Discover Your Path
        </h1>
        <p className="mt-4 max-w-2xl mx-auto text-lg text-muted-foreground">
          This interactive quiz will help you understand your strengths and suggest a career path.
        </p>
      </div>
      <Card className="max-w-2xl mx-auto glass-card">
        <CardHeader>
          <CardTitle className="text-center text-2xl font-headline">Ready to start?</CardTitle>
        </CardHeader>
        <CardContent className="text-center">
            <p className="text-muted-foreground mb-8">The quiz is designed to be quick, engaging, and insightful. Let's begin your journey of self-discovery.</p>
          <Button asChild size="lg" className="pulse-button">
            <Link href="/quiz/start">
              Start the Quiz <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
          </Button>
        </CardContent>
      </Card>
    </div>
  );
}
