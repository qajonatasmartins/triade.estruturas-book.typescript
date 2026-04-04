import type { ISignupGenderSelectors } from './iSignupGenderSelectors.interface.js';

export type GenderType = 'masculino' | 'feminino' | 'nao_binario';

/**
 * Gender selection strategy for the signup screen (no if/else in the page object).
 */
export interface IGenderSelectionStrategy {
  /**
   * Selects the matching gender option.
   * @param signup - Gender actions exposed by the page object
   */
  select(signup: ISignupGenderSelectors): Promise<void>;
}
