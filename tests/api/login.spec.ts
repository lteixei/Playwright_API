import { test, expect } from '@playwright/test';

const BASE_URL = 'https://automationexercise.com/api';

// Função para gerar email único
function generateEmail() {
  return `teste_${Date.now()}@exemplo.com`;
}

// API 7 - Login válido (cria usuário antes)
test('API 7 - Deve logar com credenciais válidas', async ({ request }) => {
  const email = generateEmail();

  // Criar usuário
  const createResponse = await request.post(`${BASE_URL}/createAccount`, {
    form: {
      name: 'Teste Playwright',
      email: email,
      password: '123456',
      title: 'Mr',
      birth_date: '01',
      birth_month: 'January',
      birth_year: '1990',
      firstname: 'Teste',
      lastname: 'Playwright',
      company: 'Exemplo Ltda',
      address1: 'Rua Teste, 123',
      address2: '',
      country: 'Brazil',
      zipcode: '12345-678',
      state: 'SP',
      city: 'São Paulo',
      mobile_number: '11999999999'
    }
  });

  expect(createResponse.status()).toBe(200);
  const createBody = await createResponse.json();
  expect(createBody.message).toContain('User created!');

  // Fazer login com o usuário criado
  const loginResponse = await request.post(`${BASE_URL}/verifyLogin`, {
    form: { email, password: '123456' }
  });

  expect(loginResponse.status()).toBe(200);
  const loginBody = await loginResponse.json();
  expect(loginBody.message).toContain('User exists!');
});
