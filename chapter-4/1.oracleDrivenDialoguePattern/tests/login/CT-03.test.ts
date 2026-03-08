import { loginActions, navBarActions, navBarQuestions } from '../../constants'
import { allure } from '../../core-web/constants'
import { describeName, feature, severity } from '../../data/global.data'
import { ct01 } from '../../data/login/login.data'

describe(describeName.footer, async () => {

    before('Pré-condição: Logar na aplicação', async () => {
        /** Arrange */
        await navBarActions.openLogin()
        await loginActions.toLogin(ct01)
    })

    it('[CT-03] - Realizar logout na plataforma', async () => {
        allure.addFeature(feature.logout)
        allure.addSeverity(severity.trivial)
        allure.addTag("@regression")
        allure.addLink(`${process.env.TEST_CASE_URL}/3`, "Test Case")
        /**Act */
        await navBarActions.logout()
        /** Assert */
        await navBarQuestions.isLoginButtonDisplayedInNavbar()
    })
})