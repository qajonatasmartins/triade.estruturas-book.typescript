import { actorCalled } from '@serenity-js/core'
import { Ensure, equals } from '@serenity-js/assertions'
import { actors } from '@/actors/actors'
import { FazerLogin } from '@/tasks/FazerLogin'
import { mensagemErroLogin } from '@/questions/MensagemErroLogin'
import { ct06 } from '@/data/login.data'
import { productName } from '@/data/global.data'

describe(productName, () => {
    it('[CT-06] - Validar mensagem de erro ao informar credenciais de login incorretas', async () => {
        await actorCalled(actors.ALICE).attemptsTo(
            FazerLogin(ct06.email, ct06.password),
            Ensure.that(mensagemErroLogin(), equals(ct06.message))
        )
    })
})
