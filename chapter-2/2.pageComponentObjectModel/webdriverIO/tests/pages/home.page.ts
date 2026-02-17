import ContainerComponent from "../components/container.component";
import NavBarComponent from "../components/nav-bar.component";
import Page from "./page";
import CartModalComponent from "../components/cart-modal.component";

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
     * Abre a página de home
     */
    public async openHome() {
        await super.open('/');
    }

    /**
     * Método para clicar no item de menu de home da nav bar
     */
    public async clickHomeMenu() {
        await this._navBar.clickMenuByHref('/');
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
    public async addProductToCart(productName: string): Promise<void> {
        await this._containerComponent.clickAddToCart(productName);
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