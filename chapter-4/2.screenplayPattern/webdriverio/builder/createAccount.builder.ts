import { faker } from '@faker-js/faker'
import type { ICreateAccount } from '../interface/interfaces.js'

export class CreateAccountBuilder {
    private createAccount: ICreateAccount

    constructor() {
        this.createAccount = {
            name: faker.person.fullName(),
            email: faker.internet.email(),
            password: faker.internet.password(),
            title: faker.person.prefix() ?? 'Mr.',
            birth_date: 15,
            birth_month: 3,
            birth_year: 1990,
            firstname: faker.person.firstName(),
            lastname: faker.person.lastName(),
            company: faker.company.name(),
            address1: faker.location.streetAddress(),
            address2: faker.location.secondaryAddress(),
            country: faker.helpers.arrayElement([
                'India',
                'United States',
                'Canada',
                'Australia',
                'Israel',
                'New Zealand',
                'Singapore',
            ]),
            zipcode: faker.location.zipCode(),
            state: faker.location.state(),
            city: faker.location.city(),
            mobile_number: faker.phone.number({ style: 'international' }),
        }
    }

    /**
     * Define o nome da conta
     * @param name - Nome da conta
     * @returns CreateAccountBuilder
     */
    withName(name: string): CreateAccountBuilder {
        this.createAccount.name = name
        return this
    }

    /**
     * Define o email da conta
     * @param email - Email da conta
     * @returns CreateAccountBuilder
     */
    withEmail(email: string): CreateAccountBuilder {
        this.createAccount.email = email
        return this
    }

    /**
     * Define a senha da conta
     * @param password - Senha da conta
     * @returns CreateAccountBuilder
     */
    withPassword(password: string): CreateAccountBuilder {
        this.createAccount.password = password
        return this
    }

    /**
     * Retorna a conta criada
     * @returns ICreateAccount
     */
    build(): ICreateAccount {
        return this.createAccount
    }
}

export const createAccountBuilder = new CreateAccountBuilder()
