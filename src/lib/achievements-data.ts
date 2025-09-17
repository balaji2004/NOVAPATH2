import { Compass, CalendarCheck, Map, Bot, Award, Rocket } from "lucide-react";
import type { LucideIcon } from "lucide-react";

export interface Achievement {
  id: string;
  title: string;
  description: string;
  unlocked: boolean;
  icon: LucideIcon;
}

export const achievements: Achievement[] = [
  {
    id: "first-step",
    title: "First Step",
    description: "Completed your profile setup.",
    unlocked: true,
    icon: Rocket,
  },
  {
    id: "pathfinder",
    title: "Pathfinder",
    description: "Generated your first career path.",
    unlocked: true,
    icon: Compass,
  },
  {
    id: "time-traveler",
    title: "Time Traveler",
    description: "Explored the interactive timeline.",
    unlocked: true,
    icon: CalendarCheck,
  },
  {
    id: "virtual-explorer",
    title: "Virtual Explorer",
    description: "Took your first 3D campus tour.",
    unlocked: false,
    icon: Map,
  },
  {
    id: "ai-collaborator",
    title: "AI Collaborator",
    description: "Interacted with the AI Avatar guide.",
    unlocked: true,
    icon: Bot,
  },
  {
    id: "goal-setter",
    title: "Goal Setter",
    description: "Added 5 items to your personal calendar.",
    unlocked: false,
    icon: Award,
  },
];
