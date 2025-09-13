import {
  Card,
  CardHeader,
  CardTitle,
  CardContent,
  CardDescription,
} from '@/components/ui/card';
import { classes } from '@/lib/data';

const ClassListings = () => {
  return (
    <section id="classes" className="py-16 sm:py-24 bg-muted/40">
      <div className="container">
        <div className="text-center">
          <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl font-headline">
            Our Classes
          </h2>
          <p className="mt-4 text-lg text-muted-foreground">
            Explore our range of courses designed for academic excellence.
          </p>
        </div>
        <div className="mt-12 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {classes.map((cls) => (
            <Card
              key={cls.subject}
              className="flex flex-col transform transition-transform duration-300 hover:scale-105 hover:shadow-lg"
            >
              <CardHeader className="flex-row items-center gap-4">
                <div className="bg-primary/10 p-3 rounded-md">
                  <cls.icon className="w-6 h-6 text-primary" />
                </div>
                <CardTitle className="font-headline">{cls.subject}</CardTitle>
              </CardHeader>
              <CardContent className="flex-grow">
                <CardDescription>
                  <p>
                    <strong>Teacher:</strong> {cls.teacher}
                  </p>
                  <p>
                    <strong>Schedule:</strong> {cls.time}
                  </p>
                </CardDescription>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ClassListings;
