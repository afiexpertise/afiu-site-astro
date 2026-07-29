import { defineCollection } from 'astro:content';
import { glob } from 'astro/loaders';
import { z } from 'astro/zod';

const formations = defineCollection({
  loader: glob({
    pattern: '**/*.{md,mdx}',
    base: './src/content/formations',
  }),
  schema: z
    .object({
      type: z.string().optional(),
      title: z.string().optional(),
      description: z.string().optional(),
      course_id: z.string().optional(),
      university: z.string().optional(),
      duration_minutes: z.number().optional(),
      status: z.string().optional(),
      language: z.string().optional(),
      version: z.union([z.string(), z.number()]).optional(),
      draft: z.boolean().optional(),
    })
    .passthrough(),
});

export const collections = { formations };
