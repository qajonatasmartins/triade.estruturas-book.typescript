import ButtonBase from "./pages/base/components/button/button.base";
import LabelBase from "./pages/base/components/label/label.base";
import { assert, should, expect } from 'chai'
import FooterActions from "./pages/base/footer/footer.actions";
import FooterQuestions from "./pages/base/footer/footer.questions";

/** Asserções */
export const assertTs = assert
export const shouldTs = { should }
export const expectTs = { expect }

/** Base Components */
export const buttonBase = new ButtonBase()
export const labelBase = new LabelBase()

/** Actions */
export const footerActions = new FooterActions()

/** Questions */
export const footerQuestions = new FooterQuestions()
