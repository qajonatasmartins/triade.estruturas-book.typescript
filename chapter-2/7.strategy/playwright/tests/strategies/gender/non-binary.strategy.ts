import type { IGenderSelectionStrategy } from '../../interfaces/iGenderSelectionStrategy.interface';
import type { ISignupGenderSelectors } from '../../interfaces/iSignupGenderSelectors.interface';

/**
 * Estratégia para selecionar o gênero não binário
 */
export class NonBinaryStrategy implements IGenderSelectionStrategy {
  /**
   * Seleciona o gênero não binário
   * @param signup - Seleciona o gênero não binário
   * @returns void
   */
  async select(signup: ISignupGenderSelectors): Promise<void> {
    await signup.clickNonBinary();
  }
}
