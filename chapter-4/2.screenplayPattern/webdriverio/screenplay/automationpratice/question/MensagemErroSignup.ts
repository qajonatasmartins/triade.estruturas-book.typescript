import { Scroll, Text } from '@serenity-js/web'
import { inputs } from '@/ui/input'

/**
 * Question que retorna o texto da mensagem de erro de email já existente no signup.
 * Use com Ensure.that(mensagemErroSignup(), equals('...')) no spec ou em Tasks.
 */
export const mensagemErroSignup = () => {
    Scroll.to(inputs.signupLoginForm.signup.signupErrorMessage)
    return Text.of(inputs.signupLoginForm.signup.signupErrorMessage).describedAs('mensagem de erro de signup')
}
