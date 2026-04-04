export class LoginPage {

  get email() { return $('[data-testid="login-email"]'); }
  get password() { return $('[data-testid="login-password"]'); }
  get btnSubmit() { return $('[data-testid="btn-login-submit"]'); }
  get mensagem() { return $('[data-testid="login-message"]'); }

  async abrir(): Promise<void> {
    await browser.url('/login');
  }

  async preencherEEntrar(email: string, senha: string): Promise<void> {
    await this.email.setValue(email);
    await this.password.setValue(senha);
    await this.btnSubmit.click();
  }

  async entrar(email: string, senha: string): Promise<void> {
    await this.abrir();
    await this.preencherEEntrar(email, senha);
  }

  async getMensagem(): Promise<string> {
    await this.mensagem.waitForDisplayed();
    await browser.waitUntil(
      async () => (await this.mensagem.getText()).trim().length > 0,
      {
        timeout: 10000,
        timeoutMsg: 'Mensagem de login não foi exibida a tempo.',
      },
    );
    return (await this.mensagem.getText()).trim();
  }
}
