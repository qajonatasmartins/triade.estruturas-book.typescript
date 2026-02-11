import { Locator, type Page } from '@playwright/test';
import { BasePage } from './page.js';

/**
 * sub página contendo seletores e métodos específicos para uma página específica
 */
class SecurePage extends BasePage {
    readonly flashAlert: Locator;

    constructor(page: Page) {
        super(page);
        /** Define o seletor para o elemento flashAlert */
        this.flashAlert = page.locator('#flash');
    }
}

export default SecurePage;
