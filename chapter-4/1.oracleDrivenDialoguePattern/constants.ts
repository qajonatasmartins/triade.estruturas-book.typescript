import ButtonBase from "./pages/base/components/button/button.base";
import LabelBase from "./pages/base/components/label/label.base";
import { assert, should, expect } from 'chai'
import FooterActions from "./pages/base/footer/footer.actions";
import FooterQuestions from "./pages/base/footer/footer.questions";
import LoginActions from "./pages/login/login.actions";
import LoginQuestions from "./pages/login/login.questions";
import NavBarQuestions from "./pages/base/navBar/navBar.questions";
import NavBarActions from "./pages/base/navBar/navBar.actions";
import SuccessActions from "./pages/base/success/success.actions";
import SuccessQuestions from "./pages/base/success/success.questions";
import RegisterFlows from "./flows/register/register.flows";

/** Asserções */
export const assertTs = assert
export const shouldTs = { should }
export const expectTs = { expect }

/** Base Components */
export const buttonBase = new ButtonBase()
export const labelBase = new LabelBase()

/** Actions */
export const navBarActions = new NavBarActions()
export const loginActions = new LoginActions()
export const footerActions = new FooterActions()
export const successActions = new SuccessActions()

/** Questions */
export const navBarQuestions = new NavBarQuestions()
export const loginQuestions = new LoginQuestions()
export const footerQuestions = new FooterQuestions()
export const successQuestions = new SuccessQuestions()

/** Flows */
export const registerFlows = new RegisterFlows()