import { loginActions, loginQuestions, navBarActions } from '@/constants'
import { allure } from '@/core-web/constants'
import { productName, feature, severity } from '@/data/global.data'
import { ct06 } from '@/data/login/login.data'

describe(productName, async () => {

    it('[CT-06] - Validar mensagem de erro ao informar credenciais de login incorretas', async () => {
        allure.addFeature(feature.login)
        allure.addSeverity(severity.minor)
        allure.addTag("@regression")
        allure.addLink(`${process.env.TEST_CASE_URL}/6`, "Test Case")
        /** Arrange */
        await navBarActions.openLogin()
        /** Act */
        await loginActions.toLogin(ct06)
        /** Assert */
        await loginQuestions.whatIsTheLoginErrorMessage(ct06.message)
    })
})
