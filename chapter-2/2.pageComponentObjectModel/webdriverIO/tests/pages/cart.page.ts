import NavBarComponent from "../components/nav-bar.component";

export default class CartPage {

    private _navBar: NavBarComponent

    constructor() {
        this._navBar = new NavBarComponent();
    }

    /**
     * Método para clicar no item de menu de cart da nav bar
     */
    public async clickCartMenu() {
        await this._navBar.clickMenuByHref('/view_cart');
    }
}