# Factory Method — app demo

Servidor Express que expõe páginas estáticas e APIs usadas pelos exemplos de testes (WebdriverIO, Playwright) do capítulo.

## Pré-requisitos

- Node.js (LTS recente; 20+ recomendado)

## Instalação

Na pasta deste projeto:

```bash
npm install
```

## Como rodar

- **`npm start`** — inicia o servidor uma vez. No console aparece `Factory Method demo em http://localhost:3333` (ou outra porta se você definir `PORT`).
- **`npm run dev`** — mesmo servidor com recarga ao alterar o código (`tsx watch`).

## Variáveis de ambiente

| Variável | Descrição | Padrão |
|----------|-----------|--------|
| `PORT` | Porta HTTP do Express | `3333` |

Se mudar a porta, alinhe também `BASE_URL` nos projetos de teste (por exemplo `http://localhost:SUA_PORTA`).

## Rotas e páginas

| Caminho | Comportamento |
|---------|-----------------|
| `/` | Arquivo estático `public/index.html` |
| `/login` | Redireciona para `/login.html` |
| `/vehicles` | Redireciona para `/vehicles.html` |

## APIs de demonstração

### `GET /api/vehicle/:type`

- `type`: `carro` ou `moto` (case-insensitive). Outros valores retornam `404`.

### `POST /api/login`

Corpo JSON ou form com:

- `role`: `client` ou `admin`
- `username`, `password`

Credenciais válidas para os fluxos de demo:

| Papel | Usuário | Senha |
|-------|---------|--------|
| Cliente (`client`) | `user` | `user123` |
| Administrador (`admin`) | `admin` | `admin123` |

## Conflito de porta

Se a porta já estiver em uso, o servidor não sobe. Encerre o processo que usa a porta ou defina outro `PORT` e use a mesma base nos testes.
