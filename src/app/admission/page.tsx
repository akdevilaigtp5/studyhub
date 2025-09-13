import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { admissionProcess } from '@/lib/data';
import Link from 'next/link';

export default function AdmissionPage() {
  return (
    <div className="py-16 sm:py-24 bg-muted/20">
      <div className="container">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold tracking-tight text-foreground sm:text-5xl font-headline">
            Admission Process
          </h1>
          <p className="mt-4 max-w-2xl mx-auto text-lg text-muted-foreground">
            Follow these simple steps to join the TutorVista family and begin
            your journey to academic excellence.
          </p>
        </div>

        <div className="relative max-w-3xl mx-auto">
          <div className="absolute left-1/2 top-0 h-full w-px bg-border -translate-x-1/2 hidden sm:block"></div>

          {admissionProcess.map((item, index) => (
            <div
              key={item.step}
              className="relative flex flex-col sm:flex-row items-start gap-8 mb-12"
            >
              <div className="sm:w-1/2 sm:text-right sm:pr-8 flex sm:justify-end">
                {index % 2 !== 0 && (
                  <Card className="w-full">
                    <CardHeader>
                      <CardTitle className="font-headline">{item.title}</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <p className="text-muted-foreground">
                        {item.description}
                      </p>
                    </CardContent>
                  </Card>
                )}
              </div>

              <div className="absolute left-1/2 top-4 h-12 w-12 rounded-full bg-background border-2 border-primary flex items-center justify-center -translate-x-1/2 z-10">
                <item.icon className="w-6 h-6 text-primary" />
              </div>

               <div className="sm:w-1/2 sm:pl-8 flex sm:justify-start">
                 {index % 2 === 0 && (
                   <Card className="w-full">
                    <CardHeader>
                      <CardTitle className="font-headline">{item.title}</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <p className="text-muted-foreground">
                        {item.description}
                      </p>
                    </CardContent>
                  </Card>
                 )}
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <h2 className="text-2xl font-bold tracking-tight text-foreground font-headline">
            Ready to Get Started?
          </h2>
          <p className="mt-2 text-muted-foreground">
            Take the first step towards unlocking your potential.
          </p>
          <Button asChild size="lg" className="mt-6">
            <Link href="/#contact">Inquire Now</Link>
          </Button>
        </div>
      </div>
    </div>
  );
}
