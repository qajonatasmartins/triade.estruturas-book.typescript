import { loginActions, navBarActions, navBarQuestions } from '@/constants'
import { allureHelpers } from '@/core-web/constants'
import { productName, feature, severity } from '@/data/global.data'
import { ct01 } from '@/data/login/login.data'

describe(productName, async () => {

    it('[CT-03] - Realizar logout na plataforma', async () => {
        allureHelpers.addAllureReportParameters(feature.logout, severity.trivial, "@regression", `${process.env.TEST_CASE_URL}/3`)
        /** Arrange */
        await navBarActions.openLogin()
        await loginActions.toLogin(ct01)
        /**Act */
        await navBarActions.logout()
        /** Assert */
        await navBarQuestions.isLoginButtonDisplayedInNavbar()
    })
})