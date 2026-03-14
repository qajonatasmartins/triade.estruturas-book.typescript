import * as dotenv from 'dotenv'
import { config as sharedConfig } from '@/config/wdio.conf'

dotenv.config({ path: '.env', quiet: true })

export const config = {
    ...sharedConfig,

    maxInstances: 10,
    capabilities: [{
        browserName: 'firefox',
        'moz:firefoxOptions': {
            args: ['-headless'],
            prefs: {
                'privacy.trackingprotection.enabled': true,
                'dom.webnotifications.enabled': false,
                'dom.push.enabled': false,
                'permissions.default.desktop-notification': 2
            }
        }
    }],
}
