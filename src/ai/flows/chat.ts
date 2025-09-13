'use server';
/**
 * @fileOverview A conversational AI for TutorVista.
 *
 * - ask - A function that handles the conversation.
 */

import { ai } from '@/ai/genkit';
import { z } from 'zod';
import { teachers, classes, faqs } from '@/lib/data';

const TutorVistaContextSchema = z.object({
  teachers: z.any().describe('List of teachers and their qualifications.'),
  classes: z.any().describe('List of available classes.'),
  faqs: z.any().describe('Frequently asked questions and their answers.'),
});

const prompt = ai.definePrompt({
  name: 'chatPrompt',
  input: {
    schema: z.object({
      history: z.array(z.any()),
      question: z.string(),
      context: TutorVistaContextSchema,
    }),
  },
  prompt: `You are a friendly and helpful AI assistant for TutorVista, a tuition center.
Your goal is to answer user questions about TutorVista.
Use the provided context to answer questions, but do not mention that you are using context.
Keep your answers concise and friendly.

CONTEXT:
---
Teachers:
{{#each context.teachers}}
- {{name}}: {{qualifications}}
{{/each}}
---
Classes:
{{#each context.classes}}
- {{subject}}: Taught by {{teacher}}, scheduled for {{time}}.
{{/each}}
---
FAQs:
{{#each context.faqs}}
Q: {{question}}
A: {{answer}}
{{/each}}
---

Chat History:
{{#each history}}
{{#if (eq role 'user')}}
User: {{#each parts}}{{text}}{{/each}}
{{/if}}
{{#if (eq role 'model')}}
Assistant: {{#each parts}}{{text}}{{/each}}
{{/if}}
{{/each}}

User's new question:
{{{question}}}
`,
});

export async function ask(question: string): Promise<string> {
  const flow = ai.defineFlow(
    {
      name: 'chatFlow',
      inputSchema: z.string(),
      outputSchema: z.string(),
    },
    async (question) => {
      // For now, we don't persist history.
      const history: any[] = []; 

      const response = await prompt({
        question,
        history,
        context: {
          teachers,
          classes,
          faqs,
        },
      });

      return response.output || "I'm sorry, I couldn't generate a response.";
    }
  );

  return await flow(question);
}
