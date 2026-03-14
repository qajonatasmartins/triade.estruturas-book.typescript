import { Scroll, Text } from '@serenity-js/web'
import { labels } from '@/ui/label'

/**
 * Question que retorna o texto da mensagem de sucesso da subscription no footer.
 * Use com Ensure.that(mensagemSucessoFooter(), includes('...')) no spec ou em Tasks.
 */
export const mensagemSucessoFooter = () => {
    Scroll.to(labels.footer.successAlert)
    return Text.of(labels.footer.successAlert)
        .describedAs('a mensagem de sucesso da subscription no footer')
}
