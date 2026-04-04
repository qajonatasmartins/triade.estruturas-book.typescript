export type TipoAcesso = 'client' | 'admin';

export interface IUsuarioCadastro {
  nome: string;
  email: string;
  senha: string;
  tipoAcesso: TipoAcesso;
}
