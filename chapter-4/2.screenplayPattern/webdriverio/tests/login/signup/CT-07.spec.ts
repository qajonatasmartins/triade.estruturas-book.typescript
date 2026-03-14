import { actorCalled } from '@serenity-js/core'
import { Ensure, equals } from '@serenity-js/assertions'
import { productName } from '@/data/global.data'
import { ct07 } from '@/data/login.data'
import { createAccountBuilder } from '@/builder/createAccount.builder'
import { actors } from '@/actors/actors'
import { ChamarAutomationExerciseAPI } from '@/ability/ChamarAutomationExerciseAPI'
import { AbrirLogin } from '@/tasks/AbrirLogin'
import { FazerSignup } from '@/tasks/FazerSignup'
import { CriarContaViaAPI } from '@/api/CriarContaViaAPI'
import { mensagemErroSignup } from '@/questions/MensagemErroSignup'

describe(productName, () => {
    it('[CT-07] - Validar mensagem de erro ao cadastrar com email existente', async () => {
        const account = createAccountBuilder.withName(ct07().user.name).build()
        await actorCalled(actors.API_USER)
            .whoCan(ChamarAutomationExerciseAPI.atBaseUrl(`${process.env.API_URL}`))
            .attemptsTo(CriarContaViaAPI(account))

        await actorCalled(actors.ALICE).attemptsTo(
            AbrirLogin(),
            FazerSignup(ct07().user.name, ct07().user.email),
            Ensure.that(mensagemErroSignup(), equals(ct07().message)),
        )
    })
})
