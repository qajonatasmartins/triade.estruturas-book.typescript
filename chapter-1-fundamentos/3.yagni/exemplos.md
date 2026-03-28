# YAGNI — exemplos

Teoria: capítulo do livro sobre YAGNI.

Cenário: um único teste que preenche login e confere a URL.

**Ruim** — você adiciona coisas **“para quando precisarmos”**, mas hoje ninguém usa.

```typescript
// hoje só existe login por e-mail; o resto é “reserva”
const fluxosDeLogin = {
  emailSenha: async (page) => {
    await page.goto('/login');
    await page.fill('#email', process.env.TEST_EMAIL!);
    await page.fill('#password', process.env.TEST_PASSWORD!);
    await page.click('button[type=submit]');
  },
  google: async (_page) => {
    /* vazio — talvez um dia */
  },
  microsoft: async (_page) => {
    /* vazio — talvez um dia */
  },
};

test('login', async ({ page }) => {
  await fluxosDeLogin.emailSenha(page);
  await expect(page).toHaveURL(/dashboard/);
});
```

**Melhor** — só o que o caso de hoje precisa.

```typescript
test('login', async ({ page }) => {
  await page.goto('/login');
  await page.fill('#email', process.env.TEST_EMAIL!);
  await page.fill('#password', process.env.TEST_PASSWORD!);
  await page.click('button[type=submit]');
  await expect(page).toHaveURL(/dashboard/);
});
```

Quando **realmente** existir login com Google, aí você adiciona o segundo fluxo.
