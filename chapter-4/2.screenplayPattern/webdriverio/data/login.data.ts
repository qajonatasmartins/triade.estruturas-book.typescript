import { faker } from '@faker-js/faker'
import type { IParamsDefault } from '@/interface/interfaces'
import * as dotenv from 'dotenv'
dotenv.config({ path: '.env', quiet: true })

const preSetupParamsDefault = (statusCode: number, retryCount: number, retryDelay: number): IParamsDefault => ({
    statusCode,
    retry: { count: retryCount, delay: retryDelay },
})

export const ct01 = {
    userName: 'Raven Herzog',
    email: `${process.env.TEST_EMAIL}`,
    password: `${process.env.TEST_PASSWORD}`,
}

export const ct06 = {
    email: 'incorrect@email.com',
    password: 'wrongpassword',
    message: 'Your email or password is incorrect!',
}

export const ct07 = () => {
    const testCase = 'CT-07'
    return {
        user: {
            email: faker.internet.email(),
            name: `${faker.person.fullName()} - ${testCase}`,
        },
        paramsDefault: preSetupParamsDefault(200, 3, 1000),
        message: 'Email Address already exist!',
    }
}
