---
name: create-base
description: Cria arquivos .base.ts para componentes base reutilizáveis no Oracle-Driven Dialogue Pattern. Use quando precisar criar seletores compartilhados (botões, labels) usados em múltiplas páginas.
---

# Criar Base Component

## Quando usar

- Seletores reutilizáveis em várias páginas
- Padrões comuns (btnSubmit, btnContinue, menuElement)

## Estrutura obrigatória

```typescript
export default class [Nome]Base {

    /**
     * Mapeamento base do [descrição]
     * @param index - Índice quando seletor dinâmico
     */
    public [nomeMetodo](index?: number) { return `.seletor .item:nth-child(${index})` }
}
```

## Regras

1. **Classe**: `export default class [Nome]Base`
2. **Métodos** retornam string de seletor ou função com params
3. **Template literals** para seletores dinâmicos
4. **Local**: `pages/base/components/[nome]/[nome].base.ts`
5. **Registrar** em constants.ts quando usado globalmente
