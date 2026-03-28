/**
 * Contrato comum para interagir com a tela de veículos (Carro ou Moto).
 */
export interface IVeiculo {
  abrirPagina(): Promise<void>;
  selecionar(): Promise<void>;
  getRotulo(): Promise<string>;
  getRodasTexto(): Promise<string>;
}
