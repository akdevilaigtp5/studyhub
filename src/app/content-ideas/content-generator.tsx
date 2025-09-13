'use client';

import { useFormState, useFormStatus } from 'react-dom';
import { generateContentIdeas, FormState } from './actions';
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
import { Lightbulb, Newspaper } from 'lucide-react';
import { Skeleton } from '@/components/ui/skeleton';

function SubmitButton() {
  const { pending } = useFormStatus();
  return (
    <Button
      type="submit"
      disabled={pending}
      className="w-full bg-accent text-accent-foreground hover:bg-accent/90"
    >
      {pending ? 'Generating...' : 'Generate Ideas'}
    </Button>
  );
}

function ResultsDisplay({ state }: { state: FormState }) {
  const { pending } = useFormStatus();

  if (pending) {
    return (
      <div className="space-y-6">
        <div>
          <h3 className="flex items-center gap-2 font-semibold mb-2">
            <Newspaper className="h-5 w-5 text-primary" /> Blog Topics
          </h3>
          <div className="space-y-2">
            {[...Array(5)].map((_, i) => (
              <Skeleton key={i} className="h-6 w-full" />
            ))}
          </div>
        </div>
        <div>
          <h3 className="flex items-center gap-2 font-semibold mb-2">
            <Lightbulb className="h-5 w-5 text-primary" /> Social Media Posts
          </h3>
          <div className="space-y-2">
            {[...Array(5)].map((_, i) => (
              <Skeleton key={i} className="h-6 w-full" />
            ))}
          </div>
        </div>
      </div>
    );
  }

  if (state.data) {
    return (
      <div className="space-y-6">
        <div>
          <h3 className="flex items-center gap-2 font-semibold mb-2">
            <Newspaper className="h-5 w-5 text-primary" /> Blog Topics
          </h3>
          <ul className="list-disc list-inside space-y-1 text-muted-foreground">
            {state.data.topics.map((topic, i) => (
              <li key={i}>{topic}</li>
            ))}
          </ul>
        </div>
        <div>
          <h3 className="flex items-center gap-2 font-semibold mb-2">
            <Lightbulb className="h-5 w-5 text-primary" /> Social Media Posts
          </h3>
          <ul className="list-disc list-inside space-y-1 text-muted-foreground">
            {state.data.socialMediaPosts.map((post, i) => (
              <li key={i}>{post}</li>
            ))}
          </ul>
        </div>
      </div>
    );
  }

  if (state.message && !state.errors && !state.data) {
    return <p className="text-sm font-medium text-destructive">{state.message}</p>;
  }

  return (
    <div className="text-center text-muted-foreground py-10">
      <Lightbulb className="mx-auto h-12 w-12" />
      <p className="mt-4">Your brilliant ideas are waiting to be born.</p>
    </div>
  );
}

export default function ContentGenerator() {
  const initialState: FormState = { message: '', errors: {} };
  const [state, dispatch] = useFormState(generateContentIdeas, initialState);

  return (
    <form action={dispatch} className="grid md:grid-cols-2 gap-8">
      <Card>
        <CardHeader>
          <CardTitle className="font-headline text-2xl">
            Content Idea Generator
          </CardTitle>
          <CardDescription>
            Enter a subject to generate blog and social media post ideas.
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="space-y-2">
            <Label htmlFor="subject">Subject</Label>
            <Input
              id="subject"
              name="subject"
              placeholder="e.g., Algebra, Shakespeare"
              required
            />
            {state.errors?.subject &&
              state.errors.subject.map((error: string) => (
                <p className="text-sm font-medium text-destructive" key={error}>
                  {error}
                </p>
              ))}
          </div>
          <SubmitButton />
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle className="font-headline text-2xl">
            Generated Ideas
          </CardTitle>
          <CardDescription>
            Your AI-powered content ideas will appear here.
          </CardDescription>
        </CardHeader>
        <CardContent>
          <ResultsDisplay state={state} />
        </CardContent>
      </Card>
    </form>
  );
}
