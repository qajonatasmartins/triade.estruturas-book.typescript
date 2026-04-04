import type { Locator, Page } from '@playwright/test';

export class LoginPage {
  private readonly email: Locator;
  private readonly password: Locator;
  private readonly btnSubmit: Locator;
  private readonly mensagem: Locator;

  constructor(private readonly page: Page) {
    this.email = page.getByTestId('login-email');
    this.password = page.getByTestId('login-password');
    this.btnSubmit = page.getByTestId('btn-login-submit');
    this.mensagem = page.getByTestId('login-message');
  }

  async abrir(): Promise<void> {
    await this.page.goto('/login');
  }

  async entrar(email: string, senha: string): Promise<void> {
    await this.abrir();
    await this.preencherEEntrar(email, senha);
  }

  async preencherEEntrar(email: string, senha: string): Promise<void> {
    await this.email.fill(email);
    await this.password.fill(senha);
    await this.btnSubmit.click();
  }

  async getMensagem(): Promise<string> {
    await this.mensagem.waitFor({ state: 'visible' });
    await this.page.waitForFunction(() => {
      const el = document.querySelector('[data-testid="login-message"]');
      return Boolean(el?.textContent?.trim().length);
    });
    return (await this.mensagem.textContent())?.trim() ?? '';
  }
}
