import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import tailwindcss from '@tailwindcss/vite';
import {chromeExtension} from 'vite-plugin-chrome-extension';


export default defineConfig({
  plugins: [
    react(),
    tailwindcss(),
    // @ts-expect-error vite-plugin-chrome-extension is not typed
    chromeExtension(),
  ],
  build: {
    rollupOptions: {
      input: {
        manifest: 'manifest.json',
        popup: 'src/popup/index.html', // Main popup HTML file
      },
    },
  },
});
