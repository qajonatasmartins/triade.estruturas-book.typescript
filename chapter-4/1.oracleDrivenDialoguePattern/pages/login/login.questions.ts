import { assertTs } from "@/constants";
import LoginInteractions from "./login.interactions";

export default class LoginQuestions {

    private interactions = new LoginInteractions()

    /**
     * Valida se a mensagem de erro de login foi exibida conforme esperado
     * @param expectedText Texto esperado
     */
    public async whatIsTheLoginErrorMessage(expectedText: string) {
        assertTs.equal(await this.interactions.getTextLblLoginErrorMessage(), expectedText, 'A mensagem de erro de login não corresponde ao esperado.')
    }

    /**
     * Valida se a mensagem de erro de signup (email já existente) foi exibida conforme esperado
     * @param expectedText Texto esperado
     */
    public async whatIsTheSignupErrorMessage(expectedText: string) {
        assertTs.equal(
            await this.interactions.getTextLblSignupErrorMessage(),
            expectedText,
            'A mensagem de erro de signup não corresponde ao esperado.'
        )
    }
}
