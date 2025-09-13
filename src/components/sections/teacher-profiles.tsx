
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import { teachers } from '@/lib/data';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';

const TeacherProfiles = () => {
  return (
    <section id="teachers" className="py-16 sm:py-24">
      <div className="container">
        <div className="text-center">
          <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl font-headline">
            Meet Our Tutors
          </h2>
          <p className="mt-4 text-lg text-muted-foreground">
            Our experienced and dedicated educators are here to guide you.
          </p>
        </div>
        <div className="mt-12 grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {teachers.map((teacher) => (
            <Card
              key={teacher.id}
              className="text-center flex flex-col items-center p-6 transform transition-transform duration-300 hover:-translate-y-2 hover:shadow-xl"
            >
              <Avatar className="w-24 h-24 mb-4 border-4 border-primary/20">
                <AvatarImage
                  src={teacher.imageUrl}
                  alt={teacher.name}
                  data-ai-hint={teacher.imageHint}
                />
                <AvatarFallback>
                  {teacher.name
                    .split(' ')
                    .map((n) => n[0])
                    .join('')}
                </AvatarFallback>
              </Avatar>
              <CardHeader className="p-0">
                <CardTitle className="font-headline text-xl">
                  {teacher.name}
                </CardTitle>
              </CardHeader>
              <CardContent className="p-0 mt-2">
                <CardDescription>{teacher.qualifications}</CardDescription>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TeacherProfiles;
