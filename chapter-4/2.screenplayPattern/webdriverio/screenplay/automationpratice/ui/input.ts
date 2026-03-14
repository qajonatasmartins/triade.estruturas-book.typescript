import { By, PageElement } from "@serenity-js/web"

const inputsBase = {
    inputDataQa: (inputName: string) => { return `input[data-qa="${inputName}"]` }
}
export const inputs = {
    signupLoginForm: {
        login: {
            emailInput: PageElement.located(By.css(inputsBase.inputDataQa('login-email')))
                .describedAs('campo de "Email Address"'),
            passwordInput: PageElement.located(By.css(inputsBase.inputDataQa('login-password')))
                .describedAs('campo de "Password"'),
            passwordErrorMessage: PageElement.located(By.css(`${inputsBase.inputDataQa('login-password')} + p`))
                .describedAs('a mensagem de erro de credenciais incorretas'),
        },
        signup: {
            nameInput: PageElement.located(By.css(inputsBase.inputDataQa('signup-name')))
                .describedAs('campo de "Name"'),
            emailInput: PageElement.located(By.css(inputsBase.inputDataQa('signup-email')))
                .describedAs('campo de "Email Address"'),
            signupErrorMessage: PageElement.located(By.css(`${inputsBase.inputDataQa('signup-email')} ~ p`))
                .describedAs('mensagem de erro de email já existente no signup'),
            passwordInput: PageElement.located(By.id('password'))
                .describedAs('campo de "Password"'),
            firstNameInput: PageElement.located(By.id('first_name'))
                .describedAs('campo First Name'),
            lastNameInput: PageElement.located(By.id('last_name'))
                .describedAs('campo Last Name'),
            companyInput: PageElement.located(By.id('company'))
                .describedAs('campo Company'),
            address1Input: PageElement.located(By.id('address1'))
                .describedAs('campo Address'),
            address2Input: PageElement.located(By.id('address2'))
                .describedAs('campo Address 2'),
            countrySelect: PageElement.located(By.id('country'))
                .describedAs('campo Country'),
            stateInput: PageElement.located(By.id('state'))
                .describedAs('campo State'),
            cityInput: PageElement.located(By.id('city'))
                .describedAs('campo City'),
            zipcodeInput: PageElement.located(By.id('zipcode'))
                .describedAs('campo Zip Code'),
            mobileNumberInput: PageElement.located(By.id('mobile_number'))
                .describedAs('campo Mobile Number'),
        }
    },
    subscriptionFooter: {
        emailSubscriptionInput: PageElement.located(By.id('susbscribe_email'))
            .describedAs('campo de "Your email address" da subscription no footer'),
    }
}