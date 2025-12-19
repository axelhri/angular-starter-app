import { defineConfig } from 'vitest/config';

export default defineConfig({
  test: {
    browser: {
      enabled: true,
      headless: true,
    },
    globals: true,
    environment: 'jsdom',
  },
});
