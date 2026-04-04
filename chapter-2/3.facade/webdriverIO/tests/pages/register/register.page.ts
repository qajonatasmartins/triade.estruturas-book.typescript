import type { IUserRegistration } from '../../interfaces/IUserRegistration.interface.js';

export class RegisterPage {
  get name() { return $('[data-testid="register-name"]'); }
  get email() { return $('[data-testid="register-email"]'); }
  get password() { return $('[data-testid="register-password"]'); }
  get accessType() { return $('[data-testid="register-access-type"]'); }
  get btnSubmit() { return $('[data-testid="btn-register-submit"]'); }
  get message() { return $('[data-testid="register-message"]'); }

  /**
   * Abre a página de registro
   * @returns void
   */
  async open(): Promise<void> {
    await browser.url('/register');
  }

  /**
   * Preenche o formulário de registro e envia
   * @param dados - Dados do usuário
   * @returns void
   */
  async fillAndSubmit(dados: IUserRegistration): Promise<void> {
    await this.name.setValue(dados.name);
    await this.email.setValue(dados.email);
    await this.password.setValue(dados.password);
    await this.accessType.selectByAttribute('value', dados.accessType);
    await this.btnSubmit.click();
  }

  /**
   * Registra um usuário
   * @param dados - Dados do usuário
   * @returns void
   */
  async registerUser(dados: IUserRegistration): Promise<void> {
    await this.open();
    await this.fillAndSubmit(dados);
  }

  /**
   * Obtém a mensagem de cadastro
   * @returns Mensagem de cadastro
   */
  async getMessage(): Promise<string> {
    await this.message.waitForDisplayed();
    await browser.waitUntil(
      async () => (await this.message.getText()).trim().length > 0,
      {
        timeout: 10000,
        timeoutMsg: 'Mensagem de cadastro não foi exibida a tempo.',
      },
    );
    return (await this.message.getText()).trim();
  }
}
