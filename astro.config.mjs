import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

export default defineConfig({
  site: 'https://academiatekoha.com.br',
  output: 'static',
  integrations: [
    sitemap({
      customPages: [
        'https://academiatekoha.com.br/',
        'https://academiatekoha.com.br/#modalidades',
        'https://academiatekoha.com.br/#beneficios',
        'https://academiatekoha.com.br/#filosofia',
        'https://academiatekoha.com.br/#depoimentos',
        'https://academiatekoha.com.br/#localizacao',
      ],
      changefreq: 'weekly',
      priority: 0.7,
      lastmod: new Date(),
      filter: (page) => !page.includes('/blog/'),
    })
  ],
  build: {
    inlineStylesheets: 'auto',
    format: 'directory'
  },
  compressHTML: true,
  trailingSlash: 'ignore'
});
