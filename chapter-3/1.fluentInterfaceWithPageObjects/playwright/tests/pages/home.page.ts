import { BasePage } from "./page";
import { Locator, type Page } from "@playwright/test";

export default class HomePage extends BasePage {

    private readonly btnLogout: Locator;

    constructor(page: Page) {
        super(page);
        /** Define o seletor para o botão de logout */
        this.btnLogout = page.locator('a[href="/logout"]');
    }

    /**
     * Abre a página de home
     */
    public async openHome(): Promise<this> {
        await super.open('/');
        return this;
    }

    /**
     * Método para fazer logout
     */
    public async logout(): Promise<this> {
        await this.btnLogout.waitFor({ state: 'visible' });
        await this.btnLogout.click();
        return this;
    }

}