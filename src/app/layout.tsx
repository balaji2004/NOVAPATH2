import type { Metadata } from 'next';
import './globals.css';
import { cn } from '@/lib/utils';
import { Header } from '@/components/layout/header';
import { BackgroundParticles } from '@/components/layout/background-particles';
import { AIAvatar } from '@/components/layout/ai-avatar';
import { Toaster } from '@/components/ui/toaster';

export const metadata: Metadata = {
  title: 'EduVoyager',
  description:
    'Revolutionizing student career guidance with breathtaking aesthetics and immersive interactions.',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="anonymous"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Outfit:wght@100..900&family=Source+Code+Pro:ital,wght@0,200..900;1,200..900&display=swap"
          rel="stylesheet"
        />
      </head>
      <body
        className={cn(
          'font-body antialiased bg-background text-foreground min-h-screen'
        )}
      >
        <BackgroundParticles />
        <Header />
        <main className="relative z-10">{children}</main>
        <AIAvatar />
        <Toaster />
      </body>
    </html>
  );
}
