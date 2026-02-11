import { $ } from '@wdio/globals'
import Page from './page.js';

/**
 * sub página contendo seletores e métodos específicos para uma página específica
 */
class LoginPage extends Page {

    /**
     * define seletores usando métodos getter
     * @returns o elemento inputUsername
     */
    public get inputUsername() { return $('#username'); }

    /**
     * define seletores usando métodos getter
     * @returns o elemento inputPassword
     */
    public get inputPassword() { return $('#password'); }

    /**
     * define seletores usando métodos getter
     * @returns o elemento btnSubmit
     */
    public get btnSubmit() { return $('button[type="submit"]'); }

    /**
     * um método para encapsular o código de automação para interagir com a página
     * ex: para fazer login usando username e password
     * @param username o username para fazer login
     * @param password o password para fazer login
     */
    public async login(username: string, password: string) {
        await this.inputUsername.setValue(username);
        await this.inputPassword.setValue(password);
        await this.btnSubmit.click();
    }

    /**
     * sobrescrever opções específicas para adaptá-las ao objeto de página
     */
    public open() {
        return super.open('login');
    }
}

export default new LoginPage();
