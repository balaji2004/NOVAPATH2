'use server';

/**
 * @fileOverview An AI agent that generates a 360° visualization of potential career paths.
 *
 * - generateCareerPaths - A function that handles the career path generation process.
 * - GenerateCareerPathsInput - The input type for the generateCareerPaths function.
 * - GenerateCareerPathsOutput - The return type for the generateCareerPaths function.
 */

import {ai} from '@/ai/genkit';
import {z} from 'genkit';

const GenerateCareerPathsInputSchema = z.object({
  interests: z
    .string()
    .describe('The interests of the student, comma separated.'),
  skills: z.string().describe('The skills of the student, comma separated.'),
  academicHistory: z.string().describe('The academic history of the student.'),
});
export type GenerateCareerPathsInput = z.infer<typeof GenerateCareerPathsInputSchema>;

const GenerateCareerPathsOutputSchema = z.object({
  careerPaths: z
    .string()
    .describe(
      'A 360° visualization of potential career paths based on the student\'s interests, skills, and academic history.  Include potential roles, required education, and future job market trends.'
    ),
});
export type GenerateCareerPathsOutput = z.infer<typeof GenerateCareerPathsOutputSchema>;

export async function generateCareerPaths(
  input: GenerateCareerPathsInput
): Promise<GenerateCareerPathsOutput> {
  return generateCareerPathsFlow(input);
}

const prompt = ai.definePrompt({
  name: 'generateCareerPathsPrompt',
  input: {schema: GenerateCareerPathsInputSchema},
  output: {schema: GenerateCareerPathsOutputSchema},
  prompt: `You are an expert career counselor specializing in helping students explore career options.

You will use this information to generate a 360° visualization of potential career paths based on the student's interests, skills, and academic history. The visualization should include potential roles, required education, and future job market trends.

Interests: {{{interests}}}
Skills: {{{skills}}}
Academic History: {{{academicHistory}}}`,
});

const generateCareerPathsFlow = ai.defineFlow(
  {
    name: 'generateCareerPathsFlow',
    inputSchema: GenerateCareerPathsInputSchema,
    outputSchema: GenerateCareerPathsOutputSchema,
  },
  async input => {
    const {output} = await prompt(input);
    return output!;
  }
);
