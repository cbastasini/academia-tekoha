import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

export default defineConfig({
  site: 'https://academiatekoha.com.br',
  output: 'static',
  integrations: [
    sitemap({
      customPages: ['https://academiatekoha.com.br/blog'],
      changefreq: 'weekly',
      priority: 0.7,
      lastmod: new Date(),
    })
  ],
  build: {
    inlineStylesheets: 'auto',
    format: 'directory'
  },
  compressHTML: true,
  trailingSlash: 'ignore'
});
