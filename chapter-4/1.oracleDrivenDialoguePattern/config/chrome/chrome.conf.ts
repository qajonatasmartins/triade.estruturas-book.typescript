import * as dotenv from 'dotenv';
import { config as sharedConfig } from "@/config/wdio.conf"
import path from 'node:path';
import os from 'node:os';
dotenv.config({ path: '.env', quiet: true });

export const config = {
    ...sharedConfig,

    maxInstances: 10,
    capabilities: [{
        browserName: 'chrome',
        'goog:chromeOptions': {
            args: [
                'headless',
                'disable-gpu',
                '--disable-extensions',
                '--disable-infobars',
                '--disable-popup-blocking',
                '--disable-notifications',
                '--start-maximized'
            ]
        }
    }],
    reporters: [
        "spec",
        [
            "allure",
            {
                outputDir: path.resolve(process.cwd(), "reports/local/chrome/"),
                disableWebdriverStepsReporting: true,
                disableWebdriverScreenshotsReporting: false,
                reportedEnvironmentVars: {
                    os_platform: os.platform(),
                    os_release: os.release(),
                    os_version: os.version(),
                    node_version: process.version,
                },
            },
        ],
    ],
}
