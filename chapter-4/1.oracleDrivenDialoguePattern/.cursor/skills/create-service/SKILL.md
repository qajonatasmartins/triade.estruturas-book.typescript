---
name: create-service
description: Cria arquivos .service.ts para chamadas à API com Pactum no Oracle-Driven Dialogue Pattern. Use quando precisar criar novo endpoint de API, serviço GET/POST, ou integração com backend.
---

# Criar API Service

## Quando usar

- Criar chamada a novo endpoint
- Implementar GET, POST, etc. com pactum
- Nome do arquivo: `[nomeMetodo].service.ts` (camelCase)

## Estrutura obrigatória

```typescript
import pactum from "pactum";
import { IParamsDefault } from "@/core-api/src/interface/IParamsDefault.interface";

/**
 * Método para [descrição]
 * @param [param] - Descrição
 * @param paramsDefault - Interface de parâmetros default
 * @returns - Promise com a resposta da requisição
 */
export default async function [nomeMetodo]Service([params], paramsDefault: IParamsDefault) {
    return await pactum.spec()
        .get(`${process.env.API_URL}[endpoint]`) // ou .post()
        .withHeaders({ 'Content-Type': 'application/x-www-form-urlencoded' })
        .withQueryParams({ ... }) // GET
        // .withForm({ ... }) // POST
        .expectStatus(paramsDefault.statusCode, `O status code da requisição ${process.env.API_URL}[endpoint] não é o esperado.`)
        .retry({
            count: paramsDefault.retry.count,
            delay: paramsDefault.retry.delay,
            strategy: ({ res }) => res.statusCode === paramsDefault.statusCode
        })
}
```

## Regras

1. **Função async** default export; nome em camelCase + sufixo `Service`
2. **IParamsDefault** sempre como último parâmetro
3. **expectStatus** e **retry** obrigatórios
4. **Mensagens** em português
5. **Local**: `core-api/src/service/[dominio]/[nomeMetodo].service.ts`
