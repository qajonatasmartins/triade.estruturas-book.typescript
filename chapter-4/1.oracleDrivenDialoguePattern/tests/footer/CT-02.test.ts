import { footerActions, footerQuestions } from '../../constants'
import { describeName, feature, severity } from '../../data/global.data'
import { ct2 } from '../../data/footer/footer.data'
import { allure } from '../../core-web/constants'

describe(describeName.footer, async () => {

    it('[CT-02] -  Validar o cadastro de e-mail na Subscription com sucesso', async () => {
        allure.addFeature(feature.footer)
        allure.addSeverity(severity.normal)
        allure.addTag("@regression")
        allure.addLink(`${process.env.TEST_CASE_URL}/2`, "Test Case")
        /** Arrange */
        await footerActions.doSubscription(ct2.email)
        /** Assert */
        await footerQuestions.wasTheSuccessMessageDisplayed(ct2.message)
    })
})