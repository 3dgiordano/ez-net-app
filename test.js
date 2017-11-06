var webdriverio = require('webdriverio');
var options = {
    desiredCapabilities: {
        tags:["one","two","3"]       
}
};
webdriverio
    .remote(options)
    .init()
    .pause(2000)
    .end().catch(function (e) {
        console.error(e.stack);
    });
    
