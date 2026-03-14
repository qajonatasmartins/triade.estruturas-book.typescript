import { Task, the } from '@serenity-js/core'
import { Ensure, equals } from '@serenity-js/assertions'
import { LastResponse, PostRequest, Send } from '@serenity-js/rest'
import { stringify } from 'querystring'
import type { ICreateAccount } from '@/interface/interfaces'

/**
 * Task que cria uma conta via API (POST createAccount).
 * Requer ator com ChamarAutomationExerciseAPI.
 */
export const CriarContaViaAPI = (account: ICreateAccount) =>
    Task.where(
        the`#actor cria conta via API para ${account.email}`,
        Send.a(
            PostRequest.to('createAccount')
                .with(
                    stringify({
                        name: account.name,
                        email: account.email,
                        password: account.password,
                        title: account.title,
                        birth_date: account.birth_date,
                        birth_month: account.birth_month,
                        birth_year: account.birth_year,
                        firstname: account.firstname,
                        lastname: account.lastname,
                        company: account.company,
                        address1: account.address1,
                        address2: account.address2,
                        country: account.country,
                        zipcode: account.zipcode,
                        state: account.state,
                        city: account.city,
                        mobile_number: account.mobile_number,
                    })
                )
                .using({
                    headers: {
                        'Content-Type': 'application/x-www-form-urlencoded',
                    },
                })
        ),
        Ensure.that(LastResponse.status(), equals(200))
    )
