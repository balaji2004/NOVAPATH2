import { PeerMentorMatching } from '@/components/peer-forum/peer-mentor-matching';
import { QAPlatform } from '@/components/peer-forum/qa-platform';
import { RealityCheckSystem } from '@/components/peer-forum/reality-check-system';
import { StudyBuddyFinder } from '@/components/peer-forum/study-buddy-finder';
import { QASection } from '@/components/peer-forum/qa-section';

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

      <div className="space-y-16">
        <QASection />
        <PeerMentorMatching />
        <StudyBuddyFinder />
        <RealityCheckSystem />
      </div>
    </div>
  );
}