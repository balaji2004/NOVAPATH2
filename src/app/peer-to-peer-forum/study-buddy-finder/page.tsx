import { StudyBuddyFinder } from '@/components/peer-forum/study-buddy-finder';

export default function StudyBuddyFinderPage() {
  return (
    <div className="container mx-auto px-4 py-12">
      <div className="text-center mb-12">
        <h1 className="text-4xl md:text-5xl font-extrabold tracking-tighter font-headline holographic-text">
          Study Buddy Finder
        </h1>
        <p className="mt-4 max-w-3xl mx-auto text-lg text-muted-foreground">
          Connect with peers preparing for the same entrance exams.
        </p>
      </div>
      <div className="max-w-5xl mx-auto">
        <StudyBuddyFinder />
      </div>
    </div>
  );
}