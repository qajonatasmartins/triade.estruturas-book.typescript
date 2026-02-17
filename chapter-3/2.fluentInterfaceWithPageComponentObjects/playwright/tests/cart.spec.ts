import { test, expect } from '@playwright/test';
import LoginPage from './pages/login.page';
import CartPage from './pages/cart.page';

test.describe('Automation Exercise - Cart', () => {

  let loginPage: LoginPage
  let cartPage: CartPage

  test.beforeEach(async ({ page }) => {
    /**Arrange - Preparação */
    loginPage = new LoginPage(page)
    cartPage = new CartPage(page)
    await loginPage.openPage()
  })

  test('deve abrir a página de cart', async ({ page }) => {
    /**Act - Ação */
    // Faz login com credenciais válidas
    await loginPage
      .clickLoginMenu()
      .then(loginPage => loginPage.setEmail(`${process.env.TEST_EMAIL}`))
      .then(loginPage => loginPage.setPassword(`${process.env.TEST_PASSWORD}`))
      .then(loginPage => loginPage.clickLogin())

    await cartPage
      .clickCartMenu()

    /**Assert - Verificação */
    expect(await page.url()).toEqual(`${process.env.URL}/view_cart`)
  })

})
