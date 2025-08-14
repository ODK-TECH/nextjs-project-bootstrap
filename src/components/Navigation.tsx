"use client";

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useLanguage, LanguageSelector } from './LanguageSelector';
import { Button } from '@/components/ui/button';
import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet';
import { useState } from 'react';

export function Navigation() {
  const { strings } = useLanguage();
  const pathname = usePathname();
  const [isOpen, setIsOpen] = useState(false);

  const navigationItems = [
    { href: '/', label: strings.home },
    { href: '/dashboard', label: strings.dashboard },
    { href: '/marketplace', label: strings.marketplace },
    { href: '/financial', label: strings.financial },
    { href: '/training', label: strings.training },
    { href: '/admin', label: strings.admin },
  ];

  const NavLinks = ({ mobile = false }: { mobile?: boolean }) => (
    <>
      {navigationItems.map((item) => (
        <Link
          key={item.href}
          href={item.href}
          className={`${
            pathname === item.href
              ? 'text-primary font-semibold'
              : 'text-muted-foreground hover:text-foreground'
          } transition-colors ${mobile ? 'block py-2 text-lg' : ''}`}
          onClick={() => mobile && setIsOpen(false)}
        >
          {item.label}
        </Link>
      ))}
    </>
  );

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container mx-auto px-4">
        <div className="flex h-16 items-center justify-between">
          {/* Logo/Brand */}
          <Link href="/" className="flex items-center space-x-2">
            <div className="h-8 w-8 rounded-full bg-primary flex items-center justify-center">
              <span className="text-primary-foreground font-bold text-sm">NB</span>
            </div>
            <span className="font-bold text-lg hidden sm:inline-block">
              Nigerian Business Recovery
            </span>
            <span className="font-bold text-lg sm:hidden">
              NBR
            </span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-6">
            <NavLinks />
          </nav>

          {/* Language Selector & Mobile Menu */}
          <div className="flex items-center gap-4">
            <div className="hidden sm:block">
              <LanguageSelector />
            </div>
            
            {/* Mobile Menu */}
            <Sheet open={isOpen} onOpenChange={setIsOpen}>
              <SheetTrigger asChild className="md:hidden">
                <Button variant="ghost" size="sm">
                  <svg
                    className="h-6 w-6"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M4 6h16M4 12h16M4 18h16"
                    />
                  </svg>
                </Button>
              </SheetTrigger>
              <SheetContent side="right" className="w-80">
                <div className="flex flex-col space-y-4 mt-8">
                  <NavLinks mobile />
                  <div className="pt-4 border-t">
                    <LanguageSelector />
                  </div>
                </div>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </div>
    </header>
  );
}
