import ButtonBase from "@base/components/button/button.base";
import LabelBase from "@base/components/label/label.base";
import { assert, should, expect } from 'chai'
import FooterActions from "@base/footer/footer.actions";
import FooterQuestions from "@base/footer/footer.questions";
import LoginActions from "@pages/login/login.actions";
import LoginQuestions from "@pages/login/login.questions";
import NavBarQuestions from "@base/navBar/navBar.questions";
import NavBarActions from "@base/navBar/navBar.actions";
import SuccessMessagesActions from "@base/successMessages/successMessages.actions";
import SuccessMessagesQuestions from "@base/successMessages/successMessages.questions";
import RegisterFlows from "@flows/register/register.flows";
import AccountBusiness from "@/core-api/src/business/account/account.business";

/** Asserções */
export const assertTs = assert
export const shouldTs = { should }
export const expectTs = { expect }

/** Base Components */
export const buttonBase = new ButtonBase()
export const labelBase = new LabelBase()
export const successMessagesActions = new SuccessMessagesActions()
export const successMessagesQuestions = new SuccessMessagesQuestions()

/** Actions */
export const navBarActions = new NavBarActions()
export const loginActions = new LoginActions()
export const footerActions = new FooterActions()

/** Questions */
export const navBarQuestions = new NavBarQuestions()
export const loginQuestions = new LoginQuestions()
export const footerQuestions = new FooterQuestions()

/** Flows */
export const registerFlows = new RegisterFlows()

/** Business */
export const accountBusiness = new AccountBusiness()