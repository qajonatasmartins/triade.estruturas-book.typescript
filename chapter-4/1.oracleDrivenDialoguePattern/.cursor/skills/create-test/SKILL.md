---
name: create-test
description: Cria arquivos .test.ts para testes WebdriverIO no Oracle-Driven Dialogue Pattern. Use quando precisar criar novo caso de teste (CT-NN) com padrão AAA, Allure e oracles.
---

# Criar Teste

## Quando usar

- Criar novo teste (CT-NN)
- Seguir padrão Arrange-Act-Assert
- Usar flows, questions, business para validação

## Estrutura obrigatória

```typescript
import { createAccountBuilder } from '@/core-api/src/constants'
import { ct[Nn] } from '@/data/[dominio]/[feature].data'
import { [flows], [questions], [business] } from '@/constants'
import { allureHelpers } from '@/core-web/constants'
import { feature, productName, severity } from '@/data/global.data'

describe(productName, () => {
    it('[CT-[Nn]] - [Descrição do cenário]', async () => {
        allureHelpers.addAllureReportParameters(feature.[nome], severity.[nivel], "@regression", `${process.env.TEST_CASE_URL}/[nn]`) 
        /** Arrange */
        const account = createAccountBuilder.withName(ct[Nn]().name).build()
        const signup = ct[Nn]().user(account)
        /** Act */
        await [flows].[metodo](signup)
        /** Assert */
        await [questions].whatIs[Nome](ct[Nn]().title)
        await [questions].whatIs[Nome](ct[Nn]().firstParagraph)
        await [business].[metodo](account, ct[Nn]().paramsDefault)
    })
})
```

## Regras

1. **describe**: `productName` de `@/data/global.data`
2. **it**: `[CT-NN] - Descrição`
3. **Allure**: addFeature, addSeverity, addTag, addLink
4. **AAA**: Arrange (builders, data), Act (flows), Assert (questions, business)
5. **Dados de teste**: nunca conter valores fixos no arquivo de teste; os dados devem vir sempre do **Builder** (ex: `createAccountBuilder.withName(...).build()`) ou do **Data** (ex: `ct05().paramsDefault`, `ct05().title`). Evitar hardcode como `"João Silva"`, `"test@email.com"` diretamente no `it()`
6. **Estrutura final**: sempre terminar com blocos de Assert (validações); não pode haver nenhuma ação (click, type, navigate) após as validações. Ordem obrigatória: `Arrange` → `Act` → `Assert` — o teste termina no Assert
7. **Local**: `tests/[feature]/CT-[NN].test.ts` ou `tests/[feature]/[subfeature]/CT-[NN].test.ts`
