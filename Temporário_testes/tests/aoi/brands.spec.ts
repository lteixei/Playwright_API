import { test, expect } from '@playwright/test';

const BASE_URL = 'https://automationexercise.com/api';

// API 3 - Todas as marcas
test('API 3 - Deve retornar todas as marcas', async ({ request }) => {
  const response = await request.get(`${BASE_URL}/brandsList`);
  expect(response.status()).toBe(200);
  const body = await response.json();
  expect(body.brands.length).toBeGreaterThan(0);
});

// API 4 - PUT não suportado
test('API 4 - Deve retornar erro 405 ao enviar PUT para brandsList', async ({ request }) => {
  const response = await request.put(`${BASE_URL}/brandsList`);
  expect(response.status()).toBe(200);
  const body = await response.json();
  expect(body.responseCode).toBe(405);
  expect(body.message).toContain('not supported');
});
