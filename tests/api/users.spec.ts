import { test, expect } from '@playwright/test';

const BASE_URL = 'https://automationexercise.com/api';
let dynamicUser = {
  email: `user_${Date.now()}@teste.com`,
  password: '123456',
  name: 'User Playwright'
};

// API 11 - Criar novo usuário
test('API 11 - Deve criar novo usuário', async ({ request }) => {
  const response = await request.post(`${BASE_URL}/createAccount`, {
    form: {
      name: dynamicUser.name,
      email: dynamicUser.email,
      password: dynamicUser.password,
      title: 'Mr',
      birth_date: '1',
      birth_month: '1',
      birth_year: '2000',
      firstname: 'Test',
      lastname: 'Playwright',
      company: 'QA Ltda',
      address1: 'Rua 123',
      address2: 'Apto 456',
      country: 'Canada',
      zipcode: '12345',
      state: 'SP',
      city: 'São Paulo',
      mobile_number: '11999999999'
    }
  });

  expect(response.status()).toBe(200);
  const body = await response.json();
  expect(body.responseCode).toBe(201);
});

// API 12 - Deletar usuário
test('API 12 - Deve deletar conta de usuário', async ({ request }) => {
  const response = await request.delete(`${BASE_URL}/deleteAccount`, {
    form: { email: dynamicUser.email, password: dynamicUser.password }
  });

  expect(response.status()).toBe(200);
  const body = await response.json();
  expect(body.responseCode).toBe(200);
});

// API 13 - Atualizar usuário
test('API 13 - Deve atualizar conta do usuário', async ({ request }) => {
  // recria antes de atualizar
  await request.post(`${BASE_URL}/createAccount`, {
    form: {
      name: dynamicUser.name,
      email: dynamicUser.email,
      password: dynamicUser.password,
      title: 'Mr',
      birth_date: '1',
      birth_month: '1',
      birth_year: '2000',
      firstname: 'Test',
      lastname: 'Playwright',
      company: 'QA Ltda',
      address1: 'Rua 123',
      address2: 'Apto 456',
      country: 'Canada',
      zipcode: '12345',
      state: 'SP',
      city: 'São Paulo',
      mobile_number: '11999999999'
    }
  });

  const response = await request.put(`${BASE_URL}/updateAccount`, {
    form: {
      email: dynamicUser.email,
      password: dynamicUser.password,
      name: 'User Atualizado'
    }
  });

  expect(response.status()).toBe(200);
  const body = await response.json();
  expect(body.responseCode).toBe(200);
});

// API 14 - Buscar usuário
test('API 14 - Deve buscar usuário por email', async ({ request }) => {
  const response = await request.get(`${BASE_URL}/getUserDetailByEmail`, {
    params: { email: dynamicUser.email }
  });

  expect(response.status()).toBe(200);
  const body = await response.json();
  expect(body.responseCode).toBe(200);
});
