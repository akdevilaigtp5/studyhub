'use server';

import { z } from 'zod';
import {
  generateBlogTopics,
  GenerateBlogTopicsOutput,
} from '@/ai/flows/generate-blog-topics';

const FormSchema = z.object({
  subject: z.string().min(3, {
    message: 'Subject must be at least 3 characters.',
  }),
});

export type FormState = {
  message: string;
  data?: GenerateBlogTopicsOutput;
  errors?: {
    subject?: string[];
  };
};

export async function generateContentIdeas(
  prevState: FormState,
  formData: FormData
): Promise<FormState> {
  const validatedFields = FormSchema.safeParse({
    subject: formData.get('subject'),
  });

  if (!validatedFields.success) {
    return {
      message: 'Validation failed. Please check your input.',
      errors: validatedFields.error.flatten().fieldErrors,
    };
  }

  try {
    const result = await generateBlogTopics({
      subject: validatedFields.data.subject,
    });
    return {
      message: 'Successfully generated content ideas.',
      data: result,
    };
  } catch (error) {
    console.error('AI generation failed:', error);
    return {
      message: 'An error occurred while generating content. Please try again.',
    };
  }
}
