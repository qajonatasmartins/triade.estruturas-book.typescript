import { $ } from '@wdio/globals'

export default class CartElements {

    public get inputUsername() {
        return $('#username');
    }

    public get inputPassword() {
        return $('#password');
    }

    public get btnSubmit() {
        return $('button[type="submit"]');
    }


}
