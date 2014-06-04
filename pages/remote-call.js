"use strict";

var BigPipe = require('bigpipe')
;

BigPipe.Page.extend({
    path: '/remote-call',
    view: '../views/test.ejs',
    pagelets: {
      "thepagelet" : "../pagelets/remote-call/"
    }
}).on(module);
