import { test, expect } from '@playwright/test';
import { AuthFactory } from './factory/auth.factory';
import type { ILogin } from './interfaces/iLogin.interface';

test.describe('Simple Factory — Login (Cliente / Admin)', () => {
  async function assertLogin(login: ILogin, user: string, pass: string, mensagemEsperada: string) {
    /** Arrange & Act */
    await login.logar(user, pass);
    /** Assert */
    expect(await login.getMensagem()).toBe(mensagemEsperada);
  }

  test('deve autenticar cliente com credenciais válidas via fábrica', async ({ page }) => {
    const login = AuthFactory.getLogin('client', page);
    await assertLogin(login, 'user', 'user123', 'Bem-vindo, cliente!');
  });

  test('deve autenticar administrador com credenciais válidas via fábrica', async ({ page }) => {
    const login = AuthFactory.getLogin('admin', page);
    await assertLogin(login, 'admin', 'admin123', 'Painel administrativo liberado.');
  });
});
