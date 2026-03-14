interface UserDetailResponse {
    user: {
        email: string
        name: string
        birth_day: string
        birth_month: string
        birth_year: string
        first_name: string
        last_name: string
        company: string
        address1: string
        address2: string
        country: string
        zipcode: string
        state: string
        city: string
    }
}

import { Task, the } from '@serenity-js/core'
import { Ensure, equals } from '@serenity-js/assertions'
import { GetRequest, LastResponse, Send } from '@serenity-js/rest'
import type { ICreateAccount } from '@/interface/interfaces'

/**
 * Task que valida se os dados da conta retornados pela API conferem com o registro.
 * Requer ator com ChamarAutomationExerciseAPI.
 */
export const ValidarDadosConta = (account: ICreateAccount) =>
    Task.where(
        the`#actor valida dados da conta ${account.email}`,
        Send.a(GetRequest.to(`getUserDetailByEmail?email=${encodeURIComponent(account.email)}`)),
        Ensure.that(LastResponse.status(), equals(200)),
        Ensure.that(LastResponse.body<UserDetailResponse>().user.email, equals(account.email)),
        Ensure.that(LastResponse.body<UserDetailResponse>().user.name, equals(account.name)),
        Ensure.that(LastResponse.body<UserDetailResponse>().user.birth_day, equals(account.birth_date.toString())),
        Ensure.that(LastResponse.body<UserDetailResponse>().user.birth_month, equals(account.birth_month.toString())),
        Ensure.that(LastResponse.body<UserDetailResponse>().user.birth_year, equals(account.birth_year.toString())),
        Ensure.that(LastResponse.body<UserDetailResponse>().user.first_name, equals(account.firstname)),
        Ensure.that(LastResponse.body<UserDetailResponse>().user.last_name, equals(account.lastname)),
        Ensure.that(LastResponse.body<UserDetailResponse>().user.company, equals(account.company)),
        Ensure.that(LastResponse.body<UserDetailResponse>().user.address1, equals(account.address1)),
        Ensure.that(LastResponse.body<UserDetailResponse>().user.address2, equals(account.address2)),
        Ensure.that(LastResponse.body<UserDetailResponse>().user.country, equals(account.country)),
        Ensure.that(LastResponse.body<UserDetailResponse>().user.zipcode, equals(account.zipcode)),
        Ensure.that(LastResponse.body<UserDetailResponse>().user.state, equals(account.state)),
        Ensure.that(LastResponse.body<UserDetailResponse>().user.city, equals(account.city)),
    )
