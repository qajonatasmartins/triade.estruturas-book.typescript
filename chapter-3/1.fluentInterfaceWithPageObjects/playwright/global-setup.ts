import { request, FullConfig } from '@playwright/test';
import { faker } from '@faker-js/faker';
import * as dotenv from 'dotenv';
dotenv.config({ path: '.env' });

export default async function globalSetup(config: FullConfig) {
    const requestContext = await request.newContext()
    await requestContext.post(`${process.env.API_URL}/createAccount`, {
        form: {
            name: faker.person.fullName(),
            email: `${process.env.TEST_EMAIL}`,
            password: `${process.env.TEST_PASSWORD}`,
            title: faker.person.prefix(),
            birth_date: '15',
            birth_month: '03',
            birth_year: '1990',
            firstname: faker.person.firstName(),
            lastname: faker.person.lastName(),
            company: faker.company.name(),
            address1: faker.location.streetAddress(),
            address2: faker.location.secondaryAddress(),
            country: faker.location.country(),
            zipcode: faker.location.zipCode(),
            state: faker.location.state(),
            city: faker.location.city(),
            mobile_number: faker.phone.number({ style: 'international' })
        }
    })
    await requestContext.dispose();
}