import type { GenderType } from '../../interfaces/iGenderSelectionStrategy.interface.js';
import type { ISignupGenderSelectors } from '../../interfaces/iSignupGenderSelectors.interface.js';
import { genderStrategies } from '../../strategies/gender/gender-strategies.registry.js';

export class SignupPage implements ISignupGenderSelectors {
  get nameInput() {
    return $('[data-testid="input-nome"]');
  }
  get emailInput() {
    return $('[data-testid="input-email"]');
  }
  get maleGender() {
    return $('[data-testid="gender-masculino"]');
  }
  get femaleGender() {
    return $('[data-testid="gender-feminino"]');
  }
  get nonBinaryGender() {
    return $('[data-testid="gender-nao-binario"]');
  }
  get btnSignup() {
    return $('[data-testid="btn-signup"]');
  }
  get message() {
    return $('[data-testid="signup-message"]');
  }

  /**
   * Clica no botão de seleção de gênero masculino
   * @returns void
   */
  async clickMale(): Promise<void> {
    await this.maleGender.click();
  }

  /**
   * Clica no botão de seleção de gênero feminino
   * @returns void
   */
  async clickFemale(): Promise<void> {
    await this.femaleGender.click();
  }

  /**
   * Clica no botão de seleção de gênero não binário
   * @returns void
   */
  async clickNonBinary(): Promise<void> {
    await this.nonBinaryGender.click();
  }

  /**
   * Seleciona o gênero via estratégia registrada (sem cadeia de if/else).
   * @param gender - Person type
   */
  async selectGender(gender: GenderType): Promise<void> {
    await genderStrategies[gender].select(this);
  }

  /**
   * Fluxo completo de signup na tela de demonstração.
   * @param name - Name
   * @param email - Email
   * @param gender - Person type
   */
  async register(name: string, email: string, gender: GenderType): Promise<void> {
    await browser.url('/signup');
    await this.nameInput.setValue(name);
    await this.emailInput.setValue(email);
    await this.selectGender(gender);
    await this.btnSignup.click();
  }

  /**
   * Lê a mensagem mostrada após o tentativa de signup.
   * @returns Message text
   */
  async getMessage(): Promise<string> {
    await this.message.waitForDisplayed();
    await browser.waitUntil(async () => (await this.message.getText()).trim().length > 0, {
      timeout: 10000,
      timeoutMsg: 'Signup message was not shown in time.',
    });
    return await this.message.getText();
  }
}
