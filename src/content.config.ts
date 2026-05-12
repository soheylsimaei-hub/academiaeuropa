import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

const insights = defineCollection({
  loader: glob({ pattern: '**/*.{md,mdx}', base: './src/content/insights' }),
  schema: z.object({
    title: z.string(),
    description: z.string(),
    category: z.enum([
      'Professional Education',
      'Clinical Mastery',
      'Evidence & Ethics',
      'Leadership in Practice',
      'Faculty Perspectives',
      'Academic Standards',
    ]),
    publishedAt: z.date(),
    author: z.string().default('Academia Europa'),
    draft: z.boolean().default(false),
  }),
});

export const collections = { insights };
