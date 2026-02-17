import { test, expect } from '@playwright/test';
import LoginPage from './pages/login.page';
import ProductsPage from './pages/products.page';

test.describe('Automation Exercise - Products', () => {

  let loginPage: LoginPage
  let productsPage: ProductsPage
  const productName = 'Blue Top'

  test.beforeEach(async ({ page }) => {
    /**Arrange - Preparação */
    loginPage = new LoginPage(page)
    productsPage = new ProductsPage(page)
    await loginPage.openPage()
  })

  test('deve abrir a página de products', async ({ page }) => {
    /**Act - Ação */
    // Faz login com credenciais válidas
    await loginPage
      .clickLoginMenu()
      .then(loginPage => loginPage.setEmail(`${process.env.TEST_EMAIL}`))
      .then(loginPage => loginPage.setPassword(`${process.env.TEST_PASSWORD}`))
      .then(loginPage => loginPage.clickLogin())
    await productsPage.clickProductsMenu()
    /**Assert - Verificação */
    expect(await page.url()).toEqual(`${process.env.URL}/products`)
  })

  test('deve verificar o valor do produto pelo nome do produto', async ({ page }) => {
    /**Act - Ação */
    // Faz login com credenciais válidas
    await loginPage
      .clickLoginMenu()
      .then(loginPage => loginPage.setEmail(`${process.env.TEST_EMAIL}`))
      .then(loginPage => loginPage.setPassword(`${process.env.TEST_PASSWORD}`))
      .then(loginPage => loginPage.clickLogin())

    await productsPage
      .clickProductsMenu()
      .then(productsPage => productsPage.searchProduct(productName))

    /**Assert - Verificação */
    expect(await productsPage.getProductValue(productName)).toEqual('Rs. 500')
  })

  test('deve adicionar um produto ao carrinho na Products Page', async ({ page }) => {
    /**Act - Ação */
    // Faz login com credenciais válidas
    await loginPage
      .clickLoginMenu()
      .then(loginPage => loginPage.setEmail(`${process.env.TEST_EMAIL}`))
      .then(loginPage => loginPage.setPassword(`${process.env.TEST_PASSWORD}`))
      .then(loginPage => loginPage.clickLogin())

    await productsPage
      .clickProductsMenu()
      .then(productsPage => productsPage.addProductToCart(productName))

    /**Assert - Verificação */
    expect(await productsPage.getCartModalSuccessTitle()).toEqual('Added!')
    expect(await productsPage.getCartModalSuccessBody()).toEqual('Your product has been added to cart.')
  })
})
