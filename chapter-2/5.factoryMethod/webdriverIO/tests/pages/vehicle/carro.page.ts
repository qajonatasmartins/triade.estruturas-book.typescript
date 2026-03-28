import { Veiculo } from './veiculo.page.js';

/**
 * Classe para representar um veículo Carro
 * SubClass de Veiculo
 */
export class Carro extends Veiculo {
  /**
   * Seletor para o botão de seleção do veículo
   */
  get btnCarro() {
    return $('#btn-carro');
  }

  /**
   * Método para selecionar o veículo
   */
  async selecionar(): Promise<void> {
    await this.btnCarro.click();
  }
}
