import type { Locator, Page } from '@playwright/test';
import type { IUsuarioCadastro } from '../../interfaces/iUsuarioCadastro.interface';

export class RegisterPage {
  private readonly nome: Locator;
  private readonly email: Locator;
  private readonly senha: Locator;
  private readonly tipoAcesso: Locator;
  private readonly btnSubmit: Locator;
  private readonly mensagem: Locator;

  constructor(private readonly page: Page) {
    this.nome = page.getByTestId('register-name');
    this.email = page.getByTestId('register-email');
    this.senha = page.getByTestId('register-password');
    this.tipoAcesso = page.getByTestId('register-access-type');
    this.btnSubmit = page.getByTestId('btn-register-submit');
    this.mensagem = page.getByTestId('register-message');
  }

  async abrir(): Promise<void> {
    await this.page.goto('/register');
  }

  async cadastrarUsuario(dados: IUsuarioCadastro): Promise<void> {
    await this.abrir();
    await this.preencherECadastrar(dados);
  }

  async preencherECadastrar(dados: IUsuarioCadastro): Promise<void> {
    await this.nome.fill(dados.nome);
    await this.email.fill(dados.email);
    await this.senha.fill(dados.senha);
    await this.tipoAcesso.selectOption(dados.tipoAcesso);
    await this.btnSubmit.click();
  }

  async getMensagem(): Promise<string> {
    await this.mensagem.waitFor({ state: 'visible' });
    await this.page.waitForFunction(() => {
      const el = document.querySelector('[data-testid="register-message"]');
      return Boolean(el?.textContent?.trim().length);
    });
    return (await this.mensagem.textContent())?.trim() ?? '';
  }
}
