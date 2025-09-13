import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import { testimonials } from '@/lib/data';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Star } from 'lucide-react';

const Testimonials = () => {
  return (
    <section id="testimonials" className="py-16 sm:py-24">
      <div className="container">
        <div className="text-center">
          <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl font-headline">
            What Our Students & Parents Say
          </h2>
          <p className="mt-4 text-lg text-muted-foreground">
            Hear from members of the TutorVista community.
          </p>
        </div>
        <div className="mt-12 grid gap-8 sm:grid-cols-1 lg:grid-cols-2">
          {testimonials.map((testimonial) => (
            <Card
              key={testimonial.id}
              className="transform transition-transform duration-300 hover:shadow-xl"
            >
              <CardContent className="pt-6">
                <div className="flex mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 text-yellow-400 fill-yellow-400" />
                  ))}
                </div>
                <blockquote className="text-muted-foreground italic">
                  "{testimonial.text}"
                </blockquote>
              </CardContent>
              <CardHeader className="flex-row items-center gap-4">
                <Avatar className="w-12 h-12">
                  <AvatarImage src={testimonial.imageUrl} alt={testimonial.name} data-ai-hint={testimonial.imageHint} />
                  <AvatarFallback>
                    {testimonial.name
                      .split(' ')
                      .map((n) => n[0])
                      .join('')}
                  </AvatarFallback>
                </Avatar>
                <div>
                  <CardTitle className="font-headline text-lg">
                    {testimonial.name}
                  </CardTitle>
                  <p className="text-sm text-muted-foreground">
                    {testimonial.role}
                  </p>
                </div>
              </CardHeader>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
