import { expect } from '@wdio/globals';
import { AuthFacade } from '../facade/auth.facade.js';
import type { IUsuarioCadastro } from '../interfaces/iUsuarioCadastro.interface.js';
import { LoginPage } from '../pages/login/login.page.js';

function usuarioUnico(sufixo: string): IUsuarioCadastro {
  return {
    nome: `QA ${sufixo}`,
    email: `qa.${sufixo}@example.com`,
    senha: 'SenhaSegura1!',
    tipoAcesso: 'client',
  };
}

describe('Facade — Auth (login + cadastro)', () => {

  let auth: AuthFacade;
  let dados: IUsuarioCadastro;
  let login: LoginPage;

  beforeEach(async () => {
    /** Arrange */
    auth = new AuthFacade();
    dados = usuarioUnico(`facade-${Date.now()}`);
    login = new LoginPage();
  });

  it('deve cadastrar e em seguida entrar via fachada (fluxo completo)', async () => {
    /** Act */
    await auth.cadastrarEEntrar(dados);

    /** Assert */
    const msg = await login.getMensagem();
    expect(msg).toContain('Olá,');
    expect(msg).toContain('QA');
    expect(msg).toContain('cliente');
  });
});
