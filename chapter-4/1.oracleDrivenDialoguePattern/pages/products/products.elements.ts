import { $ } from '@wdio/globals'

export default class ProductsElements {

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
