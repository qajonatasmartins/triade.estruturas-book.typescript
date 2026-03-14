import { CallAnApi } from '@serenity-js/rest'

/**
 * Ability que configura o ator para chamar a API do Automation Exercise.
 * Usado para pré-setup (CT-04, CT-07) e validação (CT-05).
 *
 * @param baseUrl - Base URL da API (ex: process.env.API_URL)
 * @returns CallAnApi ability configurada
 */
export const ChamarAutomationExerciseAPI = {
    atBaseUrl: (baseUrl: string) => CallAnApi.at(baseUrl),
}
