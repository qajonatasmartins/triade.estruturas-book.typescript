import { buttonBase } from '@/constants';

export default class LoginElements {

    //#region Login
    /**
     * Mapeamento do campo 'Email Address' do login to your account
     */
    get inputEmailAddressLogin() { return $('[data-qa="login-email"]'); }

    /**
     * Mapeamento do campo 'Password' do login to your account
     */
    get inputPassword() { return $('[data-qa="login-password"]'); }

    /**
     * Mapeamento do botão de [Login] do login to your account
     */
    get btnLogin() { return $(`[data-qa="login-button"]${buttonBase.btnSubmit()}`); }

    /**
     * Mapeamento da mensagem de erro de credenciais incorretas (Your email or password is incorrect!)
     */
    get lblLoginErrorMessage() { return $("input[data-qa='login-password'] + p"); }
    //#endregion

    //#region Signup
    /**
     * Mapeamento do campo 'Name' do New User Signup!
     */
    get inputName() { return $('[data-qa="signup-name"]'); }

    /**
     * Mapeamento do campo 'Email adress' do New User Signup!
     */
    get inputEmailAddressSignup() { return $('[data-qa="signup-email"]'); }

    /**
     * Mapeamento do botão de [Signup] do New User Signup!
     */
    get btnSignup() { return $(`[data-qa="signup-button"]${buttonBase.btnSubmit()}`); }

    /**
     * Mapeamento da mensagem de erro 'Email Address already exist!' do New User Signup!
     */
    get lblSignupErrorMessage() { return $('input[data-qa="signup-email"] ~ p'); }
    //#endregion
}
