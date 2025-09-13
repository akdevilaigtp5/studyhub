'use client';

import { useFormState, useFormStatus } from 'react-dom';
import { login } from './actions';
import { Button } from '@/components/ui/button';
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { useEffect } from 'react';
import { useToast } from '@/hooks/use-toast';
import Logo from '@/components/logo';

function SubmitButton() {
  const { pending } = useFormStatus();
  return (
    <Button type="submit" disabled={pending} className="w-full">
      {pending ? 'Logging in...' : 'Login'}
    </Button>
  );
}

export default function LoginForm() {
  const { toast } = useToast();
  const initialState = { message: '' };
  const [state, dispatch] = useFormState(login, initialState);

  useEffect(() => {
    if (state?.message) {
      toast({
        title: 'Login Failed',
        description: state.message,
        variant: 'destructive',
      });
    }
  }, [state, toast]);

  return (
    <Card>
      <CardHeader className="text-center">
        <div className="flex justify-center mb-4">
            <Logo />
        </div>
        <CardTitle className="font-headline text-2xl">Admin Login</CardTitle>
        <CardDescription>
          Please enter the password to access the admin area.
        </CardDescription>
      </CardHeader>
      <CardContent>
        <form action={dispatch} className="space-y-4">
          <div className="space-y-2">
            <Label htmlFor="password">Password</Label>
            <Input
              id="password"
              name="password"
              type="password"
              required
            />
          </div>
          {state?.message && (
            <p className="text-sm font-medium text-destructive">
              {state.message}
            </p>
          )}
          <SubmitButton />
        </form>
      </CardContent>
    </Card>
  );
}
