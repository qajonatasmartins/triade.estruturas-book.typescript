import { Duration, Task, the, Wait } from '@serenity-js/core'
import { Click, isVisible } from '@serenity-js/web'
import { buttons } from '@/ui/button'

/**
 * Task para realizar logout na plataforma (clica no menu Logout)
 */
export const FazerLogout = () =>
    Task.where(
        the`#actor realiza logout`,
        Wait.until(buttons.menu.logoutMenu, isVisible()).pollingEvery(Duration.ofSeconds(1)),
        Click.on(buttons.menu.logoutMenu)
    )
