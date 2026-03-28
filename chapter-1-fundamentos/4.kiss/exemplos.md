# KISS — exemplos

Teoria: capítulo do livro sobre KISS.

Mesmo cenário: após login, a URL deve indicar o painel.

**Ruim** — muitas variáveis e passos só para “organizar”, sem ganho real.

```typescript
test('login', async ({ page }) => {
  const caminho = '/login';
  await page.goto(caminho);
  const email = 'a@x.com';
  const campoEmail = '#email';
  await page.fill(campoEmail, email);
  const senha = 'x';
  const campoSenha = '#password';
  await page.fill(campoSenha, senha);
  const botao = 'button[type=submit]';
  await page.click(botao);
  const endereco = await page.url();
  const ok = endereco.includes('dashboard');
  expect(ok).toBe(true);
});
```

**Melhor** — direto ao ponto (o Playwright já deixa o fluxo legível).

```typescript
test('login', async ({ page }) => {
  await page.goto('/login');
  await page.fill('#email', 'a@x.com');
  await page.fill('#password', 'x');
  await page.click('button[type=submit]');
  await expect(page).toHaveURL(/dashboard/);
});
```

Se precisar de nome para repetir em vários testes, use **uma** função com nome claro (ex.: `fazerLogin`), não dez variáveis intermediárias.
