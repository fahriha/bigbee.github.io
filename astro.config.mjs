import { defineConfig } from 'astro/config';
import react from "@astrojs/react";
import bookshop from '@bookshop/astro-bookshop';

// https://astro.build/config
export default defineConfig({
  site: "https://bigbee.github.io",
  integrations: [bookshop(), react()]
});