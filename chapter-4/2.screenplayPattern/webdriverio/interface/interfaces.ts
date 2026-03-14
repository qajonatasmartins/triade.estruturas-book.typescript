/**
 * Parâmetros default para requisições API (retry, statusCode)
 */
export interface IParamsDefault {
    statusCode: number
    retry: {
        count: number
        delay: number
    }
}

/**
 * Dados para criação de conta via API
 */
export interface ICreateAccount {
    name: string
    email: string
    password: string
    title: string
    birth_date: number
    birth_month: number
    birth_year: number
    firstname: string
    lastname: string
    company: string
    address1: string
    address2?: string
    country: string
    zipcode: string
    state: string
    city: string
    mobile_number: string
}

/**
 * Informações de nascimento
 */
export interface IBirthday {
    birth_date: number
    birth_month: number
    birth_year: number
}

/**
 * Informações de endereço para signup
 */
export interface ISignupAddress {
    firstname: string
    lastname: string
    company: string
    address1: string
    address2?: string
    country: string
    state: string
    city: string
    zipcode: string
    mobile_number: string
}

/**
 * Signup básico (extends IBirthday)
 */
export interface ISignupBasic extends IBirthday {
    mrOrMrs: string
    name: string
    email: string
    password: string
    newsletter: boolean
    specialOffer: boolean
}

/**
 * Dados completos de signup
 */
export interface ISignup extends ISignupBasic, ISignupAddress { }
