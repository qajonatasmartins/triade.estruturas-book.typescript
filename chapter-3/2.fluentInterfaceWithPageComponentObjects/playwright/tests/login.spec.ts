import { test, expect } from '@playwright/test';
import LoginPage from './pages/login.page';

test.describe('Automation Exercise - Login/Logout', () => {

  let loginPage: LoginPage

  test.beforeEach(async ({ page }) => {
    /**Arrange - Preparação */
    loginPage = new LoginPage(page)
    await loginPage.openPage()
  })

  test('deve fazer login com credenciais válidas', async () => {
    /**Act - Ação */
    // Faz login com credenciais válidas
    await loginPage
      .clickLoginMenu()
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
      .clickLoginMenu()
      .then(loginPage => loginPage.setEmail(`${process.env.TEST_EMAIL}`))
      .then(loginPage => loginPage.setPassword(`${process.env.TEST_PASSWORD}`))
      .then(loginPage => loginPage.clickLogin())
      .then(loginPage => loginPage.logout())
    /**Assert - Verificação */
    expect(await page.url()).toEqual(`${process.env.URL}/login`)
  })
})
