---
name: create-builder
description: Cria arquivos .builder.ts para Object Builders com padrão fluent no Oracle-Driven Dialogue Pattern. Use quando precisar criar builder para entidades (account, user) com faker e métodos with* encadeáveis.
---

# Criar Builder

## Quando usar

- Criar builder para entidade (CreateAccount, User, etc.)
- Usar faker para dados dinâmicos
- Padrão fluent: `builder.withName(x).withEmail(y).build()`

## Estrutura obrigatória

```typescript
import { I[Nome] } from "@/core-api/src/interface/[dominio]/I[Nome].interface";
import { faker } from "@faker-js/faker";

export default class [Nome]Builder {
    private [entidade]: I[Nome];

    constructor() {
        this.[entidade] = {
            campo1: faker.[tipo].[metodo](),
            campo2: valorDefault,
            // ...
        }
    }

    with[Nome](valor: tipo): [Nome]Builder {
        this.[entidade].[campo] = valor;
        return this;
    }

    build(): I[Nome] {
        return this.[entidade];
    }
}
```

## Regras

1. **Classe** com constructor inicializando objeto
2. **with[Campo](valor)**: retorna `this` para encadeamento
3. **build()**: retorna a interface
4. **Factory (a/an)**: o builder pode expor métodos factory com nome `a` ou `an` + nome do objeto — ex: `aUser()`, `anAccount()` — retornam instância do builder para encadeamento; uso: `UserBuilder.aUser().withName('x').build()`
5. **without[Campo]**: pode haver método `without[Nome]` para remover/omitir campo ao montar o objeto (útil para testes de validação de campos obrigatórios) — ex: `createAccountBuilder.withoutEmail().build()` para validar erro de email obrigatório
6. **faker** para dados dinâmicos quando apropriado
7. **Registrar** em `core-api/src/constants.ts` se necessário
8. **Local**: `core-api/src/builder/[nome].builder.ts`

## Exemplo de estrutura expandida

```typescript
// Factory
static aUser(): UserBuilder { return new UserBuilder(); }
static anAccount(): AccountBuilder { return new AccountBuilder(); }

// Without para omissão de campo
withoutEmail(): UserBuilder {
    delete this.user.email;
    return this;
}
```
