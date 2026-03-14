import { Task, the } from '@serenity-js/core'
import { FazerSignup } from '@/tasks/FazerSignup'
import { PreencherSignupCompleto } from '@/tasks/PreencherSignupCompleto'
import type { ISignup } from '@/interface/interfaces'

/**
 * Task para cadastrar uma conta na plataforma (fluxo completo: signup inicial + formulário)
 */
export const CadastrarConta = (signupData: ISignup) =>
    Task.where(
        the`#actor cadastra a conta com email ${signupData.email}.`,
        FazerSignup(signupData.name, signupData.email),
        PreencherSignupCompleto(signupData),
    )
