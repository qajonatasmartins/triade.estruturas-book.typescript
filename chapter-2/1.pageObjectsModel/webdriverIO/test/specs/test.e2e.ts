import { expect } from '@wdio/globals'
import LoginPage from '../pageobjects/login.page.js'
import SecurePage from '../pageobjects/secure.page.js'

describe('Minha aplicação de Login', () => {

    /**
     * Teste para fazer login com credenciais válidas
     */
    it('deve fazer login com credenciais válidas', async () => {
        /**Arrange - Preparação */
        // Abre a página de login
        await LoginPage.open()

        /**Act - Ação */
        // Faz login com credenciais válidas
        await LoginPage.login('tomsmith', 'SuperSecretPassword!')

        /**Assert - Verificação */
        // Verifica se o elemento flashAlert existe
        await expect(SecurePage.flashAlert).toBeExisting()
        // Verifica se o texto do elemento flashAlert contém a string 'You logged into a secure area!'
        await expect(SecurePage.flashAlert).toHaveText(expect.stringContaining('You logged into a secure area!'))
    })
})

