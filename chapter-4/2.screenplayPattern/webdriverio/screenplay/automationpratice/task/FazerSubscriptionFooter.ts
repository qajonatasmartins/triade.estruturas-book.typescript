import { Task, the } from '@serenity-js/core'
import { Click, Enter, Navigate, Scroll } from '@serenity-js/web'
import { inputs } from '@/ui/input'
import { buttons } from '@/ui/button'

/**
 * Task para fazer subscription no footer (preenche email + clica Subscribe)
 * @param email - Email para subscription
 */
export const FazerSubscriptionFooter = (email: string) =>
    Task.where(
        the`#actor faz a subscription no footer com email ${email}`,
        Navigate.to(`${process.env.URL}`),
        Scroll.to(inputs.subscriptionFooter.emailSubscriptionInput),
        Enter.theValue(email).into(inputs.subscriptionFooter.emailSubscriptionInput),
        Click.on(buttons.subscriptionFooter.subscribeButton)
    )
