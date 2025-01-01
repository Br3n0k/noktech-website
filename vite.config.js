import { defineConfig } from 'vite';

export default defineConfig({
  assetsInclude: ['**/*.woff2'],
  build: {
    rollupOptions: {
      output: {
        assetFileNames: 'assets/[name].[ext]'
      }
    }
  }
}); 