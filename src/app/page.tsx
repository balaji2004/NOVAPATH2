import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { ArrowRight, Bot, CalendarCheck, Target, FileQuestion, HeartHandshake, Users } from 'lucide-react';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Mail, Send, User, MessageSquare, Star } from 'lucide-react';

export default function Home() {
  return (
    <div className="container mx-auto px-4 py-12 sm:py-24 overflow-hidden">
      <div className="relative">
        <div className="absolute top-[-5rem] -left-24 w-72 h-72 bg-primary rounded-full mix-blend-lighten filter blur-3xl opacity-20 animate-float"></div>
        <div className="absolute top-[-1rem] -right-24 w-80 h-80 bg-accent rounded-full mix-blend-lighten filter blur-3xl opacity-20 animate-float" style={{animationDelay: '2s'}}></div>
      </div>
      <section className="text-center relative z-10">
        <h1 className="font-headline text-5xl md:text-7xl font-extrabold tracking-tight bg-clip-text text-transparent bg-gradient-to-br from-foreground to-foreground/70 mb-6">
          Navigate Your Future with
          <span className="block bg-clip-text text-transparent bg-gradient-to-r from-primary via-accent to-primary mt-2">
            NovaPath
          </span>
        </h1>
        <p className="max-w-2xl mx-auto text-lg md:text-xl text-muted-foreground mb-10">
          An ultra-modern guidance platform using AI to illuminate your career and educational journey. Step into the future of decision-making.
        </p>
        <div className="flex flex-col sm:flex-row justify-center gap-4">
          <Button asChild size="lg" className="animate-pulse-glow shadow-primary/50 shadow-lg hover:shadow-primary/50 hover:shadow-2xl transition-shadow">
            <Link href="/quiz">
              Find Your Path <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
          </Button>
          <Button asChild size="lg" variant="outline">
            <Link href="/timeline">Explore Timeline</Link>
          </Button>
        </div>
      </section>

      <section id="features" className="mt-24 md:mt-32 scroll-mt-20">
        <div className="text-center mb-12">
            <h2 className="font-headline text-4xl md:text-5xl font-extrabold tracking-tight bg-clip-text text-transparent bg-gradient-to-r from-primary to-accent">
                Explore Our Features
            </h2>
            <p className="mt-2 text-lg text-muted-foreground">
              A suite of tools designed to guide you to success.
            </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <FeatureCard
                href="/quiz"
                icon={<FileQuestion className="h-8 w-8 text-primary" />}
                title="Gamified Quiz System"
                description="Engaging quizzes make self-discovery fun. Watch your future unfold with every answer."
            />
            <FeatureCard
                href="/timeline"
                icon={<CalendarCheck className="h-8 w-8 text-primary" />}
                title="Interactive Timeline"
                description="Never miss a deadline. Track exams, admissions, and scholarships on a personalized, interactive timeline."
            />
            <FeatureCard
                href="/career-path"
                icon={<Target className="h-8 w-8 text-primary" />}
                title="AI Career Matcher"
                description="Our AI suggests perfect career paths by analyzing your interests, skills, and personality."
            />
            <FeatureCard
                href="/peer-to-peer-forum"
                icon={<Users className="h-8 w-8 text-primary" />}
                title="Peer-to-Peer Forum"
                description="Get real advice from students just a few steps ahead of you. Find mentors and ask questions."
            />
            <FeatureCard
                href="/ngo-connection"
                icon={<HeartHandshake className="h-8 w-8 text-primary" />}
                title="NGO Connection"
                description="Discover and connect with NGOs that align with your passions and career goals."
            />
            <FeatureCard
                href="#"
                icon={<Bot className="h-8 w-8 text-primary" />}
                title="Nova - Smart AI Assistant"
                description="Nova is your dedicated AI assistant, ready to provide career guidance and recommendations."
            />
        </div>
      </section>

      <section id="feedback" className="mt-24 md:mt-32 scroll-mt-20">
        <div className="text-center mb-12">
            <h2 className="font-headline text-4xl md:text-5xl font-extrabold tracking-tight bg-clip-text text-transparent bg-gradient-to-r from-primary to-accent">
                Feedback Forum
            </h2>
            <p className="mt-2 text-lg text-muted-foreground">
                Share your thoughts and help us improve NovaPath.
            </p>
        </div>
        
        <div className="max-w-4xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Submit Feedback Form */}
          <Card className="glass-card p-8">
            <div className="flex items-center gap-3 mb-6">
              <MessageSquare className="h-6 w-6 text-primary" />
              <h3 className="font-headline text-2xl font-bold">Submit Feedback</h3>
            </div>
            <form action="#" method="POST" className="space-y-6">
              <div className="space-y-2">
                <label htmlFor="feedback-type" className="text-sm font-medium text-muted-foreground">Feedback Type</label>
                <select id="feedback-type" name="feedback-type" className="w-full p-3 rounded-lg border border-input bg-background text-foreground">
                  <option value="suggestion">Suggestion</option>
                  <option value="bug-report">Bug Report</option>
                  <option value="feature-request">Feature Request</option>
                  <option value="general">General Feedback</option>
                </select>
              </div>
              <div className="space-y-2">
                <label htmlFor="feedback-title" className="text-sm font-medium text-muted-foreground">Title</label>
                <Input id="feedback-title" name="feedback-title" type="text" placeholder="Brief summary of your feedback" />
              </div>
              <div className="space-y-2">
                <label htmlFor="feedback-message" className="text-sm font-medium text-muted-foreground">Your Feedback</label>
                <Textarea id="feedback-message" name="feedback-message" rows={5} placeholder="Tell us what you think..." />
              </div>
              <div className="space-y-2">
                <label htmlFor="rating" className="text-sm font-medium text-muted-foreground">Overall Rating</label>
                <div className="flex gap-1">
                  {[1, 2, 3, 4, 5].map((star) => (
                    <Star key={star} className="h-6 w-6 text-muted-foreground hover:text-yellow-400 cursor-pointer transition-colors" />
                  ))}
                </div>
              </div>
              <Button type="submit" className="w-full" size="lg">
                Submit Feedback <Send className="ml-2 h-5 w-5" />
              </Button>
            </form>
          </Card>

          {/* Recent Feedback Display */}
          <Card className="glass-card p-8">
            <div className="flex items-center gap-3 mb-6">
              <Users className="h-6 w-6 text-primary" />
              <h3 className="font-headline text-2xl font-bold">Recent Feedback</h3>
            </div>
            <div className="space-y-4">
              <div className="p-4 rounded-lg border border-border bg-muted/30">
                <div className="flex items-start justify-between mb-2">
                  <h4 className="font-semibold text-sm">Love the AI Career Matcher!</h4>
                  <div className="flex gap-1">
                    {[1, 2, 3, 4, 5].map((star) => (
                      <Star key={star} className={`h-3 w-3 ${star <= 5 ? 'text-yellow-400 fill-yellow-400' : 'text-muted-foreground'}`} />
                    ))}
                  </div>
                </div>
                <p className="text-xs text-muted-foreground mb-1">Feature Request • by Anonymous</p>
                <p className="text-sm">The career matching feature is amazing! Could you add more tech career options?</p>
              </div>
              
              <div className="p-4 rounded-lg border border-border bg-muted/30">
                <div className="flex items-start justify-between mb-2">
                  <h4 className="font-semibold text-sm">Timeline Feature Suggestion</h4>
                  <div className="flex gap-1">
                    {[1, 2, 3, 4].map((star) => (
                      <Star key={star} className={`h-3 w-3 ${star <= 4 ? 'text-yellow-400 fill-yellow-400' : 'text-muted-foreground'}`} />
                    ))}
                  </div>
                </div>
                <p className="text-xs text-muted-foreground mb-1">Suggestion • by Student</p>
                <p className="text-sm">The timeline is helpful, but could you add reminder notifications?</p>
              </div>
              
              <div className="p-4 rounded-lg border border-border bg-muted/30">
                <div className="flex items-start justify-between mb-2">
                  <h4 className="font-semibold text-sm">Great Platform Overall</h4>
                  <div className="flex gap-1">
                    {[1, 2, 3, 4, 5].map((star) => (
                      <Star key={star} className={`h-3 w-3 ${star <= 5 ? 'text-yellow-400 fill-yellow-400' : 'text-muted-foreground'}`} />
                    ))}
                  </div>
                </div>
                <p className="text-xs text-muted-foreground mb-1">General • by User123</p>
                <p className="text-sm">NovaPath has been incredibly helpful for my career planning. Keep up the great work!</p>
              </div>
            </div>
          </Card>
        </div>
      </section>

    </div>
  );
}

function FeatureCard({ href, icon, title, description }: { href: string; icon: React.ReactNode; title: string; description: string }) {
  const isExternal = href.startsWith('http');
  const CardContent = (
    <Card className="glass-card p-8 text-center items-center flex flex-col h-full hover:border-accent/50 transition-all duration-300 transform hover:-translate-y-2">
      <div className="mb-4">{icon}</div>
      <h3 className="font-headline text-2xl font-bold mb-2">{title}</h3>
      <p className="text-muted-foreground flex-grow">{description}</p>
    </Card>
  );

  if (href === '#') {
    return <div className="cursor-default h-full">{CardContent}</div>
  }
  
  return (
    <Link 
      href={href} 
      target={isExternal ? '_blank' : undefined} 
      rel={isExternal ? 'noopener noreferrer' : undefined} 
      className="block h-full"
    >
      {CardContent}
    </Link>
  );
}