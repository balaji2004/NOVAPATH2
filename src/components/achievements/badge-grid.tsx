import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { achievements } from "@/lib/achievements-data";
import { CheckCircle2, Lock } from "lucide-react";

export function BadgeGrid() {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
      {achievements.map((achievement, index) => (
        <Card
          key={achievement.id}
          className={`glass-card text-center transition-all duration-300 ${
            achievement.unlocked ? "border-accent/50" : "opacity-60"
          }`}
          style={{ animation: `float ${6 + index}s ease-in-out infinite` }}
        >
          <CardHeader className="items-center">
            <div
              className={`relative w-24 h-24 rounded-full flex items-center justify-center bg-primary/10 border ${
                achievement.unlocked
                  ? "border-accent"
                  : "border-primary/20"
              }`}
            >
              <achievement.icon
                className={`w-12 h-12 ${
                  achievement.unlocked ? "text-accent" : "text-primary/50"
                }`}
              />
              {achievement.unlocked ? (
                <CheckCircle2 className="absolute -bottom-2 -right-2 w-8 h-8 bg-background text-accent rounded-full p-1" />
              ) : (
                <Lock className="absolute -bottom-2 -right-2 w-8 h-8 bg-background text-muted-foreground rounded-full p-1.5" />
              )}
            </div>
          </CardHeader>
          <CardContent>
            <CardTitle className="text-lg font-headline">
              {achievement.title}
            </CardTitle>
            <p className="text-muted-foreground text-sm mt-2">
              {achievement.description}
            </p>
          </CardContent>
        </Card>
      ))}
    </div>
  );
}
