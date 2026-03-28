import { test, expect } from '@playwright/test';
import { AdminAuthFactory, ClientAuthFactory } from './factory/auth.factory';

test.describe('Factory Method — Login (Cliente / Admin)', () => {
  test('deve autenticar cliente com credenciais válidas via fábrica', async ({ page }) => {
    const factory = new ClientAuthFactory(page);
    const login = factory.createLogin();
    await factory.performLogin('user', 'user123');
    expect(await login.getMensagem()).toBe('Bem-vindo, cliente!');
  });

  test('deve autenticar administrador com credenciais válidas via fábrica', async ({ page }) => {
    const factory = new AdminAuthFactory(page);
    const login = factory.createLogin();
    await factory.performLogin('admin', 'admin123');
    expect(await login.getMensagem()).toBe('Painel administrativo liberado.');
  });
});
