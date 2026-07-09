import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

const fieldNotes = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/field-notes' }),
  schema: z.object({
    title: z.string(),
    description: z.string(),
    pubDate: z.coerce.date(),
    draft: z.boolean().default(false),
    tags: z.array(z.string()).default([]),
    linkedinUrl: z.string().url().optional(),
  }),
});

const dispatches = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/dispatches' }),
  schema: z.object({
    title: z.string(),
    subtitle: z.string(),
    description: z.string(),
    pubDate: z.coerce.date(),
    draft: z.boolean().default(false),
    tags: z.array(z.string()).default([]),
    linkedinUrl: z.string().url().optional(),
    substackUrl: z.string().url().optional(),
  }),
});

export const collections = { 'field-notes': fieldNotes, dispatches };
