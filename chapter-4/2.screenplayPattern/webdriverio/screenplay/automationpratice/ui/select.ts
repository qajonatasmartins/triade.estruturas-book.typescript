import { By, PageElement } from "@serenity-js/web";

export const select = {
    signupLoginForm: {
        signup: {
            dateOfBirth: PageElement.located(By.id('days'))
                .describedAs('campo Date of birth'),
            monthOfBirth: PageElement.located(By.id('months'))
                .describedAs('campo Month of birth'),
            yearOfBirth: PageElement.located(By.id('years'))
                .describedAs('campo Year of birth'),
        }
    }
}