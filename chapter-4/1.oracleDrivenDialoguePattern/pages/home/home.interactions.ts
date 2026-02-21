export default class HomeInteractions {

    private stepIndicator

    /**
     * Mapeamento do elemento do botão [<] do carrossel
     */
    get btnLeftCarousel() { return $('#slider-carousel .fa-angle-left') }

    /**
     * Mapeamento do elemento do botão [>] do carrossel
     */
    get btnRightCarousel() { return $('#slider-carousel .fa-angle-right') }

    /**
     * Mapeamento do ícone de step (*) do carrossel
     */
    set icoStepIndicator(step: string) { this.stepIndicator = $(`.carousel-indicators li[data-slide-to="${step}"]`) }
    get icoStepIndicator() { return this.stepIndicator }

}
