import { expect } from '@wdio/globals'
import LoginPage from '../pages/login.page.js'

describe('Automation Exercise - Login/Logout', () => {

    let loginPage: LoginPage

    before(async () => {
        /**Arrange - Preparação */
        loginPage = new LoginPage()
        await loginPage.openLogin()
    })

    /**
     * Teste para fazer login com credenciais válidas
     */
    it('deve fazer login com credenciais válidas', async () => {
        /**Act - Ação */
        // Faz login com credenciais válidas
        await loginPage.toLogin(`${process.env.TEST_EMAIL}`, `${process.env.TEST_PASSWORD}`)

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
        await loginPage.toLogout()

        /**Assert - Verificação */
        // Verifica se o usuário está desautenticado
        expect(await browser.getUrl()).toBe(`${process.env.URL}/login`)
    })
})