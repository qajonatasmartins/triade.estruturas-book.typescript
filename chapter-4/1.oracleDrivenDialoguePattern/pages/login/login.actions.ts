import { IUserLogin } from "../../interface/login/IUser.interface";
import LoginInteractions from "./login.interactions";

export default class LoginActions {

    private interactions = new LoginInteractions()

    /**
     * Método para realizar o login na página Automation Exercise
     * @param user 
     */
    public async toLogin(user: IUserLogin) {
        await this.interactions.setInputEmailAddressLogin(user.email)
        await this.interactions.setInputPassword(user.password)
        await this.interactions.clickBtnLogin()
    }
}
