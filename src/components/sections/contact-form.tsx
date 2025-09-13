"use client";

import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Button } from '@/components/ui/button';
import { Label } from '@/components/ui/label';
import { useToast } from '@/hooks/use-toast';
import { useFormState, useFormStatus } from 'react-dom';
import { saveInquiry } from '@/app/admin/inquiries/actions';
import { useEffect } from 'react';

function SubmitButton() {
  const { pending } = useFormStatus();
  return (
    <Button
      type="submit"
      disabled={pending}
      className="w-full bg-accent text-accent-foreground hover:bg-accent/90"
    >
      {pending ? 'Sending...' : 'Send Message'}
    </Button>
  );
}

const ContactForm = () => {
  const { toast } = useToast();
  const initialState = { message: '', errors: {} };
  const [state, dispatch] = useFormState(saveInquiry, initialState);

  useEffect(() => {
    if (state.message) {
      if (state.errors) {
        toast({
          title: 'Error',
          description: state.message,
          variant: 'destructive',
        });
      } else {
        toast({
          title: 'Message Sent!',
          description: 'Thank you for your inquiry. We will get back to you shortly.',
        });
      }
    }
  }, [state, toast]);

  return (
    <section id="contact" className="py-16 sm:py-24">
      <div className="container">
        <Card className="max-w-2xl mx-auto">
          <CardHeader className="text-center">
            <CardTitle className="text-3xl font-bold tracking-tight sm:text-4xl font-headline">
              Contact Us
            </CardTitle>
            <CardDescription>
              Have questions? We&apos;d love to hear from you.
            </CardDescription>
          </CardHeader>
          <CardContent>
            <form action={dispatch} className="space-y-4">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="name">Name</Label>
                  <Input id="name" name="name" placeholder="Your Name" required />
                  {state.errors?.name &&
                    state.errors.name.map((error: string) => (
                      <p className="text-sm font-medium text-destructive" key={error}>
                        {error}
                      </p>
                    ))}
                </div>
                <div className="space-y-2">
                  <Label htmlFor="email">Email</Label>
                  <Input
                    id="email"
                    name="email"
                    type="email"
                    placeholder="your@email.com"
                    required
                  />
                  {state.errors?.email &&
                    state.errors.email.map((error: string) => (
                      <p className="text-sm font-medium text-destructive" key={error}>
                        {error}
                      </p>
                    ))}
                </div>
              </div>
              <div className="space-y-2">
                <Label htmlFor="message">Message</Label>
                <Textarea
                  id="message"
                  name="message"
                  placeholder="Your message..."
                  required
                  rows={5}
                />
                 {state.errors?.message &&
                    state.errors.message.map((error: string) => (
                      <p className="text-sm font-medium text-destructive" key={error}>
                        {error}
                      </p>
                    ))}
              </div>
              <SubmitButton />
            </form>
          </CardContent>
        </Card>
      </div>
    </section>
  );
};

export default ContactForm;