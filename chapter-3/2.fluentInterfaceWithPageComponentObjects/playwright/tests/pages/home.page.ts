import { BasePage } from "./page";
import { Locator, type Page } from "@playwright/test";
import { NavBarComponent } from "../components/nav-bar.component";
import ContainerComponent from "../components/container.component";
import CartModalComponent from "../components/cart-modal.component";
import LoginPage from "./login.page";

export default class HomePage extends BasePage {

    private readonly navBar: NavBarComponent;
    private readonly containerComponent: ContainerComponent;
    private readonly cartModalComponent: CartModalComponent;
    private readonly btnLogout: Locator;

    constructor(page: Page) {
        super(page);
        /** Define o componente de seletor para a nav bar */
        this.navBar = new NavBarComponent(page);
        /** Define o componente de seletor para o container de produtos */
        this.containerComponent = new ContainerComponent(page);
        /** Define o componente de seletor para o modal de carrinho */
        this.cartModalComponent = new CartModalComponent(page);
        /** Define o seletor para o botão de logout */
        this.btnLogout = page.locator('a[href="/logout"]');
    }

    /**
     * Abre a página de home
     */
    public async openHome(): Promise<this> {
        await super.open();
        return this;
    }

    /**
     * Clica no item de menu da home da nav bar
     */
    public async clickHomeMenu(): Promise<this> {
        await this.navBar.clickMenuByHref('/');
        return this;
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
    public async addProductToCart(productName: string): Promise<this> {
        await this.containerComponent.addToCart(productName);
        return this;
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

    /**
     * Método para fazer logout
     */
    public async logout(): Promise<LoginPage> {
        await this.btnLogout.waitFor({ state: 'visible' });
        await this.btnLogout.click();
        return new LoginPage(this.page);
    }

}