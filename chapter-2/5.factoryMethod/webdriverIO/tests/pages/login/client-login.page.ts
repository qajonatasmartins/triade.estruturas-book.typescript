import { Login } from './login.page.js';

/**
 * Classe para representar um login como cliente
 * SubClass de Login
 */
export class ClientLogin extends Login {
  /**
   * Seletor para a aba de cliente
   */
  get tabClient() {
    return $('#tab-client');
  }
  /**
   * Seletor para o campo de usuário
   */
  get user() {
    return $('#user');
  }
  /**
   * Seletor para o campo de senha
   */
  get pass() {
    return $('#pass');
  }
  /**
   * Seletor para o botão de login
   */
  get btnLogin() {
    return $('#btn-login');
  }

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
}
