import type { Page } from '@playwright/test';
import type { ILogin } from '../interfaces/iLogin.interface';
import { AdminLogin } from '../pages/login/admin-login.page';
import { ClientLogin } from '../pages/login/client-login.page';

export type PerfilLogin = 'admin' | 'client';

export class AuthFactory {
  static getLogin(perfil: PerfilLogin, page: Page): ILogin {
    if (perfil === 'admin') {
      return new AdminLogin(page);
    }
    return new ClientLogin(page);
  }
}
