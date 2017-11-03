var webdriverio = require('webdriverio');
var options = {
    desiredCapabilities: {
        logLevel: 'verbose',
        app: process.env.TRAVIS_BUILD_DIR + '/android/app/build/outputs/apk/app-debug.apk', 
        platformName: 'Android'
    }
};
webdriverio
    .remote(options)
    .init()
    .pause(2000)
    .end().catch(function (e) {
        console.error(e.stack);
    });
    
