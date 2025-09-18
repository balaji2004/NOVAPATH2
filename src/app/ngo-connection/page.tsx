import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Briefcase, GraduationCap, ExternalLink, Mail, Phone, Globe } from "lucide-react";
import Link from "next/link";

export default function NGOConnectionPage() {
  return (
    <div className="container mx-auto px-4 py-12">
      <div className="text-center mb-12">
        <h1 className="text-4xl md:text-5xl font-extrabold tracking-tighter font-headline holographic-text">
          NGO & Career Services
        </h1>
        <p className="mt-4 max-w-2xl mx-auto text-lg text-muted-foreground">
          Collaborate with organizations making a real-world impact and find counseling services.
        </p>
      </div>

      <div className="space-y-12 max-w-4xl mx-auto">
        <Card className="glass-card">
          <CardHeader>
            <CardTitle className="flex items-center gap-3 text-2xl font-headline">
                <Briefcase className="text-primary h-7 w-7"/>
                NGOs Supporting Students
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-6 text-muted-foreground">
            <div>
              <h3 className="font-bold text-lg text-foreground">1. Sahuliyat Kashmir</h3>
              <p className="mt-1">Sahuliyat Kashmir focuses on providing quality education up to the 12th grade, especially for students facing financial constraints. They offer scholarships, school materials, and parental counseling to ensure children continue their education. <Link href="https://www.sahuliyatkashmir.com/" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">Sahuliyat Kashmir NGO</Link></p>
            </div>
            <div>
              <h3 className="font-bold text-lg text-foreground">2. CHINAR International</h3>
              <p className="mt-1">CHINAR International is dedicated to supporting orphans and vulnerable children, helping them attain quality education and reach their full potential. <Link href="https://www.chinarinternational.org/" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">Chinar International</Link></p>
            </div>
            <div>
              <h3 className="font-bold text-lg text-foreground">3. Helpline Humanity</h3>
              <p className="mt-1">Operating for over 20 years, Helpline Humanity is a non-profit organization working on various community initiatives, including educational support for students in need. <Link href="https://www.facebook.com/helplinehumanity/" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">Facebook</Link></p>
            </div>
            <div>
              <h3 className="font-bold text-lg text-foreground">4. Kashmir Lifeline (KLL)</h3>
              <p className="mt-1">KLL offers counseling services run by professional and trained counselors, clinical psychologists, and educationists, providing support to students facing academic and personal challenges. <Link href="https://kashmirlifeline.org/" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">kashmirlifeline.org</Link></p>
            </div>
          </CardContent>
        </Card>

        <Card className="glass-card">
          <CardHeader>
            <CardTitle className="flex items-center gap-3 text-2xl font-headline">
                <GraduationCap className="text-primary h-7 w-7"/>
                Career Counseling Services
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-6 text-muted-foreground">
            <div>
              <h3 className="font-bold text-lg text-foreground">1. Mindgroom Career Guidance and Counseling</h3>
              <p className="mt-1">Mindgroom offers comprehensive career counseling services, including aptitude assessments, career mapping, and guidance on subject selection, tailored for students in Jammu and Kashmir. <Link href="https://www.mindgroom.com/" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">Mindgroom : Career Counselling</Link></p>
            </div>
            <div>
              <h3 className="font-bold text-lg text-foreground">2. University of Kashmir – Centre for Career Planning and Counseling (CCPC)</h3>
              <p className="mt-1">Established in 2004, CCPC provides career guidance, coaching for competitive examinations, skill development, and placement support to students, including those from disadvantaged backgrounds. <Link href="https://ccpc.uok.edu.in/" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">ccpc.uok.edu.in</Link></p>
            </div>
            <div>
                <h3 className="font-bold text-lg text-foreground">3. Chenab Career Educational Trust</h3>
                <p className="mt-1">Based in Jammu, this trust offers affordable educational services, including career counseling and guidance for students aiming to pursue higher education. <Link href="https://www.justdial.com/j/chenab-career-educational-trust/Jammu/9999PX191-X191-180720173204-J2V4_BZDET" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">Justdial</Link></p>
            </div>
          </CardContent>
        </Card>

        <Card className="glass-card">
          <CardHeader>
            <CardTitle className="flex items-center gap-3 text-2xl font-headline">
                <Phone className="text-primary h-7 w-7"/>
                Contact Information
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-2 text-muted-foreground">
            <p><span className="font-semibold text-foreground">Sahuliyat Kashmir:</span> Email: sahuliyatkashmir@gmail.com | Phone: +91 70069 7584</p>
            <p><span className="font-semibold text-foreground">CHINAR International:</span> Website: <Link href="https://chinarinternational.org" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">chinarinternational.org</Link></p>
            <p><span className="font-semibold text-foreground">Helpline Humanity:</span> Facebook: <Link href="https://www.facebook.com/helplinehumanity" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">Helpline Humanity</Link></p>
            <p><span className="font-semibold text-foreground">Kashmir Lifeline (KLL):</span> Toll-Free: 1800 180 70 20 | Email: kashmirlifeline@kashmirlifeline.org</p>
            <p><span className="font-semibold text-foreground">Mindgroom Career Guidance:</span> Website: <Link href="https://mindgroom.com" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">mindgroom.com</Link></p>
            <p><span className="font-semibold text-foreground">University of Kashmir – CCPC:</span> Phone: 0194-2272265 | Email: contactccpc@uok.edu.in</p>
            <p><span className="font-semibold text-foreground">Chenab Career Educational Trust:</span> Website: <Link href="https://www.justdial.com/j/chenab-career-educational-trust/Jammu/9999PX191-X191-180720173204-J2V4_BZDET" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">justdial.com</Link></p>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
