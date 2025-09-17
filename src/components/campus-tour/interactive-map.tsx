"use client";

import Image from "next/image";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { Button } from "@/components/ui/button";
import { universityData } from "@/lib/campus-data";
import { MapPin, University, Users, Mail } from "lucide-react";

export function InteractiveMap() {
  return (
    <div className="relative w-full max-w-5xl mx-auto">
      <Image
        src="https://picsum.photos/seed/map/1200/800"
        alt="Stylized map of university campuses"
        width={1200}
        height={800}
        className="rounded-lg object-cover"
        data-ai-hint="isometric map"
      />
      {universityData.map((uni) => (
        <Popover key={uni.id}>
          <PopoverTrigger asChild>
            <Button
              size="icon"
              className="absolute rounded-full w-8 h-8 bg-primary hover:bg-primary/80 pulse-button border-2 border-background"
              style={{ top: uni.position.y, left: uni.position.x }}
            >
              <MapPin className="w-5 h-5" />
            </Button>
          </PopoverTrigger>
          <PopoverContent side="top" className="w-80 glass-card" align="center">
            <div className="space-y-3">
              <h3 className="font-bold text-lg text-primary">{uni.name}</h3>
              <div className="flex items-center gap-2 text-sm text-muted-foreground">
                <University className="w-4 h-4 text-accent" />
                <span>Established: {uni.established}</span>
              </div>
              <div className="flex items-center gap-2 text-sm text-muted-foreground">
                <Users className="w-4 h-4 text-accent" />
                <span>Enrollment: {uni.enrollment.toLocaleString()}</span>
              </div>
              <div className="flex items-center gap-2 text-sm text-muted-foreground">
                <Mail className="w-4 h-4 text-accent" />
                <a href={`mailto:${uni.contact}`} className="hover:text-accent transition-colors">
                  {uni.contact}
                </a>
              </div>
            </div>
          </PopoverContent>
        </Popover>
      ))}
    </div>
  );
}
