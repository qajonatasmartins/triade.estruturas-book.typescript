import type { IGenderSelectionStrategy } from '../../interfaces/iGenderSelectionStrategy.interface';
import type { ISignupGenderSelectors } from '../../interfaces/iSignupGenderSelectors.interface';

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
