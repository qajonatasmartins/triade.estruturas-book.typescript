import { $ } from '@wdio/globals'
import Page from './page.js';

/**
 * sub página contendo seletores e métodos específicos para uma página específica
 */
class SecurePage extends Page {
    /**
     * define seletores usando métodos getter
     * @returns o elemento flashAlert
     */
    public get flashAlert() { return $('#flash'); }
}

export default new SecurePage();
