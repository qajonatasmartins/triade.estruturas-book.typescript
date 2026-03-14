import { actorCalled } from '@serenity-js/core'
import { Ensure, equals } from '@serenity-js/assertions'
import { actors } from '@/screenplay/automationpratice/actor/actors'
import { FazerSubscriptionFooter } from '@/screenplay/automationpratice/task/FazerSubscriptionFooter'
import { mensagemSucessoFooter } from '@/screenplay/automationpratice/question/MensagemSucessoFooter'
import { ct2 } from '@/data/footer.data'
import { productName } from '@/data/global.data'

describe(productName, () => {
    it('[CT-02] - Validar o cadastro de e-mail na Subscription com sucesso', async () => {
        await actorCalled(actors.ALICE).attemptsTo(
            FazerSubscriptionFooter(ct2.email),
            Ensure.that(mensagemSucessoFooter(), equals(ct2.message))
        )
    })
})
