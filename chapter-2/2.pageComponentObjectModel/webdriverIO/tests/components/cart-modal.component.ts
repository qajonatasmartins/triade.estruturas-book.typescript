export default class CartModalComponent {

    /**
     * Mapeamento do elemento modal de carrinho
     * @returns o elemento cartModal
     */
    get cartModal() { return '#cartModal .modal-content' }

    /**
     * Mapeamento do elemento título do modal de carrinho
     * @returns o elemento cartModalTitle
     */
    get cartModalTitle() { return $(`${this.cartModal} .modal-title`) }

    /**
     * Mapeamento do elemento corpo do modal de carrinho
     * @returns o elemento cartModalBody
     */
    get cartModalBody() { return $(`${this.cartModal} .modal-body p:first-child`) }

    /**
     * Mapeamento do elemento botão de visualizar o carrinho do modal de carrinho
     * @returns o elemento cartModalViewCart
     */
    get cartModalViewCart() { return $(`${this.cartModal} .modal-body p:nth-child(2) a u`) }

    /**
     * Mapeamento do elemento botão de continuar comprando do modal de carrinho
     * @returns o elemento cartModalContinueShopping
     */
    get cartModalContinueShopping() { return $(`${this.cartModal} .modal-footer button`) }


    /**
     * Método para obter o texto do título do modal de carrinho
     * @returns o texto do título do modal de carrinho
     */
    public async getTextCartModalTitle(): Promise<string> {
        await this.cartModalTitle.waitForDisplayed({ timeoutMsg: 'Elemento cartModalTitle não foi encontrado' });
        return await this.cartModalTitle.getText();
    }

    /**
     * Método para obter o texto do corpo do modal de carrinho
     * @returns o texto do corpo do modal de carrinho
     */
    public async getTextCartModalBody(): Promise<string> {
        await this.cartModalBody.waitForDisplayed({ timeoutMsg: 'Elemento cartModalBody não foi encontrado' });
        return await this.cartModalBody.getText();
    }

    /**
     * Método para clicar no botão de visualizar o carrinho do modal de carrinho
     */
    public async clickCartModalViewCart(): Promise<void> {
        await this.cartModalViewCart.waitForDisplayed({ timeoutMsg: 'Elemento cartModalViewCart não foi encontrado' });
        await this.cartModalViewCart.click();
    }

    /**
     * Método para clicar no botão de continuar comprando do modal de carrinho
     */
    public async clickCartModalContinueShopping(): Promise<void> {
        await this.cartModalContinueShopping.waitForDisplayed({ timeoutMsg: 'Elemento cartModalContinueShopping não foi encontrado' });
        await this.cartModalContinueShopping.click();
    }
}
