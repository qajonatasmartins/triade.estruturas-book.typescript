import { Task, the } from '@serenity-js/core'
import { Click, Enter } from '@serenity-js/web'
import { AbrirLogin } from '@/tasks/AbrirLogin'
import { inputs } from '@/ui/input'
import { buttons } from '@/ui/button'

/**
 * Task para iniciar o signup: nome + email na página de login e clicar em Signup
 */
export const FazerSignup = (name: string, email: string) =>
    Task.where(
        the`#actor inicia o signup com nome ${name} e email ${email}.`,
        AbrirLogin(),
        Enter.theValue(name).into(inputs.signupLoginForm.signup.nameInput),
        Enter.theValue(email).into(inputs.signupLoginForm.signup.emailInput),
        Click.on(buttons.signupLoginForm.signup.signupButton),
    )
