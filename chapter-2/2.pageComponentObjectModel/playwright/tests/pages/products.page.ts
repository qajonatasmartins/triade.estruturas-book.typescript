import { Locator, type Page } from "@playwright/test";
import { NavBarComponent } from "../components/nav-bar.component";
import ContainerComponent from "../components/container.component";
import CartModalComponent from "../components/cart-modal.component";

export default class ProductsPage {

    private readonly navBar: NavBarComponent;
    private readonly containerComponent: ContainerComponent;
    private readonly inputSearch: Locator;
    private readonly btnSearch: Locator;
    private readonly cartModalComponent: CartModalComponent;

    constructor(page: Page) {
        /** Define o componente de seletor para a nav bar */
        this.navBar = new NavBarComponent(page);
        /** Define o componente de seletor para o container de produtos */
        this.containerComponent = new ContainerComponent(page);
        /** Define o componente de seletor para o modal de carrinho */
        this.cartModalComponent = new CartModalComponent(page);
        /** Define o seletor para o campo de busca */
        this.inputSearch = page.locator('#search_product');
        /** Define o seletor para o botão de busca */
        this.btnSearch = page.locator('#submit_search');
    }

    /**
     * Clica no item de menu da products da nav bar
     */
    public async clickProductsMenu(): Promise<void> {
        await this.navBar.clickMenuByHref('/products');
    }

    /**
     * Preenche o campo de busca na Products Page
     * @param productName Nome do produto para buscar
     */
    public async setInputSearch(productName: string): Promise<void> {
        await this.inputSearch.fill(productName)
    }

    /**
     * Clica no botão de busca para buscar um produto na Products Page
     */
    public async clickBtnSearch(): Promise<void> {
        await this.btnSearch.click()
    }

    /**
     * Obtém o valor do produto pelo nome do produto na Products Page
     * @param productName Nome do produto
     * @returns Valor do produto
     */
    public async getProductValue(productName: string): Promise<string> {
        return await this.containerComponent.getProductPrice(productName);
    }

    /**
     * Busca um produto na Products Page
     * @param productName Nome do produto para buscar
     */
    public async searchProduct(productName: string): Promise<void> {
        await this.setInputSearch(productName);
        await this.clickBtnSearch();
    }

    /**
     * Adiciona um produto ao carrinho na Products Page
     * @param productName Nome do produto
     */
    public async addProductToCart(productName: string): Promise<void> {
        await this.searchProduct(productName);
        await this.containerComponent.addToCart(productName);
    }

    /**
     * Obtém o título do modal de sucesso ao adicionar produto ao carrinho
     * @returns Título do modal de sucesso ao adicionar produto ao carrinho
     */
    public async getCartModalSuccessTitle(): Promise<string> {
        return await this.cartModalComponent.getCartModalTitle();
    }

    /**
     * Obtém o corpo do modal de sucesso ao adicionar produto ao carrinho
     * @returns Corpo do modal de sucesso ao adicionar produto ao carrinho
     */
    public async getCartModalSuccessBody(): Promise<string> {
        return await this.cartModalComponent.getCartModalBody();
    }
}