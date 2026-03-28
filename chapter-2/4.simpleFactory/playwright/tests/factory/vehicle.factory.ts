import type { Page } from '@playwright/test';
import type { IVeiculo } from '../interfaces/iVeiculo.interface';
import { Carro } from '../pages/vehicle/carro.page';
import { Moto } from '../pages/vehicle/moto.page';

export type TipoVeiculo = 'carro' | 'moto';

export class VehicleFactory {
  static getVeiculo(tipo: TipoVeiculo, page: Page): IVeiculo {
    if (tipo === 'carro') {
      return new Carro(page);
    }
    return new Moto(page);
  }
}
