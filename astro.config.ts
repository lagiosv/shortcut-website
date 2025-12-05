import { defineConfig, envField } from 'astro/config';
import cloudflare from '@astrojs/cloudflare';
import tailwind from '@astrojs/tailwind';

export default defineConfig({
  output: 'server',
  adapter: cloudflare({
    imageService: 'passthrough',
  }),

  integrations: [tailwind()],

  vite: {
    build: {
      minify: false,
    },
  },

  // Minimal env - just Plausible script ID
  env: {
    schema: {
      PUBLIC_PLAUSIBLE_SCRIPT_ID: envField.string({
        context: 'client',
        access: 'public',
        optional: true,
        default: '',
      }),
    },
  },
});
