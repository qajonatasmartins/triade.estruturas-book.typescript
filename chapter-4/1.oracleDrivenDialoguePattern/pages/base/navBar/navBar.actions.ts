import NavBarInteractions from "./navBar.interactions";

export default class NavBarActions {

    private interactions = new NavBarInteractions()

    /**
     * Método para abrir a tela de login pela nav bar
     */
    public async openLogin() {
        await this.interactions.clickBtnLoginMenu()
    }

}