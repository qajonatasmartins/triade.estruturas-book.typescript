import { Scroll, Text } from '@serenity-js/web'
import { inputs } from '@/ui/input'

/**
 * Question que retorna o texto da mensagem de erro de credenciais incorretas.
 * Use com Ensure.that(mensagemErroLogin(), equals('...')) no spec ou em Tasks.
 */
export const mensagemErroLogin = () => {
    Scroll.to(inputs.signupLoginForm.login.passwordErrorMessage)
    return Text.of(inputs.signupLoginForm.login.passwordErrorMessage).describedAs('mensagem de erro de login')
}
