import { Task, the } from '@serenity-js/core'
import { Click, Navigate } from '@serenity-js/web'
import { buttons } from '@/ui/button'

/**
 * Task para abrir a página de login (navega + clica no menu Signup/Login)
 */
export const AbrirLogin = () =>
    Task.where(
        the`#actor navega para a página de login`,
        Navigate.to(`${process.env.URL}`),
        Click.on(buttons.menu.signupLoginFormMenu)
    )
