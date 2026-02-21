import * as dotenv from 'dotenv';
import { config as sharedConfig } from "../wdio.conf"
dotenv.config({ path: '.env' });

export const config = {
    ...sharedConfig,

    maxInstances: 10,
    capabilities: [{
        browserName: 'chrome',
        'goog:chromeOptions': {
            args: [
                'headless',
                'disable-gpu']
        }
    }],
    reporters: ['spec']
}
