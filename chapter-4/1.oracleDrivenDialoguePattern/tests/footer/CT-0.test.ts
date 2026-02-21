import { footerActions, footerQuestions } from '../../constants'
import { describeName } from '../../data/global.data'
import { ct0 } from '../../data/footer/footer.data'

describe(describeName.footer, async () => {

    it('[CT-000] -  Validar o cadastro de e-mail na Subscription com sucesso', async () => {
        /** Arrange */
        await footerActions.doSubscription(ct0.email)
        /** Assert */
        await footerQuestions.wasTheSuccessMessageDisplayed(ct0.message)
    })
})