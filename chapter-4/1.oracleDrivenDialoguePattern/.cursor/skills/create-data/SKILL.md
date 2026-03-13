---
name: create-data
description: Cria arquivos .data.ts para dados de teste no Oracle-Driven Dialogue Pattern. Use quando precisar criar cenários de teste (ct04, ct05) com paramsDefault, faker e dados esperados.
---

# Criar Test Data

## Quando usar

- Criar dados para cenário de teste (CT-NN)
- Definir title, paragraphs, paramsDefault
- Factory que retorna objeto do cenário

## Estrutura obrigatória

```typescript
import { faker } from "@faker-js/faker";
import { preSetup } from "@/core-api/src/constants";
import { ICreateAccount } from "@/core-api/src/interface/account/ICreateAccount.interface";
import { titleTypeEnum } from "@/enum/[dominio]/[nome].enum";
import { ISignup } from "@/interface/[dominio]/ISignup.interface";

export const ct[Nn] = () => {
    const testCase = 'CT-[Nn]'
    return {
        name: `${faker.person.fullName()} - ${testCase}`,
        paramsDefault: preSetup.preSetupParamsDefault(200, 3, 1000),
        title: 'TÍTULO ESPERADO',
        firstParagraph: 'Primeiro parágrafo esperado.',
        secondParagraph: 'Segundo parágrafo esperado.',
        user: (account: ICreateAccount): ISignup => {
            return {
                ...account,
                mrOrMrs: titleTypeEnum.MR.toString(),
                newsletter: true,
                specialOffer: true,
            } as ISignup
        }
    }
}
```

## Regras

1. **Função nomeada**: `export const ct[Nn] = () => ({ ... })`
2. **paramsDefault**: `preSetup.preSetupParamsDefault(statusCode, retryCount, retryDelay)`
3. **faker** para name e dados dinâmicos
4. **user** como função quando precisar transformar account em signup
5. **Local**: `data/[dominio]/[feature].data.ts`
