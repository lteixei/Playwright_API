import { request } from '@playwright/test';

export const BASE_URL = 'https://automationexercise.com/api';

export async function createUser(requestInstance: any, userData: any) {
  return await requestInstance.post(`${BASE_URL}/createAccount`, { form: userData });
}

export async function deleteUser(requestInstance: any, email: string, password: string) {
  return await requestInstance.delete(`${BASE_URL}/deleteAccount`, { form: { email, password } });
}

export async function loginUser(requestInstance: any, email: string, password: string) {
  return await requestInstance.post(`${BASE_URL}/verifyLogin`, { form: { email, password } });
}
