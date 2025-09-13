"use client";

import Link from 'next/link';
import { ChevronDown, Menu } from 'lucide-react';
import Logo from './logo';
import { Button } from './ui/button';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from './ui/dropdown-menu';
import { Sheet, SheetContent, SheetTrigger } from './ui/sheet';
import { usePathname } from 'next/navigation';
import { navLinks } from '@/lib/data';
import { useAuth } from '@/hooks/use-auth';

const Header = () => {
  const pathname = usePathname();
  const { isAuthenticated } = useAuth();

  const isMainPage = pathname === '/';

  const renderNavLinks = (isMobile = false) => {
    return navLinks.map((link) => {
      if (link.name === 'Admin') {
        if (isAuthenticated) {
          return (
            <Link
              key={link.name}
              href="/admin/inquiries"
              className={
                isMobile
                  ? 'text-lg font-medium transition-colors hover:text-foreground/80 text-foreground/60'
                  : 'transition-colors hover:text-foreground/80 text-foreground/60'
              }
            >
              Admin
            </Link>
          );
        }
        return null;
      }

      if (link.subLinks) {
        return (
          <DropdownMenu key={link.name}>
            <DropdownMenuTrigger asChild>
              <Button
                variant="ghost"
                className={
                  isMobile
                    ? 'w-full justify-start text-lg font-medium transition-colors hover:text-foreground/80 text-foreground/60 px-0'
                    : 'transition-colors hover:text-foreground/80 text-foreground/60 px-2'
                }
              >
                {link.name} <ChevronDown className="ml-1 h-4 w-4" />
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent>
              {link.subLinks.map((subLink) => (
                <DropdownMenuItem key={subLink.name} asChild>
                  <Link href={subLink.href}>{subLink.name}</Link>
                </DropdownMenuItem>
              ))}
            </DropdownMenuContent>
          </DropdownMenu>
        );
      }

      const finalHref =
        isMainPage || !link.href.startsWith('#') ? link.href : `/${link.href}`;

      return (
        <Link
          key={link.name}
          href={finalHref}
          className={
            isMobile
              ? 'text-lg font-medium transition-colors hover:text-foreground/80 text-foreground/60'
              : 'transition-colors hover:text-foreground/80 text-foreground/60'
          }
        >
          {link.name}
        </Link>
      );
    });
  };

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-16 items-center">
        <Link href="/" className="mr-6 flex items-center">
          <Logo />
        </Link>
        <nav className="hidden items-center gap-6 text-sm font-medium md:flex">
          {renderNavLinks()}
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
              <div className="mt-6 grid gap-4">{renderNavLinks(true)}</div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  );
};

export default Header;
