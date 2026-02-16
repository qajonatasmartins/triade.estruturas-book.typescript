import { BasePage } from './page';
import { Locator, type Page } from '@playwright/test';
/**
 * sub página contendo seletores e métodos específicos para uma página específica
 */
export class LoginPage extends BasePage {

    private readonly inputUsername: Locator;
    private readonly inputPassword: Locator;
    private readonly btnSubmit: Locator;

    constructor(page: Page) {
        super(page);
        /** Define o seletor para o campo de usuário */
        this.inputUsername = page.locator('#username');
        /** Define o seletor para o campo de senha */
        this.inputPassword = page.locator('#password');
        /** Define o seletor para o botão de login */
        this.btnSubmit = page.locator('button[type="submit"]');
    }

    /**
     * define o username para fazer login
     * @param username o username para fazer login
     */
    async setUsername(username: string) {
        await this.inputUsername.waitFor({ state: 'visible' });
        await this.inputUsername.fill(username);
    }

    /**
     * define a senha para fazer login
     * @param password a senha para fazer login
     */
    async setPassword(password: string) {
        await this.inputPassword.waitFor({ state: 'visible' });
        await this.inputPassword.fill(password);
    }

    /**
     * clica no botão de login
     */
    async clickSubmit() {
        await this.btnSubmit.waitFor({ state: 'visible' });
        await this.btnSubmit.click();
    }

    /**
     * um método para encapsular o código de automação para interagir com a página
     * ex: para fazer login usando username e password
     * @param username o username para fazer login
     * @param password o password para fazer login
     */
    public async login(username: string, password: string) {
        await this.setUsername(username);
        await this.setPassword(password);
        await this.clickSubmit();
    }

    /**
     * sobrescrever opções específicas para adaptá-las ao objeto de página
     */
    public open() {
        return super.open('login');
    }
}


