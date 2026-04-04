/**
 * Contrato mínimo para estratégias de gênero (evita dependência circular com SignupPage).
 */
export interface ISignupGenderSelectors {
  clickMale(): Promise<void>;
  clickFemale(): Promise<void>;
  clickNonBinary(): Promise<void>;
}
