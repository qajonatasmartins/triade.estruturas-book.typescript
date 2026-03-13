---
name: create-elements
description: Cria arquivos .elements.ts para mapeamento de elementos de página no Oracle-Driven Dialogue Pattern. Use quando precisar criar ou adicionar elementos a uma página, mapear seletores WebdriverIO, ou criar nova classe de Page Elements. Se o mapeamento não existir, usar map-elements-wdio-mcp para descobrir elementos via MCP.
---

# Criar Page Elements

## Quando usar

- Criar nova página no Page Object Model
- Adicionar mapeamento de elementos a uma página existente
- Criar arquivo `[pagina].elements.ts`

## Estrutura obrigatória

```typescript
export default class [Nome]Elements {

    /**
     * Mapeamento do [elemento] do [contexto da página]
     */
    get [nomeElemento]() { return $("seletor"); }
}
```

## Regras

1. **Classe**: `export default class [Nome]Elements` (sufixo `Elements`)
2. **Getters**: um por elemento; retornar `$("seletor")` ou `$('#id')`
3. **JSDoc**: obrigatório em cada getter com descrição do mapeamento
4. **Nomenclatura**:
   - Checkboxes: `check[Nome]` (ex: `checkMr`, `checkNewsletter`)
   - Inputs: `input[Nome]` (ex: `inputEmail`, `inputPassword`)
   - Botões: `btn[Nome]` (ex: `btnCreateAccount`, `btnLogin`)
5. **Verificação prévia**: sempre verificar se o mapeamento já existe no arquivo ou em algum base antes de criar novo elemento; evitar duplicação
6. **Uso do MCP**: se o mapeamento não existir e o elemento precisar ser descoberto, usar a skill `map-elements-wdio-mcp` e o MCP WebDriverIO (`get_visible_elements`) para mapear automaticamente
7. **Ordem de preferência de seletores**: sempre tentar nesta ordem — (1) **ID** (`#id`), (2) **CSS selector** (incluindo `data-qa`, atributos estáveis), (3) **XPath** apenas como último recurso
8. **Proibição**: nunca usar XPath com texto fixo (ex: `//button[contains(text(),'Login')]`) — gera testes flaky por mudanças de copy ou i18n
9. **Base components**: verificar se existe componente base em `pages/base/components/` que já forneça o seletor (ex: `ButtonBase`, `LabelBase`); reutilizar o base em vez de duplicar mapeamento na página
10. **Local**: `pages/[dominio]/[pagina]/[pagina].elements.ts` ou `pages/base/[componente]/[componente].elements.ts`

## Exemplo

```typescript
export default class SignupElements {
    get checkMr() { return $("div.clearfix label[for='id_gender1']"); }
    get inputName() { return $('#name'); }
    get inputEmailAddress() { return $('#email'); }
    get btnCreateAccount() { return $('form button[data-qa="create-account"]'); }
}
```
