import type { Locator, Page } from '@playwright/test';
import { Veiculo } from './veiculo.page';

/**
 * Classe para representar um veículo Carro
 * SubClass de Veiculo
 */
export class Carro extends Veiculo {
  /**
   * Seletor para o botão de seleção do veículo
   */
  private readonly btnCarro: Locator;

  constructor(page: Page) {
    super(page);
    this.btnCarro = page.locator('#btn-carro');
  }

  /**
   * Método para selecionar o veículo
   */
  async selecionar(): Promise<void> {
    await this.btnCarro.click();
  }
}
