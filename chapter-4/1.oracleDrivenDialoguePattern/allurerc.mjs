import { defineConfig } from "allure";
/**
 * Configuração para o Allure.
 * https://allurereport.org/docs/v3/configure/
 */
export default defineConfig({
    name: "Allure Report Config - Automated E2E Tests",
    historyPath: "./reports/test-history/allure-history.jsonl",
    // plugins: {
    //     dashboard: {
    //         options: {
    //             reportName: "Allure Report Config - Automated E2E Tests",
    //             reportLanguage: "pt",
    //         }
    //     },
    // },
    qualityGate: {
        rules: [
            {
                /* Conjunto de regras para falha rápida */
                id: "fast-failing ruleset",
                maxFailures: 5,
                fastFail: true,
            },
            {
                /* Conjunto de regras para taxa de sucesso */
                id: "success rate ruleset",
                successRate: 0.95,
            },
        ],
    },
})