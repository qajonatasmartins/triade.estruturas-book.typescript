import type { Locator, Page } from '@playwright/test';
import type { ILogin } from '../../interfaces/iLogin.interface';
/**
 * Classe abstrata para representar um login
 * SuperClass para os logins AdminLogin e ClientLogin
 */
export abstract class Login implements ILogin {
  /**
   * Seletor para a mensagem de login
   */
  protected readonly mensagem: Locator;

  /**
   * Construtor da classe
   * @param page - Página do navegador
   */
  constructor(protected readonly page: Page) {
    this.mensagem = page.locator('#login-message');
  }

  /**
   * Método para realizar o login
   * @param user - Usuário
   * @param pass - Senha
   */
  abstract logar(user: string, pass: string): Promise<void>;

  /**
   * Método para obter a mensagem de login
   * @returns Mensagem de login
   */
  async getMensagem(): Promise<string> {
    await this.mensagem.waitFor({ state: 'visible' });
    await this.page.waitForFunction(() => {
      const el = document.getElementById('login-message');
      return Boolean(el?.textContent?.trim().length);
    });
    return (await this.mensagem.textContent())?.trim() ?? '';
  }
}
