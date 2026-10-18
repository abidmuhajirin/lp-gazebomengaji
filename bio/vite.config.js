import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// Relative base path './' menjamin semua asset JS/CSS terbaca sempurna di /bio/
export default defineConfig({
  plugins: [react()],
  base: './',
});
