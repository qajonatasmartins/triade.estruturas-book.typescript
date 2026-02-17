import ContainerComponent from "../components/container.component";
import NavBarComponent from "../components/nav-bar.component";
import Page from "./page";
import CartModalComponent from "../components/cart-modal.component";
import LoginPage from "./login.page";

export default class HomePage extends Page {

    private _navBar: NavBarComponent
    private _containerComponent: ContainerComponent
    private _cartModalComponent: CartModalComponent

    constructor() {
        super();
        this._navBar = new NavBarComponent();
        this._containerComponent = new ContainerComponent();
        this._cartModalComponent = new CartModalComponent();
    }

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
     * Método para clicar no item de menu de home da nav bar
     */
    public async clickHomeMenu(): Promise<this> {
        await this._navBar.clickMenuByHref('/');
        return this;
    }

    /**
     * Método para fazer logout
     */
    public async logout(): Promise<LoginPage> {
        await this.btnLogout.waitForEnabled({ timeoutMsg: 'Elemento btnLogout não foi encontrado' });
        await this.btnLogout.click();
        return new LoginPage();
    }

    /**
     * Obtém o valor do produto pelo nome do produto na Home Page
     * @param productName Nome do produto
     * @returns Valor do produto
     */
    public async getProductValue(productName: string): Promise<string> {
        return await this._containerComponent.getTextProductPrice(productName);
    }

    /**
     * Adiciona um produto ao carrinho na Home Page
     * @param productName Nome do produto
     */
    public async addProductToCart(productName: string): Promise<this> {
        await this._containerComponent.clickAddToCart(productName);
        return this;
    }

    /**
     * Obtém o título do modal de sucesso ao adicionar produto ao carrinho
     * @returns Título do modal de sucesso ao adicionar produto ao carrinho
     */
    public async getCartModalSuccessTitle(): Promise<string> {
        return await this._cartModalComponent.getTextCartModalTitle();
    }

    /**
     * Obtém o corpo do modal de sucesso ao adicionar produto ao carrinho
     * @returns Corpo do modal de sucesso ao adicionar produto ao carrinho
     */
    public async getCartModalSuccessBody(): Promise<string> {
        return await this._cartModalComponent.getTextCartModalBody();
    }
}
