import Link from 'next/link';
import { Card } from '@/components/ui/card';
import { HelpCircle, UserCheck, Users, CheckCircle } from 'lucide-react';

const forumFeatures = [
    {
        href: "/peer-to-peer-forum/q-and-a",
        icon: HelpCircle,
        title: "Q&A Forum",
        description: "Ask questions openly and get answers from senior peers. Anonymity is an option."
    },
    {
        href: "/peer-to-peer-forum/peer-mentor-matching",
        icon: UserCheck,
        title: "Peer Mentor Matching",
        description: "Find college students 1-3 years senior who took a similar academic path."
    },
    {
        href: "/peer-to-peer-forum/study-buddy-finder",
        icon: Users,
        title: "Study Buddy Finder",
        description: "Connect with peers preparing for the same entrance exams and study together."
    },
    {
        href: "/peer-to-peer-forum/reality-check",
        icon: CheckCircle,
        title: "Reality Check System",
        description: "Read genuine reviews of courses and colleges from current students and alumni."
    }
]

export default function PeerToPeerForumPage() {
  return (
    <div className="container mx-auto px-4 py-12">
      <div className="text-center mb-12">
        <h1 className="text-4xl md:text-5xl font-extrabold tracking-tighter font-headline holographic-text">
          Peer-to-Peer Forum
        </h1>
        <p className="mt-4 max-w-3xl mx-auto text-lg text-muted-foreground">
          Crowdsourced Guidance from Slightly Senior Students. Connect, ask, and learn from those who have been in your shoes.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
        {forumFeatures.map(feature => (
            <FeatureCard
                key={feature.href}
                href={feature.href}
                icon={<feature.icon className="h-8 w-8 text-primary" />}
                title={feature.title}
                description={feature.description}
            />
        ))}
      </div>
    </div>
  );
}


function FeatureCard({ href, icon, title, description }: { href: string; icon: React.ReactNode; title: string; description: string }) {
  return (
    <Link href={href} className="block h-full">
        <Card className="glass-card p-8 text-center items-center flex flex-col h-full hover:border-accent/50 transition-all duration-300 transform hover:-translate-y-2">
            <div className="mb-4">{icon}</div>
            <h3 className="font-headline text-2xl font-bold mb-2">{title}</h3>
            <p className="text-muted-foreground flex-grow">{description}</p>
        </Card>
    </Link>
  );
}