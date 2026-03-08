import { buttonBase } from "../../../constants";

export default class NavBarElements {

    /**
     * Mapeamento do ícone da logo da NavBar
     */
    get iconLogo() { return $('.logo img'); }

    /**
     * Mapeamento do botão [Home] da NavBar
     */
    get btnHomeMenu() { return $(`${buttonBase.menuElement(1)}`) }

    /**
     * Mapeamento do botão [Products] da NavBar
     */
    get btnProductsMenu() { return $(`${buttonBase.menuElement(2)}`) }

    /**
     * Mapeamento do botão [Cart] da NavBar
     */
    get btnCartMenu() { return $(`${buttonBase.menuElement(3)}`) }

    /**
     * Mapeamento do botão [Signup/Login] da NavBar
     */
    get btnLoginMenu() { return $(`${buttonBase.menuElement(4)} [href='/login']`) }

    /**
     * Mapeamento do texto com o nome do usuário logado
     */
    get lblLoggedIn() { return $('ul.nav i.fa-user + b') }

    /**
     * Mapeamento do botão [Logout] da NavBar
     */
    get btnLogoutMenu() { return $(`${buttonBase.menuElement(4)} [href='/logout']`) }
}