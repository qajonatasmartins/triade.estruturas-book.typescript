import { faker } from '@faker-js/faker'
import type { ICreateAccount, IParamsDefault, ISignup } from '@/interface/interfaces'

const preSetupParamsDefault = (statusCode: number, retryCount: number, retryDelay: number): IParamsDefault => ({
    statusCode,
    retry: { count: retryCount, delay: retryDelay },
})

export const ct04 = () => {
    const testCase = 'CT-04'
    return {
        name: `${faker.person.fullName()} - ${testCase}`,
        paramsDefault: preSetupParamsDefault(200, 3, 1000),
        title: 'ACCOUNT DELETED!',
        firstParagraph: 'Your account has been permanently deleted!',
        secondParagraph:
            'You can create new account to take advantage of member privileges to enhance your online shopping experience with us.',
    }
}

export const ct05 = () => {
    const testCase = 'CT-05'
    return {
        name: `${faker.person.fullName()} - ${testCase}`,
        paramsDefault: preSetupParamsDefault(200, 3, 1000),
        title: 'ACCOUNT CREATED!',
        firstParagraph: 'Congratulations! Your new account has been successfully created!',
        secondParagraph:
            'You can now take advantage of member privileges to enhance your online shopping experience with us.',
        user: (account: ICreateAccount): ISignup => ({
            ...account,
            mrOrMrs: 'Mr.',
            newsletter: true,
            specialOffer: true,
            country: account.country,
            state: account.state,
            city: account.city,
            zipcode: account.zipcode,
            mobile_number: account.mobile_number,
        }),
    }
}
