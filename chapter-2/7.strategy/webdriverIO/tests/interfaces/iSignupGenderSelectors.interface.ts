/**
 * Minimal contract for gender strategies (avoids circular dependency with SignupPage).
 */
export interface ISignupGenderSelectors {
  clickMale(): Promise<void>;
  clickFemale(): Promise<void>;
  clickNonBinary(): Promise<void>;
}
