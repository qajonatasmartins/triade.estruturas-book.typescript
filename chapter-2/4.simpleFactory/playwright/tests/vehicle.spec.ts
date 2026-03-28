import { test, expect } from '@playwright/test';
import { VehicleFactory } from './factory/vehicle.factory';
import type { IVeiculo } from './interfaces/iVeiculo.interface';

test.describe('Simple Factory — Veículos (Carro / Moto)', () => {
  async function assertVeiculo(veiculo: IVeiculo, rotuloEsperado: string, rodasEsperadas: string) {
    /** Arrange */
    await veiculo.abrirPagina();
    /** Act */
    await veiculo.selecionar();
    /** Assert */
    expect(await veiculo.getRotulo()).toBe(rotuloEsperado);
    expect(await veiculo.getRodasTexto()).toBe(rodasEsperadas);
  }

  test('deve exibir dados do Carro quando a fábrica retorna o tipo carro', async ({ page }) => {
    const veiculo = VehicleFactory.getVeiculo('carro', page);
    await assertVeiculo(veiculo, 'Carro — transporte familiar', 'Rodas: 4');
  });

  test('deve exibir dados da Moto quando a fábrica retorna o tipo moto', async ({ page }) => {
    const veiculo = VehicleFactory.getVeiculo('moto', page);
    await assertVeiculo(veiculo, 'Moto — mobilidade urbana', 'Rodas: 2');
  });
});
