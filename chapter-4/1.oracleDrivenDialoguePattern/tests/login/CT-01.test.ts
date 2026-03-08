import { loginActions, navBarActions, navBarQuestions } from '../../constants'
import { allure } from '../../core-web/constants'
import { describeName, feature, severity } from '../../data/global.data'
import { ct01 } from '../../data/login/login.data'

describe(describeName.footer, async () => {

    before('Pré-condição: Abrir a tela de login', async () => {
        /** Arrange */
        await navBarActions.openLogin()
    })

    it('[CT-01] - Realizar login com sucesso na plataforma', async () => {
        allure.addFeature(feature.login)
        allure.addSeverity(severity.critical)
        allure.addTag("@smoke")
        allure.addLink(`${process.env.TEST_CASE_URL}/1`, "Test Case")
        /** Act */
        await loginActions.toLogin(ct01)
        /** Assert */
        await navBarQuestions.whatIsTheLoggedInUsersName(ct01.userName)
    })
})