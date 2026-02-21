import { labelBase } from "../../../constants"

export default class FooterElements {

    /**
     * Mapeamento do campo 'Your email address' do footer de Subscribe
     */
    get inputEmailAddressSubscription() { return $(`#susbscribe_email`) }

    /**
     * Mapeamento do botão de confirmar a Subscribe
     */
    get btnSubscribe() { return $('#subscribe') }

    /**
     * Mapeamento do alerta de sucesso do footer de Subscribe
     */
    get lblAlertSuccess() { return $(`#success-subscribe ${labelBase.lblAlertSuccess}`) }
}