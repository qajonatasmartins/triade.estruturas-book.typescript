import FooterInteractions from "./footer.interactions";

export default class FooterActions {

    private interactions = new FooterInteractions()

    /**
     * Método para fazer a Subscription na página
     * @param emailAddress - E-mail para cadastro da Subscription
     */
    public async doSubscription(emailAddress: string) {
        await this.interactions.setInputEmailAddressSubscription(emailAddress)
        await this.interactions.clickBtnSubscribe()
    }
}