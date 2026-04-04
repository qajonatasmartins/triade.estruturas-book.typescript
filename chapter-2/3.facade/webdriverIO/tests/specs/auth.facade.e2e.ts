import { expect } from '@wdio/globals';
import { AuthFacade } from '../facade/auth.facade.js';
import type { IUserRegistration } from '../interfaces/IUserRegistration.interface.js';
import { LoginPage } from '../pages/login/login.page.js';

function uniqueUser(suffix: string): IUserRegistration {
  return {
    name: `QA ${suffix}`,
    email: `qa.${suffix}@example.com`,
    password: 'SenhaSegura1!',
    accessType: 'client',
  };
}

describe('Facade — Auth (login + cadastro)', () => {

  let auth: AuthFacade;
  let userData: IUserRegistration;
  let login: LoginPage;

  beforeEach(async () => {
    /** Arrange */
    auth = new AuthFacade();
    userData = uniqueUser(`facade-${Date.now()}`);
    login = new LoginPage();
  });

  it('deve cadastrar e em seguida entrar via fachada (fluxo completo)', async () => {
    /** Act */
    await auth.registerAndLogin(userData);

    /** Assert */
    const msg = await login.getMessage();
    expect(msg).toContain('Olá,');
    expect(msg).toContain('QA');
    expect(msg).toContain('cliente');
  });
});
