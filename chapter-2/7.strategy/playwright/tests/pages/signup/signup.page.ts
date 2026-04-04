import type { Locator, Page } from '@playwright/test';
import type { GenderType } from '../../interfaces/iGenderSelectionStrategy.interface';
import type { ISignupGenderSelectors } from '../../interfaces/iSignupGenderSelectors.interface';
import { genderStrategies } from '../../strategies/gender/gender-strategies.registry';

/**
 * Page object para a tela de signup
 */
export class SignupPage implements ISignupGenderSelectors {
  private readonly nameInput: Locator;
  private readonly emailInput: Locator;
  private readonly maleGender: Locator;
  private readonly femaleGender: Locator;
  private readonly nonBinaryGender: Locator;
  private readonly btnSignup: Locator;
  private readonly message: Locator;

  constructor(private readonly page: Page) {
    this.nameInput = page.locator('[data-testid="input-nome"]');
    this.emailInput = page.locator('[data-testid="input-email"]');
    this.maleGender = page.locator('[data-testid="gender-masculino"]');
    this.femaleGender = page.locator('[data-testid="gender-feminino"]');
    this.nonBinaryGender = page.locator('[data-testid="gender-nao-binario"]');
    this.btnSignup = page.locator('[data-testid="btn-signup"]');
    this.message = page.locator('[data-testid="signup-message"]');
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
    await this.page.goto('/signup');
    await this.nameInput.fill(name);
    await this.emailInput.fill(email);
    await this.selectGender(gender);
    await this.btnSignup.click();
  }

  /**
   * Lê a mensagem mostrada após o tentativa de signup.
   * @returns Message text
   */
  async getMessage(): Promise<string> {
    await this.message.waitFor({ state: 'visible' });
    await this.page.waitForFunction(() => {
      const el = document.querySelector('[data-testid="signup-message"]');
      return Boolean(el?.textContent?.trim().length);
    });
    return (await this.message.textContent())?.trim() ?? '';
  }
}
