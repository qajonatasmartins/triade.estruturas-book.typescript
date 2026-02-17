export default class NavBarComponent {

    private _href: any;

    /**
     * Mapeamento do elemento nav bar
     * @returns o elemento navBar
     */
    get navBar() { return '.shop-menu .navbar-nav li' }

    /**
     * Mapeamento do elemento item de menu da nav bar pelo href
     * @returns o elemento lblMenuByHref
     */
    set lblMenuByHref(href: string) { this._href = $(`${this.navBar} a[href="${href}"]`) }
    get lblMenuByHref() { return this._href }

    /**
     * Método para clicar no item de menu da nav bar pelo href
     * @param href Href do item de menu
     */
    public async clickMenuByHref(href: string): Promise<void> {
        this.lblMenuByHref = href;
        // @ts-ignore
        await this.lblMenuByHref.waitForDisplayed({ timeoutMsg: 'Elemento lblMenuByHref não foi encontrado' });
        // @ts-ignore
        await this.lblMenuByHref.click();
    }
}