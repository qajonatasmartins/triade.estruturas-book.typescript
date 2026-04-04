import type { IUsuarioCadastro } from '../../interfaces/iUsuarioCadastro.interface.js';

export class RegisterPage {
  get nome() { return $('[data-testid="register-name"]'); }
  get email() { return $('[data-testid="register-email"]'); }
  get senha() { return $('[data-testid="register-password"]'); }
  get tipoAcesso() { return $('[data-testid="register-access-type"]'); }
  get btnSubmit() { return $('[data-testid="btn-register-submit"]'); }
  get mensagem() { return $('[data-testid="register-message"]'); }

  async abrir(): Promise<void> {
    await browser.url('/register');
  }

  async preencherECadastrar(dados: IUsuarioCadastro): Promise<void> {
    await this.nome.setValue(dados.nome);
    await this.email.setValue(dados.email);
    await this.senha.setValue(dados.senha);
    await this.tipoAcesso.selectByAttribute('value', dados.tipoAcesso);
    await this.btnSubmit.click();
  }

  async cadastrarUsuario(dados: IUsuarioCadastro): Promise<void> {
    await this.abrir();
    await this.preencherECadastrar(dados);
  }

  async getMensagem(): Promise<string> {
    await this.mensagem.waitForDisplayed();
    await browser.waitUntil(
      async () => (await this.mensagem.getText()).trim().length > 0,
      {
        timeout: 10000,
        timeoutMsg: 'Mensagem de cadastro não foi exibida a tempo.',
      },
    );
    return (await this.mensagem.getText()).trim();
  }
}
