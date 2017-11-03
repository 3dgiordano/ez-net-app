const path = require('path');

exports.config = {
    specs: [
        path.join(__dirname, './test.js')
    ],
    exclude: [
    ],
    maxInstances: 1,
    sync: true,
    coloredLogs: true,
    logLevel: 'verbose',
    baseUrl: 'http://localhost:3000',
    waitforTimeout: 10000,
    connectionRetryTimeout: 300000,
    connectionRetryCount: 3,
    framework: 'mocha',
    reporters: [
      'junit',
      'spec'
    ],
    reporterOptions: {
      outputDir: './artifacts/test'
    },
    mochaOpts: {
        ui: 'bdd'
    },
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
    capabilities: [
    ]
};
