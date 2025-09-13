"use client";

import Link from 'next/link';
import { Menu } from 'lucide-react';
import Logo from './logo';
import { Button } from './ui/button';
import { Sheet, SheetContent, SheetTrigger } from './ui/sheet';
import { usePathname } from 'next/navigation';
import { navLinks } from '@/lib/data';
import { useAuth } from '@/hooks/use-auth';

const Header = () => {
  const pathname = usePathname();
  const { isAuthenticated } = useAuth();

  const isMainPage = pathname === '/';

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-16 items-center">
        <Link href="/" className="mr-6 flex items-center">
          <Logo />
        </Link>
        <nav className="hidden items-center gap-6 text-sm font-medium md:flex">
          {navLinks.map((link) => {
            const finalHref =
              isMainPage || !link.href.startsWith('#')
                ? link.href
                : `/${link.href}`;
            
            if (link.name === 'Admin' && !isAuthenticated) {
              return (
                <Link
                  key={link.name}
                  href="/admin/login"
                  className="transition-colors hover:text-foreground/80 text-foreground/60"
                >
                  Admin
                </Link>
              );
            }
            return (
              <Link
                key={link.name}
                href={finalHref}
                className="transition-colors hover:text-foreground/80 text-foreground/60"
              >
                {link.name}
              </Link>
            );
          })}
        </nav>
        <div className="flex flex-1 items-center justify-end md:hidden">
          <Sheet>
            <SheetTrigger asChild>
              <Button variant="ghost" size="icon">
                <Menu className="h-6 w-6" />
                <span className="sr-only">Toggle Menu</span>
              </Button>
            </SheetTrigger>
            <SheetContent side="right">
              <Link href="/" className="mr-6 flex items-center">
                <Logo />
              </Link>
              <div className="mt-6 grid gap-4">
                {navLinks.map((link) => {
                  const finalHref =
                    isMainPage || !link.href.startsWith('#')
                      ? link.href
                      : `/${link.href}`;
                  
                   if (link.name === 'Admin' && !isAuthenticated) {
                      return (
                        <Link
                          key={link.name}
                          href="/admin/login"
                           className="text-lg font-medium transition-colors hover:text-foreground/80 text-foreground/60"
                        >
                          Admin
                        </Link>
                      );
                    }

                  return (
                    <Link
                      key={link.name}
                      href={finalHref}
                      className="text-lg font-medium transition-colors hover:text-foreground/80 text-foreground/60"
                    >
                      {link.name}
                    </Link>
                  );
                })}
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  );
};

export default Header;
