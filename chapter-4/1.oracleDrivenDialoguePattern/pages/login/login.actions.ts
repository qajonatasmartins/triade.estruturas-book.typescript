import { IUserLogin, IUserSignup } from "../../interface/login/IUser.interface";
import LoginInteractions from "./login.interactions";
import SignupActions from "./signup/signup.actions";

export default class LoginActions {

    private interactions = new LoginInteractions()

    /**
     * Método para retornar a instância da classe SignupActions
     * @returns SignupActions
     */
    public signupActions(): SignupActions {
        return new SignupActions()
    }

    /**
     * Método para realizar o login na página Automation Exercise
     * @param user 
     */
    public async toLogin(user: IUserLogin) {
        await this.interactions.setInputEmailAddressLogin(user.email)
        await this.interactions.setInputPassword(user.password)
        await this.interactions.clickBtnLogin()
    }

    /**
     * Método para realizar o signup na página Automation Exercise
     * @param user 
     */
    public async toSignup(user: IUserSignup) {
        await this.interactions.setInputName(user.name)
        await this.interactions.setInputEmailAddressSignup(user.email)
        await this.interactions.clickBtnSignup()
    }
}
