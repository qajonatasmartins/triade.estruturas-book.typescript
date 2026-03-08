import { createAccountBuilder } from '../../../core-api/src/constants'
import { ct04 } from '../../../data/login/account/account.data'
import postCreateAccountService from '../../../core-api/src/service/account/postCreateAccount.service'
import { loginActions, navBarActions, navBarQuestions, successQuestions } from '../../../constants'

describe('Account', () => {

    it('[CT-04] - Deletar uma conta na plataforma', async () => {
        const account = createAccountBuilder
            .withName(ct04().name)
            .build()
        /** Act */
        await postCreateAccountService(account, ct04().paramsDefault)
        await navBarActions.openLogin()
        await loginActions.toLogin(account)
        await navBarActions.deleteAccount()
        /** Assert */
        await navBarQuestions.isLoginButtonDisplayedInNavbar()
        await successQuestions.isContinueButtonDisplayed()
        await successQuestions.whatIsTheTitleSuccessOfDeleteOrCreateAccount(ct04().title)
        await successQuestions.whatIsTheFirstParagraphSuccessOfDeleteOrCreateAccount(ct04().firstParagraph)
        await successQuestions.whatIsTheSecondParagraphSuccessOfDeleteOrCreateAccount(ct04().secondParagraph)
    })
})