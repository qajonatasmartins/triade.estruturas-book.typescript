import type { IVeiculo } from '../interfaces/iVeiculo.interface.js';
import { Carro } from '../pages/vehicle/carro.page.js';
import { Moto } from '../pages/vehicle/moto.page.js';

export type TipoVeiculo = 'carro' | 'moto';

export class VehicleFactory {

  /**
   * Método para obter o veículo correto
   * @param tipo - Tipo de veículo
   * @returns Veículo correto
   */
  static getVeiculo(tipo: TipoVeiculo): IVeiculo {
    if (tipo === 'carro') {
      return new Carro();
    }
    return new Moto();
  }
}
