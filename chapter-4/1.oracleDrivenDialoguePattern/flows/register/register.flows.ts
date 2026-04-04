import { loginActions, navBarActions } from "@/constants"
import { ISignup } from "@interface/login/signup/ISignup.interface"
export default class RegisterFlows {

    /**
     * Método para Abrir a página de login >> Informar nome e email >> Clicar em Signup >> Informar os dados de signup >> Clicar em [Create Account]
     * @param signup - Informações de signup
     */
    public async registerAccount(signup: ISignup) {
        await navBarActions.openLogin()
        await loginActions.toSignup(signup)
        await loginActions.signupActions().createUser(signup)
    }
}