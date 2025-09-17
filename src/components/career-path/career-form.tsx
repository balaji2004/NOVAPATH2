"use client";

import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { useState } from "react";
import {
  generateCareerPaths,
  type GenerateCareerPathsOutput,
} from "@/ai/flows/generate-career-paths";
import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Textarea } from "@/components/ui/textarea";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Wand2, BrainCircuit, Briefcase, GraduationCap } from "lucide-react";
import { useToast } from "@/hooks/use-toast";
import { Skeleton } from "../ui/skeleton";

const formSchema = z.object({
  interests: z.string().min(10, "Please describe your interests in more detail."),
  skills: z.string().min(10, "Please describe your skills in more detail."),
  academicHistory: z.string().min(10, "Please describe your academic history in more detail."),
});

type FormValues = z.infer<typeof formSchema>;

export function CareerForm() {
  const [result, setResult] = useState<GenerateCareerPathsOutput | null>(null);
  const [isLoading, setIsLoading] = useState(false);
  const { toast } = useToast();

  const form = useForm<FormValues>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      interests: "",
      skills: "",
      academicHistory: "",
    },
  });

  async function onSubmit(values: FormValues) {
    setIsLoading(true);
    setResult(null);
    try {
      const response = await generateCareerPaths(values);
      setResult(response);
    } catch (error) {
      console.error("Error generating career paths:", error);
      toast({
        variant: "destructive",
        title: "AI Generation Failed",
        description: "There was an error generating your career paths. Please try again.",
      });
    } finally {
      setIsLoading(false);
    }
  }

  const parsedResults = result ? result.careerPaths.split('\n\n') : [];
  const roles = parsedResults.find(p => p.startsWith('**Potential Roles'));
  const education = parsedResults.find(p => p.startsWith('**Required Education'));
  const trends = parsedResults.find(p => p.startsWith('**Future Job Market Trends'));

  return (
    <>
      <Card className="glass-card max-w-4xl mx-auto">
        <CardHeader>
          <CardTitle className="flex items-center gap-2 text-2xl font-headline">
            <Wand2 className="text-accent" />
            Your Personal Details
          </CardTitle>
        </CardHeader>
        <CardContent>
          <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
              <FormField
                control={form.control}
                name="interests"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Your Interests</FormLabel>
                    <FormControl>
                      <Textarea placeholder="e.g., Video games, sci-fi movies, building computers..." {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="skills"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Your Skills</FormLabel>
                    <FormControl>
                      <Textarea placeholder="e.g., Python programming, graphic design, public speaking..." {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="academicHistory"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Academic History</FormLabel>
                    <FormControl>
                      <Textarea placeholder="e.g., High school diploma with focus on sciences, online coding courses..." {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <Button type="submit" disabled={isLoading} className="pulse-button w-full">
                {isLoading ? "Generating..." : "Generate Paths"}
              </Button>
            </form>
          </Form>
        </CardContent>
      </Card>

      {(isLoading || result) && (
        <div className="mt-12 max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-8 holographic-text">Your Career Constellation</h2>
          {isLoading ? (
            <div className="grid md:grid-cols-3 gap-8">
              <Skeleton className="h-64 w-full" />
              <Skeleton className="h-64 w-full" />
              <Skeleton className="h-64 w-full" />
            </div>
          ) : (
            <div className="grid md:grid-cols-3 gap-8 animate-in fade-in-50">
                <ResultCard icon={Briefcase} title="Potential Roles" content={roles} />
                <ResultCard icon={GraduationCap} title="Required Education" content={education} />
                <ResultCard icon={BrainCircuit} title="Job Market Trends" content={trends} />
            </div>
          )}
        </div>
      )}
    </>
  );
}

function ResultCard({ icon: Icon, title, content }: { icon: React.ElementType, title: string, content?: string }) {
    if (!content) return null;
    return (
        <Card className="glass-card h-full" style={{ animation: `float ${Math.random()*5 + 8}s ease-in-out infinite` }}>
            <CardHeader className="flex-row items-center gap-4 space-y-0">
                <Icon className="w-8 h-8 text-primary" />
                <CardTitle className="font-headline text-xl">{title}</CardTitle>
            </CardHeader>
            <CardContent className="text-muted-foreground prose prose-sm prose-invert prose-p:my-1">
                {content.replace(`**${title}:**`, '').split('*').map((item, i) => item.trim() && <p key={i}>- {item.trim()}</p>)}
            </CardContent>
        </Card>
    )
}
