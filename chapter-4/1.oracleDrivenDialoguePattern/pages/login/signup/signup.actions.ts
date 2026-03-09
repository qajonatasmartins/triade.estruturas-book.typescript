import { titleTypeEnum } from "../../../enum/login/signup/signup.enum"
import { IBirthday, ISignup, ISignupAddress, ISignupBasic } from "../../../interface/login/signup/ISignup.interface"
import SignupInteractions from "./signup.interactions"

export default class SignupActions {

    private interactions = new SignupInteractions()

    /**
     * Método para realizar o signup na página Automation Exercise
     * @param user - Informações de signup
     */
    public async createUser(signup: ISignup) {
        await this.fillBasicInformation(signup)
        await this.fillAddressInformation(signup)
        await this.interactions.clickBtnCreateAccount()
    }

    /**
     * Método para selecionar o tipo de título (Mr. ou Mrs.)
     * @param titleType - Tipo de título (Mr. ou Mrs.)
     */
    public async selectTitle(titleType: titleTypeEnum) {
        titleType === titleTypeEnum.MR.toString() ? await this.interactions.clickCheckMr() : await this.interactions.clickCheckMrs()
    }

    /**
     * Método para preencher as informações básicas do signup
     * @param user - Informações de signup básico
     */
    public async fillBasicInformation(user: ISignupBasic) {
        await this.selectTitle(user.mrOrMrs)
        await this.informLoginAccess(user)
        await this.informBirthday(user)
        await this.selectNewsletterAndSpecialOffer()
    }

    /**
     * Método para selecionar o checkbox 'Newsletter' e 'Special Offer'
     */
    public async selectNewsletterAndSpecialOffer() {
        await this.interactions.clickCheckNewsletter()
        await this.interactions.clickCheckSpecialOffer()
    }

    /**
     * Método para informar o nome, email e senha
     * @param user - Informações de login
     */
    public async informLoginAccess(user: ISignupBasic) {
        await this.interactions.setInputName(user.name)
        await this.interactions.setInputPassword(user.password)
    }

    /**
     * Método para informar o dia, mês e ano de nascimento
     * @param birthday - Informações de nascimento
     */
    public async informBirthday(birthday: IBirthday) {
        await this.interactions.setInputDateOfBirth(birthday.birth_date)
        await this.interactions.setInputMonthOfBirth(birthday.birth_month)
        await this.interactions.setInputYearOfBirth(birthday.birth_year)
    }

    /**
     * Método para informar o endereço
     * @param address - Informações de endereço
     */
    public async fillAddressInformation(address: ISignupAddress) {
        await this.interactions.setInputFirstName(address.firstname)
        await this.interactions.setInputLastName(address.lastname)
        await this.interactions.setInputCompany(address.company);
        await this.interactions.setInputAddress(address.address1);
        await this.interactions.setInputAddress2(address.address2 || '')
        await this.interactions.setInputCountry(address.country)
        await this.interactions.setInputState(address.state)
        await this.interactions.setInputCity(address.city)
        await this.interactions.setInputZipCode(address.zipcode)
        await this.interactions.setInputMobileNumber(address.mobile_number)
    }
}
