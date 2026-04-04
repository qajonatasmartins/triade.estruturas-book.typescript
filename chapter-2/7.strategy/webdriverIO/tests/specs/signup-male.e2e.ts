import { expect } from '@wdio/globals';
import { SignupPage } from '../pages/signup/signup.page.js';

describe('Strategy — Cadastro (gênero masculino)', () => {
  it('deve concluir cadastro com gênero masculino via Strategy', async () => {
    const signup = new SignupPage();
    await signup.register('Maria QA', 'maria@example.com', 'masculino');
    const text = await signup.getMessage();
    expect(text).toContain('perfil masculino');
    expect(text).toContain('Maria QA');
  });
});
