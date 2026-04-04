import { createAccountBuilder } from '@/core-api/src/constants'
import { ct05 } from '@data/login/account/account.data'
import { accountBusiness, registerFlows, successMessagesQuestions } from '@/constants'
import { allureHelpers } from '@/core-web/constants'
import { feature, productName, severity } from '@data/global.data'

describe(productName, () => {

    it('[CT-05] - Cadastrar uma conta na plataforma', async () => {
        allureHelpers.addAllureReportParameters(feature.account, severity.critical, "@regression", `${process.env.TEST_CASE_URL}/5`)
        /** Arrange */
        const account = createAccountBuilder
            .withName(ct05().name)
            .build()
        /** Act */
        const signup = ct05().user(account)
        await registerFlows.registerAccount(signup)
        /** Assert */
        await successMessagesQuestions.whatIsTheTitleSuccessOfDeleteOrCreateAccount(ct05().title)
        await successMessagesQuestions.whatIsTheFirstParagraphSuccessOfDeleteOrCreateAccount(ct05().firstParagraph)
        await successMessagesQuestions.whatIsTheSecondParagraphSuccessOfDeleteOrCreateAccount(ct05().secondParagraph)
        await accountBusiness.areAccountDataEqualToRegistration(account, ct05().paramsDefault)
    })
})