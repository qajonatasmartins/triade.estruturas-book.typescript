import * as dotenv from 'dotenv';
import { config as sharedConfig } from "../wdio.conf"
import path from 'node:path';
import os from 'node:os';
dotenv.config({ path: '.env', quiet: true });

export const config = {
    ...sharedConfig,

    maxInstances: 10,
    capabilities: [{
        browserName: 'firefox',
        'moz:firefoxOptions': {
            args: ['-headless'],
            prefs: {
                // Bloqueia janelas pop-up
                'dom.disable_open_during_load': true,
                // Ativa a proteção contra rastreamento (ajuda a barrar alguns ads)
                'privacy.trackingprotection.enabled': true,
                'privacy.trackingprotection.pbmode.enabled': true,
                // Desativa notificações (que muitas vezes parecem ads)
                'permissions.default.desktop-notification': 2,
            }
        }
    }],
    reporters: [
        "spec",
        [
            "allure",
            {
                outputDir: path.resolve(process.cwd(), "reports/local/firefox/"),
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
