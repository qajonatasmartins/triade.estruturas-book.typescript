import { Login } from './login.page.js';

/**
 * Classe para representar um login como administrador
 * SubClass de Login
 */
export class AdminLogin extends Login {
  /**
   * Seletor para a aba de administração
   */
  get tabAdmin() {
    return $('#tab-admin');
  }
  /**
   * Seletor para o campo de administração
   */
  get adminField() {
    return $('#admin-field');
  }
  /**
   * Seletor para o campo de token de administração
   */
  get adminToken() {
    return $('#admin-token');
  }
  /**
   * Seletor para o botão de acesso de administração
   */
  get btnAccess() {
    return $('#btn-admin-access');
  }

  /**
   * Método para realizar o login como administrador
   * @param user - Usuário
   * @param pass - Senha
   */
  async logar(user: string, pass: string): Promise<void> {
    await browser.url('/login');
    await this.tabAdmin.click();
    await this.adminField.setValue(user);
    await this.adminToken.setValue(pass);
    await this.btnAccess.click();
  }
}
