import { Button } from '@/components/ui/button';
import Link from 'next/link';
import Image from 'next/image';
import { Card } from '@/components/ui/card';

const Hero = () => {
  return (
    <section className="relative py-24 sm:py-32">
      <div className="container grid md:grid-cols-2 gap-12 items-center">
        <div className="text-center md:text-left">
          <h1 className="text-4xl font-extrabold tracking-tight text-foreground sm:text-5xl md:text-6xl lg:text-7xl font-headline">
            Unlock Your Potential with{' '}
            <span className="text-primary">TutorVista</span>
          </h1>
          <p className="mt-6 max-w-2xl mx-auto md:mx-0 text-lg text-muted-foreground">
            Expert-led tuition classes designed to help you excel. Join us and
            embark on a journey of academic success.
          </p>
          <div className="mt-10 flex justify-center md:justify-start gap-4">
            <Button asChild size="lg">
              <Link href="#classes">Explore Classes</Link>
            </Button>
            <Button asChild variant="outline" size="lg">
              <Link href="#contact">Contact Us</Link>
            </Button>
          </div>
        </div>
        <div className="relative h-80 w-full">
            <Card className="h-full w-full overflow-hidden rounded-2xl shadow-2xl transform hover:scale-105 transition-transform duration-500">
                <Image
                    src="https://picsum.photos/seed/hero/1200/800"
                    alt="Students learning in a modern classroom"
                    fill
                    className="object-cover"
                    data-ai-hint="happy students classroom"
                    priority
                />
            </Card>
        </div>
      </div>
    </section>
  );
};

export default Hero;
