import HomePage from "../pages/home.page"
import LoginPage from "../pages/login.page"

describe('Automation Exercise - Home', () => {

    let loginPage: LoginPage
    let homePage: HomePage
    const productName = 'Blue Top'

    beforeEach(async () => {
        /**Arrange - Preparação */
        loginPage = new LoginPage()
        homePage = new HomePage()
        await loginPage.openPage()
    })

    it('deve abrir a página de home', async () => {
        /**Act - Ação */
        await loginPage
            .clickMenuLogin()
            .then(loginPage => loginPage.setEmail(`${process.env.TEST_EMAIL}`))
            .then(loginPage => loginPage.setPassword(`${process.env.TEST_PASSWORD}`))
            .then(loginPage => loginPage.clickLogin())

        await homePage.clickHomeMenu()
        /**Assert - Verificação */
        expect(await browser.getUrl()).toBe(`${process.env.URL}/`)
    })

    it('deve verificar o valor do produto pelo nome do produto', async () => {
        /**Act - Ação */
        await homePage
            .clickHomeMenu()
            .then(homePage => homePage.getProductValue(productName))

        /**Assert - Verificação */
        expect(await homePage.getProductValue(productName)).toBe('Rs. 500')
    })

    it('deve adicionar um produto ao carrinho na Home Page', async () => {
        /**Act - Ação */
        await homePage
            .clickHomeMenu()
            .then(homePage => homePage.addProductToCart(productName))

        /**Assert - Verificação */
        expect(await homePage.getCartModalSuccessTitle()).toBe('Added!')
        expect(await homePage.getCartModalSuccessBody()).toBe('Your product has been added to cart.')
    })
})  