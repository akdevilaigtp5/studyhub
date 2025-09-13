'use server';

import { z } from 'zod';
import {
  generateImage,
  GenerateImageOutput,
} from '@/ai/flows/generate-image';

const FormSchema = z.object({
  prompt: z.string().min(3, {
    message: 'Prompt must be at least 3 characters.',
  }),
});

export type FormState = {
  message: string;
  data?: GenerateImageOutput;
  errors?: {
    prompt?: string[];
  };
};

export async function generateImageAction(
  prevState: FormState,
  formData: FormData
): Promise<FormState> {
  const validatedFields = FormSchema.safeParse({
    prompt: formData.get('prompt'),
  });

  if (!validatedFields.success) {
    return {
      message: 'Validation failed. Please check your input.',
      errors: validatedFields.error.flatten().fieldErrors,
    };
  }

  try {
    const result = await generateImage({
      prompt: validatedFields.data.prompt,
    });
    return {
      message: 'Successfully generated image.',
      data: result,
    };
  } catch (error) {
    console.error('AI generation failed:', error);
    return {
      message: 'An error occurred while generating the image. Please try again.',
    };
  }
}
