import ProductsPage from "../pages/products.page"
import LoginPage from "../pages/login.page"

describe('Automation Exercise - Products', () => {

    let loginPage: LoginPage
    let productsPage: ProductsPage
    const productName = 'Blue Top'

    beforeEach(async () => {
        /**Arrange - Preparação */
        loginPage = new LoginPage()
        productsPage = new ProductsPage()
        await loginPage.openPage()
    })

    it('deve abrir a página de products', async () => {
        /**Act - Ação */
        await loginPage
            .clickMenuLogin()
            .then(loginPage => loginPage.setEmail(`${process.env.TEST_EMAIL}`))
            .then(loginPage => loginPage.setPassword(`${process.env.TEST_PASSWORD}`))
            .then(loginPage => loginPage.clickLogin())

        await productsPage.clickProductsMenu()

        /**Assert - Verificação */
        expect(await browser.getUrl()).toBe(`${process.env.URL}/products`)
    })

    it('deve verificar o valor do produto pelo nome do produto', async () => {
        /**Act - Ação */
        await productsPage
            .clickProductsMenu()
            .then(productsPage => productsPage.searchProduct(productName))

        /**Assert - Verificação */
        expect(await productsPage.getProductValue(productName)).toBe('Rs. 500')
    })

    it('deve adicionar um produto ao carrinho na Products Page', async () => {
        /**Act - Ação */
        await productsPage
            .clickProductsMenu()
            .then(productsPage => productsPage.addProductToCart(productName))

        /**Assert - Verificação */
        expect(await productsPage.getCartModalSuccessTitle()).toBe('Added!')
        expect(await productsPage.getCartModalSuccessBody()).toBe('Your product has been added to cart.')
    })
})  