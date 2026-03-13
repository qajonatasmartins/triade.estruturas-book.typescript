---
name: create-interface
description: Cria arquivos .interface.ts para TypeScript interfaces no Oracle-Driven Dialogue Pattern. Use quando precisar definir contrato de dados, DTO, ou interface para API/signup.
---

# Criar Interface

## Quando usar

- Definir contrato de dados para signup, account, API
- Criar DTO ou tipo composto
- Nome do arquivo: `I[Nome].interface.ts`

## Estrutura obrigatória

```typescript
/**
 * Interface de [descrição]
 */
export interface I[Nome] {
    campo1: string;
    campo2: number;
    campoOpcional?: string;
}

/**
 * Interface que estende outra
 */
export interface I[Nome]Extended extends I[Nome] {
    campoExtra: string;
}
```

## Regras

1. **Prefixo I**: `I[Nome]`
2. **Apenas dados**; sem métodos
3. **`?`** para campos opcionais
4. **extends** quando compor interfaces
5. **Local**: `interface/[dominio]/I[Nome].interface.ts` ou `core-api/src/interface/[dominio]/I[Nome].interface.ts`
