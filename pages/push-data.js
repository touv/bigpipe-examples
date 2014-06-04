"use strict";

var BigPipe = require('bigpipe')
;

BigPipe.Page.extend({
    path: '/push-data',
    view: '../views/test.ejs',
    pagelets: {
      "thepagelet" : "../pagelets/push-data/"
    } 
}).on(module);
