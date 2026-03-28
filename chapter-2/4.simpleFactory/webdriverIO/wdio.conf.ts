import * as dotenv from 'dotenv';
dotenv.config({ path: '.env', quiet: true });

export const config: WebdriverIO.Config = {
  runner: 'local',
  tsConfigPath: './tsconfig.json',
  specs: ['./tests/specs/**/*.ts'],
  maxInstances: 1,
  capabilities: [
    {
      browserName: 'chrome',
      'goog:chromeOptions': {
        args: [
          'headless',
          'disable-gpu'
        ],
      },
    },
  ],
  logLevel: 'error',
  waitforTimeout: 10000,
  connectionRetryTimeout: 120000,
  connectionRetryCount: 3,
  framework: 'mocha',
  reporters: ['spec'],
  mochaOpts: {
    ui: 'bdd',
    timeout: 60000,
  },
  baseUrl: process.env.BASE_URL ?? 'http://localhost:3333',
};
