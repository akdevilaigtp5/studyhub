'use client';

import { useFormState, useFormStatus } from 'react-dom';
import { generateImageAction, FormState } from './actions';
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
import { ImageIcon, Wand2 } from 'lucide-react';
import { Skeleton } from '@/components/ui/skeleton';
import Image from 'next/image';

function SubmitButton() {
  const { pending } = useFormStatus();
  return (
    <Button
      type="submit"
      disabled={pending}
      className="w-full bg-accent text-accent-foreground hover:bg-accent/90"
    >
       <Wand2 className="mr-2 h-4 w-4" />
      {pending ? 'Generating...' : 'Generate Image'}
    </Button>
  );
}

function ResultsDisplay({ state }: { state: FormState }) {
  const { pending } = useFormStatus();

  if (pending) {
    return (
        <div className="aspect-square w-full">
            <Skeleton className="h-full w-full" />
        </div>
    );
  }

  if (state.data?.imageUrl) {
    return (
      <div className="aspect-square relative w-full rounded-lg overflow-hidden border">
        <Image 
            src={state.data.imageUrl}
            alt={state.message}
            fill
            className="object-cover"
        />
      </div>
    );
  }

  if (state.message && !state.errors && !state.data) {
    return <p className="text-sm font-medium text-destructive">{state.message}</p>;
  }

  return (
    <div className="text-center text-muted-foreground py-10 aspect-square flex flex-col justify-center items-center border rounded-lg">
      <ImageIcon className="mx-auto h-12 w-12" />
      <p className="mt-4">Your generated image will appear here.</p>
    </div>
  );
}

export default function ImageGenerator() {
  const initialState: FormState = { message: '', errors: {} };
  const [state, dispatch] = useFormState(generateImageAction, initialState);

  return (
    <div className="grid md:grid-cols-2 gap-8 items-start">
        <Card>
            <CardHeader>
            <CardTitle className="font-headline text-2xl">
                Image Generation
            </CardTitle>
            <CardDescription>
                Enter a prompt to generate a unique image with AI.
            </CardDescription>
            </CardHeader>
            <CardContent>
                 <form action={dispatch} className="space-y-4">
                    <div className="space-y-2">
                        <Label htmlFor="prompt">Prompt</Label>
                        <Input
                        id="prompt"
                        name="prompt"
                        placeholder="e.g., A 3D render of a stack of books"
                        required
                        />
                        {state.errors?.prompt &&
                        state.errors.prompt.map((error: string) => (
                            <p className="text-sm font-medium text-destructive" key={error}>
                            {error}
                            </p>
                        ))}
                    </div>
                    <SubmitButton />
                </form>
            </CardContent>
        </Card>
        <div className="w-full">
            <ResultsDisplay state={state} />
        </div>
    </div>
  );
}
