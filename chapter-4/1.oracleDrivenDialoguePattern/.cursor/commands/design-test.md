# Design Test - Oracle-Driven Dialogue Pattern

Guie o usuário na criação de testes E2E seguindo o padrão do projeto. O usuário fornece o passo a passo; a IA coleta informações, usa o MCP WDIO para mapear elementos e aplica as skills para gerar os arquivos.

## 1. Coletar informações

**Ordem das perguntas (usar AskQuestion quando disponível):**

1. **Passo a passo do teste** – Peça primeiro; o usuário descreve os passos do cenário.
2. **URL da página/site** – Obrigatório. Ex: `https://automationexercise.com`. O MCP WDIO precisa para conectar ao browser e mapear elementos.
3. **Tag Allure** – `@smoke` ou `@regression`.
4. **Severidade** – `trivial`, `minor`, `normal`, `critical`, `blocker` (de `data/global.data.ts`).
5. **Feature** – `account`, `login`, `footer`, `logout` ou "outra" (adicionar em global.data se necessário).
6. **Tipo de validação** – Apenas app (questions) ou Com validação business (API).
7. **Tem curl ou exemplo de API?** – Se validação business: Sim/Não. Se Sim, solicite o curl/exemplo para criar o service.

## 2. Mapeamento de elementos (WDIO MCP)

Se a página for nova ou os arquivos `.elements.ts` não existirem:

1. Usar `call_mcp_tool` com servidor `wdio-mcp`:
   - `start_browser` com `navigationUrl` = URL informada pelo usuário
   - `get_visible_elements` (inViewportOnly: true, limit conforme necessidade)
2. Seguir a skill **map-elements-wdio-mcp** (ler em `.cursor/skills/map-elements-wdio-mcp/SKILL.md`) para transformar em `.elements.ts`.
3. Usar **create-elements** para estrutura e regras do arquivo.

## 3. Skills a aplicar (ordem)

Para cada tipo de arquivo, verificar se já existe. Se não existir, usar a skill correspondente em `.cursor/skills/`:

| Ordem | Skill                                 | Quando usar                                |
|-------|---------------------------------------|--------------------------------------------|
|  1    | map-elements-wdio-mcp / create-elements | Quando elements não existem                 |
|  2    | create-interactions                   | Quando depende de elements                 |
|  3    | create-actions                        | Quando depende de interactions             |
|  4    | create-questions                      | Para validação de UI                       |
|  5    | create-flows                          | Para fluxo entre múltiplas páginas         |
|  6    | create-service                        | Para validação de API (usar curl se houver)|
|  7    | create-business                       | Para validação via API                     |
|  8    | create-data                           | Para cenários ctNN                         |
|  9    | create-builder                        | Quando um novo builder é necessário        |
| 10    | create-interface                      | Quando uma nova interface é necessária     |
| 11    | create-test                           | Para criar o arquivo de teste              |
| 12    | create-constants                      | Atualizar barrel e global.data             |

## 4. Padrão AAA e estrutura do teste

```typescript
/** Arrange */
const account = createAccountBuilder.withName(ctNN().name).build()
const signup = ctNN().user(account)
/** Act */
await [flows].[metodo](signup)
/** Assert */
await [questions].whatIs[Nome](ctNN().title)
await [business].[metodo](account, ctNN().paramsDefault)  // se validação API
```

## 5. Allure (obrigatório no teste)

```typescript
allure.addFeature(feature.[nome])       // de data/global.data
allure.addSeverity(severity.[nivel])    // de data/global.data
allure.addTag("@smoke") ou addTag("@regression")  // resposta do usuário
allure.addLink(`${process.env.TEST_CASE_URL}/[nn]`, "Test Case")
```

## 6. Regras

- Verificar existência antes de criar; reutilizar arquivos existentes.
- Usar a skill correspondente para cada tipo; ler a SKILL.md antes de gerar.
- MCP WDIO apenas quando elements forem necessários e inexistentes.
- Local do teste: `tests/[feature]/CT-[NN].test.ts` ou `tests/[feature]/[subfeature]/CT-[NN].test.ts`.
- Atualizar `constants.ts` e `data/global.data.ts` se novos exports ou features forem criados.

## 7. Ordem de execução

1. Pedir passo a passo e URL.
2. Coletar demais perguntas.
3. Se elements inexistentes: MCP conecta na URL → get_visible_elements → map-elements-wdio-mcp.
4. Criar dependências (interactions → actions → questions → flows; service → business se API).
5. Criar data (ctNN).
6. Gerar CT-NN.test.ts com padrão AAA e Allure.
7. Atualizar constants e global.data conforme necessário.
