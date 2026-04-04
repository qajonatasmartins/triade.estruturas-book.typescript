import type { GenderType, IGenderSelectionStrategy } from '../../interfaces/iGenderSelectionStrategy.interface';
import { FemaleStrategy } from './female.strategy';
import { MaleStrategy } from './male.strategy';
import { NonBinaryStrategy } from './non-binary.strategy';

/**
 * Registro tipado: lookup por gênero, sem if/else quando escolhendo uma estratégia.
 */
export const genderStrategies: Record<GenderType, IGenderSelectionStrategy> = {
  masculino: new MaleStrategy(),
  feminino: new FemaleStrategy(),
  nao_binario: new NonBinaryStrategy(),
};
