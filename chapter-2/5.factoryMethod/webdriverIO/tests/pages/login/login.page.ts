import type { ILogin } from '../../interfaces/iLogin.interface.js';

/**
 * Classe abstrata para representar um login
 * SuperClass para os logins AdminLogin e ClientLogin
 */
export abstract class Login implements ILogin {
  /**
   * Seletor para a mensagem de login
   */
  protected get mensagem() {
    return $('#login-message');
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
    await this.mensagem.waitForDisplayed();
    await browser.waitUntil(
      async () => (await this.mensagem.getText()).trim().length > 0,
      {
        timeout: 10000,
        timeoutMsg: 'Mensagem de login não foi exibida a tempo.',
      },
    );
    return await this.mensagem.getText();
  }
}
