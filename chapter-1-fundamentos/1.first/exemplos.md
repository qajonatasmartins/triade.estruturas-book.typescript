# FIRST — exemplos

Teoria: capítulo do livro sobre FIRST.

## F — Fast (rápido / sem espera desnecessária)

**Ruim**

```typescript
test('abre painel', async ({ page }) => {
  await page.goto('/dashboard');
  await page.waitForTimeout(30_000); // fixo: sempre 30s
  await expect(page.locator('h1')).toContainText('Painel');
});
```

**Melhor**

```typescript
test('abre painel', async ({ page }) => {
  await page.goto('/dashboard');
  await expect(page.locator('h1')).toContainText('Painel'); // auto-wait do Playwright
});
```

## I — Independent (independente)

**Ruim** — o segundo teste depende do primeiro (estado global).

```typescript
let itens = 0;
test('adiciona', () => { itens += 1; expect(itens).toBe(1); });
test('remove', () => { itens -= 1; expect(itens).toBe(0); }); // só passa se 'adiciona' rodou antes
```

**Melhor**

```typescript
test('adiciona', () => {
  const carrinho = criarCarrinhoVazio();
  carrinho.adicionar('a');
  expect(carrinho.qtd()).toBe(1);
});
test('remove', () => {
  const carrinho = criarCarrinhoCom(['a']);
  carrinho.remover('a');
  expect(carrinho.qtd()).toBe(0);
});
```

## R — Repeatable (repetível)

**Ruim**

```typescript
test('cupom', () => {
  const c = `PROMO-${Math.random()}`; // resultado muda a cada run
  expect(c.length).toBeGreaterThan(5);
});
```

**Melhor**

```typescript
test('cupom', () => {
  const c = 'PROMO-FIXO-01'; // ou fixture / faker com seed fixo
  expect(validar(c)).toBe(true);
});
```

## S — Self-validating (auto-verificável)

**Ruim** — precisa olhar console ou UI manualmente.

```typescript
test('login', async ({ page }) => {
  await page.goto('/login');
  await page.fill('#email', 'a@x.com');
  await page.click('button[type=submit]');
  console.log('verifique se entrou no sistema'); // não falha sozinho se estiver errado
});
```

**Melhor**

```typescript
test('login', async ({ page }) => {
  await page.goto('/login');
  await page.fill('#email', 'a@x.com');
  await page.click('button[type=submit]');
  await expect(page).toHaveURL(/dashboard/); // passa ou falha no CI
});
```

## T — Timely (na hora certa)

**Ruim**

```typescript
test.skip('relatório PDF', async () => {
  // “depois eu escrevo quando a feature estabilizar”
});
```

**Melhor** — teste (mesmo que mínimo) **no mesmo ciclo** da entrega da feature.

```typescript
test('relatório PDF gera arquivo', async ({ page }) => {
  await page.goto('/relatorios');
  await page.getByRole('button', { name: 'Exportar PDF' }).click();
  const download = await page.waitForEvent('download');
  expect(download.suggestedFilename()).toMatch(/\.pdf$/);
});
```
