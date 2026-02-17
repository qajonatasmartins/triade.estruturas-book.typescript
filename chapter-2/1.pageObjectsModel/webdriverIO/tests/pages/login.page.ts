import { $ } from '@wdio/globals'
import Page from './page.js';

/**
 * sub página contendo seletores e métodos específicos para uma página específica
 */
export default class LoginPage extends Page {

    /**
     * Mapeamento do elemento e-mail para login
     * @returns o elemento inputEmail
     */
    get inputEmail() { return $('[data-qa="login-email"]'); }

    /**
     * Mapeamento do elemento senha para login
     * @returns o elemento inputPassword
     */
    get inputPassword() { return $('[data-qa="login-password"]'); }

    /**
     * Mapeamento do elemento botão de login
     * @returns o elemento btnLogin
     */
    get btnLogin() { return $('button[data-qa="login-button"]'); }

    /**
     * Mapeamento do elemento label de login autenticado
     * @returns o elemento lblLoggedInAs
     */
    get lblLoggedInAs() { return $('ul.nav i.fa-user + b'); }

    /**
     * Mapeamento do elemento link de logout
     * @returns o elemento lnkLogout
     */
    get btnLogout() { return $('a[href="/logout"]'); }

    /**
     * Método para definir o email para fazer login
     * @param email o email para fazer login
     */
    public async setEmail(email: string) {
        await this.inputEmail.waitForEnabled({ timeoutMsg: 'Elemento inputEmail não foi encontrado' });
        await this.inputEmail.setValue(email);
    }

    /**
     * Método para definir a senha para fazer login
     * @param password a senha para fazer login
     */
    public async setPassword(password: string) {
        await this.inputPassword.waitForEnabled({ timeoutMsg: 'Elemento inputPassword não foi encontrado' });
        await this.inputPassword.setValue(password);
    }

    /**
     * Método para clicar no botão de login
     */
    public async clickLogin() {
        await this.btnLogin.waitForEnabled({ timeoutMsg: 'Elemento btnLogin não foi encontrado' });
        await this.btnLogin.click();
    }

    /**
     * Método para verificar se o usuário está autenticado
     * @returns o texto do elemento lblLoggedInAs
     */
    public async getLoggedInAsText() {
        await this.lblLoggedInAs.waitForDisplayed({ timeoutMsg: 'Elemento lblLoggedInAs não foi encontrado' });
        return await this.lblLoggedInAs.getText();
    }

    /**
     * Método para fazer logout
     */
    public async logout() {
        await this.btnLogout.waitForEnabled({ timeoutMsg: 'Elemento btnLogout não foi encontrado' });
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
