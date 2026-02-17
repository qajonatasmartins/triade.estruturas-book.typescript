export default class ContainerComponent {

    private _productName: any

    /**
     * Mapeamento do elemento container de produtos
     * @returns o elemento containerItems
     */
    get containerItems() { return '.container .features_items' }

    /**
     * Mapeamento do elemento itens de produtos
     * @returns o elemento productsItems
     */
    set lblProductPrice(productName: string) { this._productName = $(`//div[@class='features_items']//div[@class='single-products']//div[contains(@class,'productinfo')]/p[contains(text(),'${productName}')]/../h2`) }
    get lblProductPrice() { return this._productName }

    /**
     * Mapeamento do elemento título do container de produtos
     * @returns o elemento containerTitle
     */
    get containerTitle() { return $(`${this.containerItems} .title`) }

    /**
     * Mapeamento do elemento botão de adicionar ao carrinho
     * @returns o elemento btnAddToCart
     */
    set btnAddToCart(productName: string) { this._productName = $(`//div[@class='features_items']//div[@class='single-products']//div[contains(@class,'productinfo')]/p[contains(text(),'${productName}')]/../a[contains(@class,'add-to-cart')]`) }
    get btnAddToCart() { return this._productName }

    /**
     * Método para obter o texto do preço do produto
     * @param productName Nome do produto
     * @returns o texto do preço do produto
     */
    async getTextProductPrice(productName: string): Promise<string> {
        this.lblProductPrice = productName;
        // @ts-ignore
        await this.lblProductPrice.waitForDisplayed({ timeoutMsg: 'Elemento lblProductPrice não foi encontrado' });
        // @ts-ignore
        return await this.lblProductPrice.getText();
    }

    /**
     * Clica no botão de adicionar ao carrinho
     * @param productName Nome do produto
     */
    async clickAddToCart(productName: string): Promise<void> {
        this.btnAddToCart = productName;
        // @ts-ignore
        await this.btnAddToCart.waitForDisplayed({ timeoutMsg: 'Elemento btnAddToCart não foi encontrado' });
        // @ts-ignore
        await this.btnAddToCart.click();
    }

}
