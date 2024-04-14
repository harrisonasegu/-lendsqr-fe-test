/// <reference types="vitest" />

import { defineConfig } from 'vitest/config'

// https://vitejs.dev/config/
export default defineConfig({
  test: {
    globals: true,
    environment: 'jsdom',
    setupFiles: './tests/setup'
  },
  server: {
    host: '0.0.0.0',
    port: 8000, // Change this to your desired port number
  },
})
 