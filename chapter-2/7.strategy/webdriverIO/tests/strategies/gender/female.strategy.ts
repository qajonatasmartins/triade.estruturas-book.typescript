import type { IGenderSelectionStrategy } from '../../interfaces/iGenderSelectionStrategy.interface.js';
import type { ISignupGenderSelectors } from '../../interfaces/iSignupGenderSelectors.interface.js';

/**
 * Estratégia para selecionar o gênero feminino
 */
export class FemaleStrategy implements IGenderSelectionStrategy {
  /**
   * Seleciona o gênero feminino
   * @param signup - Seleciona o gênero feminino
   * @returns void
   */
  async select(signup: ISignupGenderSelectors): Promise<void> {
    await signup.clickFemale();
  }
}
