import HomePage from "../pages/home.page"
import LoginPage from "../pages/login.page"

describe('Automation Exercise - Home', () => {

    let loginPage: LoginPage
    let homePage: HomePage

    beforeEach(async () => {
        /**Arrange - Preparação */
        loginPage = new LoginPage()
        homePage = new HomePage()
        await loginPage.openLogin()
    })

    it('deve abrir a página de home', async () => {
        /**Act - Ação */
        await loginPage.toLogin(`${process.env.TEST_EMAIL}`, `${process.env.TEST_PASSWORD}`)
        await homePage.clickHomeMenu()
        /**Assert - Verificação */
        expect(await browser.getUrl()).toBe(`${process.env.URL}/`)
    })

    it('deve verificar o valor do produto pelo nome do produto', async () => {
        /**Act - Ação */
        await homePage.clickHomeMenu()
        const productValue = await homePage.getProductValue('Blue Top')
        /**Assert - Verificação */
        expect(productValue).toBe('Rs. 500')
    })

    it('deve adicionar um produto ao carrinho na Home Page', async () => {
        /**Act - Ação */
        await homePage.clickHomeMenu()
        await homePage.addProductToCart('Blue Top')
        /**Assert - Verificação */
        expect(await homePage.getCartModalSuccessTitle()).toBe('Added!')
        expect(await homePage.getCartModalSuccessBody()).toBe('Your product has been added to cart.')
    })
})  