import { expect } from '@wdio/globals';
import { SignupPage } from '../pages/signup/signup.page.js';

describe('Strategy — Cadastro (gênero não binário)', () => {
  it('deve concluir cadastro com gênero nao_binario via Strategy', async () => {
    const signup = new SignupPage();
    await signup.register('Maria QA', 'maria@example.com', 'nao_binario');
    const text = await signup.getMessage();
    expect(text).toContain('não binário');
    expect(text).toContain('Maria QA');
  });
});
