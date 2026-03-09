import { $ } from '@wdio/globals'

export default class ProductsElements {

    get inputUsername() {
        return $('#username');
    }

    get inputPassword() {
        return $('#password');
    }

    get btnSubmit() {
        return $('button[type="submit"]');
    }


}
