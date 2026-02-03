// @ts-check
import { defineConfig } from 'astro/config';

import tailwindcss from '@tailwindcss/vite';

// https://astro.build/config
export default defineConfig({
  output: 'static',
  site: 'https://tradgoth.github.io',
  base: '/biblical-silent-hill',

  vite: {
    plugins: [tailwindcss()],
  },
});