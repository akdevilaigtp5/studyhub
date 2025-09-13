import { Twitter, Facebook, Instagram, MapPin } from 'lucide-react';
import Logo from './logo';
import Link from 'next/link';
import { Button } from './ui/button';

const Footer = () => {
  return (
    <footer className="bg-muted/40 border-t">
      <div className="container py-8">
        <div className="flex flex-col md:flex-row justify-between items-start gap-8">
          <div className="flex-1">
            <Logo />
            <p className="mt-4 text-muted-foreground max-w-sm">
              Your partner in achieving academic excellence through personalized
              and expert tuition.
            </p>
             <div className="mt-4 flex items-center gap-2 text-muted-foreground">
                <MapPin className="h-4 w-4" />
                <span>Ankleshwar, Gujarat, India</span>
            </div>
          </div>
          <div className="flex items-center gap-4">
            <Button
              variant="ghost"
              size="icon"
              className="text-muted-foreground hover:text-primary"
              asChild
            >
              <Link href="#" aria-label="Twitter">
                <Twitter />
              </Link>
            </Button>
            <Button
              variant="ghost"
              size="icon"
              className="text-muted-foreground hover:text-primary"
              asChild
            >
              <Link href="#" aria-label="Facebook">
                <Facebook />
              </Link>
            </Button>
            <Button
              variant="ghost"
              size="icon"
              className="text-muted-foreground hover:text-primary"
              asChild
            >
              <Link href="#" aria-label="Instagram">
                <Instagram />
              </Link>
            </Button>
          </div>
        </div>
        <div className="mt-8 border-t pt-4 text-center text-sm text-muted-foreground">
          © {new Date().getFullYear()} TutorVista. All rights reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
