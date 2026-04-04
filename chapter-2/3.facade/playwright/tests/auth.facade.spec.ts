import { test, expect } from '@playwright/test';
import { AuthFacade } from './facade/auth.facade';
import type { IUserRegistration } from './interfaces/IUserRegistration.interface';
import { LoginPage } from './pages/login/login.page';

function uniqueUser(suffix: string): IUserRegistration {
  return {
    name: `QA ${suffix}`,
    email: `qa.${suffix}@example.com`,
    password: 'SenhaSegura1!',
    accessType: 'client',
  };
}

test.describe('Facade — Auth (login + cadastro)', () => {

  let auth: AuthFacade;
  let userData: IUserRegistration;
  let login: LoginPage;

  test('deve cadastrar e em seguida entrar via fachada (fluxo completo)', async ({ page }) => {
    /** Arrange */
    auth = new AuthFacade(page);
    userData = uniqueUser(`facade-${Date.now()}`);
    login = new LoginPage(page);
    /** Act */
    await auth.registerAndLogin(userData);

    /** Assert */
    const msg = await login.getMessage();
    expect(msg).toContain('Olá,');
    expect(msg).toContain('QA');
    expect(msg).toContain('cliente');
  });
});
