import { browser } from '@wdio/globals'

/**
* Objeto de página principal contendo todos os métodos, seletores e funcionalidades
* que são compartilhados entre todos os objetos de página
*/
export default class Page {

    /**
    * Abre uma subpágina da página
    * @param path caminho da subpágina (ex: /caminho/para/pagina.html)
    */
    public open(path: string) {
        return browser.url(`https://the-internet.herokuapp.com/${path}`)
    }
}
