import { actorCalled } from '@serenity-js/core'
import { Ensure, equals, isTrue } from '@serenity-js/assertions'
import { productName } from '@/data/global.data'
import { ct04 } from '@/data/account.data'
import { createAccountBuilder } from '@/builder/createAccount.builder'
import { actors } from '@/actors/actors'
import { ChamarAutomationExerciseAPI } from '@/ability/ChamarAutomationExerciseAPI'
import { AbrirLogin } from '@/tasks/AbrirLogin'
import { FazerLogin } from '@/tasks/FazerLogin'
import { DeletarConta } from '@/tasks/DeletarConta'
import { CriarContaViaAPI } from '@/api/CriarContaViaAPI'
import { botaoLoginVisivel } from '@/questions/BotaoLoginVisivel'
import { botaoContinueVisivel } from '@/questions/BotaoContinueVisivel'
import { tituloMensagemSucesso } from '@/questions/TituloMensagemSucesso'
import { primeiroParagrafoMensagemSucesso } from '@/questions/PrimeiroParagrafoMensagemSucesso'
import { segundoParagrafoMensagemSucesso } from '@/questions/SegundoParagrafoMensagemSucesso'

describe(productName, () => {
    it('[CT-04] - Deletar uma conta na plataforma', async () => {
        const account = createAccountBuilder.withName(ct04().name).build()

        await actorCalled(actors.API_USER)
            .whoCan(ChamarAutomationExerciseAPI.atBaseUrl(process.env.API_URL ?? ''))
            .attemptsTo(CriarContaViaAPI(account))

        await actorCalled(actors.ALICE).attemptsTo(
            AbrirLogin(),
            FazerLogin(account.email, account.password),
            DeletarConta(),
            Ensure.that(botaoLoginVisivel(), isTrue()),
            Ensure.that(botaoContinueVisivel(), isTrue()),
            Ensure.that(tituloMensagemSucesso(), equals(ct04().title)),
            Ensure.that(primeiroParagrafoMensagemSucesso(), equals(ct04().firstParagraph)),
            Ensure.that(segundoParagrafoMensagemSucesso(), equals(ct04().secondParagraph)),
        )
    })
})
