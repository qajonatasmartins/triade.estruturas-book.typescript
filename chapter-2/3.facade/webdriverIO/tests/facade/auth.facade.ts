import type { IUsuarioCadastro } from '../interfaces/iUsuarioCadastro.interface.js';
import { LoginPage } from '../pages/login/login.page.js';
import { RegisterPage } from '../pages/register/register.page.js';

export class AuthFacade {
  private readonly login: LoginPage;
  private readonly register: RegisterPage;

  constructor() {
    this.login = new LoginPage();
    this.register = new RegisterPage();
  }

  async cadastrarEEntrar(dados: IUsuarioCadastro): Promise<void> {
    await this.login.abrir();
    await this.register.cadastrarUsuario(dados);
    await this.login.entrar(dados.email, dados.senha);
  }
}
