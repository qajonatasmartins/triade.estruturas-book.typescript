# Factory Method — WebdriverIO

Testes de interface contra o app demo em [`../app`](../app).

## Pré-requisitos

- Node.js (LTS recente)
- Google Chrome instalado (o `wdio.conf.ts` usa `browserName: 'chrome'`)

## Instalação

Instale as dependências desta pasta e, para `npm run test:e2e`, também as do app (o script sobe o servidor em `../app`):

```bash
cd chapter-2/5.factoryMethod/app && npm install
cd ../webdriverIO && npm install
```

## Variáveis de ambiente

Copie `.env.example` para `.env` se quiser sobrescrever a URL base:

| Variável | Descrição | Padrão |
|----------|-----------|--------|
| `BASE_URL` | URL do app (deve bater com porta do servidor) | `http://localhost:3333` |

## Comandos

| Comando | Quando usar |
|---------|-------------|
| **`npm run test:e2e`** | Fluxo completo: sobe o app (`npm start` em `../app`), espera `http://localhost:3333` responder e executa o WebdriverIO. |
| **`npm test`** | Só os testes. O app já precisa estar rodando na URL configurada (manualmente ou por outro processo). |

Se a porta **3333** estiver ocupada, o `npm start` do app falha. Libere a porta ou suba o app com outro `PORT` e ajuste `BASE_URL` / a URL no script `test:e2e` para manter tudo alinhado.

Para detalhes do servidor e credenciais de login de demo, veja [../app/README.md](../app/README.md).
