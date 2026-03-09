import { clickCustomCommands, setCustomCommands } from "../../../core-web/constants"
import SignupElements from "./signup.elements"

export default class SignupInteractions {

    private elements = new SignupElements()

    /**
     * Método para selecionar o checkbox 'Mr.' do New User Signup!
     */
    public async clickCheckMr() {
        await clickCustomCommands.waitForDisplayedAndClick(this.elements.checkMr, 'O checkbox [Mr.] não foi exibido.')
    }

    /**
     * Método para selecionar o checkbox 'Mrs.' do New User Signup!
     */
    public async clickCheckMrs() {
        await clickCustomCommands.waitForDisplayedAndClick(this.elements.checkMrs, 'O checkbox [Mrs.] não foi exibido.')
    }

    /**
     * Método para informar o valor no campo 'Name' do New User Signup!
     * @param name - Valor para informar no campo 'Name'
     */
    public async setInputName(name: string) {
        await setCustomCommands.waitForDisplayedAndSetValue(this.elements.inputName, name, 'Name')
    }

    /**
     * Método para informar o valor no campo 'Password' do New User Signup!
     * @param password - Valor para informar no campo 'Password'
     */
    public async setInputPassword(password: string | number) {
        await setCustomCommands.waitForDisplayedAndSetValue(this.elements.inputPassword, password, 'Password')
    }

    /**
     * Método para informar o valor no campo 'Date of birth' do New User Signup!
     * @param dateOfBirth - Valor para informar no campo 'Date of birth'
     */
    public async setInputDateOfBirth(dateOfBirth: number) {
        await this.elements.inputDateOfBirth.waitForDisplayed({ timeoutMsg: 'O campo "Date of birth Day" não foi exibido.' })
        await this.elements.inputDateOfBirth.selectByVisibleText(dateOfBirth.toString())
    }

    /**
     * Método para informar o valor no campo 'Month of birth' do New User Signup!
     * @param monthOfBirth - Valor para informar no campo 'Month of birth'
     */
    public async setInputMonthOfBirth(monthOfBirth: number) {
        await this.elements.inputMonthOfBirth.waitForDisplayed({ timeoutMsg: 'O campo "Date of birth Month" não foi exibido.' })
        await this.elements.inputMonthOfBirth.selectByIndex(monthOfBirth)
    }

    /**
     * Método para informar o valor no campo 'Year of birth' do New User Signup!
     * @param yearOfBirth - Valor para informar no campo 'Year of birth'
     */
    public async setInputYearOfBirth(yearOfBirth: number) {
        await this.elements.inputYearOfBirth.waitForDisplayed({ timeoutMsg: 'O campo "Date of birth Year" não foi exibido.' })
        await this.elements.inputYearOfBirth.selectByVisibleText(yearOfBirth.toString())
    }

    /**
     * Método para selecionar o checkbox 'Newsletter' do New User Signup!
     */
    public async clickCheckNewsletter() {
        await this.elements.checkNewsletter.scrollIntoView()
        await clickCustomCommands.waitForDisplayedAndClick(this.elements.checkNewsletter, 'O checkbox [Newsletter] não foi exibido.')
    }

    /**
     * Método para selecionar o checkbox 'Special Offer' do New User Signup!
     */
    public async clickCheckSpecialOffer() {
        await this.elements.checkSpecialOffer.scrollIntoView()
        await clickCustomCommands.waitForDisplayedAndClick(this.elements.checkSpecialOffer, 'O checkbox [Special Offer] não foi exibido.')
    }

    /**
     * Método para informar o valor no campo 'First Name' do New User Signup!
     * @param firstName - Valor para informar no campo 'First Name'
     */
    public async setInputFirstName(firstName: string) {
        await this.elements.inputFirstName.scrollIntoView()
        await setCustomCommands.waitForDisplayedAndSetValue(this.elements.inputFirstName, firstName, 'First Name')
    }

    /**
     * Método para informar o valor no campo 'Last Name' do New User Signup!
     * @param lastName - Valor para informar no campo 'Last Name'
     */
    public async setInputLastName(lastName: string) {
        await this.elements.inputLastName.scrollIntoView()
        await setCustomCommands.waitForDisplayedAndSetValue(this.elements.inputLastName, lastName, 'Last Name')
    }

    /**
     * Método para informar o valor no campo 'Company' do New User Signup!
     * @param company - Valor para informar no campo 'Company'
     */
    public async setInputCompany(company: string) {
        await this.elements.inputCompany.scrollIntoView()
        await setCustomCommands.waitForDisplayedAndSetValue(this.elements.inputCompany, company, 'Company')
    }

    /**
     * Método para informar o valor no campo 'Address' do New User Signup!
     * @param address - Valor para informar no campo 'Address'
     */
    public async setInputAddress(address: string) {
        await this.elements.inputAddress.scrollIntoView()
        await setCustomCommands.waitForDisplayedAndSetValue(this.elements.inputAddress, address, 'Address')
    }

    /**
     * Método para informar o valor no campo 'Address 2' do New User Signup!
     * @param address2 - Valor para informar no campo 'Address 2'
     */
    public async setInputAddress2(address2: string) {
        await this.elements.inputAddress2.scrollIntoView()
        await setCustomCommands.waitForDisplayedAndSetValue(this.elements.inputAddress2, address2, 'Address 2')
    }

    /**
     * Método para informar o valor no campo 'Country' do New User Signup!
     * @param country - Valor para informar no campo 'Country'
     */
    public async setInputCountry(country: string) {
        await this.elements.inputCountry.scrollIntoView()
        await this.elements.inputCountry.waitForDisplayed({ timeoutMsg: 'O campo "Country" não foi exibido.' })
        await this.elements.inputCountry.selectByVisibleText(country)
    }

    /**
     * Método para informar o valor no campo 'State' do New User Signup!
     * @param state - Valor para informar no campo 'State'
     */
    public async setInputState(state: string) {
        await this.elements.inputState.scrollIntoView()
        await setCustomCommands.waitForDisplayedAndSetValue(this.elements.inputState, state, 'State')
    }

    /**
     * Método para informar o valor no campo 'City' do New User Signup!
     * @param city - Valor para informar no campo 'City'
     */
    public async setInputCity(city: string) {
        await this.elements.inputCity.scrollIntoView()
        await setCustomCommands.waitForDisplayedAndSetValue(this.elements.inputCity, city, 'City')
    }

    /**
     * Método para informar o valor no campo 'Zip Code' do New User Signup!
     * @param zipCode - Valor para informar no campo 'Zip Code'
     */
    public async setInputZipCode(zipCode: string) {
        await this.elements.inputZipCode.scrollIntoView()
        await setCustomCommands.waitForDisplayedAndSetValue(this.elements.inputZipCode, zipCode, 'Zip Code')
    }

    /**
     * Método para informar o valor no campo 'Mobile Number' do New User Signup!
     * @param mobileNumber - Valor para informar no campo 'Mobile Number'
     */
    public async setInputMobileNumber(mobileNumber: string) {
        await this.elements.inputMobileNumber.scrollIntoView()
        await setCustomCommands.waitForDisplayedAndSetValue(this.elements.inputMobileNumber, mobileNumber, 'Mobile Number')
    }

    /**
     * Método para realizar o click no botão de [Create Account] do New User Signup!
     * @returns - Promise com a resposta da requisição
     */
    public async clickBtnCreateAccount() {
        await this.elements.btnCreateAccount.scrollIntoView()
        await clickCustomCommands.waitForDisplayedAndClick(this.elements.btnCreateAccount, 'O botão [Create Account] não foi exibido.')
    }
}