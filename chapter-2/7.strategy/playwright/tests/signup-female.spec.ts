import { expect, test } from '@playwright/test';
import { SignupPage } from './pages/signup/signup.page';

test.describe('Strategy — Cadastro (gênero feminino)', () => {
  test('deve concluir cadastro com gênero feminino via Strategy', async ({ page }) => {
    const signup = new SignupPage(page);
    await signup.register('Maria QA', 'maria@example.com', 'feminino');
    const text = await signup.getMessage();
    expect(text).toContain('perfil feminino');
    expect(text).toContain('Maria QA');
  });
});
