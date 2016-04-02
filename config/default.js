'use strict';
var uuid = require('node-uuid');

module.exports = {
    execMap: {
        py: 'python',
        rb: 'ruby'
    },
    session: {
        secret: uuid.v1(),
        resave: false,
        saveUninitialized: false
    },
    websocket: {
        port: 13337
    },
    http: {
        port: process.env.PORT || 8111
    },
    https: {
        port: 8443
    },
    log: {
        level: 'error'
    },
    csp: {
        'default-src': '\'self\'',
        'script-src':  '\'self\' \'unsafe-eval\' cdnjs.cloudflare.com',
        'font-src':    '\'self\' fonts.gstatic.com data:'
    }
};
