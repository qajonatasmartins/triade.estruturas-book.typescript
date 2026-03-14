import type { WebdriverIOConfig } from '@serenity-js/webdriverio'
import * as dotenv from 'dotenv'
dotenv.config({ path: '.env', quiet: true })

//@ts-ignore
export const config: WebdriverIOConfig = {
    runner: 'local',
    tsConfigPath: './tsconfig.json',

    specs: [
        '../../tests/**/**/**.spec.ts'
    ],
    exclude: [],

    maxInstances: 10,

    logLevel: 'error',

    bail: 0,

    waitforTimeout: 90000,
    connectionRetryTimeout: 120000,
    connectionRetryCount: 3,

    framework: '@serenity-js/webdriverio',

    serenity: {
        runner: 'mocha',
        crew: [
            '@serenity-js/console-reporter',
            ['@serenity-js/serenity-bdd', { specDirectory: 'tests' }],
            ['@serenity-js/core:ArtifactArchiver', { outputDirectory: 'target/site/serenity' }],
            ['@serenity-js/web:Photographer', {
                strategy: 'TakePhotosOfFailures'
            }],
        ]
    },

    specFileRetries: 1,
    specFileRetriesDelay: 5,

    reporters: ['spec'],

    mochaOpts: {
        timeout: 900000
    },

    before: async function (capabilities, specs) {
        await browser.maximizeWindow()
    },
}
