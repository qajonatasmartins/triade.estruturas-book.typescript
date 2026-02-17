import Page from "./page";

export default class HomePage extends Page {

    /**
     * Mapeamento do elemento link de logout
     * @returns o elemento lnkLogout
     */
    get btnLogout() { return $('a[href="/logout"]'); }

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
        await this.btnLogout.waitForDisplayed({ timeoutMsg: 'Elemento btnLogout não foi encontrado' });
        await this.btnLogout.click();
        return this;
    }
}