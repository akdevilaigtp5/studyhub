import {
  Card,
  CardHeader,
  CardTitle,
  CardContent,
  CardDescription,
  CardFooter,
} from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { fees } from '@/lib/data';
import { Check } from 'lucide-react';
import { cn } from '@/lib/utils';
import Link from 'next/link';

const Fees = () => {
  return (
    <section id="fees" className="py-16 sm:py-24 bg-background">
      <div className="container">
        <div className="text-center">
          <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl font-headline">
            Our Fees
          </h2>
          <p className="mt-4 text-lg text-muted-foreground">
            Choose a plan that fits your learning needs.
          </p>
        </div>
        <div className="mt-12 grid gap-8 sm:grid-cols-1 lg:grid-cols-3">
          {fees.map((fee) => (
            <Card
              key={fee.plan}
              className={cn(
                'flex flex-col transform transition-transform duration-300 hover:scale-105 hover:shadow-2xl',
                fee.popular &&
                  'border-primary shadow-primary/20 scale-105'
              )}
            >
              {fee.popular && (
                <div className="bg-primary text-primary-foreground text-center py-1 text-sm font-semibold rounded-t-lg">
                  Most Popular
                </div>
              )}
              <CardHeader className="items-center">
                <CardTitle className="font-headline text-2xl">{fee.plan}</CardTitle>
                <p>
                  <span className="text-4xl font-bold">${fee.price}</span>
                  /month
                </p>
                <CardDescription>{fee.description}</CardDescription>
              </CardHeader>
              <CardContent className="flex-grow">
                <ul className="space-y-3">
                  {fee.features.map((feature) => (
                    <li key={feature} className="flex items-center gap-3">
                      <Check className="w-5 h-5 text-green-500" />
                      <span className="text-muted-foreground">{feature}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
              <CardFooter>
                <Button asChild className="w-full">
                  <Link href="/admission">Get Started</Link>
                </Button>
              </CardFooter>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Fees;
