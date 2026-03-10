import { clickCustomCommands, getTextCustomCommands } from "../../../core-web/constants"
import SuccessMessagesElements from "./successMessages.elements"

export default class SuccessMessagesInteractions {

    private elements = new SuccessMessagesElements()

    /**
     * Método para realizar o click no botão de [Continue] da página de sucesso (para exclusão e criação de conta)
     */
    public async clickBtnContinue() {
        await clickCustomCommands.waitForDisplayedAndClick(this.elements.btnContinue, 'O botão [Continue] não foi exibido.')
    }

    /**
     * Método para aguardar o botão de [Continue] da página de sucesso (para exclusão ou criação de conta) ser exibido
     */
    public async waitForDisplayedBtnContinue() {
        return await this.elements.btnContinue.waitForDisplayed({ timeoutMsg: 'O botão [Continue] não foi exibido.' })
    }

    /**
     * Método para retornar o texto do título de sucesso da página de sucesso (para exclusão ou criação de conta)
     */
    public async getTextLblTitleSuccessOfDeleteOrCreateAccount(): Promise<string> {
        return await getTextCustomCommands.waitForDisplayedAndReturnText(this.elements.lblTitleSuccessOfDeleteOrCreateAccount, 'O título de sucesso não foi exibido.')
    }

    /**
     * Método para retornar o texto do primeiro parágrafo de sucesso da página de sucesso (para exclusão ou criação de conta)
     */
    public async getTextLblFirstParagraphSuccessOfDeleteOrCreateAccount(): Promise<string> {
        return await getTextCustomCommands.waitForDisplayedAndReturnText(this.elements.lblFirstParagraphSuccessOfDeleteOrCreateAccount, 'O primeiro parágrafo de sucesso não foi exibido.')
    }

    /**
     * Método para retornar o texto do segundo parágrafo de sucesso da página de sucesso (para exclusão ou criação de conta)
     */
    public async getTextLblSecondParagraphSuccessOfDeleteOrCreateAccount(): Promise<string> {
        return await getTextCustomCommands.waitForDisplayedAndReturnText(this.elements.lblSecondParagraphSuccessOfDeleteOrCreateAccount, 'O segundo parágrafo de sucesso não foi exibido.')
    }
}