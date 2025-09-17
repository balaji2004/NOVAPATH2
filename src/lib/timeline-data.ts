export type TimelineCategory =
  | "Exams"
  | "Admissions"
  | "Scholarships"
  | "Results";

export interface TimelineEvent {
  id: string;
  title: string;
  description: string;
  date: Date;
  startDate?: Date;
  category: TimelineCategory;
}

export const timelineData: TimelineEvent[] = [
  {
    id: "sat-exam-1",
    title: "SAT Exam Registration Deadline",
    description: "Final day to register for the upcoming SAT examination.",
    date: new Date("2024-09-05"),
    startDate: new Date("2024-08-01"),
    category: "Exams",
  },
  {
    id: "early-admissions-1",
    title: "Early Action Admissions Deadline",
    description: "Deadline for early action applications for most top universities.",
    date: new Date("2024-11-01"),
    startDate: new Date("2024-09-01"),
    category: "Admissions",
  },
  {
    id: "tech-innovators-scholarship",
    title: "Tech Innovators Scholarship",
    description: "Application window closes for the Tech Innovators scholarship for STEM students.",
    date: new Date("2024-12-15"),
    startDate: new Date("2024-10-01"),
    category: "Scholarships",
  },
  {
    id: "ap-results",
    title: "AP Exam Results Announcement",
    description: "Advanced Placement (AP) exam scores are released to students.",
    date: new Date("2024-07-08"),
    category: "Results",
  },
  {
    id: "act-exam-1",
    title: "ACT Exam Date",
    description: "National testing date for the ACT exam.",
    date: new Date("2024-10-26"),
    category: "Exams",
  },
  {
    id: "uc-apps",
    title: "University of California Application Deadline",
    description: "Application deadline for all UC campuses for fall admission.",
    date: new Date("2024-11-30"),
    startDate: new Date("2024-08-01"),
    category: "Admissions",
  },
  {
    id: "coca-cola-scholars",
    title: "Coca-Cola Scholars Program Deadline",
    description: "Deadline for the prestigious Coca-Cola Scholars Program scholarship.",
    date: new Date("2024-10-31"),
    startDate: new Date("2024-08-01"),
    category: "Scholarships",
  },
];
