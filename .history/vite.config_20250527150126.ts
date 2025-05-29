import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import tailwindcss from '@tailwindcss/vite';
import chromeExtension from 'vite-plugin-chrome-extension';


export default defineConfig({
  plugins: [
    react(),
    tailwindcss(),
    chromeExtension,
  ],
  build: {
    rollupOptions: {
      input: {
        popup: 'src/popup/index.html', // Main popup HTML file
      },
    },
  },
});
