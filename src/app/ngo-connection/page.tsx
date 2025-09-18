import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

export default function NGOConnectionPage() {
  return (
    <div className="container mx-auto px-4 py-12">
      <div className="text-center mb-12">
        <h1 className="text-4xl md:text-5xl font-extrabold tracking-tighter font-headline holographic-text">
          NGO Connection
        </h1>
        <p className="mt-4 max-w-2xl mx-auto text-lg text-muted-foreground">
          Collaborate with organizations making a real-world impact.
        </p>
      </div>
      <Card className="max-w-4xl mx-auto glass-card">
        <CardHeader>
          <CardTitle className="text-center text-2xl font-headline">Coming Soon</CardTitle>
        </CardHeader>
        <CardContent className="text-center">
          <p className="text-muted-foreground">
            We are building a dedicated space to connect students with NGOs. Stay tuned for opportunities to volunteer, intern, and contribute to meaningful causes.
          </p>
        </CardContent>
      </Card>
    </div>
  );
}
