---
name: create-business
description: Cria arquivos .business.ts para validação de dados via API (oracle) no Oracle-Driven Dialogue Pattern. Use quando precisar validar que dados da UI correspondem ao esperado via API.
---

# Criar Business (Oracle)

## Quando usar

- Validar dados após ação (ex: conta criada = dados na API)
- Comparar resposta da API com dados esperados
- Usar assertTs para equality checks

## Estrutura obrigatória

```typescript
import [service] from "@/core-api/src/service/[dominio]/[nome].service";
import { IParamsDefault } from "@/core-api/src/interface/IParamsDefault.interface";
import { assertTs } from "@/constants";
import { I[Interface] } from "@/core-api/src/interface/[dominio]/I[Nome].interface";

export default class [Nome]Business {

    public async [metodoValidacao]([param]: IInterface, paramsDefault: IParamsDefault) {
        const { json } = await [service]([param].campo, paramsDefault)
        assertTs.equal(json.[path], [param].campo, 'Mensagem em português.')
    }
}
```

## Regras

1. **Classe**: `export default class [Nome]Business`
2. **Escopo**: a classe sempre terá métodos de validação via API (chamada a services + assertTs)
3. **Nomenclatura dos métodos**: o nome de cada método deve ser uma **pergunta ao SUT**, assim como em create-questions — ex: `doesAccountExistInApi`, `whatIsTheUserDataFromApi`
4. **Chamada service** e extração de `json`
5. **assertTs.equal** para cada campo a validar
6. **Mensagens** de erro em português
7. **Local**: `core-api/src/business/[dominio]/[nome].business.ts`
