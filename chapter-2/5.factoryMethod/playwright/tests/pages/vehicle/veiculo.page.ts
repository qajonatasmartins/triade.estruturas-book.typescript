import type { Locator, Page } from '@playwright/test';
import type { IVeiculo } from '../../interfaces/iVeiculo.interface';

/**
 * Classe abstrata para representar um veículo
 * SuperClass para os veículos Carro e Moto
 */
export abstract class Veiculo implements IVeiculo {
  /**
   * Seletor para o rótulo do veículo
   */
  protected readonly rotulo: Locator;

  /**
   * Seletor para o texto das rodas do veículo
   */
  protected readonly rodas: Locator;

  /**
   * Construtor da classe
   * @param page - Página do navegador
   */
  constructor(protected readonly page: Page) {
    this.rotulo = page.locator('#vehicle-rotulo');
    this.rodas = page.locator('#vehicle-rodas');
  }

  /**
   * Método para selecionar o veículo
   */
  abstract selecionar(): Promise<void>;

  /**
   * Método para abrir a página de veículos
   */
  async abrirPagina(): Promise<void> {
    await this.page.goto('/vehicles');
  }

  /**
   * Método para obter o rótulo do veículo
   * @returns Rótulo do veículo
   */
  async getRotulo(): Promise<string> {
    await this.rotulo.waitFor({ state: 'visible' });
    return (await this.rotulo.textContent())?.trim() ?? '';
  }

  /**
   * Método para obter o texto das rodas do veículo
   * @returns Texto das rodas do veículo
   */
  async getRodasTexto(): Promise<string> {
    await this.rodas.waitFor({ state: 'visible' });
    return (await this.rodas.textContent())?.trim() ?? '';
  }
}
