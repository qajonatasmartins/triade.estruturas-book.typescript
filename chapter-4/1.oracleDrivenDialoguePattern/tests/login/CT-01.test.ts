import { loginActions, navBarQuestions } from '../../constants'
import { allure } from '../../core-web/constants'
import { describeName, feature, severity } from '../../data/global.data'
import { ct01 } from '../../data/login/login.data'

describe(describeName.footer, async () => {

    it('[CT-01] -  Realizar login com sucesso na plataforma', async () => {
        allure.addFeature(feature.login)
        allure.addSeverity(severity.critical)
        allure.addTag("@smoke")
        /** Arrange */
        await loginActions.toLogin(ct01)
        /** Assert */
        await navBarQuestions.whatIsTheLoggedInUsersName(ct01.userName)
    })
})