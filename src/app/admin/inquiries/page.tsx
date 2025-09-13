import { getInquiries } from '@/lib/db';
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
import { format } from 'date-fns';

export default async function InquiriesPage() {
  const inquiries = await getInquiries();

  return (
    <Card>
      <CardHeader>
        <div>
          <CardTitle className="text-3xl font-bold tracking-tight sm:text-4xl font-headline">
            Contact Form Inquiries
          </CardTitle>
          <CardDescription>
            Here are the messages submitted through your website.
          </CardDescription>
        </div>
      </CardHeader>
      <CardContent>
        {inquiries.length > 0 ? (
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Received</TableHead>
                <TableHead>Name</TableHead>
                <TableHead>Email</TableHead>
                <TableHead>Message</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {inquiries.map((inquiry) => (
                <TableRow key={inquiry.id}>
                  <TableCell className="font-medium whitespace-nowrap">
                    {format(inquiry.createdAt, 'PPp')}
                  </TableCell>
                  <TableCell>{inquiry.name}</TableCell>
                  <TableCell>{inquiry.email}</TableCell>
                  <TableCell>{inquiry.message}</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        ) : (
          <div className="text-center text-muted-foreground py-10">
            <p>You have no inquiries yet.</p>
          </div>
        )}
      </CardContent>
    </Card>
  );
}
