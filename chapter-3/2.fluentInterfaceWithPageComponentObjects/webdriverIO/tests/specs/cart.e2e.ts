import CartPage from "../pages/cart.page"
import LoginPage from "../pages/login.page"

describe('Automation Exercise - Cart', () => {

    let loginPage: LoginPage
    let cartPage: CartPage

    before(async () => {
        /**Arrange - Preparação */
        loginPage = new LoginPage()
        cartPage = new CartPage()
        await loginPage.openPage()
    })

    it('deve abrir a página de cart', async () => {
        /**Act - Ação */
        await cartPage.clickCartMenu()
        /**Assert - Verificação */
        expect(await browser.getUrl()).toBe(`${process.env.URL}/view_cart`)
    })
})