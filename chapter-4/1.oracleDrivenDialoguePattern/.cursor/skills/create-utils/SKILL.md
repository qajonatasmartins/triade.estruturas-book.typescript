---
name: create-utils
description: Cria arquivos .utils.ts para utilitários no Oracle-Driven Dialogue Pattern. Use quando precisar criar PreSetup, helpers ou funções puras reutilizáveis na core-api.
---

# Criar Utils

## Quando usar

- PreSetup de parâmetros (paramsDefault)
- Helpers de configuração
- Funções puras sem dependência de UI

## Estrutura obrigatória

```typescript
import { IParamsDefault } from "@/core-api/src/interface/IParamsDefault.interface";

export default class [Nome]Utils {

    public [metodo](param1: tipo, param2: tipo): IParamsDefault {
        return {
            statusCode: param1,
            retry: { count: param2, delay: param3 }
        }
    }
}
```

## Regras

1. **Classe** ou **funções puras** exportadas
2. **Sem dependências** de UI ou browser
3. **JSDoc** em métodos públicos
4. **Local**: `core-api/src/utils/[nome].utils.ts`
5. **Registrar** em `core-api/src/constants.ts` quando usado em data ou tests
