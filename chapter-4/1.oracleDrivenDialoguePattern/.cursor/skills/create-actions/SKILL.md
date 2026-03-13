---
name: create-actions
description: Cria arquivos .actions.ts para ações de alto nível no Oracle-Driven Dialogue Pattern. Use quando precisar criar ações de negócio que orquestram interactions, ou adicionar métodos a Actions existentes.
---

# Criar Page Actions

## Quando usar

- Criar ações para nova página
- Orquestrar múltiplas interactions em fluxo de negócio
- O arquivo Interactions já existe

## Estrutura obrigatória

```typescript
import { I[Interface] } from "@/interface/[dominio]/I[Nome].interface"
import [nome]Enum from "@/enum/[dominio]/[nome].enum"
import [Nome]Interactions from "./[nome].interactions"

export default class [Nome]Actions {
    private interactions = new [Nome]Interactions()

    public async [acaoDeNegocio](param: IInterface) {
        await this.interactions.[metodo1](param.campo1)
        await this.interactions.[metodo2](param.campo2)
    }
}
```

## Regras

1. **Classe**: `export default class [Nome]Actions`
2. **Dependência**: `private interactions = new [Nome]Interactions()`
3. **Imports**: interfaces de `@/interface/`, enums de `@/enum/`
4. **Não** acessar elements diretamente; sempre via interactions
5. **Métodos** públicos async; nomes descritivos de ação (`fillBasicInformation`, `createUser`)
6. **JSDoc**: `@param` e `@returns` em cada método
7. **Local**: mesmo diretório do .interactions.ts
