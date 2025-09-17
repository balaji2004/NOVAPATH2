"use client";

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { cn } from '@/lib/utils';

const navItems = [
  { href: '/career-path', label: 'Career Path' },
  { href: '/timeline', label: 'Timeline' },
  { href: '/campus-tour', label: 'Campus Tour' },
  { href: '/achievements', label: 'Achievements' },
];

export function NavLinks() {
  const pathname = usePathname();

  return (
    <nav className="hidden md:flex items-center space-x-6 text-sm font-medium">
      {navItems.map((item) => (
        <Link
          key={item.href}
          href={item.href}
          className={cn(
            'transition-colors hover:text-foreground/80 relative',
            pathname === item.href ? 'text-foreground' : 'text-foreground/60'
          )}
        >
          {item.label}
          {pathname === item.href && (
            <span className="absolute -bottom-1 left-0 w-full h-0.5 bg-accent rounded-full animate-in fade-in"></span>
          )}
        </Link>
      ))}
    </nav>
  );
}
