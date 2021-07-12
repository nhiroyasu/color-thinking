import { defineConfig } from 'vite';
import vue from '@vitejs/plugin-vue';
import path from 'path';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue()],
  resolve: {
    alias: {
      '@': path.join(__dirname, 'src'),
    },
  },
  css: {
    preprocessorOptions: {
      scss: {
        additionalData:
          `@import '${path.join(__dirname, 'src/styles/mixins.scss')}';` +
          `@import '${path.join(__dirname, 'src/styles/classes.scss')}';`,
      },
    },
  },
});
