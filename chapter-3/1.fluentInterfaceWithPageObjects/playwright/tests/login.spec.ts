import { test, expect } from '@playwright/test';
import { LoginPage } from './pages/login.page';

test.describe('Login', () => {

  let loginPage: LoginPage

  test.beforeEach(async ({ page }) => {
    /**Arrange - Preparação */
    loginPage = new LoginPage(page)
  })

  test('deve fazer login com credenciais válidas', async () => {
    /**Act - Ação */
    // Faz login com credenciais válidas
    await loginPage
      .openLogin()
      .then(loginPage => loginPage.setEmail(`${process.env.TEST_EMAIL}`))
      .then(loginPage => loginPage.setPassword(`${process.env.TEST_PASSWORD}`))
      .then(loginPage => loginPage.clickLogin())

    /**Assert - Verificação */
    expect(await loginPage.getLoggedInAsText()).toEqual('Raven Herzog')
  })

  test('deve fazer logout', async ({ page }) => {
    /**Act - Ação */
    // Faz login com credenciais válidas
    await loginPage
      .openLogin()
      .then(loginPage => loginPage.setEmail(`${process.env.TEST_EMAIL}`))
      .then(loginPage => loginPage.setPassword(`${process.env.TEST_PASSWORD}`))
      .then(loginPage => loginPage.clickLogin())
      .then(loginPage => loginPage.logout())
    /**Assert - Verificação */
    expect(await page.url()).toContain('/login')
  })
})
