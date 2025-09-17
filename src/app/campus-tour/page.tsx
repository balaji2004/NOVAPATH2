import { InteractiveMap } from "@/components/campus-tour/interactive-map";

export default function CampusTourPage() {
  return (
    <div className="container mx-auto px-4 py-12">
      <div className="text-center mb-12">
        <h1 className="text-4xl md:text-5xl font-extrabold tracking-tighter font-headline holographic-text">
          Interactive Campus Tours
        </h1>
        <p className="mt-4 max-w-2xl mx-auto text-lg text-muted-foreground">
          Explore university campuses from anywhere in the world. Click on the markers to learn more.
        </p>
      </div>
      <InteractiveMap />
    </div>
  );
}
