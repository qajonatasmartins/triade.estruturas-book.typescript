import { expect } from '@wdio/globals';
import { SignupPage } from '../pages/signup/signup.page.js';

describe('Strategy — Cadastro (gênero feminino)', () => {
  it('deve concluir cadastro com gênero feminino via Strategy', async () => {
    const signup = new SignupPage();
    await signup.register('Maria QA', 'maria@example.com', 'feminino');
    const text = await signup.getMessage();
    expect(text).toContain('perfil feminino');
    expect(text).toContain('Maria QA');
  });
});
