"use client";

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Star, CheckCircle } from 'lucide-react';

const mockReviews = [
  {
    course: "B.Tech in AI & ML",
    university: "Chandigarh University",
    rating: 4,
    review: "The curriculum is industry-aligned, but the faculty could be more experienced. Great campus life though!",
    author: "Student, 2nd Year",
  },
  {
    course: "Integrated M.Tech in Nanotechnology",
    university: "VIT Vellore",
    rating: 5,
    review: "Incredible research opportunities and state-of-the-art labs. The workload is intense but worth it.",
    author: "Alumni, Graduated 2023",
  },
];

export function RealityCheckSystem() {
  return (
    <Card className="glass-card overflow-hidden">
      <CardHeader>
        <CardTitle className="flex items-center gap-2 text-2xl font-headline">
          <CheckCircle className="text-primary" />
          Reality Check System
        </CardTitle>
        <CardDescription>
          Genuine, experience-based reviews of courses and colleges from current students and alumni.
        </CardDescription>
      </CardHeader>
      <CardContent>
        <div className="space-y-4">
          {mockReviews.map((review, index) => (
            <Card key={index} className="bg-muted/50 p-4">
              <div className="flex justify-between items-start">
                <div>
                  <h4 className="font-bold">{review.course}</h4>
                  <p className="text-sm text-muted-foreground">{review.university}</p>
                </div>
                <div className="flex items-center gap-1">
                  {[...Array(5)].map((_, i) => (
                    <Star
                      key={i}
                      className={`h-4 w-4 ${i < review.rating ? 'text-amber-400 fill-amber-400' : 'text-muted-foreground/50'}`}
                    />
                  ))}
                </div>
              </div>
              <p className="text-sm mt-2 italic">"{review.review}"</p>
              <p className="text-xs text-right mt-2 text-muted-foreground">- {review.author}</p>
            </Card>
          ))}
        </div>
      </CardContent>
    </Card>
  );
}
