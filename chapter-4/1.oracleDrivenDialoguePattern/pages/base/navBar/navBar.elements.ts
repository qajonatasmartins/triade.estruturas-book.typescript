import { buttonBase } from "../../../constants";

export default class NavBarElements {

    /**
     * Mapeamento do ícone da logo da NavBar
     */
    get iconLogo() { return $('.logo img'); }

    /**
     * Mapeamento do botão [Home] da NavBar
     */
    get btnHomeMenu() { return $(`${buttonBase.btnMenu = 1}`) }

    /**
     * Mapeamento do botão [Products] da NavBar
     */
    get btnProductsMenu() { return $(`${buttonBase.btnMenu = 2}`) }

    /**
     * Mapeamento do botão [Cart] da NavBar
     */
    get btnCartMenu() { return $(`${buttonBase.btnMenu = 3}`) }

    /**
     * Mapeamento do botão [Signup/Login] da NavBar
     */
    get btnLoginMenu() { return $(`${buttonBase.btnMenu = 4}`) }
}