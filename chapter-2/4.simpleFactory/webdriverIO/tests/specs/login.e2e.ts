import { expect } from '@wdio/globals';
import { AuthFactory } from '../factory/auth.factory.js';
import type { ILogin } from '../interfaces/iLogin.interface.js';

describe('Simple Factory — Login (Cliente / Admin)', () => {

  async function assertLogin(login: ILogin, user: string, pass: string, mensagemEsperada: string) {
    /** Arrange & Act */
    await login.logar(user, pass);
    /** Assert */
    expect(await login.getMensagem()).toBe(mensagemEsperada);
  }

  it('deve autenticar cliente com credenciais válidas via fábrica', async () => {
    const login = AuthFactory.getLogin('client');
    await assertLogin(login, 'user', 'user123', 'Bem-vindo, cliente!');
  });

  it('deve autenticar administrador com credenciais válidas via fábrica', async () => {
    const login = AuthFactory.getLogin('admin');
    await assertLogin(login, 'admin', 'admin123', 'Painel administrativo liberado.');
  });
});
