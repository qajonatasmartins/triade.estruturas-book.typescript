import { test, expect } from '@playwright/test';
import LoginPage from './pages/login.page';
import HomePage from './pages/home.page';

test.describe('Automation Exercise - Home', () => {

  let loginPage: LoginPage
  let homePage: HomePage

  test.beforeEach(async ({ page }) => {
    /**Arrange - Preparação */
    loginPage = new LoginPage(page)
    homePage = new HomePage(page)
    await loginPage.openLogin()
  })

  test('deve abrir a página de home', async ({ page }) => {
    /**Act - Ação */
    // Faz login com credenciais válidas
    await loginPage.toLogin(`${process.env.TEST_EMAIL}`, `${process.env.TEST_PASSWORD}`)
    await homePage.clickHomeMenu()
    /**Assert - Verificação */
    expect(await page.url()).toEqual(`${process.env.URL}/`)
  })

  test('deve verificar o valor do produto pelo nome do produto', async ({ page }) => {
    /**Act - Ação */
    // Faz login com credenciais válidas
    await loginPage.toLogin(`${process.env.TEST_EMAIL}`, `${process.env.TEST_PASSWORD}`)
    await homePage.clickHomeMenu()
    const productValue = await homePage.getProductValue('Blue Top')
    /**Assert - Verificação */
    expect(productValue).toEqual('Rs. 500')
  })

  test('deve adicionar um produto ao carrinho na Home Page', async ({ page }) => {
    /**Act - Ação */
    // Faz login com credenciais válidas
    await loginPage.toLogin(`${process.env.TEST_EMAIL}`, `${process.env.TEST_PASSWORD}`)
    await homePage.clickHomeMenu()
    await homePage.addProductToCart('Blue Top')
    /**Assert - Verificação */
    expect(await homePage.getCartModalSuccessTitle()).toEqual('Added!')
    expect(await homePage.getCartModalSuccessBody()).toEqual('Your product has been added to cart.')
  })
})
