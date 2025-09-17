import { CareerForm } from "@/components/career-path/career-form";

export default function CareerPathPage() {
  return (
    <div className="container mx-auto px-4 py-12">
      <div className="text-center mb-12">
        <h1 className="text-4xl md:text-5xl font-extrabold tracking-tighter font-headline holographic-text">
          Generate Your Career Galaxy
        </h1>
        <p className="mt-4 max-w-2xl mx-auto text-lg text-muted-foreground">
          Input your details below and let our AI construct a 360° visualization of your potential future.
        </p>
      </div>
      <CareerForm />
    </div>
  );
}
