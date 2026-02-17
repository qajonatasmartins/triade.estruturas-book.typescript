import { expect, Locator, type Page } from '@playwright/test';

/**
* Objeto de página principal contendo todos os métodos, seletores e funcionalidades
* que são compartilhados entre todos os objetos de página
*/
export class BasePage {

    readonly page: Page;

    constructor(page: Page) {
        this.page = page;
    }

    /**
    * Abre uma subpágina da página
    * @param path caminho da subpágina (ex: /caminho/para/pagina.html)
    */
    public open(path: string) {
        return this.page.goto(`${process.env.URL}/${path}`)
    }

    // ============================================
    // MÉTODOS DE NAVEGAÇÃO
    // ============================================

    /**
   * Recarrega a página atual
   */
    async reload(): Promise<void> {
        await this.page.reload({ waitUntil: 'domcontentloaded' });
    }

    /**
     * Volta para página anterior
     */
    async goBack(): Promise<void> {
        await this.page.goBack({ waitUntil: 'domcontentloaded' });
    }

    /**
     * Avança para próxima página (histórico)
     */
    async goForward(): Promise<void> {
        await this.page.goForward({ waitUntil: 'domcontentloaded' });
    }

    // ============================================
    // MÉTODOS DE ESPERA (WAIT)
    // ============================================

    /**
     * Espera um elemento estar visível
     */
    async waitForElement(locator: Locator, timeout: number): Promise<void> {
        await locator.waitFor({ state: 'visible', timeout });
    }

    /**
     * Espera um elemento desaparecer
     */
    async waitForElementToDisappear(locator: Locator, timeout: number): Promise<void> {
        await locator.waitFor({ state: 'hidden', timeout });
    }

    /**
     * Espera pela URL conter determinado texto
     */
    async waitForUrl(urlPart: string, timeout: number): Promise<void> {
        await this.page.waitForURL(`**/${urlPart}**`, { timeout });
    }

    /**
     * Espera por um tempo específico (use com moderação!)
     */
    async wait(milliseconds: number): Promise<void> {
        await this.page.waitForTimeout(milliseconds);
    }

    /**
     * Espera a página carregar completamente
     */
    async waitForPageLoad(): Promise<void> {
        await this.page.waitForLoadState('networkidle');
    }

    // ============================================
    // MÉTODOS DE INTERAÇÃO COM ELEMENTOS
    // ============================================

    /**
     * Clica em um elemento com retry automático
     */
    async click(locator: Locator, options?: { force?: boolean; timeout?: number }): Promise<void> {
        await locator.click(options);
    }

    /**
     * Duplo clique
     */
    async doubleClick(locator: Locator): Promise<void> {
        await locator.dblclick();
    }

    /**
     * Clique com botão direito
     */
    async rightClick(locator: Locator): Promise<void> {
        await locator.click({ button: 'right' });
    }

    /**
     * Preenche um campo de texto
     */
    async fill(locator: Locator, text: string): Promise<void> {
        await locator.fill(text);
    }

    /**
     * Digita texto com delay (simula digitação humana)
     */
    async type(locator: Locator, text: string, delay: number): Promise<void> {
        await locator.type(text, { delay });
    }

    /**
     * Limpa um campo de texto
     */
    async clear(locator: Locator): Promise<void> {
        await locator.clear();
    }

    /**
     * Seleciona opção em dropdown por texto visível
     */
    async selectByText(locator: Locator, text: string): Promise<void> {
        await locator.selectOption({ label: text });
    }

    /**
     * Seleciona opção em dropdown por valor
     */
    async selectByValue(locator: Locator, value: string): Promise<void> {
        await locator.selectOption({ value });
    }

    /**
     * Marca/desmarca checkbox
     */
    async check(locator: Locator, shouldCheck: boolean): Promise<void> {
        shouldCheck ? await locator.check() : await locator.uncheck();
    }

    /**
     * Hover sobre elemento
     */
    async hover(locator: Locator): Promise<void> {
        await locator.hover();
    }

    /**
     * Foca em um elemento
     */
    async focus(locator: Locator): Promise<void> {
        await locator.focus();
    }

    // ============================================
    // MÉTODOS DE OBTENÇÃO DE INFORMAÇÕES
    // ============================================

    /**
     * Obtém texto de um elemento
     */
    async getText(locator: Locator): Promise<string> {
        return await locator.textContent() ?? '';
    }

    /**
     * Obtém valor de um atributo
     */
    async getAttribute(locator: Locator, attribute: string): Promise<string | null> {
        return await locator.getAttribute(attribute);
    }

    /**
     * Obtém valor de um input
     */
    async getValue(locator: Locator): Promise<string> {
        return await locator.inputValue();
    }

    /**
     * Verifica se elemento está visível
     */
    async isVisible(locator: Locator): Promise<boolean> {
        return await locator.isVisible();
    }

    /**
     * Verifica se elemento está habilitado
     */
    async isEnabled(locator: Locator): Promise<boolean> {
        return await locator.isEnabled();
    }

    /**
     * Verifica se checkbox/radio está marcado
     */
    async isChecked(locator: Locator): Promise<boolean> {
        return await locator.isChecked();
    }

    /**
     * Conta quantos elementos correspondem ao locator
     */
    async getElementCount(locator: Locator): Promise<number> {
        return await locator.count();
    }

    /**
     * Obtém URL atual
     */
    getCurrentUrl(): string {
        return this.page.url();
    }

    /**
     * Obtém título da página
     */
    async getTitle(): Promise<string> {
        return await this.page.title();
    }

    // ============================================
    // MÉTODOS DE SCREENSHOT E DEBUGGING
    // ============================================

    /**
     * Tira screenshot da página inteira
     */
    async takeScreenshot(path: string): Promise<void> {
        await this.page.screenshot({ path, fullPage: true });
    }

    /**
     * Tira screenshot de um elemento específico
     */
    async takeElementScreenshot(locator: Locator, path: string): Promise<void> {
        await locator.screenshot({ path });
    }

    // ============================================
    // MÉTODOS DE SCROLL
    // ============================================

    /**
     * Faz scroll até um elemento
     */
    async scrollToElement(locator: Locator): Promise<void> {
        await locator.scrollIntoViewIfNeeded();
    }

    /**
     * Faz scroll até o topo da página
     */
    async scrollToTop(): Promise<void> {
        await this.page.evaluate(() => window.scrollTo(0, 0));
    }

    /**
     * Faz scroll até o final da página
     */
    async scrollToBottom(): Promise<void> {
        await this.page.evaluate(() => window.scrollTo(0, document.body.scrollHeight));
    }

    /**
     * Faz scroll por pixels
     */
    async scrollBy(x: number, y: number): Promise<void> {
        await this.page.evaluate(({ x, y }) => window.scrollBy(x, y), { x, y });
    }

    // ============================================
    // MÉTODOS DE JAVASCRIPT/BROWSER
    // ============================================

    /**
     * Executa JavaScript customizado
     */
    async executeScript<T>(script: string, ...args: any[]): Promise<T> {
        return await this.page.evaluate(script, ...args);
    }

    /**
     * Abre nova aba
     */
    async openNewTab(url?: string): Promise<Page> {
        const newPage = await this.page.context().newPage();
        if (url) {
            await newPage.goto(url);
        }
        return newPage;
    }

    /**
     * Fecha a aba atual
     */
    async closeCurrentTab(): Promise<void> {
        await this.page.close();
    }

    /**
     * Troca entre abas
     */
    async switchToTab(index: number): Promise<Page> {
        const pages = this.page.context().pages();
        return pages[index];
    }

    /**
     * Aceita alert/confirm
     */
    async acceptDialog(): Promise<void> {
        this.page.on('dialog', async (dialog) => {
            await dialog.accept();
        });
    }

    /**
     * Cancela alert/confirm
     */
    async dismissDialog(): Promise<void> {
        this.page.on('dialog', async (dialog) => {
            await dialog.dismiss();
        });
    }

    /**
     * Obtém texto de alert/confirm
     */
    async getDialogMessage(): Promise<string> {
        return new Promise((resolve) => {
            this.page.once('dialog', async (dialog) => {
                const message = dialog.message();
                await dialog.accept();
                resolve(message);
            });
        });
    }

    // ============================================
    // MÉTODOS DE COOKIES E STORAGE
    // ============================================

    /**
     * Obtém todos os cookies
     */
    async getCookies() {
        return await this.page.context().cookies();
    }

    /**
     * Define um cookie
     */
    async setCookie(name: string, value: string, options?: any): Promise<void> {
        await this.page.context().addCookies([{
            name,
            value,
            domain: new URL(this.page.url()).hostname,
            path: '/',
            ...options
        }]);
    }

    /**
     * Remove todos os cookies
     */
    async clearCookies(): Promise<void> {
        await this.page.context().clearCookies();
    }

    /**
     * Define item no localStorage
     */
    async setLocalStorage(key: string, value: string): Promise<void> {
        await this.page.evaluate(
            ({ key, value }) => localStorage.setItem(key, value),
            { key, value }
        );
    }

    /**
     * Obtém item do localStorage
     */
    async getLocalStorage(key: string): Promise<string | null> {
        return await this.page.evaluate(
            (key) => localStorage.getItem(key),
            key
        );
    }

    /**
     * Limpa localStorage
     */
    async clearLocalStorage(): Promise<void> {
        await this.page.evaluate(() => localStorage.clear());
    }

    // ============================================
    // MÉTODOS DE UPLOAD/DOWNLOAD
    // ============================================

    /**
     * Faz upload de arquivo
     */
    async uploadFile(locator: Locator, filePath: string | string[]): Promise<void> {
        await locator.setInputFiles(filePath);
    }

    /**
     * Aguarda e captura download
     */
    async downloadFile(triggerLocator: Locator): Promise<string> {
        const [download] = await Promise.all([
            this.page.waitForEvent('download'),
            triggerLocator.click()
        ]);
        const path = await download.path();
        return path ?? '';
    }

    // ============================================
    // MÉTODOS DE IFRAME
    // ============================================

    /**
     * Troca para iframe
     */
    async switchToIframe(selector: string): Promise<any> {
        const iframe = this.page.frameLocator(selector);
        return iframe;
    }

    // ============================================
    // MÉTODOS DE DRAG AND DROP
    // ============================================

    /**
     * Arrasta e solta elemento
     */
    async dragAndDrop(sourceLocator: Locator, targetLocator: Locator): Promise<void> {
        await sourceLocator.dragTo(targetLocator);
    }

    // ============================================
    // MÉTODOS DE ASSERTIONS AUXILIARES
    // ============================================

    /**
     * Verifica se está na URL esperada
     */
    async assertUrl(expectedUrl: string): Promise<void> {
        await expect(this.page).toHaveURL(expectedUrl);
    }

    /**
     * Verifica se URL contém texto
     */
    async assertUrlContains(urlPart: string): Promise<void> {
        await expect(this.page).toHaveURL(new RegExp(urlPart));
    }

    /**
     * Verifica título da página
     */
    async assertTitle(expectedTitle: string): Promise<void> {
        await expect(this.page).toHaveTitle(expectedTitle);
    }

    // ============================================
    // MÉTODOS DE NETWORK/API
    // ============================================

    /**
     * Intercepta requisição de rede
     */
    async interceptRequest(urlPattern: string, callback: (route: any) => void): Promise<void> {
        await this.page.route(urlPattern, callback);
    }

    /**
     * Aguarda por resposta de API específica
     */
    async waitForResponse(urlPattern: string | RegExp, timeout: number): Promise<any> {
        return await this.page.waitForResponse(urlPattern, { timeout });
    }

    /**
     * Aguarda por requisição de API específica
     */
    async waitForRequest(urlPattern: string | RegExp, timeout: number): Promise<any> {
        return await this.page.waitForRequest(urlPattern, { timeout });
    }

    // ============================================
    // MÉTODOS UTILITÁRIOS
    // ============================================

    /**
     * Gera texto aleatório
     */
    generateRandomText(length: number): string {
        return Math.random().toString(36).substring(2, length + 2);
    }

    /**
     * Gera email aleatório
     */
    generateRandomEmail(): string {
        const randomString = this.generateRandomText(8);
        return `test_${randomString}@example.com`;
    }

    /**
     * Formata data para padrão brasileiro
     */
    formatDateBR(date: Date): string {
        return date.toLocaleDateString('pt-BR');
    }

    /**
     * Retorna timestamp atual
     */
    getTimestamp(): string {
        return new Date().toISOString();
    }
}




