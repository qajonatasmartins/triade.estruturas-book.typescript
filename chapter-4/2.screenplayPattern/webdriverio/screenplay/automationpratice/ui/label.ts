import { By, PageElement } from "@serenity-js/web"

const labelsBase = {
    title: '#form h2.title',
}

export const labels = {
    navBar: {
        loggedIn: PageElement.located(By.css('ul.navbar-nav i.fa-user + b'))
            .describedAs('O usuário está logado com')
    },
    footer: {
        successAlert: PageElement.located(By.css('#success-subscribe .alert-success.alert'))
            .describedAs('alerta de sucesso da subscription'),
    },
    successPage: {
        title: PageElement.located(By.css(labelsBase.title))
            .describedAs('título da página de sucesso'),
        firstParagraph: PageElement.located(By.css(`${labelsBase.title} + p`))
            .describedAs('primeiro parágrafo de sucesso'),
        secondParagraph: PageElement.located(By.css(`${labelsBase.title} + p + p`))
            .describedAs('segundo parágrafo de sucesso'),
    }
}