'use server';

import { z } from 'zod';
import { saveInquiry as dbSaveInquiry } from '@/lib/db';
import { revalidatePath } from 'next/cache';

const FormSchema = z.object({
  name: z.string().min(2, {
    message: 'Name must be at least 2 characters.',
  }),
  email: z.string().email({
    message: 'Please enter a valid email address.',
  }),
  phone: z.string().optional(),
  message: z.string().min(10, {
    message: 'Message must be at least 10 characters.',
  }),
});

export type FormState = {
  message: string;
  errors?: {
    name?: string[];
    email?: string[];
    phone?: string[];
    message?: string[];
  };
};

export async function saveInquiry(
  prevState: FormState,
  formData: FormData
): Promise<FormState> {
  const validatedFields = FormSchema.safeParse({
    name: formData.get('name'),
    email: formData.get('email'),
    phone: formData.get('phone'),
    message: formData.get('message'),
  });

  if (!validatedFields.success) {
    return {
      message: 'Validation failed. Please check your input.',
      errors: validatedFields.error.flatten().fieldErrors,
    };
  }

  try {
    await dbSaveInquiry(validatedFields.data);
    revalidatePath('/admin/inquiries');
    return {
      message: 'Inquiry saved successfully.',
    };
  } catch (error) {
    console.error('Failed to save inquiry:', error);
    return {
      message: 'An error occurred while saving the inquiry.',
    };
  }
}
