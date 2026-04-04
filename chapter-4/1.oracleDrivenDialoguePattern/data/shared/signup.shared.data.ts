import type { ICreateAccount } from "@/core-api/src/interface/account/ICreateAccount.interface"
import { titleTypeEnum } from "@enum/login/signup/signup.enum"
import type { ISignup } from "@interface/login/signup/ISignup.interface"

/**
 * Função para criar os dados do usuário para signup
 * @param account - Dados da conta
 * @returns Objeto com dados do usuário para signup
 */
export const signupShared = (account: ICreateAccount): ISignup => {
    return {
        ...account,
        mrOrMrs: titleTypeEnum.MR.toString(),
        newsletter: true,
        specialOffer: true,
    } as ISignup
}