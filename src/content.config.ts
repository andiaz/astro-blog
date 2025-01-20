// Import the glob loader
import { glob } from 'astro/loaders';
// Import utilities from `astro:content`
import { z, defineCollection } from 'astro:content';
// Define a `loader` and `schema` for each collection
const ai = defineCollection({
  loader: glob({ pattern: '**/*.{md,mdx}', base: './src/pages/ai' }),
  schema: z.object({
    title: z.string(),
    pubDate: z.date(),
    description: z.string(),
    author: z.string(),
    image: z
      .object({
        url: z.string(),
        alt: z.string(),
      })
      .optional(),
    tags: z.array(z.string()).optional(),
    category: z.string(),
    slug: z.string(),
  }),
});

const ux = defineCollection({
  loader: glob({ pattern: '**/*.{md,mdx}', base: './src/pages/ux' }),
  schema: z.object({
    title: z.string(),
    pubDate: z.date(),
    description: z.string(),
    author: z.string(),
    image: z
      .object({
        url: z.string(),
        alt: z.string(),
      })
      .optional(),
    tags: z.array(z.string()).optional(),
    category: z.string(),
    slug: z.string(),
  }),
});

// Export a `collections` object to register your collection(s)
export const collections = { ai, ux };
