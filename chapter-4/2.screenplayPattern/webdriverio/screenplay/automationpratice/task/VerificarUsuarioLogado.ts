import { AssertionError, Task, the } from '@serenity-js/core'
import { Ensure, equals } from '@serenity-js/assertions'
import { nomeDoUsuarioLogado } from '@/questions/NomeDoUsuarioLogado'

/**
 * Task que verifica se o usuário está logado (elemento visível e nome esperado).
 * Usa a Question nomeDoUsuarioLogado internamente - padrão: Task compõe Question + Ensure.
 * Mensagens de erro personalizadas para facilitar o debug.
 *
 * @param expectedUserName - Nome do usuário esperado após o login
 * @returns Task executável pelo ator
 */
export const VerificarUsuarioLogado = (expectedUserName: string) =>
    Task.where(
        the`#actor está com o usuário ${expectedUserName} logado.`,
        Ensure.that(nomeDoUsuarioLogado(), equals(expectedUserName))
            .otherwiseFailWith(AssertionError, "O nome do usuário exibido não confere com o esperado.")
    )