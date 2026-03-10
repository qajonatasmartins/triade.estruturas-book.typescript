import { clickCustomCommands, getTextCustomCommands } from "@/core-web/constants";
import NavBarElements from "./navBar.elements";

export default class NavBarInteractions {

    private elements = new NavBarElements()

    /**
     * Método para realizar o click no botão de [Login] da nav bar
     */
    public async clickBtnLoginMenu() {
        await clickCustomCommands.waitForDisplayedAndClick(this.elements.btnLoginMenu, 'O botão [Login] não foi exibido.')
    }

    /**
     * Método para obter o nome do usuário logado na página Automation Exercise
     * @returns - Retorna o nome do usuário logado
     */
    public async getTextLblLoggedIn(): Promise<string> {
        return getTextCustomCommands.waitForDisplayedAndReturnText(this.elements.lblLoggedIn, 'O nome do usuário logado não foi exibido.')
    }

    /**
     * Método para realizar o click no botão de [Logout] da nav bar
     */
    public async clickBtnLogoutMenu() {
        await clickCustomCommands.waitForDisplayedAndClick(this.elements.btnLogoutMenu, 'O botão [Logout] não foi exibido.')
    }

    /**
     * Método para aguardar o botão [Login] da nav bar ser exibido
     */
    public async waitForDisplayedBtnLoginMenu() {
        return await this.elements.btnLoginMenu.waitForDisplayed({ timeoutMsg: 'O botão [Login] não foi exibido.' })
    }

    /**
     * Método para realizar o click no botão de [Delete Account] da nav bar
     */
    public async clickBtnDeleteAccountMenu() {
        await clickCustomCommands.waitForDisplayedAndClick(this.elements.btnDeleteAccountMenu, 'O botão [Delete Account] não foi exibido.')
    }

}