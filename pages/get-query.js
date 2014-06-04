"use strict";

var BigPipe = require('bigpipe')
;

BigPipe.Page.extend({
    path: '/get-query',
    view: '../views/test.ejs',
    pagelets: {
      "thepagelet" : "../pagelets/get-query/"
    } 
}).on(module);
