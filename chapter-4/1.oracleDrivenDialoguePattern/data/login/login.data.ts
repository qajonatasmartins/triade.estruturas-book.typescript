import { faker } from "@faker-js/faker";
import { preSetup } from "@/core-api/src/constants";
import { userShared } from "@/data/shared/user.shared.data";

export const ct01 = {
    userName: 'Raven Herzog',
    ...userShared(`${process.env.TEST_EMAIL}`, `${process.env.TEST_PASSWORD}`),
}

export const ct06 = {
    ...userShared('incorrect@email.com', 'wrongpassword'),
    message: 'Your email or password is incorrect!'
}

export const ct07 = () => {
    const testCase = 'CT-07'
    return {
        user: {
            email: `${faker.internet.email()}`,
            name: `${faker.person.fullName()} - ${testCase}`
        },
        paramsDefault: preSetup.preSetupParamsDefault(200, 3, 1000),
        message: 'Email Address already exist!'
    }
}
