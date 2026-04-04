import { test, expect } from '@playwright/test';
import { AuthFacade } from './facade/auth.facade';
import type { IUsuarioCadastro } from './interfaces/iUsuarioCadastro.interface';
import { LoginPage } from './pages/login/login.page';

function usuarioUnico(sufixo: string): IUsuarioCadastro {
  return {
    nome: `QA ${sufixo}`,
    email: `qa.${sufixo}@example.com`,
    senha: 'SenhaSegura1!',
    tipoAcesso: 'client',
  };
}

test.describe('Facade — Auth (login + cadastro)', () => {

  let auth: AuthFacade;
  let dados: IUsuarioCadastro;
  let login: LoginPage;

  test('deve cadastrar e em seguida entrar via fachada (fluxo completo)', async ({ page }) => {
    /** Arrange */
    auth = new AuthFacade(page);
    dados = usuarioUnico(`facade-${Date.now()}`);
    login = new LoginPage(page);
    /** Act */
    await auth.cadastrarEEntrar(dados);

    /** Assert */
    const msg = await login.getMensagem();
    expect(msg).toContain('Olá,');
    expect(msg).toContain('QA');
    expect(msg).toContain('cliente');
  });
});
