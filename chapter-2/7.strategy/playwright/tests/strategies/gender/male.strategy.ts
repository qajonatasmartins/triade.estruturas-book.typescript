import type { IGenderSelectionStrategy } from '../../interfaces/iGenderSelectionStrategy.interface';
import type { ISignupGenderSelectors } from '../../interfaces/iSignupGenderSelectors.interface';

/**
 * Estratégia para selecionar o gênero masculino
 */
export class MaleStrategy implements IGenderSelectionStrategy {
  /**
   * Seleciona o gênero masculino
   * @param signup - Seleciona o gênero masculino
   * @returns void
   */
  async select(signup: ISignupGenderSelectors): Promise<void> {
    await signup.clickMale();
  }
}
