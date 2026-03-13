---
name: create-flows
description: Cria arquivos .flows.ts para fluxos de usuário que orquestram Actions de múltiplas páginas. Use quando precisar criar fluxo completo (ex: register, checkout) que combina navBarActions, loginActions, etc.
---

# Criar User Flows

## Quando usar

- Criar fluxo que atravessa múltiplas páginas
- Orquestrar actions de navBar, login, signup, etc.
- Compor cenários end-to-end

## Estrutura obrigatória

```typescript
import { navBarActions, loginActions, [outras]Actions } from "@/constants"
import { I[Interface] } from "@/interface/[dominio]/I[Nome].interface"

export default class [Nome]Flows {

    /**
     * Método para [descrição do fluxo passo a passo]
     * @param [param] - Descrição do parâmetro
     */
    public async [nomeDoFluxo]([param]: IInterface) {
        await navBarActions.[acao]()
        await loginActions.[acao]([param])
        await loginActions.signupActions().createUser([param])
    }
}
```

## Regras

1. **Classe**: `export default class [Nome]Flows`
2. **Imports**: Actions de `@/constants` (navBarActions, loginActions, etc.)
3. **Um método** por fluxo principal
4. **JSDoc** descrevendo o fluxo completo (passo a passo)
5. **Chaining**: `loginActions.signupActions()` quando Action retorna outra Action
6. **Local**: `flows/[dominio]/[nome].flows.ts`
