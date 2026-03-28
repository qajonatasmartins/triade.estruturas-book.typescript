import type { Locator, Page } from '@playwright/test';
import { Login } from './login.page';

/**
 * Classe para representar um login como administrador
 * SubClass de Login
 */
export class AdminLogin extends Login {
  private readonly tabAdmin: Locator;
  private readonly adminField: Locator;
  private readonly adminToken: Locator;
  private readonly btnAccess: Locator;

  constructor(page: Page) {
    super(page);
    this.tabAdmin = page.locator('#tab-admin');
    this.adminField = page.locator('#admin-field');
    this.adminToken = page.locator('#admin-token');
    this.btnAccess = page.locator('#btn-admin-access');
  }

  /**
   * Método para realizar o login como administrador
   * @param user - Usuário
   * @param pass - Senha
   */
  async logar(user: string, pass: string): Promise<void> {
    await this.page.goto('/login');
    await this.tabAdmin.click();
    await this.adminField.fill(user);
    await this.adminToken.fill(pass);
    await this.btnAccess.click();
  }
}
