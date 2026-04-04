import { loginActions, navBarActions, navBarQuestions } from '@/constants'
import { allureHelpers } from '@/core-web/constants'
import { productName, feature, severity } from '@data/global.data'
import { ct01 } from '@data/login/login.data'

describe(productName, async () => {

    it('[CT-01] - Realizar login com sucesso na plataforma', async () => {
        allureHelpers.addAllureReportParameters(feature.login, severity.critical, "@smoke", `${process.env.TEST_CASE_URL}/1`)
        /** Arrange */
        await navBarActions.openLogin()
        /** Act */
        await loginActions.toLogin(ct01)
        /** Assert */
        await navBarQuestions.whatIsTheLoggedInUsersName(ct01.userName)
    })
})
