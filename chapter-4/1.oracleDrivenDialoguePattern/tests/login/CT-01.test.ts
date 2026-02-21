import { loginActions, navBarActions, navBarQuestions } from '../../constants'
import { describeName } from '../../data/global.data'
import { ct01 } from '../../data/login/login.data'

describe(describeName.footer, async () => {

    it('[CT-01] -  Realizar login com sucesso na plataforma', async () => {
        /** Arrange */
        await navBarActions.openLogin()
        await loginActions.toLogin(ct01)
        /** Assert */
        await navBarQuestions.whatIsTheLoggedInUsersName(ct01.userName)
    })
})