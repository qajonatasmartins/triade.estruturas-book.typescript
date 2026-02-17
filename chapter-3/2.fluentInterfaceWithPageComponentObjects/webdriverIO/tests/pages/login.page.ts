import { $ } from '@wdio/globals'
import Page from './page.js';
import NavBarComponent from '../components/nav-bar.component.js';
import HomePage from './home.page.js';

/**
 * sub página contendo seletores e métodos específicos para uma página específica
 */
export default class LoginPage extends Page {

    private _navBar: NavBarComponent;

    constructor() {
        super();
        this._navBar = new NavBarComponent();
    }

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
     * Método para definir o email para fazer login
     * @param email o email para fazer login
     */
    public async setEmail(email: string): Promise<this> {
        await this.inputEmail.waitForEnabled({ timeoutMsg: 'Elemento inputEmail não foi encontrado' });
        await this.inputEmail.setValue(email);
        return this;
    }

    /**
     * Método para definir a senha para fazer login
     * @param password a senha para fazer login
     */
    public async setPassword(password: string): Promise<this> {
        await this.inputPassword.waitForEnabled({ timeoutMsg: 'Elemento inputPassword não foi encontrado' });
        await this.inputPassword.setValue(password);
        return this;
    }

    /**
     * Método para clicar no botão de login
     */
    public async clickLogin(): Promise<HomePage> {
        await this.btnLogin.waitForEnabled({ timeoutMsg: 'Elemento btnLogin não foi encontrado' });
        await this.btnLogin.click();
        return new HomePage();
    }

    /**
     * Método para verificar se o usuário está autenticado
     * @returns o texto do elemento lblLoggedInAs
     */
    public async getLoggedInAsText(): Promise<string> {
        await this.lblLoggedInAs.waitForDisplayed({ timeoutMsg: 'Elemento lblLoggedInAs não foi encontrado' });
        return await this.lblLoggedInAs.getText();
    }

    /**
     * Método para abrir a página de login
     */
    public async openPage(): Promise<this> {
        await super.open('login');
        return this;
    }

    /**
     * Método para clicar no item de menu de login da nav bar
     */
    public async clickMenuLogin(): Promise<this> {
        await this._navBar.clickMenuByHref('/login');
        return this;
    }
}
