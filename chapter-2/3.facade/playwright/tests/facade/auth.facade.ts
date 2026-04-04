import type { Page } from '@playwright/test';
import type { IUsuarioCadastro } from '../interfaces/iUsuarioCadastro.interface';
import { LoginPage } from '../pages/login/login.page';
import { RegisterPage } from '../pages/register/register.page';

/**
 * Fachada: unifica os subsistemas de cadastro e login para o teste chamar uma API estável.
 */
export class AuthFacade {
  private readonly login: LoginPage;
  private readonly register: RegisterPage;

  constructor(page: Page) {
    this.login = new LoginPage(page);
    this.register = new RegisterPage(page);
  }

  async cadastrarEEntrar(dados: IUsuarioCadastro): Promise<void> {
    await this.register.cadastrarUsuario(dados);
    await this.login.entrar(dados.email, dados.senha);
  }
}
