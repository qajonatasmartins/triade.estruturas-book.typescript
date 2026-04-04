import { loginActions, loginQuestions, navBarActions } from '@/constants'
import { allureHelpers } from '@/core-web/constants'
import { productName, feature, severity } from '@/data/global.data'
import { ct06 } from '@/data/login/login.data'

describe(productName, async () => {

    it('[CT-06] - Validar mensagem de erro ao informar credenciais de login incorretas', async () => {
        allureHelpers.addAllureReportParameters(feature.login, severity.minor, "@regression", `${process.env.TEST_CASE_URL}/6`)
        /** Arrange */
        await navBarActions.openLogin()
        /** Act */
        await loginActions.toLogin(ct06)
        /** Assert */
        await loginQuestions.whatIsTheLoginErrorMessage(ct06.message)
    })
})
