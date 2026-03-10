import { assertTs } from "@/constants";
import FooterInteractions from "./footer.interactions";

export default class FooterQuestions {

    private interactions = new FooterInteractions()

    /**
     * Método para validar se a mensagem de sucesso da Subscription foi exibida.
     * @param expectedText - Mensagem esperada
     */
    public async wasTheSuccessMessageDisplayed(expectedText: string) {
        const actualText = await this.interactions.getTextLblAlertSuccess()
        assertTs.equal(actualText, expectedText, 'A mensagem de sucesso da Subscription não foi exibida.')
    }
}