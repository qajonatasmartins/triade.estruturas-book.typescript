import { assertTs } from "../../../constants"
import SuccessMessagesInteractions from "./successMessages.interactions"

export default class SuccessMessagesQuestions {

    private interactions = new SuccessMessagesInteractions()

    /**
     * Método para validar se o título de sucesso da página de sucesso (para exclusão ou criação de conta) foi exibido
     */
    public async whatIsTheTitleSuccessOfDeleteOrCreateAccount(expectedText: string) {
        assertTs.equal(await this.interactions.getTextLblTitleSuccessOfDeleteOrCreateAccount(), expectedText, 'O título de sucesso não foi exibido.')
    }

    /**
     * Método para validar se o primeiro parágrafo de sucesso da página de sucesso (para exclusão ou criação de conta) foi exibido
     */
    public async whatIsTheFirstParagraphSuccessOfDeleteOrCreateAccount(expectedText: string) {
        assertTs.equal(await this.interactions.getTextLblFirstParagraphSuccessOfDeleteOrCreateAccount(), expectedText, 'O primeiro parágrafo de sucesso não foi exibido.')
    }


    /**
     * Método para validar se o segundo parágrafo de sucesso da página de sucesso (para exclusão ou criação de conta) foi exibido
     */
    public async whatIsTheSecondParagraphSuccessOfDeleteOrCreateAccount(expectedText: string) {
        assertTs.equal(await this.interactions.getTextLblSecondParagraphSuccessOfDeleteOrCreateAccount(), expectedText, 'O segundo parágrafo de sucesso não foi exibido.')
    }

    /**
     * Método para validar se o botão de [Continue] da página de sucesso (para exclusão ou criação de conta) foi exibido
     */
    public async isContinueButtonDisplayed() {
        await assertTs.isTrue(await this.interactions.waitForDisplayedBtnContinue(), 'O botão [Continue] não foi exibido.')
    }
}