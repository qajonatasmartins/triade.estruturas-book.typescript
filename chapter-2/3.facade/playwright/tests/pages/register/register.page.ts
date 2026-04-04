import type { Locator, Page } from '@playwright/test';
import type { IUserRegistration } from '../../interfaces/IUserRegistration.interface';

export class RegisterPage {
  private readonly nome: Locator;
  private readonly email: Locator;
  private readonly senha: Locator;
  private readonly tipoAcesso: Locator;
  private readonly btnSubmit: Locator;
  private readonly mensagem: Locator;

  constructor(private readonly page: Page) {
    this.nome = page.getByTestId('register-name');
    this.email = page.getByTestId('register-email');
    this.senha = page.getByTestId('register-password');
    this.tipoAcesso = page.getByTestId('register-access-type');
    this.btnSubmit = page.getByTestId('btn-register-submit');
    this.mensagem = page.getByTestId('register-message');
  }

  /**
   * Abre a página de registro
   * @returns void
   */
  async open(): Promise<void> {
    await this.page.goto('/register');
  }

  /**
   * Registra um usuário
   * @param userData - Dados do usuário
   * @returns void
   */
  async registerUser(userData: IUserRegistration): Promise<void> {
    await this.open();
    await this.fillAndSubmit(userData);
  }

  /**
   * Preenche o formulário de registro e envia
   * @param userData - Dados do usuário
   * @returns void
   */
  async fillAndSubmit(userData: IUserRegistration): Promise<void> {
    await this.nome.fill(userData.name);
    await this.email.fill(userData.email);
    await this.senha.fill(userData.password);
    await this.tipoAcesso.selectOption(userData.accessType);
    await this.btnSubmit.click();
  }

  /**
   * Obtém a mensagem de registro
   * @returns Mensagem de registro
   */
  async getMessage(): Promise<string> {
    await this.mensagem.waitFor({ state: 'visible' });
    await this.page.waitForFunction(() => {
      const el = document.querySelector('[data-testid="register-message"]');
      return Boolean(el?.textContent?.trim().length);
    });
    return (await this.mensagem.textContent())?.trim() ?? '';
  }
}
