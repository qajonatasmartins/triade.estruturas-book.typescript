import type { Locator, Page } from '@playwright/test';
import type { IVeiculo } from '../../interfaces/iVeiculo.interface';

export class Moto implements IVeiculo {
  private readonly btnMoto: Locator;
  private readonly rotulo: Locator;
  private readonly rodas: Locator;

  constructor(private readonly page: Page) {
    this.btnMoto = page.locator('#btn-moto');
    this.rotulo = page.locator('#vehicle-rotulo');
    this.rodas = page.locator('#vehicle-rodas');
  }

  async abrirPagina(): Promise<void> {
    await this.page.goto('/vehicles');
  }

  async selecionar(): Promise<void> {
    await this.btnMoto.click();
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
