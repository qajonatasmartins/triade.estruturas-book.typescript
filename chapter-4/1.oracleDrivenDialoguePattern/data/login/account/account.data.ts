import { faker } from "@faker-js/faker";
import { preSetup } from "@/core-api/src/constants";
import { signupShared } from "@data/shared/signup.shared.data";
import { ICreateAccount } from "@/core-api/src/interface/account/ICreateAccount.interface";
import { ISignup } from "@interface/login/signup/ISignup.interface";

export const ct04 = () => {
    const testCase = 'CT-04'
    return {
        name: `${faker.person.fullName()} - ${testCase}`,
        paramsDefault: preSetup.preSetupParamsDefault(200, 3, 1000),
        title: 'ACCOUNT DELETED!',
        firstParagraph: 'Your account has been permanently deleted!',
        secondParagraph: 'You can create new account to take advantage of member privileges to enhance your online shopping experience with us.'
    }
}

export const ct05 = () => {
    const testCase = 'CT-05'
    return {
        name: `${faker.person.fullName()} - ${testCase}`,
        paramsDefault: preSetup.preSetupParamsDefault(200, 3, 1000),
        title: 'ACCOUNT CREATED!',
        firstParagraph: 'Congratulations! Your new account has been successfully created!',
        secondParagraph: 'You can now take advantage of member privileges to enhance your online shopping experience with us.',
        user: (account: ICreateAccount): ISignup => signupShared(account)
    }
}