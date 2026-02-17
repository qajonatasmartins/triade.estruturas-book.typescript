import { BasePage } from "./page";
import { type Page } from "@playwright/test";
import { NavBarComponent } from "../components/nav-bar.component";
import ContainerComponent from "../components/container.component";
import CartModalComponent from "../components/cart-modal.component";

export default class HomePage extends BasePage {

    private readonly navBar: NavBarComponent;
    private readonly containerComponent: ContainerComponent;
    private readonly cartModalComponent: CartModalComponent;

    constructor(page: Page) {
        super(page);
        /** Define o componente de seletor para a nav bar */
        this.navBar = new NavBarComponent(page);
        /** Define o componente de seletor para o container de produtos */
        this.containerComponent = new ContainerComponent(page);
        /** Define o componente de seletor para o modal de carrinho */
        this.cartModalComponent = new CartModalComponent(page);
    }

    /**
     * Abre a página de home
     */
    public async openHome() {
        await super.open();
    }

    /**
     * Clica no item de menu da home da nav bar
     */
    public async clickHomeMenu(): Promise<void> {
        await this.navBar.clickMenuByHref('/');
    }

    /**
     * Obtém o valor do produto pelo nome do produto na Home Page
     * @param productName Nome do produto
     * @returns Valor do produto
     */
    public async getProductValue(productName: string): Promise<string> {
        return await this.containerComponent.getProductPrice(productName);
    }

    /**
     * Adiciona um produto ao carrinho na Home Page
     * @param productName Nome do produto
     */
    public async addProductToCart(productName: string): Promise<void> {
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