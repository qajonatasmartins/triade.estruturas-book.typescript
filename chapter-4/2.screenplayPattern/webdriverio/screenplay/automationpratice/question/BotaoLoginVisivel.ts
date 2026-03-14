import { buttons } from '@/ui/button'

/**
 * Question que retorna se o botão de Login está visível na navbar.
 * Use com Ensure.that(botaoLoginVisivel(), isTrue()) no spec ou em Tasks.
 */
export const botaoLoginVisivel = () => buttons.menu.signupLoginFormMenu.isVisible()
