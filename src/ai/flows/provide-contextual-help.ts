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
    .describe('A description of the user\'s current activity on the website.'),
  pageContent: z
    .string()
    .describe('The content of the current page the user is viewing.'),
  userInfo: z.string().optional().describe('Optional information about the user.'),
});
export type ProvideContextualHelpInput = z.infer<typeof ProvideContextualHelpInputSchema>;

const ProvideContextualHelpOutputSchema = z.object({
  shouldProvideHelp: z
    .boolean()
    .describe('Whether the AI avatar should provide help to the user.'),
  helpMessage: z
    .string()
    .describe('The message the AI avatar should display to the user if help is needed.'),
});
export type ProvideContextualHelpOutput = z.infer<typeof ProvideContextualHelpOutputSchema>;

export async function provideContextualHelp(input: ProvideContextualHelpInput): Promise<ProvideContextualHelpOutput> {
  return provideContextualHelpFlow(input);
}

const prompt = ai.definePrompt({
  name: 'provideContextualHelpPrompt',
  input: {schema: ProvideContextualHelpInputSchema},
  output: {schema: ProvideContextualHelpOutputSchema},
  prompt: `You are an AI career guidance avatar on the EduVoyager website. Your goal is to provide helpful and relevant guidance to students based on their activity on the site.

  Here's information about the current user activity and page content:

  User Activity: {{{userActivity}}}
  Page Content: {{{pageContent}}}
  User Info (if available): {{{userInfo}}}

  Based on this information, determine whether the user needs help. If so, create a short, helpful message to guide them. Focus on being clear and concise.
  If no help is needed, indicate that no help is required.
  Do not suggest alternative career paths, only give assistance with the current page and activity.
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
