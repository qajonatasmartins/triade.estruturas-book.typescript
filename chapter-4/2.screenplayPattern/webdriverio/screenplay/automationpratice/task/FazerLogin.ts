import { Activity, Task, the } from '@serenity-js/core'
import { Click, Enter } from '@serenity-js/web'
import { inputs } from '@/ui/input'
import { buttons } from '@/ui/button'
import { AbrirLogin } from '@/tasks/AbrirLogin'

/**
 * Task para fazer login no site Automation Exercise
 * @param email - Email do usuário
 * @param password - Senha do usuário
 * @returns Task para fazer login no site Automation Exercise
 */
export const FazerLogin = (email: string, password: string) => {
    const activities: Activity[] = [
        AbrirLogin(),
        ...preencherEmailLogin(email),
        ...preencherSenhaLogin(password),
        ...clicarBotaoLogin(),
    ]
    return Task.where(the`#actor faz o login com o email ${email} e a senha ${password}.`, ...activities)
}

/**
 * Preenche o campo de email do login
 * @param email - Email do usuário
 * @returns Activity para preencher o campo de email do login
 */
const preencherEmailLogin = (email: string) => {
    return [
        Enter.theValue(email).into(inputs.signupLoginForm.login.emailInput),
    ]
}

/**
 * Preenche o campo de senha do login
 * @param password - Senha do usuário
 * @returns Activity para preencher o campo de senha do login
 */
const preencherSenhaLogin = (password: string) => {
    return [
        Enter.theValue(password).into(inputs.signupLoginForm.login.passwordInput),
    ]
}

/**
 * Clica no botão de login
 * @returns Activity para clicar no botão de login
 */
const clicarBotaoLogin = () => {
    return [
        Click.on(buttons.signupLoginForm.login.loginButton),
    ]
}