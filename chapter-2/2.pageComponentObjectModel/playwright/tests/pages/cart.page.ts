import { type Page } from "@playwright/test";
import { NavBarComponent } from "../components/nav-bar.component";

export default class CartPage {

    private readonly navBar: NavBarComponent;

    constructor(page: Page) {
        this.navBar = new NavBarComponent(page);
    }

    /**
     * Clica no item de menu da cart da nav bar
     */
    public async clickCartMenu(): Promise<void> {
        await this.navBar.clickMenuByHref('/view_cart');
    }
}
