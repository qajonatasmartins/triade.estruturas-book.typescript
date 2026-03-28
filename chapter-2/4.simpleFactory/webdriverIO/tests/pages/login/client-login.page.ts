import type { ILogin } from '../../interfaces/iLogin.interface.js';

export class ClientLogin implements ILogin {

  get tabClient() { return $('#tab-client'); }
  get user() { return $('#user'); }
  get pass() { return $('#pass'); }
  get btnLogin() { return $('#btn-login'); }
  get mensagem() { return $('#login-message'); }

  /**
   * Método para realizar o login como cliente
   * @param user - Usuário
   * @param pass - Senha
   */
  async logar(user: string, pass: string): Promise<void> {
    await browser.url('/login');
    await this.tabClient.click();
    await this.user.setValue(user);
    await this.pass.setValue(pass);
    await this.btnLogin.click();
  }

  /**
   * Método para obter a mensagem de login
   * @returns Mensagem de login
   */
  async getMensagem(): Promise<string> {
    await await this.mensagem.waitForDisplayed();
    await browser.waitUntil(
      async () => (await await this.mensagem.getText()).trim().length > 0,
      {
        timeout: 10000,
        timeoutMsg: 'Mensagem de login não foi exibida a tempo.',
      },
    );
    return await this.mensagem.getText();
  }
}
