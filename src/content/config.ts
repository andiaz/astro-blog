import { defineCollection, z } from 'astro:content';

const blogCollection = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    pubDate: z.date(),
    description: z.string(),
    author: z.string(),
    image: z.object({
      url: z.string(),
      alt: z.string(),
    }),
    category: z.enum(['ux-design', 'music-production', 'tech', 'creativity']),
    tags: z.array(z.string()),
  }),
});

export const collections = {
  blog: blogCollection,
};
