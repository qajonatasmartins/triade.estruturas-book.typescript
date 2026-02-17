export default class ButtonBase {

    /**
     * Mapeamento base para os botões da nav bar
     * @param index Índice do botão na nav bar
     * @returns Elemento do botão
     */
    public btnMenu(index: number) { return $(`.shop-menu .navbar-nav li:nth-child(${index})`); }

}