import { Button } from '@/components/ui/button';
import Link from 'next/link';

const Hero = () => {
  return (
    <section className="relative py-24 sm:py-32 md:py-40 text-center bg-gradient-to-b from-primary/5 via-background to-background">
      <div className="container">
        <h1 className="text-4xl font-extrabold tracking-tight text-foreground sm:text-5xl md:text-6xl lg:text-7xl font-headline">
          Unlock Your Potential with{' '}
          <span className="text-primary">TutorVista</span>
        </h1>
        <p className="mt-6 max-w-2xl mx-auto text-lg text-muted-foreground">
          Expert-led tuition classes designed to help you excel. Join us and
          embark on a journey of academic success.
        </p>
        <div className="mt-10 flex justify-center gap-4">
          <Button asChild size="lg">
            <Link href="#classes">Explore Classes</Link>
          </Button>
          <Button asChild variant="outline" size="lg">
            <Link href="#contact">Contact Us</Link>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Hero;
