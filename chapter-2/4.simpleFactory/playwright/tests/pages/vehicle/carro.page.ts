import type { Locator, Page } from '@playwright/test';
import type { IVeiculo } from '../../interfaces/iVeiculo.interface';

export class Carro implements IVeiculo {
  private readonly btnCarro: Locator;
  private readonly rotulo: Locator;
  private readonly rodas: Locator;

  constructor(private readonly page: Page) {
    this.btnCarro = page.locator('#btn-carro');
    this.rotulo = page.locator('#vehicle-rotulo');
    this.rodas = page.locator('#vehicle-rodas');
  }

  async abrirPagina(): Promise<void> {
    await this.page.goto('/vehicles');
  }

  async selecionar(): Promise<void> {
    await this.btnCarro.click();
  }

  async getRotulo(): Promise<string> {
    await this.rotulo.waitFor({ state: 'visible' });
    return (await this.rotulo.textContent())?.trim() ?? '';
  }

  async getRodasTexto(): Promise<string> {
    await this.rodas.waitFor({ state: 'visible' });
    return (await this.rodas.textContent())?.trim() ?? '';
  }
}
