
"use client";

import { useState, useMemo, useEffect } from "react";
import { timelineData, TimelineEvent, TimelineCategory } from "@/lib/timeline-data";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { cn } from "@/lib/utils";
import { differenceInDays, formatDistanceToNowStrict, differenceInMilliseconds } from "date-fns";
import { Bell, FileText, Award, CheckCircle } from "lucide-react";

const categoryConfig: {
  [key in TimelineCategory]: { icon: React.ElementType; color: string };
} = {
  Exams: { icon: FileText, color: "text-blue-400" },
  Admissions: { icon: Bell, color: "text-purple-400" },
  Scholarships: { icon: Award, color: "text-amber-400" },
  Results: { icon: CheckCircle, color: "text-green-400" },
};

function Countdown({ date }: { date: Date }) {
  const [timeLeft, setTimeLeft] = useState(differenceInMilliseconds(date, new Date()));

  useEffect(() => {
    if (timeLeft <= 0) return;
    const interval = setInterval(() => {
      setTimeLeft(differenceInMilliseconds(date, new Date()));
    }, 1000);
    return () => clearInterval(interval);
  }, [date, timeLeft]);

  if (timeLeft <= 0) {
    return <span className="text-muted-foreground">Deadline passed</span>;
  }

  const days = Math.floor(timeLeft / (1000 * 60 * 60 * 24));
  const hours = Math.floor((timeLeft % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  const minutes = Math.floor((timeLeft % (1000 * 60 * 60)) / (1000 * 60));
  const seconds = Math.floor((timeLeft % (1000 * 60)) / 1000);

  return (
    <span className="font-mono text-accent">
      {`${String(days).padStart(2, '0')}:${String(hours).padStart(2, '0')}:${String(minutes).padStart(2, '0')}:${String(seconds).padStart(2, '0')}`}
    </span>
  );
}

export function TimelineView() {
  const [activeFilters, setActiveFilters] = useState<TimelineCategory[]>([]);
  const [now, setNow] = useState(new Date());

  useEffect(() => {
    const timer = setInterval(() => setNow(new Date()), 60000); // Update every minute
    return () => clearInterval(timer);
  }, []);

  const toggleFilter = (category: TimelineCategory) => {
    setActiveFilters((prev) =>
      prev.includes(category)
        ? prev.filter((c) => c !== category)
        : [...prev, category]
    );
  };

  const filteredEvents = useMemo(() => {
    const sorted = [...timelineData].sort((a, b) => a.date.getTime() - b.date.getTime());
    if (activeFilters.length === 0) {
      return sorted;
    }
    return sorted.filter((event) => activeFilters.includes(event.category));
  }, [activeFilters]);

  return (
    <div>
      <div className="flex justify-center gap-2 mb-8 flex-wrap">
        {(Object.keys(categoryConfig) as TimelineCategory[]).map((category) => (
          <Button
            key={category}
            variant={activeFilters.includes(category) ? "default" : "outline"}
            onClick={() => toggleFilter(category)}
            className={cn(
              "transition-all duration-300",
              activeFilters.includes(category) && 'pulse-button bg-primary/20 border-primary'
            )}
          >
            {category}
          </Button>
        ))}
      </div>

      <div className="relative">
        {/* Timeline Axis */}
        <div className="absolute left-4 md:left-1/2 -ml-[1px] h-full w-[2px] bg-primary/20"></div>

        <div className="space-y-12">
          {filteredEvents.map((event, index) => {
            const isPast = event.date < now;
            const progress = event.startDate ? Math.min(100, Math.max(0, (differenceInDays(now, event.startDate) / differenceInDays(event.date, event.startDate)) * 100)) : (isPast ? 100 : 0);
            const { icon: Icon, color } = categoryConfig[event.category];
            const isRightSide = index % 2 !== 0;
            
            return (
              <div key={event.id} className={cn("relative md:flex", isRightSide ? 'md:justify-end' : '')}>
                <div className="absolute top-1/2 -translate-y-1/2 left-4 md:left-1/2 -ml-4 z-10 w-8 h-8 rounded-full flex items-center justify-center bg-background border-2 border-primary">
                  <Icon className={cn("w-5 h-5", color)} />
                </div>
                <div className={cn(
                  "pl-12 md:pl-0 md:w-1/2",
                  isRightSide ? "md:pr-8" : "md:pl-8"
                )}>
                    <Card className="glass-card">
                      <Accordion type="single" collapsible>
                        <AccordionItem value="item-1" className="border-b-0">
                          <AccordionTrigger className={cn("p-4 hover:no-underline", isRightSide && "md:flex-row-reverse")}>
                              <div className={cn("w-full", isRightSide && "md:text-right")}>
                                <div className={cn("flex justify-between items-start", isRightSide && "md:flex-row-reverse")}>
                                  <CardDescription className={cn("mb-1", color)}>{event.category}</CardDescription>
                                  <CardDescription className={cn("mb-1 text-xs")}>{event.domain}</CardDescription>
                                </div>
                                <CardTitle className="text-lg font-headline text-left">{event.title}</CardTitle>
                                <div className="text-sm text-muted-foreground mt-2 text-left">{event.date.toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}</div>
                              </div>
                          </AccordionTrigger>
                          <AccordionContent className="px-4 pb-4">
                            <p className="text-foreground/80 mb-4">{event.description}</p>
                            {!isPast ? (
                              <div className="text-sm">
                                <span className="text-muted-foreground">Time Left: </span>
                                <Countdown date={event.date}/>
                              </div>
                            ) : (
                               <p className="text-sm text-muted-foreground">This event was {formatDistanceToNowStrict(event.date)} ago.</p>
                            )}
                          </AccordionContent>
                        </AccordionItem>
                      </Accordion>
                    </Card>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
