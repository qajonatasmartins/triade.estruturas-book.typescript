import SuccessMessagesInteractions from "./successMessages.interactions"

export default class SuccessMessagesActions {

    private interactions = new SuccessMessagesInteractions()

    /**
     * Método para continuar a ação na página de sucesso (para exclusão ou criação de conta)
     */
    public async continueForDeleteOrCreateAccount() {
        await this.interactions.clickBtnContinue()
    }
}