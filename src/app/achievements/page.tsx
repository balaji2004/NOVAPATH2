import { BadgeGrid } from "@/components/achievements/badge-grid";

export default function AchievementsPage() {
  return (
    <div className="container mx-auto px-4 py-12">
      <div className="text-center mb-12">
        <h1 className="text-4xl md:text-5xl font-extrabold tracking-tighter font-headline holographic-text">
          Your Achievements
        </h1>
        <p className="mt-4 max-w-2xl mx-auto text-lg text-muted-foreground">
          Celebrate your progress and unlock new milestones on your journey.
        </p>
      </div>
      <BadgeGrid />
    </div>
  );
}
