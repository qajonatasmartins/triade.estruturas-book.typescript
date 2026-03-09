export default class SignupElements {

    /**
     * Mapeamento do checkbox 'Mr.' do New User Signup!
     */
    get checkMr() { return $("div.clearfix label[for='id_gender1']"); }

    /**
     * Mapeamento do checkbox 'Mrs.' do New User Signup!
     */
    get checkMrs() { return $("div.clearfix label[for='id_gender2']"); }

    /**
     * Mapeamento do campo 'Name' do New User Signup!
     */
    get inputName() { return $('#name'); }

    /**
     * Mapeamento do campo 'Email Address' do New User Signup!
     */
    get inputEmailAddress() { return $('#email'); }

    /**
     * Mapeamento do campo 'Password' do New User Signup!
     */
    get inputPassword() { return $('#password'); }

    /**
     * Mapeamento do campo 'Date of birth' do New User Signup!
     */
    get inputDateOfBirth() { return $('#uniform-days #days'); }

    /**
     * Mapeamento do campo 'Month of birth' do New User Signup!
     */
    get inputMonthOfBirth() { return $('#uniform-months #months'); }

    /**
     * Mapeamento do campo 'Year of birth' do New User Signup!
     */
    get inputYearOfBirth() { return $('#uniform-years #years'); }

    /**
     * Mapeamento do checkbox 'Newsletter' do New User Signup!
     */
    get checkNewsletter() { return $('#uniform-newsletter + label'); }

    /**
     * Mapeamento do checkbox 'Special Offer' do New User Signup!
     */
    get checkSpecialOffer() { return $('#uniform-optin + label'); }

    /**
     * Mapeamento do campo 'First Name' do New User Signup!
     */
    get inputFirstName() { return $('#first_name'); }

    /**
     * Mapeamento do campo 'Last Name' do New User Signup!
     */
    get inputLastName() { return $('#last_name'); }

    /**
     * Mapeamento do campo 'Company' do New User Signup!
     */
    get inputCompany() { return $('#company'); }

    /**
     * Mapeamento do campo 'Address' do New User Signup!
     */
    get inputAddress() { return $('#address1'); }

    /**
     * Mapeamento do campo 'Address 2' do New User Signup!
     */
    get inputAddress2() { return $('#address2'); }

    /**
     * Mapeamento do campo 'Country' do New User Signup!
     */
    get inputCountry() { return $('#country'); }

    /**
     * Mapeamento do campo 'State' do New User Signup!
     */
    get inputState() { return $('#state'); }

    /**
     * Mapeamento do campo 'City' do New User Signup!
     */
    get inputCity() { return $('#city'); }

    /**
     * Mapeamento do campo 'Zip Code' do New User Signup!
     */
    get inputZipCode() { return $('#zipcode'); }

    /**
     * Mapeamento do campo 'Mobile Number' do New User Signup!
     */
    get inputMobileNumber() { return $('#mobile_number'); }

    /**
     * Mapeamento do botão de [Create Account] do New User Signup!
     */
    get btnCreateAccount() { return $('[data-qa="create-account"]'); }
}