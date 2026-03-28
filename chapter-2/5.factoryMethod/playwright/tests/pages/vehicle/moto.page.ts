import type { Locator, Page } from '@playwright/test';
import { Veiculo } from './veiculo.page';

/**
 * Classe para representar um veículo Moto
 * SubClass de Veiculo
 */
export class Moto extends Veiculo {
  /**
   * Seletor para o botão de seleção do veículo
   */
  private readonly btnMoto: Locator;

  constructor(page: Page) {
    super(page);
    this.btnMoto = page.locator('#btn-moto');
  }

  /**
   * Método para selecionar o veículo
   */
  async selecionar(): Promise<void> {
    await this.btnMoto.click();
  }
}
