// @ts-check
import { defineConfig } from 'astro/config';

import preact from '@astrojs/preact';

// https://astro.build/config
export default defineConfig({
  site: 'https://andreasjohanssonux.netlify.app/',
  integrations: [preact()],
  i18n: {
    locales: ['en', 'sv'],
    defaultLocale: 'sv',
  },
});
