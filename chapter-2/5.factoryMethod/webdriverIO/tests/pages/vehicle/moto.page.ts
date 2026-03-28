import { Veiculo } from './veiculo.page.js';

/**
 * Classe para representar um veículo Moto
 * SubClass de Veiculo
 */
export class Moto extends Veiculo {
  /**
   * Seletor para o botão de seleção do veículo
   */
  get btnMoto() {
    return $('#btn-moto');
  }

  /**
   * Método para selecionar o veículo
   */
  async selecionar(): Promise<void> {
    await this.btnMoto.click();
  }
}
