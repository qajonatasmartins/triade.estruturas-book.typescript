import NavBarInteractions from "./navBar.interactions";

export default class NavBarActions {

    private interactions = new NavBarInteractions()

    /**
     * Método para abrir a tela de login pela nav bar
     */
    public async openLogin() {
        await this.interactions.clickBtnLoginMenu()
    }

    /**
     * Método para realizar o logout
     */
    public async logout() {
        await this.interactions.clickBtnLogoutMenu()
    }

    /**
     * Método para deletar uma conta na plataforma
     */
    public async deleteAccount() {
        await this.interactions.clickBtnDeleteAccountMenu()
    }

}