import { TimelineView } from "@/components/timeline/timeline-view";

export default function TimelinePage() {
  return (
    <div className="container mx-auto px-4 py-12">
      <div className="text-center mb-12">
        <h1 className="text-4xl md:text-5xl font-extrabold tracking-tighter font-headline holographic-text">
          Your Academic Timeline
        </h1>
        <p className="mt-4 max-w-2xl mx-auto text-lg text-muted-foreground">
          Stay ahead of deadlines for exams, admissions, scholarships, and results.
        </p>
      </div>
      <TimelineView />
    </div>
  );
}
