'use server';

import { ask } from '@/ai/flows/chat';

export async function askAi(
  prevState: { response: string },
  formData: FormData
): Promise<{ response: string }> {
  const message = formData.get('message') as string;
  if (!message) {
    return { response: "I didn't receive a message." };
  }
  try {
    const response = await ask(message);
    return { response };
  } catch (e) {
    console.error(e);
    return { response: 'Sorry, I ran into an error.' };
  }
}