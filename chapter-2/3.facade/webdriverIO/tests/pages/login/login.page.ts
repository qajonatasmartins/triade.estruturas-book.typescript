export class LoginPage {

  get email() { return $('[data-testid="login-email"]'); }
  get password() { return $('[data-testid="login-password"]'); }
  get btnSubmit() { return $('[data-testid="btn-login-submit"]'); }
  get message() { return $('[data-testid="login-message"]'); }

  /**
   * Abre a página de login
   * @returns void
   */
  async open(): Promise<void> {
    await browser.url('/login');
  }

  /**
   * Preenche o formulário de login e envia
   * @param email - Email do usuário
   * @param senha - Senha do usuário
   * @returns void
   */
  async fillAndSubmit(email: string, senha: string): Promise<void> {
    await this.email.setValue(email);
    await this.password.setValue(senha);
    await this.btnSubmit.click();
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
   * Obtém a mensagem de login
   * @returns Mensagem de login
   */
  async getMessage(): Promise<string> {
    await this.message.waitForDisplayed();
    await browser.waitUntil(
      async () => (await this.message.getText()).trim().length > 0,
      {
        timeout: 10000,
        timeoutMsg: 'Mensagem de login não foi exibida a tempo.',
      },
    );
    return (await this.message.getText()).trim();
  }
}
