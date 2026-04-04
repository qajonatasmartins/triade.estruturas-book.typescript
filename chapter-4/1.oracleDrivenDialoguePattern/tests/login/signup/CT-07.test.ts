import { createAccountBuilder } from '@/core-api/src/constants'
import postCreateAccountService from '@/core-api/src/service/account/postCreateAccount.service'
import { ct07 } from '@data/login/login.data'
import { loginActions, loginQuestions, navBarActions } from '@/constants'
import { allureHelpers } from '@/core-web/constants'
import { feature, productName, severity } from '@data/global.data'

describe(productName, () => {
    it('[CT-07] - Validar mensagem de erro ao cadastrar com email existente', async () => {
        allureHelpers.addAllureReportParameters(feature.login, severity.trivial, "@regression", `${process.env.TEST_CASE_URL}/7`)
        /** Arrange */
        const account = createAccountBuilder.withName(ct07().user.name).build()
        await postCreateAccountService(account, ct07().paramsDefault)
        /** Act */
        await navBarActions.openLogin()
        await loginActions.toSignup(ct07().user)
        /** Assert */
        await loginQuestions.whatIsTheSignupErrorMessage(ct07().message)
    })
})
