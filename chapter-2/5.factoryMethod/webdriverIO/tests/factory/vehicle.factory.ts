import { Veiculo } from '../pages/vehicle/veiculo.page.js';
import { Carro } from '../pages/vehicle/carro.page.js';
import { Moto } from '../pages/vehicle/moto.page.js';

/**
 * Criador abstrato (Factory Method): define o método fábrica `createVeiculo()`
 * e o fluxo de alto nível `performSelecaoVeiculo()` sem acoplar a `Carro` ou `Moto`.
 */
export abstract class VehicleFactory {
  /**
   * Método que deve ser implementado pelas subclasses para criar o veículo
   * @returns Veículo
   */
  abstract createVeiculo(): Veiculo;

  /**
   * Método para realizar a seleção do veículo e retornar o veículo criado
   * @returns Veículo criado
   */
  async performSelecaoVeiculo(): Promise<Veiculo> {
    const veiculo = this.createVeiculo();
    await veiculo.abrirPagina();
    await veiculo.selecionar();
    return veiculo;
  }
}

/**
 * Criador concreto: produz instâncias de {@link Carro}.
 */
export class CarroVehicleFactory extends VehicleFactory {
  /**
   * Método para criar o veículo
   * @returns Veículo criado
   */
  createVeiculo(): Veiculo {
    return new Carro();
  }
}

/**
 * Criador concreto: produz instâncias de {@link Moto}.
 */
export class MotoVehicleFactory extends VehicleFactory {
  /**
   * Método para criar o veículo
   * @returns Veículo criado
   */
  createVeiculo(): Veiculo {
    return new Moto();
  }
}
