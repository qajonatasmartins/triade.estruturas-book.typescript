import type { GenderType, IGenderSelectionStrategy } from '../../interfaces/iGenderSelectionStrategy.interface.js';
import { FemaleStrategy } from './female.strategy.js';
import { MaleStrategy } from './male.strategy.js';
import { NonBinaryStrategy } from './non-binary.strategy.js';

/**
 * Registro tipado: lookup por gênero, sem if/else quando escolhendo uma estratégia.
 */
export const genderStrategies: Record<GenderType, IGenderSelectionStrategy> = {
  masculino: new MaleStrategy(),
  feminino: new FemaleStrategy(),
  nao_binario: new NonBinaryStrategy(),
};
