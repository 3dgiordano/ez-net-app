var webdriverio = require('webdriverio');
var options = {
    desiredCapabilities: {
        browserName: 'firefox',
        'tunnel-identifier': process.env.TRAVIS_JOB_NUMBER
    }
};
webdriverio
    .remote(options)
    .init()
    .url('http://www.google.com')
    .getTitle().then(function(title) {
        console.log('Title was: ' + title);
    })
    .end();
    
