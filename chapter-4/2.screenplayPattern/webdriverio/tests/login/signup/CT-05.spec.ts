import { actorCalled } from '@serenity-js/core'
import { Ensure, equals } from '@serenity-js/assertions'
import { productName } from '@/data/global.data'
import { ct05 } from '@/data/account.data'
import { createAccountBuilder } from '@/builder/createAccount.builder'
import { actors } from '@/actors/actors'
import { ChamarAutomationExerciseAPI } from '@/ability/ChamarAutomationExerciseAPI'
import { CadastrarConta } from '@/tasks/CadastrarConta'
import { ValidarDadosConta } from '@/api/ValidarDadosConta'
import { tituloMensagemSucesso } from '@/questions/TituloMensagemSucesso'
import { primeiroParagrafoMensagemSucesso } from '@/questions/PrimeiroParagrafoMensagemSucesso'
import { segundoParagrafoMensagemSucesso } from '@/questions/SegundoParagrafoMensagemSucesso'

describe(productName, () => {
    it('[CT-05] - Cadastrar uma conta na plataforma', async () => {
        const account = createAccountBuilder.withName(ct05().name).build()

        await actorCalled(actors.ALICE).attemptsTo(
            CadastrarConta(ct05().user(account)),
            Ensure.that(tituloMensagemSucesso(), equals(ct05().title)),
            Ensure.that(primeiroParagrafoMensagemSucesso(), equals(ct05().firstParagraph)),
            Ensure.that(segundoParagrafoMensagemSucesso(), equals(ct05().secondParagraph)),
        )

        await actorCalled(actors.API_USER)
            .whoCan(ChamarAutomationExerciseAPI.atBaseUrl(`${process.env.API_URL}`))
            .attemptsTo(ValidarDadosConta(account))
    })
})
