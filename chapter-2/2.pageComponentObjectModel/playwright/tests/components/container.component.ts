import { Locator, type Page } from '@playwright/test';

export default class ContainerComponent {

    readonly containerItems: Locator;
    readonly containerTitle: Locator;
    readonly productsItems: Locator;

    constructor(page: Page) {
        /** Define o componente de seletor para os itens de produtos */
        this.containerItems = page.locator('.container .features_items');
        /** Define o componente de seletor para os itens de produtos */
        this.productsItems = this.containerItems.locator('.single-products .productinfo');
        /** Define o componente de seletor para o título do produto */
        this.containerTitle = this.containerItems.locator('.title');
    }

    /**
     * Obtém o preço do produto pelo nome do produto
     * @param productName Nome do produto
     * @returns Preço do produto
     */
    public async getProductPrice(productName: string): Promise<string> {
        const productItem = await this.productsItems.filter({ hasText: productName })
        return await productItem.locator('h2').innerText()
    }

    /**
     * Adiciona um produto ao carrinho
     * @param productName Nome do produto
     */
    public async addToCart(productName: string): Promise<void> {
        const productItem = await this.productsItems.filter({ hasText: productName })
        await productItem.locator('.add-to-cart').click()
    }

}
