import { actorCalled } from '@serenity-js/core'
import { Ensure, isTrue } from '@serenity-js/assertions'
import { actors } from '@/actors/actors'
import { FazerLogin } from '@/tasks/FazerLogin'
import { FazerLogout } from '@/tasks/FazerLogout'
import { botaoLoginVisivel } from '@/questions/BotaoLoginVisivel'
import { ct01 } from '@/data/login.data'
import { productName } from '@/data/global.data'

describe(productName, () => {
    it('[CT-03] - Realizar logout na plataforma', async () => {
        await actorCalled(actors.ALICE).attemptsTo(
            FazerLogin(ct01.email, ct01.password),
            FazerLogout(),
            Ensure.that(botaoLoginVisivel(), isTrue())
        )
    })
})
