import { test, expect } from '@playwright/test';

const BASE_URL = 'https://automationexercise.com/api';

// API 1 - Todos os produtos
test('API 1 - Deve retornar todos os produtos', async ({ request }) => {
  const response = await request.get(`${BASE_URL}/productsList`);
  expect(response.status()).toBe(200);
  const body = await response.json();
  expect(body.products.length).toBeGreaterThan(0);
});

// API 2 - POST não suportado
test('API 2 - Deve retornar erro 405 ao enviar POST para productsList', async ({ request }) => {
  const response = await request.post(`${BASE_URL}/productsList`);

  expect(response.status()).toBe(200);
  const body = await response.json();
  expect(body.responseCode).toBe(405);
  expect(body.message).toContain('not supported');
});
