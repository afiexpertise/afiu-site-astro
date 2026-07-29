import { defineConfig } from 'astro/config';
import mdx from '@astrojs/mdx';
import sitemap from '@astrojs/sitemap';
import tailwindcss from '@tailwindcss/vite';
import { rehypeOkfLinks } from './scripts/rehype-okf-links.mjs';

const repositoryName = process.env.GITHUB_REPOSITORY?.split('/')[1];
const base = process.env.BASE_PATH ?? (process.env.GITHUB_ACTIONS && repositoryName ? `/${repositoryName}` : '/');

export default defineConfig({
  site: process.env.SITE_URL || 'https://afiexpertise.github.io',
  base,
  trailingSlash: 'always',
  output: 'static',
  integrations: [mdx(), sitemap()],
  vite: {
    plugins: [tailwindcss()],
  },
  markdown: {
    rehypePlugins: [rehypeOkfLinks],
    shikiConfig: {
      theme: 'github-dark',
      wrap: true,
    },
  },
});
