import type { ILogin } from '../../interfaces/iLogin.interface.js';

export class AdminLogin implements ILogin {

  get tabAdmin() { return $('#tab-admin'); }
  get adminField() { return $('#admin-field'); }
  get adminToken() { return $('#admin-token'); }
  get btnAccess() { return $('#btn-admin-access'); }
  get mensagem() { return $('#login-message'); }

  /**
   * Método para realizar o login como administrador
   * @param user - Identificador admin
   * @param pass - Token / senha
   */
  async logar(user: string, pass: string): Promise<void> {
    await browser.url('/login');
    await this.tabAdmin.click();
    await this.adminField.setValue(user);
    await this.adminToken.setValue(pass);
    await this.btnAccess.click();
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
