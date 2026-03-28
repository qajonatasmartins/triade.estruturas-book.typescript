/**
 * Contrato comum para interagir com a tela de veículos (Carro ou Moto).
 * A fábrica devolve a implementação correta sem expor seletores específicos no teste.
 */
export interface IVeiculo {
  /**
   * Método para abrir a página de veículos
   */
  abrirPagina(): Promise<void>;
  /**
   * Método para selecionar o veículo
   */
  selecionar(): Promise<void>;
  /**
   * Método para obter o rótulo do veículo
   * @returns Rótulo do veículo
   */
  getRotulo(): Promise<string>;
  /**
   * Método para obter o texto das rodas do veículo
   * @returns Texto das rodas do veículo
   */
  getRodasTexto(): Promise<string>;
}
