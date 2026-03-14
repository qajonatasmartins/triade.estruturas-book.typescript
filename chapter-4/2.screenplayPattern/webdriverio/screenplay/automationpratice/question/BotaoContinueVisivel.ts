import { buttons } from '@/ui/button'

/**
 * Question que retorna se o botão Continue está visível na página de sucesso.
 * Use com Ensure.that(botaoContinueVisivel(), isTrue()) no spec ou em Tasks.
 */
export const botaoContinueVisivel = () => buttons.successPage.continueButton.isVisible()
