import type { IUserRegistration } from '../interfaces/IUserRegistration.interface.js';
import { LoginPage } from '../pages/login/login.page.js';
import { RegisterPage } from '../pages/register/register.page.js';

export class AuthFacade {
  private readonly login: LoginPage;
  private readonly register: RegisterPage;

  constructor() {
    this.login = new LoginPage();
    this.register = new RegisterPage();
  }

  /**
   * Registra um usuário e depois faz login
   * @param userData - Dados do usuário
   * @returns void
   */
  async registerAndLogin(userData: IUserRegistration): Promise<void> {
    await this.login.open();
    await this.register.registerUser(userData);
    await this.login.signIn(userData.email, userData.password);
  }
}
