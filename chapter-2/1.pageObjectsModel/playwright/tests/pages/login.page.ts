import { BasePage } from './page';
import { Locator, type Page } from '@playwright/test';

export class LoginPage extends BasePage {

    private readonly inputEmail: Locator;
    private readonly inputPassword: Locator;
    private readonly btnLogin: Locator;
    private readonly lblLoggedInAs: Locator;
    private readonly btnLogout: Locator;

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
        /** Define o seletor para o botão de logout */
        this.btnLogout = page.locator('a[href="/logout"]');
    }

    /**
     * Método para definir o email para fazer login
     * @param email o email para fazer login
     */
    public async setEmail(email: string) {
        await this.inputEmail.waitFor({ state: 'visible' });
        await this.inputEmail.fill(email);
    }

    /**
     * Método para definir a senha para fazer login
     * @param password a senha para fazer login
     */
    public async setPassword(password: string) {
        await this.inputPassword.waitFor({ state: 'visible' });
        await this.inputPassword.fill(password);
    }

    /**
     * Método para clicar no botão de login
     */
    public async clickLogin() {
        await this.btnLogin.waitFor({ state: 'visible' });
        await this.btnLogin.click();
    }

    /**
     * Método para verificar se o usuário está autenticado
     * @returns o texto do elemento lblLoggedInAs
     */
    public async getLoggedInAsText() {
        await this.lblLoggedInAs.waitFor({ state: 'visible' });
        return await this.lblLoggedInAs.innerText();
    }

    /**
     * Método para fazer logout
     */
    public async logout() {
        await this.btnLogout.waitFor({ state: 'visible' });
        await this.btnLogout.click();
    }

    /**
     * Método para fazer login usando email e senha
     * @param email o email para fazer login
     * @param password a senha para fazer login
     */
    public async toLogin(email: string, password: string) {
        await this.setEmail(email);
        await this.setPassword(password);
        await this.clickLogin();
    }

    /**
     * Método para fazer logout
     */
    public async toLogout() {
        await this.logout();
    }

    /**
     * Método para abrir a página de login
     */
    public async openLogin() {
        await super.open('login');
    }
}


