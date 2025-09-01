import { defineConfig } from '@playwright/test';

export default defineConfig({
  testDir: './tests', // seu diretório de testes
  reporter: [
    ['list'], // reporter padrão no console
    ['allure-playwright'] // gera allure-results
  ],
  use: {
    // configurações gerais, se necessário
  },
});