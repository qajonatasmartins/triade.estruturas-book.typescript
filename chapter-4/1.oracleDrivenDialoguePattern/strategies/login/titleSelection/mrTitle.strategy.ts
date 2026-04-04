import type { ITitleSelectionStrategy } from "@interface/login/signup/ITitleSelectionStrategy.interface";
import type SignupInteractions from "@pages/login/signup/signup.interactions";

/**
 * Estratégia para selecionar o título 'Mr.'
 */
export class MrTitleStrategy implements ITitleSelectionStrategy {
    /**
     * Executa a seleção do título 'Mr.'
     * @param interactions - Interações com a página
     * @returns Promise<void>
     */
    async execute(interactions: SignupInteractions): Promise<void> {
        return await interactions.clickCheckMr();
    }
}