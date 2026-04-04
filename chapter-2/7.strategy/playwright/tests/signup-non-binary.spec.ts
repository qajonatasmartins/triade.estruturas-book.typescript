import { expect, test } from '@playwright/test';
import { SignupPage } from './pages/signup/signup.page';

test.describe('Strategy — Cadastro (gênero não binário)', () => {
  test('deve concluir cadastro com gênero nao_binario via Strategy', async ({ page }) => {
    const signup = new SignupPage(page);
    await signup.register('Maria QA', 'maria@example.com', 'nao_binario');
    const text = await signup.getMessage();
    expect(text).toContain('não binário');
    expect(text).toContain('Maria QA');
  });
});
