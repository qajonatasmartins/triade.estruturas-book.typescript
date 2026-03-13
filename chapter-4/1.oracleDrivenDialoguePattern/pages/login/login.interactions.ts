import { clickCustomCommands, getTextCustomCommands, setCustomCommands } from "@/core-web/constants";
import LoginElements from "./login.elements";

export default class LoginInteractions {

    private elements = new LoginElements()

    /**
     * Método para informar o valor no campo 'Email Address' do login to your account
     * @param email 
     */
    public async setInputEmailAddressLogin(email: string) {
        await setCustomCommands.waitForDisplayedAndSetValue(this.elements.inputEmailAddressLogin, email, 'Email Address')
    }

    /**
     * Método para informar o valor no campo 'Password' do login to your account
     * @param password 
     */
    public async setInputPassword(password: string | number) {
        await setCustomCommands.waitForDisplayedAndSetValue(this.elements.inputPassword, password, 'Password')
    }

    /**
     * Método para realizar o click no botão [Login] do login to your account
     */
    public async clickBtnLogin() {
        await clickCustomCommands.waitForDisplayedAndClick(this.elements.btnLogin, 'O botão [Login] não foi exibido.')
    }

    /**
     * Método para obter o texto da mensagem de erro de credenciais incorretas
     */
    public async getTextLblLoginErrorMessage() {
        return await getTextCustomCommands.waitForDisplayedAndReturnText(this.elements.lblLoginErrorMessage, 'A mensagem de erro de login não foi exibida.')
    }

    /**
     * Método para informar o valor no campo 'Email adress' do New User Signup!
     * @param email 
     */
    public async setInputEmailAddressSignup(email: string) {
        await setCustomCommands.waitForDisplayedAndSetValue(this.elements.inputEmailAddressSignup, email, 'Email adress')
    }

    /**
     * Método para informar o valor no campo 'Name' do New User Signup!
     * @param name 
     */
    public async setInputName(name: string) {
        await setCustomCommands.waitForDisplayedAndSetValue(this.elements.inputName, name, 'Name')
    }

    /**
     * Método para realizar o click no botão [Signup] do New User Signup!
     */
    public async clickBtnSignup() {
        await clickCustomCommands.waitForDisplayedAndClick(this.elements.btnSignup, 'O botão [Signup] não foi exibido.')
    }

    /**
     * Método para obter o texto da mensagem de erro 'Email Address already exist!' do signup
     */
    public async getTextLblSignupErrorMessage() {
        return await getTextCustomCommands.waitForDisplayedAndReturnText(
            this.elements.lblSignupErrorMessage,
            'A mensagem de erro de signup não foi exibida.'
        )
    }

}
