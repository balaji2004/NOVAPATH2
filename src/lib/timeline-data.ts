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
  // Engineering & Architecture
  {
    id: "jee-main-reg-1",
    title: "JEE Main 2026 Session 1 Registration",
    description: "Registration window for JEE Main Session 1. Official Website: jeemain.nta.nic.in",
    date: new Date("2025-11-30"),
    startDate: new Date("2025-11-01"),
    category: "Admissions",
  },
  {
    id: "jee-main-exam-1",
    title: "JEE Main 2026 Session 1 Exam",
    description: "Exam period for JEE Main Session 1. Official Website: jeemain.nta.nic.in",
    date: new Date("2026-01-31"),
    startDate: new Date("2026-01-20"),
    category: "Exams",
  },
  {
    id: "jee-main-exam-2",
    title: "JEE Main 2026 Session 2 Exam",
    description: "Exam period for JEE Main Session 2. Official Website: jeemain.nta.nic.in",
    date: new Date("2026-04-30"),
    startDate: new Date("2026-04-01"),
    category: "Exams",
  },
  {
    id: "jee-advanced-reg",
    title: "JEE Advanced 2026 Registration",
    description: "Registration for JEE Advanced for qualified candidates. Official Website: jeeadv.ac.in",
    date: new Date("2026-05-15"),
    startDate: new Date("2026-04-28"),
    category: "Admissions",
  },
  {
    id: "jee-advanced-exam",
    title: "JEE Advanced 2026 Exam",
    description: "Exam date for JEE Advanced. Official Website: jeeadv.ac.in",
    date: new Date("2026-05-31"),
    category: "Exams",
  },
  {
    id: "bitsat-exam-1",
    title: "BITSAT 2026 Session 1 Exam",
    description: "Exam period for BITSAT Session 1. Official Website: bitsadmission.com",
    date: new Date("2026-05-30"),
    startDate: new Date("2026-05-26"),
    category: "Exams",
  },
  {
    id: "bitsat-exam-2",
    title: "BITSAT 2026 Session 2 Exam",
    description: "Exam period for BITSAT Session 2. Official Website: bitsadmission.com",
    date: new Date("2026-06-30"),
    startDate: new Date("2026-06-15"),
    category: "Exams",
  },

  // Medical
  {
    id: "neet-ug-reg",
    title: "NEET (UG) 2026 Application",
    description: "Application window for NEET (UG). Official Website: neet.nta.nic.in",
    date: new Date("2026-03-31"),
    startDate: new Date("2026-02-01"),
    category: "Admissions",
  },
  {
    id: "neet-ug-exam",
    title: "NEET (UG) 2026 Exam Date",
    description: "Tentative exam date for NEET (UG). Official Website: neet.nta.nic.in",
    date: new Date("2026-05-03"),
    category: "Exams",
  },
  {
    id: "neet-ug-results",
    title: "NEET (UG) 2026 Results",
    description: "Result announcement for NEET (UG). Official Website: neet.nta.nic.in",
    date: new Date("2026-06-15"),
    category: "Results",
  },

  // Law
  {
    id: "clat-reg",
    title: "CLAT 2026 Registration Deadline",
    description: "Registration for CLAT (UG & PG). Official Website: consortiumofnlus.ac.in",
    date: new Date("2025-10-31"),
    startDate: new Date("2025-08-01"),
    category: "Admissions",
  },
  {
    id: "clat-exam",
    title: "CLAT 2026 Exam",
    description: "Exam date for CLAT (UG & PG). Official Website: consortiumofnlus.ac.in",
    date: new Date("2025-12-07"),
    category: "Exams",
  },

  // Design
  {
    id: "nid-dat-reg",
    title: "NID DAT 2026 Application Deadline",
    description: "Application deadline for NID DAT (Prelims). Official Website: admissions.nid.edu",
    date: new Date("2025-12-01"),
    startDate: new Date("2025-09-11"),
    category: "Admissions",
  },
  {
    id: "nid-dat-prelims",
    title: "NID DAT 2026 (Prelims) Exam",
    description: "Exam date for NID DAT Prelims. Official Website: admissions.nid.edu",
    date: new Date("2025-12-21"),
    category: "Exams",
  },
  {
    id: "nift-exam",
    title: "NIFT 2026 Entrance Exam",
    description: "Tentative exam date for NIFT. Official Website: nift.ac.in",
    date: new Date("2026-02-15"),
    category: "Exams",
  },

  // Existing Data
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
