import { test, expect } from '@playwright/test';
import LoginPage from './pages/login.page';
import ProductsPage from './pages/products.page';

test.describe('Automation Exercise - Products', () => {

  let loginPage: LoginPage
  let productsPage: ProductsPage

  test.beforeEach(async ({ page }) => {
    /**Arrange - Preparação */
    loginPage = new LoginPage(page)
    productsPage = new ProductsPage(page)
    await loginPage.openLogin()
  })

  test('deve abrir a página de products', async ({ page }) => {
    /**Act - Ação */
    // Faz login com credenciais válidas
    await loginPage.toLogin(`${process.env.TEST_EMAIL}`, `${process.env.TEST_PASSWORD}`)
    await productsPage.clickProductsMenu()
    /**Assert - Verificação */
    expect(await page.url()).toEqual(`${process.env.URL}/products`)
  })

  test('deve verificar o valor do produto pelo nome do produto', async ({ page }) => {
    /**Act - Ação */
    // Faz login com credenciais válidas
    await loginPage.toLogin(`${process.env.TEST_EMAIL}`, `${process.env.TEST_PASSWORD}`)
    await productsPage.clickProductsMenu()
    const productName = 'Blue Top'
    await productsPage.searchProduct(productName)
    const productValue = await productsPage.getProductValue(productName)
    /**Assert - Verificação */
    expect(productValue).toEqual('Rs. 500')
  })

  test('deve adicionar um produto ao carrinho na Products Page', async ({ page }) => {
    /**Act - Ação */
    // Faz login com credenciais válidas
    await loginPage.toLogin(`${process.env.TEST_EMAIL}`, `${process.env.TEST_PASSWORD}`)
    await productsPage.clickProductsMenu()
    await productsPage.addProductToCart('Blue Top')
    /**Assert - Verificação */
    expect(await productsPage.getCartModalSuccessTitle()).toEqual('Added!')
    expect(await productsPage.getCartModalSuccessBody()).toEqual('Your product has been added to cart.')
  })
})
