import type { Locator, Page } from '@playwright/test';
import type { ILogin } from '../../interfaces/iLogin.interface';

export class AdminLogin implements ILogin {
  private readonly tabAdmin: Locator;
  private readonly adminField: Locator;
  private readonly adminToken: Locator;
  private readonly btnAccess: Locator;
  private readonly mensagem: Locator;

  constructor(private readonly page: Page) {
    this.tabAdmin = page.locator('#tab-admin');
    this.adminField = page.locator('#admin-field');
    this.adminToken = page.locator('#admin-token');
    this.btnAccess = page.locator('#btn-admin-access');
    this.mensagem = page.locator('#login-message');
  }

  async logar(user: string, pass: string): Promise<void> {
    await this.page.goto('/login');
    await this.tabAdmin.click();
    await this.adminField.fill(user);
    await this.adminToken.fill(pass);
    await this.btnAccess.click();
  }

  async getMensagem(): Promise<string> {
    await this.mensagem.waitFor({ state: 'visible' });
    await this.page.waitForFunction(() => {
      const el = document.getElementById('login-message');
      return Boolean(el?.textContent?.trim().length);
    });
    return (await this.mensagem.textContent())?.trim() ?? '';
  }
}
