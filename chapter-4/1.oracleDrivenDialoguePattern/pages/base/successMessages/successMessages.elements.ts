import { buttonBase, labelBase } from "@/constants";

export default class SuccessMessagesElements {

    /**
     * Mapeamento do título de sucesso da página de sucesso (para exclusão ou criação de conta)
     */
    get lblTitleSuccessOfDeleteOrCreateAccount() { return $(`#form ${labelBase.lblTitle()}`) }

    /**
     * Mapeamento do texto de sucesso da página de sucesso (para exclusão ou criação de conta)
     */
    get lblFirstParagraphSuccessOfDeleteOrCreateAccount() { return $(`${labelBase.lblTitle()} + p`) }

    /**
     * Mapeamento do texto de sucesso da página de sucesso (para exclusão ou criação de conta)
     */
    get lblSecondParagraphSuccessOfDeleteOrCreateAccount() { return $(`${labelBase.lblTitle()} + p + p`) }

    /**
     * Mapeamento do botão de [Continue]
     */
    get btnContinue() { return $(`${buttonBase.btnContinue()}`) }
}