import { clickCustomCommands, getTextCustomCommands, setCustomCommands } from "../../../core-web/constants";
import FooterElements from "./footer.elements";

export default class FooterInteractions {

    private elements = new FooterElements()

    /**
     * Método para clicar no botão de confirmar a Subscription
     */
    public async clickBtnSubscribe() {
        await clickCustomCommands.waitForDisplayedAndClick(this.elements.btnSubscribe, 'O botão de Subscription não foi exibido.')
    }

    /**
     * Método para preencher o campo 'Email Address' do Subscription
     * @param emailAddress - E-mail para subscription
     */
    public async setInputEmailAddressSubscription(emailAddress: string) {
        await setCustomCommands.waitForDisplayedAndSetValue(this.elements.inputEmailAddressSubscription, emailAddress, 'Email Address')
    }

    /**
     * Método para retornar o valor do texto de sucesso
     */
    public async getTextLblAlertSuccess(): Promise<string> {
        return await getTextCustomCommands.waitForDisplayedAndReturnText(this.elements.lblAlertSuccess, 'A mensagem de sucesso não foi exibida.')
    }

}
