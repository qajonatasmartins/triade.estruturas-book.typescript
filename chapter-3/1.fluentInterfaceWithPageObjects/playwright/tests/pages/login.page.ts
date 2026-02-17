import HomePage from './home.page';
import { BasePage } from './page';
import { Locator, type Page } from '@playwright/test';

export class LoginPage extends BasePage {

    private readonly inputEmail: Locator;
    private readonly inputPassword: Locator;
    private readonly btnLogin: Locator;
    private readonly lblLoggedInAs: Locator;

    constructor(page: Page) {
        super(page);
        /** Define o seletor para o campo de usuário */
        this.inputEmail = page.locator('[data-qa="login-email"]');
        /** Define o seletor para o campo de senha */
        this.inputPassword = page.locator('[data-qa="login-password"]');
        /** Define o seletor para o botão de login */
        this.btnLogin = page.locator('button[data-qa="login-button"]');
        /** Define o seletor para o elemento label de login autenticado */
        this.lblLoggedInAs = page.locator('ul.nav i.fa-user + b');
    }

    /**
     * Método para definir o email para fazer login
     * @param email o email para fazer login
     */
    public async setEmail(email: string): Promise<this> {
        await this.inputEmail.waitFor({ state: 'visible' });
        await this.inputEmail.fill(email);
        return this;
    }

    /**
     * Método para definir a senha para fazer login
     * @param password a senha para fazer login
     */
    public async setPassword(password: string): Promise<this> {
        await this.inputPassword.waitFor({ state: 'visible' });
        await this.inputPassword.fill(password);
        return this;
    }

    /**
     * Método para clicar no botão de login
     */
    public async clickLogin(): Promise<HomePage> {
        await this.btnLogin.waitFor({ state: 'visible' });
        await this.btnLogin.click();
        return new HomePage(this.page);
    }

    /**
     * Método para verificar se o usuário está autenticado
     * @returns o texto do elemento lblLoggedInAs
     */
    public async getLoggedInAsText(): Promise<string> {
        await this.lblLoggedInAs.waitFor({ state: 'visible' });
        return await this.lblLoggedInAs.innerText();
    }

    /**
     * Método para abrir a página de login
     */
    public async openLogin(): Promise<this> {
        await super.open('login');
        return this;
    }
}


