import type { Locator, Page } from '@playwright/test';
import type { ILogin } from '../../interfaces/iLogin.interface';

export class ClientLogin implements ILogin {
  private readonly tabClient: Locator;
  private readonly user: Locator;
  private readonly pass: Locator;
  private readonly btnLogin: Locator;
  private readonly mensagem: Locator;

  constructor(private readonly page: Page) {
    this.tabClient = page.locator('#tab-client');
    this.user = page.locator('#user');
    this.pass = page.locator('#pass');
    this.btnLogin = page.locator('#btn-login');
    this.mensagem = page.locator('#login-message');
  }

  async logar(user: string, pass: string): Promise<void> {
    await this.page.goto('/login');
    await this.tabClient.click();
    await this.user.fill(user);
    await this.pass.fill(pass);
    await this.btnLogin.click();
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
