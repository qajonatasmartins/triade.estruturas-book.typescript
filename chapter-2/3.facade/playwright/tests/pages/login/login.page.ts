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

  /**
   * Abre a página de login
   * @returns void
   */
  async open(): Promise<void> {
    await this.page.goto('/login');
  }

  /**
   * Realiza o login
   * @param email - Email do usuário
   * @param senha - Senha do usuário
   * @returns void
   */
  async signIn(email: string, senha: string): Promise<void> {
    await this.open();
    await this.fillAndSubmit(email, senha);
  }

  /**
   * Preenche o formulário de login e envia
   * @param email - Email do usuário
   * @param senha - Senha do usuário
   * @returns void
   */
  async fillAndSubmit(email: string, senha: string): Promise<void> {
    await this.email.fill(email);
    await this.password.fill(senha);
    await this.btnSubmit.click();
  }

  /**
   * Obtém a mensagem de login
   * @returns Mensagem de login
   */
  async getMessage(): Promise<string> {
    await this.mensagem.waitFor({ state: 'visible' });
    await this.page.waitForFunction(() => {
      const el = document.querySelector('[data-testid="login-message"]');
      return Boolean(el?.textContent?.trim().length);
    });
    return (await this.mensagem.textContent())?.trim() ?? '';
  }
}
