import ProductsPage from "../pages/products.page"
import LoginPage from "../pages/login.page"

describe('Automation Exercise - Products', () => {

    let loginPage: LoginPage
    let productsPage: ProductsPage

    beforeEach(async () => {
        /**Arrange - Preparação */
        loginPage = new LoginPage()
        productsPage = new ProductsPage()
        await loginPage.openLogin()
    })

    it('deve abrir a página de products', async () => {
        /**Act - Ação */
        await loginPage.toLogin(`${process.env.TEST_EMAIL}`, `${process.env.TEST_PASSWORD}`)
        await productsPage.clickProductsMenu()
        /**Assert - Verificação */
        expect(await browser.getUrl()).toBe(`${process.env.URL}/products`)
    })

    it('deve verificar o valor do produto pelo nome do produto', async () => {
        /**Act - Ação */
        await productsPage.clickProductsMenu()
        const productName = 'Blue Top'
        await productsPage.searchProduct(productName)
        const productValue = await productsPage.getProductValue(productName)
        /**Assert - Verificação */
        expect(productValue).toBe('Rs. 500')
    })

    it('deve adicionar um produto ao carrinho na Products Page', async () => {
        /**Act - Ação */
        await productsPage.clickProductsMenu()
        await productsPage.addProductToCart('Blue Top')
        /**Assert - Verificação */
        expect(await productsPage.getCartModalSuccessTitle()).toBe('Added!')
        expect(await productsPage.getCartModalSuccessBody()).toBe('Your product has been added to cart.')
    })
})  