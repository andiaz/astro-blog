// Import the glob loader
import { glob } from 'astro/loaders';
// Import utilities from `astro:content`
import { z, defineCollection } from 'astro:content';
// Define a `loader` and `schema` for each collection
const creativity = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/pages/creativity' }),
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

const musicProduction = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/pages/music-production' }),
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

const tech = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/pages/tech' }),
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

const uxDesign = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/pages/ux-design' }),
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
export const collections = { creativity, musicProduction, tech, uxDesign };
