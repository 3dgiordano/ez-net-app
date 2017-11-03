var webdriverio = require('webdriverio');
var options = {
    logLevel: 'verbose',
    services: ['sauce'],
    user: process.env.SAUCE_USERNAME,
    key: process.env.SAUCE_ACCESS_KEY,
    desiredCapabilities: {
        app: process.env.TRAVIS_BUILD_DIR + '/android/app/build/outputs/apk/app-debug.apk', 
        platformName: 'Android',
        'tunnel-identifier': process.env.TRAVIS_JOB_NUMBER
    }
};
webdriverio
    .remote(options)
    .init()
    .end();
    
