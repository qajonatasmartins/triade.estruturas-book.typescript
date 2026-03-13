---
name: create-questions
description: Cria arquivos .questions.ts para validações (oracles) no Oracle-Driven Dialogue Pattern. Use quando precisar criar validações de estado da página, assertions com assertTs, ou oracles de teste.
---

# Criar Page Questions

## Quando usar

- Criar validações para nova página
- Adicionar oracles (whatIs*, is*Displayed)
- O arquivo Interactions já existe

## Estrutura obrigatória

```typescript
import { assertTs } from "@/constants"
import [Nome]Interactions from "./[nome].interactions"

export default class [Nome]Questions {
    private interactions = new [Nome]Interactions()

    public async whatIs[Nome](expectedText: string) {
        assertTs.equal(await this.interactions.getText[Nome](), expectedText, 'Mensagem de erro em português.')
    }

    public async is[Nome]Displayed() {
        await assertTs.isTrue(await this.interactions.waitForDisplayed[Nome](), 'Mensagem de erro em português.')
    }
}
```

## Regras

1. **Classe**: `export default class [Nome]Questions`
2. **Dependência**: `private interactions = new [Nome]Interactions()`
3. **assertTs**: importar de `@/constants` (chai assert)
4. **Nomenclatura dos métodos**: o nome de cada método deve ser sempre uma **pergunta ao SUT (System Under Test)**. Padrões: `whatIs[Nome]`, `is[Nome]Displayed`, `does[Nome]Contain` — ex: `whatIsTheTitleSuccessOfDeleteOrCreateAccount` ("qual é o título...?"), `isTheLoginFormDisplayed` ("está o formulário de login exibido?")
5. **Métodos**: retornam Promise
6. **Apenas validações**; nunca realizar ações (click, set)
7. **Mensagens** de erro em português no assertTs
8. **Local**: mesmo diretório do .interactions.ts

## Exemplo

```typescript
public async whatIsTheTitleSuccessOfDeleteOrCreateAccount(expectedText: string) {
    assertTs.equal(await this.interactions.getTextLblTitleSuccessOfDeleteOrCreateAccount(), expectedText, 'O título de sucesso não foi exibido.')
}
```
