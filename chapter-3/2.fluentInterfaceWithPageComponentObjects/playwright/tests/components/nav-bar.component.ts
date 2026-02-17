import { Locator, type Page } from '@playwright/test';

export class NavBarComponent {

    readonly navBar: Locator;

    constructor(page: Page) {
        /** Define o componente de seletor para a nav bar */
        this.navBar = page.locator('.shop-menu .navbar-nav li');
    }

    /**
     * Clica no item de menu da nav bar pelo href
     * @param href Href do item de menu
     */
    public async clickMenuByHref(href: string): Promise<void> {
        await this.navBar.locator(`a[href="${href}"]`).waitFor({ state: 'visible' });
        await this.navBar.locator(`a[href="${href}"]`).click()
    }

}
