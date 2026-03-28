import type { IVeiculo } from '../../interfaces/iVeiculo.interface.js';

/**
 * Classe abstrata para representar um veículo
 * SuperClass para os veículos Carro e Moto
 */
export abstract class Veiculo implements IVeiculo {
  /**
   * Seletor para o rótulo do veículo
   */
  protected get lblVehicleRotulo() {
    return $('#vehicle-rotulo');
  }
  /**
   * Seletor para o texto das rodas do veículo
   */
  protected get lblVehicleRodas() {
    return $('#vehicle-rodas');
  }

  /**
   * Método para selecionar o veículo
   */
  abstract selecionar(): Promise<void>;

  /**
   * Método para abrir a página de veículos
   */
  async abrirPagina(): Promise<void> {
    await browser.url('/vehicles');
  }

  /**
   * Método para obter o rótulo do veículo
   * @returns Rótulo do veículo
   */
  async getRotulo(): Promise<string> {
    await this.lblVehicleRotulo.waitForDisplayed();
    return await this.lblVehicleRotulo.getText();
  }

  /**
   * Método para obter o texto das rodas do veículo
   * @returns Texto das rodas do veículo
   */
  async getRodasTexto(): Promise<string> {
    await this.lblVehicleRodas.waitForDisplayed();
    return await this.lblVehicleRodas.getText();
  }
}
