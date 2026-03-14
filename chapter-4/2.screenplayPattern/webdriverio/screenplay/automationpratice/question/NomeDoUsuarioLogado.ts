import { Text } from '@serenity-js/web'
import { labels } from '@/ui/label'

/**
 * Question que retorna o nome do usuário logado exibido na interface.
 * Use com Ensure.that(nomeDoUsuarioLogado(), equals('João')) no spec ou em Tasks.
 *
 * No Serenity/JS, Questions DESCREVEM como obter um valor; as asserções
 * são feitas com Ensure.that(Question, Expectation).
 *
 * @returns Question<string> - o texto do label de usuário logado
 */
export const nomeDoUsuarioLogado = () =>
    Text.of(labels.navBar.loggedIn).describedAs('nome do usuário logado')
