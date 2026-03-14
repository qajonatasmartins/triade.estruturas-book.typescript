import { By, PageElement } from "@serenity-js/web"

const buttonsBase = {
    navBar: (index: number) => { return `.nav.navbar-nav li:nth-child(${index})` },
    confirm: (buttonName: string) => { return `button[data-qa="${buttonName}"]` }
}

export const buttons = {
    menu: {
        signupLoginFormMenu: PageElement.located(By.css(`${buttonsBase.navBar(4)} [href='/login']`))
            .describedAs('menu [Signup/Login]'),
        logoutMenu: PageElement.located(By.css(`${buttonsBase.navBar(4)} [href='/logout']`))
            .describedAs('menu [Logout]'),
        deleteAccountMenu: PageElement.located(By.css(`${buttonsBase.navBar(5)} [href='/delete_account']`))
            .describedAs('menu [Delete Account]')
    },
    signupLoginForm: {
        login: {
            loginButton: PageElement.located(By.css(buttonsBase.confirm('login-button')))
                .describedAs('botão [Login]'),
        },
        signup: {
            signupButton: PageElement.located(By.css(buttonsBase.confirm('signup-button')))
                .describedAs('botão [Signup]'),
            createAccountButton: PageElement.located(By.css(`form ${buttonsBase.confirm('create-account')}`))
                .describedAs('botão [Create Account]'),
        }
    },
    subscriptionFooter: {
        subscribeButton: PageElement.located(By.id('subscribe'))
            .describedAs('botão [Subscribe]'),
    },
    successPage: {
        continueButton: PageElement.located(By.css(buttonsBase.confirm('continue-button')))
            .describedAs('botão [Continue]'),
    }
}