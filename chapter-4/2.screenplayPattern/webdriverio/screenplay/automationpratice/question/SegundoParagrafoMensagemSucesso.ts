import { Text } from '@serenity-js/web'
import { labels } from '@/ui/label'

/**
 * Question que retorna o segundo parágrafo da mensagem de sucesso.
 * Use com Ensure.that(segundoParagrafoMensagemSucesso(), equals('...')) no spec ou em Tasks.
 */
export const segundoParagrafoMensagemSucesso = () =>
    Text.of(labels.successPage.secondParagraph).describedAs('segundo parágrafo da mensagem de sucesso')
