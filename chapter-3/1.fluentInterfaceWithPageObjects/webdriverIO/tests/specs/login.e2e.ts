import { expect } from '@wdio/globals'
import LoginPage from '../pages/login.page.js'
import HomePage from '../pages/home.page.js'

describe('Automation Exercise - Login/Logout', () => {

    let loginPage: LoginPage
    let homePage: HomePage
    before(async () => {
        /**Arrange - Preparação */
        loginPage = new LoginPage()
        homePage = new HomePage()
    })

    /**
     * Teste para fazer login com credenciais válidas
     */
    it('deve fazer login com credenciais válidas', async () => {
        /**Act - Ação */
        // Faz login com credenciais válidas
        await loginPage
            .openLogin()
            .then(loginPage => loginPage.setEmail(`${process.env.TEST_EMAIL}`))
            .then(loginPage => loginPage.setPassword(`${process.env.TEST_PASSWORD}`))
            .then(loginPage => loginPage.clickLogin())

        /**Assert - Verificação */
        // Verifica se o usuário está autenticado
        const loggedInAsText = await loginPage.getLoggedInAsText()
        await expect(loggedInAsText).toBe('Raven Herzog')
    })

    /**
     * Teste para fazer logout
     */
    it('deve fazer logout', async () => {
        /**Act - Ação */
        await homePage.logout()
        expect(await browser.getUrl()).toBe(`${process.env.URL}/login`)
    })
})