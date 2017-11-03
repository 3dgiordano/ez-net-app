const path = require('path');

exports.config = {
    specs: [
        path.join(__dirname, './test.js')
    ],
    logLevel: 'verbose',
    services: ['sauce'],
    user: process.env.SAUCE_USERNAME,
    key: process.env.SAUCE_ACCESS_KEY,
    sauceConnect: true,
    sauceConnectOpts: {
        verbose: true,
        verboseDebugging: true,
        vv: true,
        doctor: true,
        tunnelIdentifier: process.env.TRAVIS_JOB_NUMBER
    },
    capabilities: [{
        
    }],

};
