import { titleTypeEnum } from "@/enum/login/signup/signup.enum";

/**
 * Interface de informações de nascimento
 */
export interface IBirthday {
    birth_date: number;
    birth_month: number;
    birth_year: number;
}

/**
 * Interface de signup básico
 */
export interface ISignupBasic extends IBirthday {
    mrOrMrs: titleTypeEnum;
    name: string;
    email: string;
    password: string;
    newsletter: boolean;
    specialOffer: boolean;
}

/**
 * Interface de informações de endereço
 */
export interface ISignupAddress {
    firstname: string;
    lastname: string;
    company: string;
    address1: string;
    address2?: string;
    country: string;
    state: string;
    city: string;
    zipcode: string;
    mobile_number: string;
}

/**
 * Interface de signup
 */
export interface ISignup extends ISignupBasic, ISignupAddress { }