import { By, PageElement } from '@serenity-js/web'

export const checkboxes = {
    signupLoginForm: {
        signup: {
            checkMr: PageElement.located(By.css("div.clearfix label[for='id_gender1']"))
                .describedAs('o gênero "Mr."'),
            checkMrs: PageElement.located(By.css("div.clearfix label[for='id_gender2']"))
                .describedAs('o gênero "Mrs."'),
            checkNewsletter: PageElement.located(By.css('#uniform-newsletter + label'))
                .describedAs('marca a opção "Sign up for our newsletter!"'),
            checkSpecialOffer: PageElement.located(By.css('#uniform-optin + label'))
                .describedAs('marca a opção "Receive special offers from our partners!"'),
        }
    }
}
