import {
  Card,
  CardHeader,
  CardTitle,
  CardContent,
  CardDescription,
} from '@/components/ui/card';
import { classes } from '@/lib/data';

const ClassListings = ({ grade }: { grade?: number }) => {
  const filteredClasses = grade
    ? classes.filter((c) => c.grade === grade)
    : classes;
  const title = grade ? `Classes for Grade ${grade}` : 'Our Classes';
  const description = grade
    ? 'Explore the courses available for your grade level.'
    : 'Explore our range of courses designed for academic excellence.';

  return (
    <section id="classes" className="py-16 sm:py-24 bg-background">
      <div className="container">
        <div className="text-center">
          <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl font-headline">
            {title}
          </h2>
          <p className="mt-4 text-lg text-muted-foreground">{description}</p>
        </div>
        <div className="mt-12 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {filteredClasses.length > 0 ? (
            filteredClasses.map((cls) => (
              <Card
                key={cls.subject}
                className="flex flex-col transform transition-transform duration-300 hover:scale-105 hover:shadow-2xl"
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
            ))
          ) : (
            <p className="text-center text-muted-foreground col-span-full">
              No classes available for this grade.
            </p>
          )}
        </div>
      </div>
    </section>
  );
};

export default ClassListings;
