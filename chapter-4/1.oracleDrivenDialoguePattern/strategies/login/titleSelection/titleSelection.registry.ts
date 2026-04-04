import { titleTypeEnum } from "@enum/login/signup/signup.enum";
import type { ITitleSelectionStrategy } from "@interface/login/signup/ITitleSelectionStrategy.interface";
import { MrTitleStrategy } from "./mrTitle.strategy";
import { MrsTitleStrategy } from "./mrsTitle.strategy";

/**
 * Registro de estratégias de seleção de título
 */
const strategies: Record<titleTypeEnum, ITitleSelectionStrategy> = {
    [titleTypeEnum.MR]: new MrTitleStrategy(),
    [titleTypeEnum.MRS]: new MrsTitleStrategy(),
};

/**
 * Método para obter a estratégia de seleção de título
 * @param titleType - Tipo de título
 * @returns Estratégia de seleção de título
 */
export function getTitleSelectionStrategy(titleType: titleTypeEnum): ITitleSelectionStrategy {
    return strategies[titleType];
}