import { loginActions, navBarActions, navBarQuestions } from '../../constants'
import { allure } from '../../core-web/constants'
import { productName, feature, severity } from '../../data/global.data'
import { ct01 } from '../../data/login/login.data'

describe(productName, async () => {

    it('[CT-03] - Realizar logout na plataforma', async () => {
        allure.addFeature(feature.logout)
        allure.addSeverity(severity.trivial)
        allure.addTag("@regression")
        allure.addLink(`${process.env.TEST_CASE_URL}/3`, "Test Case")
        /** Arrange */
        await navBarActions.openLogin()
        await loginActions.toLogin(ct01)
        /**Act */
        await navBarActions.logout()
        /** Assert */
        await navBarQuestions.isLoginButtonDisplayedInNavbar()
    })
})