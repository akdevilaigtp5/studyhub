import Image from 'next/image';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import Link from 'next/link';

const AboutUs = () => {
  return (
    <section id="about" className="py-16 sm:py-24">
      <div className="container">
        <Card className="overflow-hidden">
          <div className="grid md:grid-cols-2">
            <div className="p-8 sm:p-12">
              <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl font-headline">
                About Study Hub
              </h2>
              <p className="mt-4 text-muted-foreground">
                Founded on the principle that every student deserves a chance to
                shine, Study Hub is more than just a tuition center. We are a
                community of passionate educators dedicated to nurturing young
                minds and fostering a lifelong love for learning.
              </p>
              <p className="mt-4 text-muted-foreground">
                Our mission is to provide high-quality, personalized education
                that goes beyond the curriculum. We empower students with the
                skills, confidence, and critical thinking abilities needed to
                excel academically and in life.
              </p>
              <div className="mt-8">
                <Button asChild size="lg">
                  <Link href="#contact">Get in Touch</Link>
                </Button>
              </div>
            </div>
            <div className="relative h-64 md:h-auto">
              <Image
                src="https://picsum.photos/seed/aboutus/1200/800"
                alt="A modern and bright tuition center"
                fill
                className="object-cover"
                data-ai-hint="modern classroom"
              />
            </div>
          </div>
        </Card>
      </div>
    </section>
  );
};

export default AboutUs;
