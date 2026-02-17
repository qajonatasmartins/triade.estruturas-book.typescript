import { Locator, type Page } from "@playwright/test";

export default class CartModalComponent {

    readonly cartModal: Locator;
    readonly cartModalTitle: Locator;
    readonly cartModalBody: Locator;
    readonly cartModalViewCart: Locator;
    readonly cartModalContinueShopping: Locator;

    constructor(page: Page) {
        /** Define o componente de seletor para o modal de carrinho */
        this.cartModal = page.locator('#cartModal .modal-content');
        /** Define o componente de seletor para o título do modal de carrinho */
        this.cartModalTitle = this.cartModal.locator('.modal-title');
        /** Define o componente de seletor para o corpo do modal de carrinho */
        this.cartModalBody = this.cartModal.locator('.modal-body p:first-child');
        /** Define o componente de seletor para o botão de visualizar o carrinho */
        this.cartModalViewCart = this.cartModal.locator('.modal-body p:nth-child(2) a u');
        /** Define o componente de seletor para o botão de continuar comprando */
        this.cartModalContinueShopping = this.cartModal.locator('.modal-footer button');
    }

    /**
     * Obtém o título do modal de sucesso ao adicionar produto ao carrinho
     * @returns Título do modal de sucesso ao adicionar produto ao carrinho
     */
    public async getCartModalTitle(): Promise<string> {
        return await this.cartModalTitle.innerText();
    }

    /**
     * Obtém o corpo do modal de sucesso ao adicionar produto ao carrinho
     * @returns Corpo do modal de sucesso ao adicionar produto ao carrinho
     */
    public async getCartModalBody(): Promise<string> {
        return await this.cartModalBody.innerText();
    }

    /**
     * Método para clicar no botão de visualizar o carrinho do modal de sucesso ao adicionar produto ao carrinho
     */
    public async clickCartModalViewCart(): Promise<void> {
        await this.cartModalViewCart.click();
    }

    /**
     * Método para clicar no botão de continuar comprando do modal de sucesso ao adicionar produto ao carrinho
     */
    public async clickCartModalContinueShopping(): Promise<void> {
        await this.cartModalContinueShopping.click();
    }

}   