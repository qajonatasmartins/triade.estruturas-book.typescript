import { $ } from '@wdio/globals'
import type { IVeiculo } from '../../interfaces/iVeiculo.interface.js';

export class Moto implements IVeiculo {

  get lblVehicleRotulo() { return $('#vehicle-rotulo'); }
  get lblVehicleRodas() { return $('#vehicle-rodas'); }
  get btnMoto() { return $('#btn-moto'); }

  /**
   * Método para abrir a página de veículos
   */
  async abrirPagina(): Promise<void> {
    await browser.url('/vehicles');
  }

  /**
   * Método para selecionar o veículo
   */
  async selecionar(): Promise<void> {
    await this.btnMoto.click();
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
