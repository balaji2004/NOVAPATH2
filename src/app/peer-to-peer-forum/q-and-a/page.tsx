import { QASection } from '@/components/peer-forum/qa-section';

export default function QAPage() {
  return (
    <div className="container mx-auto px-4 py-12">
      <div className="text-center mb-12">
        <h1 className="text-4xl md:text-5xl font-extrabold tracking-tighter font-headline holographic-text">
          Questions & Answers
        </h1>
        <p className="mt-4 max-w-3xl mx-auto text-lg text-muted-foreground">
          Ask questions, get answers, and learn from your peers.
        </p>
      </div>

      <div className="max-w-4xl mx-auto">
        <QASection />
      </div>
    </div>
  );
}