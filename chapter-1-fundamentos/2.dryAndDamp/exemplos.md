# DRY e DAMP — exemplos

Teoria: capítulo do livro sobre DRY e DAMP.

## Duplicação excessiva (DRY)

**Ruim** — mesmos passos copiados em todo teste.

```typescript
test('login admin', async ({ page }) => {
  await page.goto('/login');
  await page.fill('#email', 'admin@x.com');
  await page.fill('#password', 'secret');
  await page.click('button[type=submit]');
  await expect(page).toHaveURL(/dashboard/);
});

test('login operador', async ({ page }) => {
  await page.goto('/login');
  await page.fill('#email', 'op@x.com');
  await page.fill('#password', 'secret');
  await page.click('button[type=submit]');
  await expect(page).toHaveURL(/dashboard/);
});
```

## Abstração legível (DAMP)

**Melhor** — repetição extraída com **nome que conta a história**.

```typescript
async function fazerLoginComo(page: Page, email: string) {
  await page.goto('/login');
  await page.fill('#email', email);
  await page.fill('#password', 'secret');
  await page.click('button[type=submit]');
}

test('login admin', async ({ page }) => {
  await fazerLoginComo(page, 'admin@x.com');
  await expect(page).toHaveURL(/dashboard/);
});

test('login operador', async ({ page }) => {
  await fazerLoginComo(page, 'op@x.com');
  await expect(page).toHaveURL(/dashboard/);
});
```

**Cuidado** — DRY demais vira opaco: `executarPasso(3, true, false)` piora leitura; prefira nomes explícitos no helper.
