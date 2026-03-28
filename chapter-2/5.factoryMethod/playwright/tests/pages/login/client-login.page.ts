import type { Locator, Page } from '@playwright/test';
import { Login } from './login.page';

/**
 * Classe para representar um login como cliente
 * SubClass de Login
 */
export class ClientLogin extends Login {
  private readonly tabClient: Locator;
  private readonly user: Locator;
  private readonly pass: Locator;
  private readonly btnLogin: Locator;

  constructor(page: Page) {
    super(page);
    this.tabClient = page.locator('#tab-client');
    this.user = page.locator('#user');
    this.pass = page.locator('#pass');
    this.btnLogin = page.locator('#btn-login');
  }

  /**
   * Método para realizar o login como cliente
   * @param user - Usuário
   * @param pass - Senha
   */
  async logar(user: string, pass: string): Promise<void> {
    await this.page.goto('/login');
    await this.tabClient.click();
    await this.user.fill(user);
    await this.pass.fill(pass);
    await this.btnLogin.click();
  }
}
