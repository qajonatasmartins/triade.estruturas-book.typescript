import { Login } from '../pages/login/login.page.js';
import { AdminLogin } from '../pages/login/admin-login.page.js';
import { ClientLogin } from '../pages/login/client-login.page.js';

/**
 * Criador abstrato (Factory Method): define o método fábrica `createLogin()`
 * e o fluxo de alto nível `performLogin()` sem acoplar a `ClientLogin` ou `AdminLogin`.
 */
export abstract class AuthFactory {
  /**
   * Método que deve ser implementado pelas subclasses para criar o login
   * @returns Login
   */
  abstract createLogin(): Login;

  /**
   * Método para realizar o login e retornar o login criado
   * @param user - Usuário
   * @param pass - Senha
   * @returns Login criado
   */
  async performLogin(user: string, pass: string): Promise<Login> {
    const login = this.createLogin();
    await login.logar(user, pass);
    return login;
  }
}

/**
 * Criador concreto: produz instâncias de {@link ClientLogin}.
 */
export class ClientAuthFactory extends AuthFactory {
  /**
   * Método para criar o login
   * @returns Login criado
   */
  createLogin(): Login {
    return new ClientLogin();
  }
}

/**
 * Criador concreto: produz instâncias de {@link AdminLogin}.
 */
export class AdminAuthFactory extends AuthFactory {
  /**
   * Método para criar o login
   * @returns Login criado
   */
  createLogin(): Login {
    return new AdminLogin();
  }
}
