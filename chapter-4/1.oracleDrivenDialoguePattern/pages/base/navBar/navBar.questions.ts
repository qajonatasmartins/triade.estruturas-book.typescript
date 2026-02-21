import { assertTs } from "../../../constants";
import NavBarInteractions from "./navBar.interactions";

export default class NavBarQuestions {

    private elements = new NavBarInteractions()

    /**
     * Método para validar se o nome do usuário logado é igual ao esperado.
     * @param expectedUser - Nome do usuário logado
     */
    public async whatIsTheLoggedInUsersName(expectedUser: string) {
        assertTs.equal(await this.elements.getTextLblLoggedIn(), expectedUser, 'O nome do usuário é diferente do esperado.')
    }

}