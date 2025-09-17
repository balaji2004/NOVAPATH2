import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Compass, CalendarDays, ArrowRight } from 'lucide-react';
import Link from 'next/link';

const features = [
  {
    icon: Compass,
    title: 'Personalized Career Path',
    description: 'Discover your future with AI-driven career suggestions.',
    href: '/career-path',
    delay: '100ms',
  },
  {
    icon: CalendarDays,
    title: 'Interactive Timeline',
    description: 'Never miss a deadline with our smart milestone tracker.',
    href: '/timeline',
    delay: '200ms',
  },
];

export default function Home() {
  return (
    <div className="container mx-auto px-4 py-24 sm:py-32">
      <div className="flex flex-col items-center text-center">
        <h1 className="text-5xl md:text-7xl lg:text-8xl font-extrabold tracking-tighter font-headline holographic-text">
          EduVoyager
        </h1>
        <p className="mt-4 max-w-2xl text-lg md:text-xl text-muted-foreground">
          Navigate Your Future. Discover your path to success with AI-powered
          guidance, immersive campus tours, and a personalized journey.
        </p>
        <div className="mt-8 flex gap-4">
          <Button
            asChild
            size="lg"
            className="bg-primary text-primary-foreground hover:bg-primary/90 pulse-button"
          >
            <Link href="/career-path">
              Start Your Voyage <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
          </Button>
        </div>
      </div>

      <div className="mt-20 md:mt-32 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-8 max-w-3xl mx-auto">
        {features.map((feature) => (
          <Link href={feature.href} key={feature.title}>
            <Card
              className="glass-card h-full group animate-in fade-in"
              style={{ animationDelay: feature.delay }}
            >
              <CardHeader className="flex flex-col items-center text-center">
                <div className="p-4 bg-primary/10 rounded-full mb-4 border border-primary/20">
                  <feature.icon className="w-8 h-8 text-primary" />
                </div>
                <CardTitle className="font-headline text-xl">
                  {feature.title}
                </CardTitle>
              </CardHeader>
              <CardContent className="text-center text-muted-foreground">
                <p>{feature.description}</p>
                <div className="mt-6 flex justify-center items-center text-accent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  Explore <ArrowRight className="ml-2 h-4 w-4" />
                </div>
              </CardContent>
            </Card>
          </Link>
        ))}
      </div>
    </div>
  );
}
