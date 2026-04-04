import type SignupInteractions from "@pages/login/signup/signup.interactions";

/**
 * Interface para estratégias de seleção de título
 */
export interface ITitleSelectionStrategy {
    /**
     * Executa a seleção do título
     * @param interactions - Interações com a página
     * @returns Promise<void>
     */
    execute(interactions: SignupInteractions): Promise<void>;
}