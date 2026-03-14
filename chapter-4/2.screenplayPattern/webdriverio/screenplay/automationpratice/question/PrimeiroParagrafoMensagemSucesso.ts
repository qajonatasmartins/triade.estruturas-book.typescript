import { Text } from '@serenity-js/web'
import { labels } from '@/ui/label'

/**
 * Question que retorna o primeiro parágrafo da mensagem de sucesso.
 * Use com Ensure.that(primeiroParagrafoMensagemSucesso(), equals('...')) no spec ou em Tasks.
 */
export const primeiroParagrafoMensagemSucesso = () =>
    Text.of(labels.successPage.firstParagraph).describedAs('primeiro parágrafo da mensagem de sucesso')
