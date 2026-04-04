import { footerActions, footerQuestions } from '@/constants'
import { feature, productName, severity } from '@data/global.data'
import { ct2 } from '@data/footer/footer.data'
import { allureHelpers } from '@/core-web/constants'

describe(productName, async () => {

    it('[CT-02] -  Validar o cadastro de e-mail na Subscription com sucesso', async () => {
        allureHelpers.addAllureReportParameters(feature.footer, severity.normal, "@regression", `${process.env.TEST_CASE_URL}/2`)
        /** Arrange & Act */
        await footerActions.doSubscription(ct2.email)
        /** Assert */
        await footerQuestions.wasTheSuccessMessageDisplayed(ct2.message)
    })
})