import { Card, CardContent } from '@/components/ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from '@/components/ui/table';
import { schedule } from '@/lib/data';

type ScheduleData = typeof schedule;

const Schedule = () => {
  const days = Object.keys(schedule) as (keyof ScheduleData)[];

  return (
    <section id="schedule" className="py-16 sm:py-24 bg-muted/40">
      <div className="container">
        <div className="text-center">
          <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl font-headline">
            Class Schedule
          </h2>
          <p className="mt-4 text-lg text-muted-foreground">
            Find a time that works for you.
          </p>
        </div>
        <Card className="mt-12">
          <CardContent className="p-2 sm:p-6">
            <Tabs defaultValue={days[0]} className="w-full">
              <TabsList className="grid w-full grid-cols-2 sm:grid-cols-3 md:grid-cols-6">
                {days.map((day) => (
                  <TabsTrigger key={day} value={day}>
                    {day}
                  </TabsTrigger>
                ))}
              </TabsList>
              {days.map((day) => (
                <TabsContent key={day} value={day}>
                  <Table>
                    <TableHeader>
                      <TableRow>
                        <TableHead>Time</TableHead>
                        <TableHead>Subject</TableHead>
                        <TableHead>Teacher</TableHead>
                      </TableRow>
                    </TableHeader>
                    <TableBody>
                      {schedule[day].length > 0 ? (
                        schedule[day].map((slot, index) => (
                          <TableRow key={index}>
                            <TableCell className="font-medium">
                              {slot.time}
                            </TableCell>
                            <TableCell>{slot.subject}</TableCell>
                            <TableCell>{slot.teacher}</TableCell>
                          </TableRow>
                        ))
                      ) : (
                        <TableRow>
                          <TableCell
                            colSpan={3}
                            className="text-center text-muted-foreground h-24"
                          >
                            No classes scheduled for today.
                          </TableCell>
                        </TableRow>
                      )}
                    </TableBody>
                  </Table>
                </TabsContent>
              ))}
            </Tabs>
          </CardContent>
        </Card>
      </div>
    </section>
  );
};

export default Schedule;
