---
name: create-constants
description: Atualiza ou cria arquivo constants.ts (barrel) no Oracle-Driven Dialogue Pattern. Use quando precisar exportar nova Action, Question, Flow, Business ou base component para uso em testes.
---

# Atualizar Constants

## Quando usar

- Adicionar nova Action, Question, Flow, Business ao barrel
- Manter ordem e organização do constants.ts

## Estrutura

```typescript
/** Asserções */
export const assertTs = assert
export const shouldTs = { should }
export const expectTs = { expect }

/** Base Components */
export const buttonBase = new ButtonBase()
export const labelBase = new LabelBase()

/** Actions */
export const navBarActions = new NavBarActions()
export const loginActions = new LoginActions()

/** Questions */
export const [nome]Questions = new [Nome]Questions()

/** Flows */
export const [nome]Flows = new [Nome]Flows()

/** Business */
export const [nome]Business = new [Nome]Business()
```

## Regras

1. **Ordem**: Asserções, Base, Actions, Questions, Flows, Business
2. **Import** da classe e `new [Classe]()`
3. **Nomenclatura**: camelCase (`loginActions`, `registerFlows`)
4. ** constants.ts** na raiz do projeto; **core-api/src/constants.ts** para builders e preSetup
