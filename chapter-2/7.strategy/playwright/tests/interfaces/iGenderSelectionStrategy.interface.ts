import type { ISignupGenderSelectors } from './iSignupGenderSelectors.interface';

export type GenderType = 'masculino' | 'feminino' | 'nao_binario';

/**
 * Estratégia para a tela de signup (sem if/else no page object).
 */
export interface IGenderSelectionStrategy {
  /**
   * Seleciona a opção de gênero correspondente.
   * @param signup - Ações de gênero expostas pelo page object
   */
  select(signup: ISignupGenderSelectors): Promise<void>;
}
