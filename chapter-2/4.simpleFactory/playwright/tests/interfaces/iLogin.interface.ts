/**
 * Contrato comum para login na mesma tela (Cliente ou Administrador).
 */
export interface ILogin {
  logar(user: string, pass: string): Promise<void>;
  getMensagem(): Promise<string>;
}
