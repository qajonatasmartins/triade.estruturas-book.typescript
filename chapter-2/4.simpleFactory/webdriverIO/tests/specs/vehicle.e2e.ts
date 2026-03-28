import { expect } from '@wdio/globals';
import { VehicleFactory } from '../factory/vehicle.factory.js';
import type { IVeiculo } from '../interfaces/iVeiculo.interface.js';

describe('Simple Factory — Veículos (Carro / Moto)', () => {
  async function assertVeiculo(veiculo: IVeiculo, rotuloEsperado: string, rodasEsperadas: string) {
    /** Arrange */
    await veiculo.abrirPagina();
    /** Act */
    await veiculo.selecionar();
    /** Assert */
    expect(await veiculo.getRotulo()).toBe(rotuloEsperado);
    expect(await veiculo.getRodasTexto()).toBe(rodasEsperadas);
  }

  it('deve exibir dados do Carro quando a fábrica retorna o tipo carro', async () => {
    const veiculo = VehicleFactory.getVeiculo('carro');
    await assertVeiculo(veiculo, 'Carro — transporte familiar', 'Rodas: 4');
  });

  it('deve exibir dados da Moto quando a fábrica retorna o tipo moto', async () => {
    const veiculo = VehicleFactory.getVeiculo('moto');
    await assertVeiculo(veiculo, 'Moto — mobilidade urbana', 'Rodas: 2');
  });
});
