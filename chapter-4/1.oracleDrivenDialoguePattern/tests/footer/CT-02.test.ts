import { footerActions, footerQuestions } from '../../constants'
import { describeName } from '../../data/global.data'
import { ct2 } from '../../data/footer/footer.data'

describe(describeName.footer, async () => {

    it('[CT-02] -  Validar o cadastro de e-mail na Subscription com sucesso', async () => {
        /** Arrange */
        await footerActions.doSubscription(ct2.email)
        /** Assert */
        await footerQuestions.wasTheSuccessMessageDisplayed(ct2.message)
    })
})