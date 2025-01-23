// @ts-check
import { defineConfig } from 'astro/config';
import preact from '@astrojs/preact';
import tailwind from '@astrojs/tailwind';
import sitemap from '@astrojs/sitemap';
import mdx from '@astrojs/mdx';
import embeds from 'astro-embed/integration';
import { remarkWikiLinks } from './src/plugins/remarkWikiLinks.mjs';

// https://astro.build/config
export default defineConfig({
  site: 'https://andreasjohanssonux.netlify.app/',
  integrations: [
    sitemap(),
    preact({
      include: ['**/preact/*', '**/ui/*'],
    }),
    tailwind({
      applyBaseStyles: false,
    }),
    embeds(),
    mdx(),
  ],
  markdown: {
    remarkPlugins: [remarkWikiLinks],
  },
});
