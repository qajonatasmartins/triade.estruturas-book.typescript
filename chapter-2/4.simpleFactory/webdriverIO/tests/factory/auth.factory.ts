import type { ILogin } from '../interfaces/iLogin.interface.js';
import { AdminLogin } from '../pages/login/admin-login.page.js';
import { ClientLogin } from '../pages/login/client-login.page.js';

export type PerfilLogin = 'admin' | 'client';

export class AuthFactory {

  /**
   * Método para obter o login correto
   * @param perfil - Perfil de login
   * @returns Login correto
   */
  static getLogin(perfil: PerfilLogin): ILogin {
    if (perfil === 'admin') {
      return new AdminLogin();
    }
    return new ClientLogin();
  }
}
