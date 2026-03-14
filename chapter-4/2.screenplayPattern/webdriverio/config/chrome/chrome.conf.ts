import * as dotenv from 'dotenv'
import { config as sharedConfig } from '@/config/wdio.conf'

dotenv.config({ path: '.env', quiet: true })

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
}
