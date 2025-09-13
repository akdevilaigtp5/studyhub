'use server';

/**
 * @fileOverview AI agent to generate blog topics and social media posts based on tuition subjects.
 *
 * - generateBlogTopics - A function that handles the blog topic generation process.
 * - GenerateBlogTopicsInput - The input type for the generateBlogTopics function.
 * - GenerateBlogTopicsOutput - The return type for the generateBlogTopics function.
 */

import {ai} from '@/ai/genkit';
import {z} from 'genkit';

const GenerateBlogTopicsInputSchema = z.object({
  subject: z.string().describe('The tuition subject to generate blog topics for.'),
});
export type GenerateBlogTopicsInput = z.infer<typeof GenerateBlogTopicsInputSchema>;

const GenerateBlogTopicsOutputSchema = z.object({
  topics: z.array(z.string()).describe('An array of engaging blog topics for the given subject.'),
  socialMediaPosts: z.array(z.string()).describe('An array of social media posts for the given subject.'),
});
export type GenerateBlogTopicsOutput = z.infer<typeof GenerateBlogTopicsOutputSchema>;

export async function generateBlogTopics(input: GenerateBlogTopicsInput): Promise<GenerateBlogTopicsOutput> {
  return generateBlogTopicsFlow(input);
}

const prompt = ai.definePrompt({
  name: 'generateBlogTopicsPrompt',
  input: {schema: GenerateBlogTopicsInputSchema},
  output: {schema: GenerateBlogTopicsOutputSchema},
  prompt: `You are a content creation expert specializing in generating blog topics and social media posts for tuition businesses.

  Generate 5 engaging blog topics and 5 social media posts based on the given tuition subject.
  The blog topics should be unique and capture the attention of parents and students. The social media posts should be suitable for platforms like Facebook, Instagram, and Twitter.

  Subject: {{{subject}}}`,
});

const generateBlogTopicsFlow = ai.defineFlow(
  {
    name: 'generateBlogTopicsFlow',
    inputSchema: GenerateBlogTopicsInputSchema,
    outputSchema: GenerateBlogTopicsOutputSchema,
  },
  async input => {
    const {output} = await prompt(input);
    return output!;
  }
);
