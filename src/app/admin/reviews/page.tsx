import { testimonials } from '@/lib/data';
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from '@/components/ui/table';
import { Avatar, AvatarImage, AvatarFallback } from '@/components/ui/avatar';

export default async function ReviewsPage() {
  return (
    <Card>
      <CardHeader>
        <div>
          <CardTitle className="text-3xl font-bold tracking-tight sm:text-4xl font-headline">
            Website Testimonials
          </CardTitle>
          <CardDescription>
            Here are the testimonials displayed on your website.
          </CardDescription>
        </div>
      </CardHeader>
      <CardContent>
        {testimonials.length > 0 ? (
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Author</TableHead>
                <TableHead>Role</TableHead>
                <TableHead>Review</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {testimonials.map((testimonial) => (
                <TableRow key={testimonial.id}>
                  <TableCell className="font-medium whitespace-nowrap">
                    <div className="flex items-center gap-3">
                      <Avatar className="w-10 h-10 border">
                        <AvatarImage src={testimonial.imageUrl} alt={testimonial.name} />
                        <AvatarFallback>
                          {testimonial.name
                            .split(' ')
                            .map((n) => n[0])
                            .join('')}
                        </AvatarFallback>
                      </Avatar>
                      {testimonial.name}
                    </div>
                  </TableCell>
                  <TableCell>{testimonial.role}</TableCell>
                  <TableCell>{testimonial.text}</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        ) : (
          <div className="text-center text-muted-foreground py-10">
            <p>You have no testimonials yet.</p>
          </div>
        )}
      </CardContent>
    </Card>
  );
}
