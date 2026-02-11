import { test, expect } from '@playwright/test';
import SecurePage from './pageobjects/secure.page';
import { LoginPage } from './pageobjects/login.page';

test('deve fazer login com credenciais válidas', async ({ page }) => {
  /**Arrange - Preparação */
  // Abre a página de login
  await new LoginPage(page).open()

  /**Act - Ação */
  // Faz login com credenciais válidas
  await new LoginPage(page).login('tomsmith', 'SuperSecretPassword!')

  /**Assert - Verificação */
  // Verifica se o elemento flashAlert existe
  await expect(new SecurePage(page).flashAlert).toBeVisible()
  // Verifica se o texto do elemento flashAlert contém a string 'You logged into a secure area!'
  await expect(new SecurePage(page).flashAlert).toContainText('You logged into a secure area!')
})
