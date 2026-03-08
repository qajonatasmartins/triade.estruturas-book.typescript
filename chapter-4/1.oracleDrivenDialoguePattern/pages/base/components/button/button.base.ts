export default class ButtonBase {

    /**
     * Mapeamento base para os botões da nav bar
     * @param index Índice do botão na nav bar
     * @returns Elemento do botão
     */
    public menuElement(index) { return `.shop-menu .navbar-nav li:nth-child(${index})` }

    /**
     * Mapeamento base do botão de submit (envio de formulário)
     */
    public btnSubmit() { return `[type="submit"]` }


    /**
     * Mapeamento base do botão de continue
     */
    public btnContinue() { return `[data-qa='continue-button']` }

}