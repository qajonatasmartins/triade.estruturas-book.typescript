import { expect } from '@wdio/globals';
import { AdminAuthFactory, ClientAuthFactory } from '../factory/auth.factory.js';

describe('Factory Method — Login (Cliente / Admin)', () => {
  it('deve autenticar cliente com credenciais válidas via fábrica', async () => {
    const factory = new ClientAuthFactory();
    const login = factory.createLogin();
    await factory.performLogin('user', 'user123');
    expect(await login.getMensagem()).toBe('Bem-vindo, cliente!');
  });

  it('deve autenticar administrador com credenciais válidas via fábrica', async () => {
    const factory = new AdminAuthFactory();
    const login = factory.createLogin();
    await factory.performLogin('admin', 'admin123');
    expect(await login.getMensagem()).toBe('Painel administrativo liberado.');
  });
});
