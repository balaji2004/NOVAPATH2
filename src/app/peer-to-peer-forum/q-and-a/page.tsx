import dynamic from 'next/dynamic';
import { Skeleton } from '@/components/ui/skeleton';

const QASection = dynamic(
  () => import('@/components/peer-forum/qa-section-dynamic').then(mod => mod.QASection),
  { 
    ssr: false,
    loading: () => (
      <div className="max-w-4xl mx-auto">
        <div className="flex justify-between items-center mb-6">
          <Skeleton className="h-10 w-48" />
          <Skeleton className="h-10 w-40" />
        </div>
        <div className="mb-8 p-4 rounded-lg glass-card space-y-3">
          <Skeleton className="h-6 w-32" />
          <div className="flex flex-wrap gap-2">
            <Skeleton className="h-6 w-24 rounded-full" />
            <Skeleton className="h-6 w-20 rounded-full" />
            <Skeleton className="h-6 w-28 rounded-full" />
            <Skeleton className="h-6 w-24 rounded-full" />
          </div>
        </div>
        <div className="space-y-6">
          <Skeleton className="h-40 w-full" />
          <Skeleton className="h-40 w-full" />
        </div>
      </div>
    )
  }
);

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

      <QASection />
    </div>
  );
}
