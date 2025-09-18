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
          Connect with organizations making a real-world impact and find professional counseling services.
        </p>
      </div>

      <div className="max-w-6xl mx-auto space-y-8">
        {/* NGOs Section */}
        <div>
          <div className="flex items-center gap-3 mb-6">
            <Briefcase className="text-primary h-6 w-6"/>
            <h2 className="text-2xl font-bold font-headline">Student Support NGOs</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <ServiceCard
              title="Sahuliyat Kashmir"
              description="Quality education support and scholarships for financially constrained students up to grade 12."
              tags={["Education", "Scholarships", "Counseling"]}
              contact={{
                email: "sahuliyatkashmir@gmail.com",
                phone: "+91 70069 7584",
                website: "https://www.sahuliyatkashmir.com/"
              }}
            />
            <ServiceCard
              title="CHINAR International"
              description="Supporting orphans and vulnerable children to achieve quality education and reach their potential."
              tags={["Orphan Support", "Education", "Child Welfare"]}
              contact={{
                website: "https://www.chinarinternational.org/"
              }}
            />
            <ServiceCard
              title="Helpline Humanity"
              description="20+ years of community support including educational assistance for students in need."
              tags={["Community Support", "Education", "Social Work"]}
              contact={{
                facebook: "https://www.facebook.com/helplinehumanity/"
              }}
            />
            <ServiceCard
              title="Kashmir Lifeline (KLL)"
              description="Professional counseling with trained psychologists and educationists for academic challenges."
              tags={["Counseling", "Psychology", "Academic Support"]}
              contact={{
                phone: "1800 180 70 20",
                email: "kashmirlifeline@kashmirlifeline.org",
                website: "https://kashmirlifeline.org/"
              }}
            />
          </div>
        </div>

        {/* Career Services Section */}
        <div>
          <div className="flex items-center gap-3 mb-6">
            <GraduationCap className="text-primary h-6 w-6"/>
            <h2 className="text-2xl font-bold font-headline">Career Counseling Services</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <ServiceCard
              title="Mindgroom Career Guidance"
              description="Comprehensive career counseling with aptitude assessments and career mapping for J&K students."
              tags={["Career Guidance", "Aptitude Tests", "Subject Selection"]}
              contact={{
                website: "https://www.mindgroom.com/"
              }}
            />
            <ServiceCard
              title="University of Kashmir - CCPC"
              description="Established center providing career guidance, competitive exam coaching, and placement support."
              tags={["Career Planning", "Exam Coaching", "Placement Support"]}
              contact={{
                phone: "0194-2272265",
                email: "contactccpc@uok.edu.in",
                website: "https://ccpc.uok.edu.in/"
              }}
            />
            <ServiceCard
              title="Chenab Career Educational Trust"
              description="Affordable educational services and career counseling for higher education aspirants in Jammu."
              tags={["Career Counseling", "Higher Education", "Affordable Services"]}
              contact={{
                website: "https://www.justdial.com/j/chenab-career-educational-trust/Jammu/9999PX191-X191-180720173204-J2V4_BZDET"
              }}
            />
          </div>
        </div>
      </div>
    </div>
  );
}

interface ContactInfo {
  email?: string;
  phone?: string;
  website?: string;
  facebook?: string;
}

interface ServiceCardProps {
  title: string;
  description: string;
  tags: string[];
  contact: ContactInfo;
}

function ServiceCard({ title, description, tags, contact }: ServiceCardProps) {
  return (
    <Card className="glass-card h-full hover:border-primary/50 transition-all duration-300">
      <CardHeader className="pb-3">
        <CardTitle className="text-lg font-semibold">{title}</CardTitle>
      </CardHeader>
      <CardContent className="space-y-4">
        <p className="text-sm text-muted-foreground leading-relaxed">{description}</p>
        
        <div className="flex flex-wrap gap-1">
          {tags.map((tag) => (
            <Badge key={tag} variant="secondary" className="text-xs">
              {tag}
            </Badge>
          ))}
        </div>
        
        <div className="flex flex-wrap gap-2 pt-2">
          {contact.website && (
            <Button asChild size="sm" variant="outline" className="h-8">
              <Link href={contact.website} target="_blank" rel="noopener noreferrer">
                <Globe className="h-3 w-3 mr-1" />
                Website
              </Link>
            </Button>
          )}
          {contact.email && (
            <Button asChild size="sm" variant="outline" className="h-8">
              <Link href={`mailto:${contact.email}`}>
                <Mail className="h-3 w-3 mr-1" />
                Email
              </Link>
            </Button>
          )}
          {contact.phone && (
            <Button asChild size="sm" variant="outline" className="h-8">
              <Link href={`tel:${contact.phone}`}>
                <Phone className="h-3 w-3 mr-1" />
                Call
              </Link>
            </Button>
          )}
          {contact.facebook && (
            <Button asChild size="sm" variant="outline" className="h-8">
              <Link href={contact.facebook} target="_blank" rel="noopener noreferrer">
                <ExternalLink className="h-3 w-3 mr-1" />
                Facebook
              </Link>
            </Button>
          )}
        </div>
      </CardContent>
    </Card>
  );
}
