import { z, defineCollection } from 'astro:content';

const articles = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    subtitle: z.string().optional(),
    symbol: z.string().optional(),
    description: z.string().optional(),
    order: z.number().optional(),
  })
});

export const collections = { articles };
