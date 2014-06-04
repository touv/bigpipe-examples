'use strict';

var BigPipe = require('bigpipe')
;

BigPipe.Page.extend({
    path: '/',
    view: '../views/root.ejs',
    data: {
      examples: {
        'push-data' : 'How to push data from server to pagelet',
        'remote-call' : 'How to call a server method (ajax)',
        'post-form' : 'How to post data from HTML Form ',
        'unknown-page' : 'How to define the "not found" page',
        'deliberate-error' : 'How to define the "internal server error" page'
      }
    }
}).on(module)

