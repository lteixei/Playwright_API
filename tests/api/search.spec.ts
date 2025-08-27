import { test, expect } from '@playwright/test';

const BASE_URL = 'https://automationexercise.com/api';

// API 5 - Buscar produtos
test('API 5 - Deve buscar produtos por palavra-chave', async ({ request }) => {
  const response = await request.post(`${BASE_URL}/searchProduct`, {
    form: { search_product: 'shirt' }
  });

  expect(response.status()).toBe(200);
  const body = await response.json();
  expect(body.products.length).toBeGreaterThan(0);
});

// API 6 - Busca sem parâmetro
test('API 6 - Deve retornar erro 400 se não enviar search_product', async ({ request }) => {
  const response = await request.post(`${BASE_URL}/searchProduct`);

  expect(response.status()).toBe(200);
  const body = await response.json();
  expect(body.responseCode).toBe(400);
  expect(body.message).toContain('search_product');
});
