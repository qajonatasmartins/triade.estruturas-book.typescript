import { Task, the } from '@serenity-js/core'
import { Click } from '@serenity-js/web'
import { buttons } from '@/ui/button'

/**
 * Task para deletar a conta na plataforma (clica no menu Delete Account)
 */
export const DeletarConta = () =>
    Task.where(
        the`#actor deleta a conta`,
        Click.on(buttons.menu.deleteAccountMenu)
    )
