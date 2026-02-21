export default class ButtonBase {

    private menuIndex

    /**
     * Mapeamento base para os botões da nav bar
     * @param index Índice do botão na nav bar
     * @returns Elemento do botão
     */
    set btnMenu(index: number) { this.menuIndex = `.shop-menu .navbar-nav li:nth-child(${index})` }
    get btnMenu() { return this.menuIndex }

    /**
     * Mapeamento base do botão de submit (envio de formulário)
     */
    get btnSubmit() { return `button[type="submit"]` }



}