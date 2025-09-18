import { RealityCheckSystem } from '@/components/peer-forum/reality-check-system';

export default function RealityCheckPage() {
  return (
    <div className="container mx-auto px-4 py-12">
      <div className="text-center mb-12">
        <h1 className="text-4xl md:text-5xl font-extrabold tracking-tighter font-headline holographic-text">
          Reality Check System
        </h1>
        <p className="mt-4 max-w-3xl mx-auto text-lg text-muted-foreground">
          Genuine, experience-based reviews of courses and colleges from current students and alumni.
        </p>
      </div>
      <div className="max-w-4xl mx-auto">
        <RealityCheckSystem />
      </div>
    </div>
  );
}