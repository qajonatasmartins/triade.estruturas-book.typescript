/**
 * Função para criar os dados do usuário para login
 * @param email - E-mail de login
 * @param password - Senha de login
 * @returns Objeto com email e senha
 */
export const userShared = (email: string, password: string) => {
    return { email, password }
}