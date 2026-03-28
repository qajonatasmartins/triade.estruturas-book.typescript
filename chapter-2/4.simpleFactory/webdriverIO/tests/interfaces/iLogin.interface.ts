/**
 * Contrato comum para login na mesma tela (Cliente ou Administrador).
 */
export interface ILogin {
  /**
   * Método para realizar o login
   * @param user - Usuário
   * @param pass - Senha
   */
  logar(user: string, pass: string): Promise<void>;
  /**
   * Método para obter a mensagem de login
   * @returns Mensagem de login
   */
  getMensagem(): Promise<string>;
}
