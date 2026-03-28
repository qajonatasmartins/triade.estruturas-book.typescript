# .cursor - Oracle-Driven Dialogue Pattern

Estrutura de regras e skills para o projeto de automação no padrão Oracle-Driven Dialogue.

## Estrutura

```
.cursor/
├── commands/       # Slash commands (/create-test)
├── rules/          # Regras por tipo de arquivo (.mdc)
└── skills/         # Skills para criação de cada tipo
```

## Commands (.cursor/commands/)

Comandos invocados com `/` no chat:

| Comando      | Descrição                                                                                                                                                                |
|--------------|--------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| create-test  | Guia a criação de testes E2E: - Coleta passo a passo - URL, tag, severidade, feature - Usa MCP WDIO para mapear elementos - Aplica skills para gerar arquivos            |

## Rules (.cursor/rules/)

Regras aplicadas automaticamente ao editar arquivos que correspondem aos globs:

| Arquivo         | Glob                  | Descrição                 |
|-----------------|----------------------|---------------------------|
| elements.mdc    | `**/*.elements.ts`   | Page Elements             |
| actions.mdc     | `**/*.actions.ts`    | Page Actions              |
| interactions.mdc| `**/*.interactions.ts`| Page Interactions        |
| questions.mdc   | `**/*.questions.ts`  | Page Questions            |
| flows.mdc       | `**/*.flows.ts`      | User Flows                |
| service.mdc     | `**/*.service.ts`    | API Services              |
| business.mdc    | `**/*.business.ts`   | Business (Oracle)         |
| builder.mdc     | `**/*.builder.ts`    | Object Builders           |
| interface.mdc   | `**/*.interface.ts`  | TypeScript Interfaces     |
| enum.mdc        | `**/*.enum.ts`       | Enums                     |
| data.mdc        | `**/*.data.ts`       | Test Data                 |
| base.mdc        | `**/*.base.ts`       | Base Components           |
| commands.mdc    | `**/*.commands.ts`   | Custom Commands           |
| test.mdc        | `**/*.test.ts`       | Test Files                |
| config.mdc      | `config/**/*.ts`     | WebdriverIO Config        |
| constants.mdc   | `constants.ts`       | Barrel                    |
| utils.mdc       | `**/*.utils.ts`      | Utils                     |

## Skills (.cursor/skills/)

Use as skills ao criar novos arquivos. Exemplos de triggers:

- "Crie um arquivo elements para a página X" → create-elements
- "Mapeie os elementos da tela" → map-elements-wdio-mcp
- "Adicione um novo service para o endpoint Y" → create-service
- "Crie o teste CT-06" → create-test

### Skills disponíveis

- **create-elements** - Mapeamento de elementos
- **map-elements-wdio-mcp** - Mapeamento automático via WDIO MCP (tela → .elements.ts)
- **create-interactions** - Interações de baixo nível
- **create-actions** - Ações de alto nível
- **create-questions** - Validações (oracles)
- **create-flows** - Fluxos de usuário
- **create-service** - Chamadas à API
- **create-business** - Validação via API
- **create-builder** - Builders
- **create-interface** - Interfaces TypeScript
- **create-enum** - Enumeradores
- **create-data** - Dados de teste
- **create-test** - Casos de teste
- **create-commands** - Custom Commands
- **create-base** - Componentes base
- **create-constants** - Atualizar barrel
- **create-utils** - Utilitários
