'use server';

/**
 * @fileOverview An AI agent that provides contextual help and guidance to students based on their behavior on the EduVoyager website.
 *
 * - provideContextualHelp - A function that determines whether to provide help and what kind of help to provide.
 * - ProvideContextualHelpInput - The input type for the provideContextualHelp function.
 * - ProvideContextualHelpOutput - The return type for the provideContextualHelp function.
 */

import {ai} from '@/ai/genkit';
import {z} from 'genkit';

const ProvideContextualHelpInputSchema = z.object({
  userActivity: z
    .string()
    .describe('A description of the user\'s current activity on the website. This is likely the user\'s chat message.'),
  pageContent: z
    .string()
    .describe('The content of the current page the user is viewing.'),
  userInfo: z.string().optional().describe('Optional information about the user.'),
});
export type ProvideContextualHelpInput = z.infer<typeof ProvideContextualHelpInputSchema>;

const ProvideContextualHelpOutputSchema = z.object({
  helpMessage: z
    .string()
    .describe('The message the AI avatar should display to the user.'),
});
export type ProvideContextualHelpOutput = z.infer<typeof ProvideContextualHelpOutputSchema>;

export async function provideContextualHelp(input: ProvideContextualHelpInput): Promise<ProvideContextualHelpOutput> {
  return provideContextualHelpFlow(input);
}

const prompt = ai.definePrompt({
  name: 'provideContextualHelpPrompt',
  input: {schema: ProvideContextualHelpInputSchema},
  output: {schema: ProvideContextualHelpOutputSchema},
  prompt: `You are a friendly and helpful AI career guidance avatar on the EduVoyager website. Your goal is to provide helpful and relevant guidance to students based on their questions and activity on the site.

  Here's information about the current user query and page content:

  User Query: {{{userActivity}}}
  Current Page: {{{pageContent}}}
  User Info (if available): {{{userInfo}}}

  Based on this information, provide a concise, helpful, and friendly response to the user's query. If the user asks a general question, provide a general answer. If their query is related to the current page, tailor your response to be more contextual.
  If you don't know the answer, say so politely.
`,
});

const provideContextualHelpFlow = ai.defineFlow(
  {
    name: 'provideContextualHelpFlow',
    inputSchema: ProvideContextualHelpInputSchema,
    outputSchema: ProvideContextualHelpOutputSchema,
  },
  async input => {
    const {output} = await prompt(input);
    return output!;
  }
);
