import { test, expect } from '@playwright/test';
import { CarroVehicleFactory, MotoVehicleFactory } from './factory/vehicle.factory';
import type { IVeiculo } from './interfaces/iVeiculo.interface';

test.describe('Factory Method — Veículos (Carro / Moto)', () => {
  async function assertVeiculo(veiculo: IVeiculo, rotuloEsperado: string, rodasEsperadas: string) {
    expect(await veiculo.getRotulo()).toBe(rotuloEsperado);
    expect(await veiculo.getRodasTexto()).toBe(rodasEsperadas);
  }

  test('deve exibir dados do Carro quando a fábrica retorna o tipo carro', async ({ page }) => {
    const factory = new CarroVehicleFactory(page);
    const veiculo = await factory.performSelecaoVeiculo();
    await assertVeiculo(veiculo, 'Carro — transporte familiar', 'Rodas: 4');
  });

  test('deve exibir dados da Moto quando a fábrica retorna o tipo moto', async ({ page }) => {
    const factory = new MotoVehicleFactory(page);
    const veiculo = await factory.performSelecaoVeiculo();
    await assertVeiculo(veiculo, 'Moto — mobilidade urbana', 'Rodas: 2');
  });
});
