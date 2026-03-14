import { type Activity, Task, the } from '@serenity-js/core'
import { Click, Enter, Scroll, Select } from '@serenity-js/web'
import { checkboxes } from '@/ui/checkbox'
import { inputs } from '@/ui/input'
import type { ISignup } from '@/interface/interfaces'
import { buttons } from '@/ui/button'
import { select } from '@/ui/select'

/**
 * Task para preencher o formulário de signup completo e criar a conta
 * @param signupData - Dados do signup
 * @returns Task para preencher o formulário de signup completo e criar a conta
 */
export const PreencherSignupCompleto = (signupData: ISignup) => {
    const activities: Activity[] = [
        selecionarGenero(signupData.mrOrMrs),
        Enter.theValue(signupData.password).into(inputs.signupLoginForm.signup.passwordInput),
        ...preencherDataAniversario(signupData),
        ...preencherNewsletter(),
        ...preencherSpecialOffer(),
        ...preencherEndereco(signupData),
        Scroll.to(buttons.signupLoginForm.signup.createAccountButton),
        Click.on(buttons.signupLoginForm.signup.createAccountButton),
    ]
    return Task.where(the`#actor preenche formulário de signup e cria conta.`, ...activities)
}

/**
 * Seleciona o gênero do signup
 * @param genero - Gênero do signup
 * @returns Activity para selecionar o gênero do signup
 */
const selecionarGenero = (genero: string) => {
    return genero === 'Mrs.' ? Click.on(checkboxes.signupLoginForm.signup.checkMrs) : Click.on(checkboxes.signupLoginForm.signup.checkMr)
}

/**
 * Preenche o campo de data de nascimento do signup
 * @param signupData - Dados do signup
 * @returns Activity para preencher o campo de data de nascimento do signup
 */
const preencherDataAniversario = (signupData: ISignup) => {
    return [
        Select.value(String(signupData.birth_date)).from(select.signupLoginForm.signup.dateOfBirth),
        Select.value(String(signupData.birth_month)).from(select.signupLoginForm.signup.monthOfBirth),
        Select.value(String(signupData.birth_year)).from(select.signupLoginForm.signup.yearOfBirth),
    ]
}

/**
 * Preenche o campo de newsletter do signup
 * @returns Activity para preencher o campo de newsletter do signup
 */
const preencherNewsletter = () => {
    return [
        Scroll.to(checkboxes.signupLoginForm.signup.checkNewsletter),
        Click.on(checkboxes.signupLoginForm.signup.checkNewsletter),
    ]
}

/**
 * Preenche o campo de special offer do signup
 * @returns Activity para preencher o campo de special offer do signup
 */
const preencherSpecialOffer = () => {
    return [
        Scroll.to(checkboxes.signupLoginForm.signup.checkSpecialOffer),
        Click.on(checkboxes.signupLoginForm.signup.checkSpecialOffer),
    ]
}

/**
 * Preenche o campo de endereço do signup
 * @param signupData - Dados do signup
 * @returns Activity para preencher o campo de endereço do signup
 */
const preencherEndereco = (signupData: ISignup) => {
    return [
        Scroll.to(inputs.signupLoginForm.signup.firstNameInput),
        Enter.theValue(signupData.firstname).into(inputs.signupLoginForm.signup.firstNameInput),
        Enter.theValue(signupData.lastname).into(inputs.signupLoginForm.signup.lastNameInput),
        Enter.theValue(signupData.company).into(inputs.signupLoginForm.signup.companyInput),
        Enter.theValue(signupData.address1).into(inputs.signupLoginForm.signup.address1Input),
        Enter.theValue(signupData.address2 ?? '').into(inputs.signupLoginForm.signup.address2Input),
        Scroll.to(inputs.signupLoginForm.signup.countrySelect),
        Select.option(signupData.country).from(inputs.signupLoginForm.signup.countrySelect),
        Enter.theValue(signupData.state).into(inputs.signupLoginForm.signup.stateInput),
        Enter.theValue(signupData.city).into(inputs.signupLoginForm.signup.cityInput),
        Enter.theValue(signupData.zipcode).into(inputs.signupLoginForm.signup.zipcodeInput),
        Enter.theValue(signupData.mobile_number).into(inputs.signupLoginForm.signup.mobileNumberInput),
    ]
}