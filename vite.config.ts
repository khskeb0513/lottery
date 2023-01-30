import { defineConfig } from 'vite';
import { svelte } from '@sveltejs/vite-plugin-svelte';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [svelte()],
  base: 'https://khskeb0513.github.io/lottery',
  build: {
    outDir: 'docs',
  },
});
