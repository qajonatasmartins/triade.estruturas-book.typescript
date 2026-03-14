import { actorCalled } from '@serenity-js/core'
import { actors } from '@/actors/actors'
import { FazerLogin } from '@/tasks/FazerLogin'
import { VerificarUsuarioLogado } from '@/tasks/VerificarUsuarioLogado'
import { ct01 } from '@/data/login.data'
import { productName } from '@/data/global.data'

describe(productName, () => {
    it('[CT-01] - Realizar login com sucesso na plataforma', async () => {
        await actorCalled(actors.ALICE).attemptsTo(
            FazerLogin(ct01.email, ct01.password),
            VerificarUsuarioLogado(ct01.userName),
        )
    })
})
