import { PeerMentorMatching } from '@/components/peer-forum/peer-mentor-matching';

export default function PeerMentorMatchingPage() {
  return (
    <div className="container mx-auto px-4 py-12">
      <div className="text-center mb-12">
        <h1 className="text-4xl md:text-5xl font-extrabold tracking-tighter font-headline holographic-text">
          Peer Mentor Matching
        </h1>
        <p className="mt-4 max-w-3xl mx-auto text-lg text-muted-foreground">
          Find a college student 1-3 years senior who took a similar academic path.
        </p>
      </div>

      <div className="max-w-4xl mx-auto">
        <PeerMentorMatching />
      </div>
    </div>
  );
}