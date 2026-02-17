import NavBarComponent from "../components/nav-bar.component"
import ContainerComponent from "../components/container.component"
import CartModalComponent from "../components/cart-modal.component"

export default class ProductsPage {

    private _navBar: NavBarComponent
    private _containerComponent: ContainerComponent
    private _cartModalComponent: CartModalComponent

    /**
     * Mapeamento do elemento campo de busca na Products Page
     * @returns o elemento inputSearch
     */
    get inputSearch() { return $('#search_product'); }

    /**
     * Mapeamento do elemento botão de busca na Products Page
     * @returns o elemento btnSearch
     */
    get btnSearch() { return $('#submit_search'); }

    constructor() {
        this._navBar = new NavBarComponent();
        this._containerComponent = new ContainerComponent();
        this._cartModalComponent = new CartModalComponent();
    }

    /**
     * Clica no item de menu da products da nav bar
     */
    public async clickProductsMenu(): Promise<this> {
        await this._navBar.clickMenuByHref('/products');
        return this;
    }

    /**
     * Preenche o campo de busca na Products Page
     * @param productName Nome do produto para buscar
     */
    public async setInputSearch(productName: string): Promise<this> {
        await this.inputSearch.waitForDisplayed({ timeoutMsg: 'Elemento inputSearch não foi encontrado' });
        await this.inputSearch.setValue(productName);
        return this;
    }

    /**
     * Clica no botão de busca para buscar um produto na Products Page
     */
    public async clickBtnSearch(): Promise<this> {
        await this.btnSearch.waitForDisplayed({ timeoutMsg: 'Elemento btnSearch não foi encontrado' });
        await this.btnSearch.click();
        return this;
    }

    /**
     * Obtém o valor do produto pelo nome do produto na Products Page
     * @param productName Nome do produto
     * @returns Valor do produto
     */
    public async getProductValue(productName: string): Promise<string> {
        return await this._containerComponent.getTextProductPrice(productName);
    }

    /**
     * Busca um produto na Products Page
     * @param productName Nome do produto para buscar
     */
    public async searchProduct(productName: string): Promise<this> {
        await this.setInputSearch(productName);
        await this.clickBtnSearch();
        return this;
    }

    /**
     * Adiciona um produto ao carrinho na Products Page
     * @param productName Nome do produto
     */
    public async addProductToCart(productName: string): Promise<this> {
        await this.searchProduct(productName);
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