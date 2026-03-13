---
name: create-enum
description: Cria arquivos .enum.ts para enumeradores no Oracle-Driven Dialogue Pattern. Use quando precisar definir valores fixos (Mr./Mrs., status, tipos).
---

# Criar Enum

## Quando usar

- Valores fixos reutilizáveis (título, status, tipo)
- Evitar magic strings em interfaces e actions

## Estrutura obrigatória

```typescript
export enum [nome]Enum {
    VALOR1 = 'valor1',
    VALOR2 = 'valor2',
}
```

## Regras

1. **Sufixo Enum**: `[nome]Enum`
2. **Chaves** em UPPER_SNAKE ou PascalCase
3. **Valores** string ou number conforme necessidade
4. **Local**: `enum/[dominio]/[nome].enum.ts`
5. **Uso**: `titleTypeEnum.MR.toString()` em interfaces quando precisar de string
