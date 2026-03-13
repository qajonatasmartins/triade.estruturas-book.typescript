---
name: create-commands
description: Cria arquivos .commands.ts para custom commands WebdriverIO no Oracle-Driven Dialogue Pattern. Use quando precisar encapsular operações repetitivas (waitForDisplayedAndClick, setValue) em comandos reutilizáveis.
---

# Criar Custom Command

## Quando usar

- Encapsular padrão: waitForDisplayed + click/set/select
- Criar comando reutilizável para interactions
- Nome: `[nome].commands.ts`

## Estrutura obrigatória

```typescript
export default class [Nome]CustomCommands {

    /**
     * [Descrição do método]
     * @param element - Elemento para interação
     * @param timeoutMsg - Mensagem para caso o elemento não seja exibido
     */
    public async [nomeMetodo](element: ReturnType<WebdriverIO.Browser["$"]>, timeoutMsg: string) {
        await element.scrollIntoView()
        await element.waitForDisplayed({ timeoutMsg })
        await element.[acao]()
    }
}
```

## Regras

1. **Classe**: `[Nome]CustomCommands`
2. **Tipo element**: `ReturnType<WebdriverIO.Browser["$"]>`
3. **scrollIntoView** antes de ações quando necessário
4. **waitForDisplayed** com timeoutMsg em português
5. **Exportar** em `core-web/constants.ts`: `export const [nome]CustomCommands = new [Nome]CustomCommands()`
6. **Local**: `core-web/commands/[nome].commands.ts`
