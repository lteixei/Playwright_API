import { defineConfig } from '@playwright/test';

export default defineConfig({
  testDir: './tests', // <- Certifique-se que aponta para a pasta onde estão os testes
  timeout: 30 * 1000,
  retries: 0,
  use: {
    baseURL: 'https://automationexercise.com/api',
  },
});
