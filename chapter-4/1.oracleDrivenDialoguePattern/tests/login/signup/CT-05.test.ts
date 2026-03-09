import { createAccountBuilder } from '../../../core-api/src/constants'
import { ct05 } from '../../../data/login/account/account.data'
import { registerFlows, successQuestions } from '../../../constants'
import { allure } from '../../../core-web/constants'
import { feature, productName, severity } from '../../../data/global.data'

describe(productName, () => {

    it('[CT-05] - Cadastrar uma conta na plataforma', async () => {
        allure.addFeature(feature.account)
        allure.addSeverity(severity.critical)
        allure.addTag("@regression")
        allure.addLink(`${process.env.TEST_CASE_URL}/5`, "Test Case")
        /** Arrange */
        const account = createAccountBuilder
            .withName(ct05().name)
            .build()
        /** Act */
        const signup = ct05().user(account)
        await registerFlows.registerAccount(signup)
        /** Assert */
        await successQuestions.whatIsTheTitleSuccessOfDeleteOrCreateAccount(ct05().title)
        await successQuestions.whatIsTheFirstParagraphSuccessOfDeleteOrCreateAccount(ct05().firstParagraph)
        await successQuestions.whatIsTheSecondParagraphSuccessOfDeleteOrCreateAccount(ct05().secondParagraph)
    })
})