import { Text } from '@serenity-js/web'
import { labels } from '@/ui/label'

/**
 * Question que retorna o título da página de sucesso (criação/exclusão de conta).
 * Use com Ensure.that(tituloMensagemSucesso(), equals('...')) no spec ou em Tasks.
 */
export const tituloMensagemSucesso = () =>
    Text.of(labels.successPage.title).describedAs('título da mensagem de sucesso')
