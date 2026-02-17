import { test, expect } from '@playwright/test';
import LoginPage from './pages/login.page';

test.describe('Automation Exercise - Login/Logout', () => {

  let loginPage: LoginPage

  test.beforeEach(async ({ page }) => {
    /**Arrange - Preparação */
    loginPage = new LoginPage(page)
    await loginPage.openLogin()
  })

  test('deve fazer login com credenciais válidas', async () => {
    /**Act - Ação */
    // Faz login com credenciais válidas
    await loginPage.toLogin(`${process.env.TEST_EMAIL}`, `${process.env.TEST_PASSWORD}`)
    /**Assert - Verificação */
    expect(await loginPage.getLoggedInAsText()).toEqual('Raven Herzog')
  })

  test('deve fazer logout', async ({ page }) => {
    /**Act - Ação */
    // Faz login com credenciais válidas
    await loginPage.toLogin(`${process.env.TEST_EMAIL}`, `${process.env.TEST_PASSWORD}`)
    await loginPage.toLogout()
    /**Assert - Verificação */
    expect(await page.url()).toEqual(`${process.env.URL}/login`)
  })
})
