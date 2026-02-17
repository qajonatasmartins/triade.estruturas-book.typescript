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
    await loginPage.openLogin()
  })

  test('deve abrir a página de cart', async ({ page }) => {
    /**Act - Ação */
    // Faz login com credenciais válidas
    await loginPage.toLogin(`${process.env.TEST_EMAIL}`, `${process.env.TEST_PASSWORD}`)
    await cartPage.clickCartMenu()
    /**Assert - Verificação */
    expect(await page.url()).toEqual(`${process.env.URL}/view_cart`)
  })

})
