import Link from 'next/link';
import { NavLinks } from './nav-links';
import { Button } from '../ui/button';
import { Bell, User } from 'lucide-react';
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from '@/components/ui/popover';

export function Header() {
  return (
    <header className="sticky top-0 z-40 w-full border-b border-primary/10 bg-background/50 backdrop-blur-lg">
      <div className="container mx-auto flex h-16 items-center px-4">
        <Link
          href="/"
          className="mr-6 flex items-center space-x-2 font-headline font-bold text-2xl holographic-text"
        >
          NovaPath
        </Link>
        <NavLinks />
        <div className="ml-auto flex items-center space-x-4">
          <Popover>
            <PopoverTrigger asChild>
              <Button variant="ghost" size="icon">
                <Bell className="h-5 w-5 text-foreground/80" />
                <span className="sr-only">Notifications</span>
              </Button>
            </PopoverTrigger>
            <PopoverContent align="end" className="w-80 glass-card">
              <div className="font-medium">Notifications</div>
              <p className="text-sm text-muted-foreground mt-2">
                No new notifications. You're all caught up!
              </p>
            </PopoverContent>
          </Popover>

          <Button variant="ghost" size="icon">
            <User className="h-5 w-5 text-foreground/80" />
            <span className="sr-only">Profile</span>
          </Button>
        </div>
      </div>
    </header>
  );
}
