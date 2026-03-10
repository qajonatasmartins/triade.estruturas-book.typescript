import { createAccountBuilder } from '../../../core-api/src/constants'
import { ct04 } from '../../../data/login/account/account.data'
import postCreateAccountService from '../../../core-api/src/service/account/postCreateAccount.service'
import { loginActions, navBarActions, navBarQuestions, successMessagesQuestions } from '../../../constants'
import { allure } from '../../../core-web/constants'
import { feature, productName, severity } from '../../../data/global.data'

describe(productName, () => {

    it('[CT-04] - Deletar uma conta na plataforma', async () => {
        allure.addFeature(feature.account)
        allure.addSeverity(severity.normal)
        allure.addTag("@regression")
        allure.addLink(`${process.env.TEST_CASE_URL}/4`, "Test Case")
        /** Arrange */
        const account = createAccountBuilder
            .withName(ct04().name)
            .build()
        await postCreateAccountService(account, ct04().paramsDefault)
        /** Act */
        await navBarActions.openLogin()
        await loginActions.toLogin(account)
        await navBarActions.deleteAccount()
        /** Assert */
        await navBarQuestions.isLoginButtonDisplayedInNavbar()
        await successMessagesQuestions.isContinueButtonDisplayed()
        await successMessagesQuestions.whatIsTheTitleSuccessOfDeleteOrCreateAccount(ct04().title)
        await successMessagesQuestions.whatIsTheFirstParagraphSuccessOfDeleteOrCreateAccount(ct04().firstParagraph)
        await successMessagesQuestions.whatIsTheSecondParagraphSuccessOfDeleteOrCreateAccount(ct04().secondParagraph)
    })
})