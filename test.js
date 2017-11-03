var webdriverio = require('webdriverio');
var options = {
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
    
