import { expect, test } from '@playwright/test';
import { SignupPage } from './pages/signup/signup.page';

test.describe('Strategy — Cadastro (gênero masculino)', () => {
  test('deve concluir cadastro com gênero masculino via Strategy', async ({ page }) => {
    const signup = new SignupPage(page);
    await signup.register('Maria QA', 'maria@example.com', 'masculino');
    const text = await signup.getMessage();
    expect(text).toContain('perfil masculino');
    expect(text).toContain('Maria QA');
  });
});
