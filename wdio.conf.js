exports.config = {
    specs: [
        path.join(__dirname, './test.js')
    ],
    logLevel: 'verbose',
    services: ['sauce'],
    user: process.env.SAUCE_USERNAME,
    key: process.env.SAUCE_ACCESS_KEY
};
