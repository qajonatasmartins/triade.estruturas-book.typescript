import { clickCustomCommands, getTextCustomCommands } from "../../../core-web/constants";
import NavBarElements from "./navBar.elements";

export default class NavBarInteractions {

    private elements = new NavBarElements()

    protected clickBtnHomeMenu() { }

    protected clickBtnProductsMenu() { }

    protected clickBtnCartMenu() { }

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

}