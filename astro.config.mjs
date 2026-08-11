// @ts-check
import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';
import tailwindcss from '@tailwindcss/vite';

// https://astro.build/config
export default defineConfig({
  // Domaine cible de la V1. Sert au sitemap et aux URL canoniques / Open Graph.
  site: 'https://labevents.nc',

  // Génération statique par défaut (aucun rendu serveur en V1).
  output: 'static',

  integrations: [sitemap()],

  // Tailwind CSS 4 s'intègre via le plugin Vite officiel (plus d'intégration
  // @astrojs/tailwind, dépréciée depuis Tailwind 4).
  vite: {
    plugins: [tailwindcss()],
  },

  prefetch: {
    prefetchAll: true,
    defaultStrategy: 'hover',
  },
});
