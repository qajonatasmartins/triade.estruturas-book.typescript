import SuccessInteractions from "./success.interactions"

export default class SuccessActions {

    private interactions = new SuccessInteractions()

    /**
     * Método para continuar a ação na página de sucesso (para exclusão ou criação de conta)
     */
    public async continueForDeleteOrCreateAccount() {
        await this.interactions.clickBtnContinue()
    }
}