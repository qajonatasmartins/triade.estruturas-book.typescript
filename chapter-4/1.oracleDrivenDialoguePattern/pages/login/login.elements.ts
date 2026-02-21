import { buttonBase } from '../../constants';

export default class LoginElements {

    //#region Login
    /**
     * Mapeamento do campo 'Email Address' do login to your account
     */
    public get inputEmailAddressLogin() { return $('[data-qa="login-email"]'); }

    /**
     * Mapeamento do campo 'Password' do login to your account
     */
    public get inputPassword() { return $('[data-qa="login-password"]'); }

    /**
     * Mapeamento do botão de [Login] do login to your account
     */
    public get btnLogin() { return $(`[data-qa="login-button"]${buttonBase.btnSubmit()}`); }
    //#endregion

    //#region Signup
    /**
     * Mapeamento do campo 'Name' do New User Signup!
     */
    public get inputName() { return $('[data-qa="signup-name"]'); }

    /**
     * Mapeamento do campo 'Email adress' do New User Signup!
     */
    public get inputEmailAddressSignup() { return $('[data-qa="signup-email"]'); }

    /**
     * Mapeamento do botão de [Signup] do New User Signup!
     */
    public get btnSignup() { return $(`[data-qa="signup-button"]${buttonBase.btnSubmit()}`); }
    //#endregion
}
