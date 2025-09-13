'use server';

import { z } from 'zod';
import { cookies } from 'next/headers';
import { redirect } from 'next/navigation';

const FormSchema = z.object({
  password: z.string().min(1, {
    message: 'Password is required.',
  }),
});

export type FormState = {
  message: string;
};

export async function login(
  prevState: FormState,
  formData: FormData
): Promise<FormState> {
  const validatedFields = FormSchema.safeParse({
    password: formData.get('password'),
  });

  if (!validatedFields.success) {
    return {
      message: 'Invalid form data.',
    };
  }

  if (validatedFields.data.password === process.env.ADMIN_PASSWORD) {
    cookies().set('auth_token', validatedFields.data.password, {
      httpOnly: true,
      secure: process.env.NODE_ENV === 'production',
      maxAge: 60 * 60 * 24, // 24 hours
      path: '/',
    });
    redirect('/admin/inquiries');
  } else {
    return {
      message: 'Invalid password.',
    };
  }
}

export async function logout() {
  cookies().delete('auth_token');
  redirect('/admin/login');
}
