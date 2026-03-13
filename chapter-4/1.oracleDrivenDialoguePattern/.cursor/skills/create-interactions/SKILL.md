---
name: create-interactions
description: Cria arquivos .interactions.ts para interações de baixo nível com elementos no Oracle-Driven Dialogue Pattern. Use quando precisar criar interações (click, set, getText) que usam Elements e custom commands.
---

# Criar Page Interactions

## Quando usar

- Criar interações para nova página
- Adicionar métodos de interação (click, set, select) a página existente
- O arquivo Elements já existe

## Estrutura obrigatória

```typescript
import { clickCustomCommands, setCustomCommands, selectCustomCommands, getTextCustomCommands } from "@/core-web/constants"
import [Nome]Elements from "./[nome].elements"

export default class [Nome]Interactions {
    private elements = new [Nome]Elements()

    public async [metodo](param: tipo) {
        await [command].waitForDisplayed[AndAction](this.elements.[elemento], 'Mensagem em português.')
    }
}
```

## Regras

1. **Classe**: `export default class [Nome]Interactions`
2. **Dependência**: `private elements = new [Nome]Elements()`
3. **Commands**: importar de `@/core-web/constants` conforme necessário
4. **Padrão**: sempre `waitForDisplayed` + ação; timeoutMsg em português
5. **Métodos**:
   - Click: `click[Nome]()` → `clickCustomCommands.waitForDisplayedAndClick()`
   - Set input: `setInput[Nome](valor)` → `setCustomCommands.waitForDisplayedAndSetValue()`
   - Select: `selectCustomCommands.waitForDisplayedAndSelectByVisibleText()` ou `ByIndex`
   - Get text: `getText[Nome]()` → `getTextCustomCommands.waitForDisplayedAndGetText()`
6. **scrollIntoView**: usar antes de click quando necessário
7. **Local**: mesmo diretório do .elements.ts

## Exemplo

```typescript
public async clickCheckMr() {
    await clickCustomCommands.waitForDisplayedAndClick(this.elements.checkMr, 'O checkbox [Mr.] não foi exibido.')
}
public async setInputName(name: string) {
    await setCustomCommands.waitForDisplayedAndSetValue(this.elements.inputName, name, 'Name')
}
```
