import { expect } from '@wdio/globals';
import { CarroVehicleFactory, MotoVehicleFactory } from '../factory/vehicle.factory.js';
import type { IVeiculo } from '../interfaces/iVeiculo.interface.js';

describe('Factory Method — Veículos (Carro / Moto)', () => {
  async function assertVeiculo(veiculo: IVeiculo, rotuloEsperado: string, rodasEsperadas: string) {
    expect(await veiculo.getRotulo()).toBe(rotuloEsperado);
    expect(await veiculo.getRodasTexto()).toBe(rodasEsperadas);
  }

  it('deve exibir dados do Carro quando a fábrica retorna o tipo carro', async () => {
    const factory = new CarroVehicleFactory();
    const veiculo = await factory.performSelecaoVeiculo();
    await assertVeiculo(veiculo, 'Carro — transporte familiar', 'Rodas: 4');
  });

  it('deve exibir dados da Moto quando a fábrica retorna o tipo moto', async () => {
    const factory = new MotoVehicleFactory();
    const veiculo = await factory.performSelecaoVeiculo();
    await assertVeiculo(veiculo, 'Moto — mobilidade urbana', 'Rodas: 2');
  });
});
