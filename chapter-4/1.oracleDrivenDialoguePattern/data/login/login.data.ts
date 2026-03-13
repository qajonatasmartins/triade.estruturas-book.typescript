import { faker } from "@faker-js/faker";
import { preSetup } from "@/core-api/src/constants";

export const ct01 = {
    userName: 'Raven Herzog',
    email: `${process.env.TEST_EMAIL}`,
    password: `${process.env.TEST_PASSWORD}`
}

export const ct06 = {
    email: 'incorrect@email.com',
    password: 'wrongpassword',
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