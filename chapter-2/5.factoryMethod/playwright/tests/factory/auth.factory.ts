import type { Page } from '@playwright/test';
import { Login } from '../pages/login/login.page';
import { AdminLogin } from '../pages/login/admin-login.page';
import { ClientLogin } from '../pages/login/client-login.page';

/**
 * Criador abstrato (Factory Method): define o método fábrica `createLogin()`
 * e o fluxo de alto nível `performLogin()` sem acoplar a `ClientLogin` ou `AdminLogin`.
 */
export abstract class AuthFactory {
  constructor(protected readonly page: Page) { }

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
  async performLogin(user: string, pass: string): Promise<void> {
    const login = this.createLogin();
    await login.logar(user, pass);
  }
}

/** Criador concreto: produz instâncias de {@link ClientLogin}. */
export class ClientAuthFactory extends AuthFactory {
  constructor(page: Page) {
    super(page);
  }

  /**
   * Método para criar o login
   * @returns Login criado
   */
  createLogin(): Login {
    return new ClientLogin(this.page);
  }
}

/** Criador concreto: produz instâncias de {@link AdminLogin}. */
export class AdminAuthFactory extends AuthFactory {
  constructor(page: Page) {
    super(page);
  }
  /**
   * Método para criar o login
   * @returns Login criado
   */
  createLogin(): Login {
    return new AdminLogin(this.page);
  }
}
