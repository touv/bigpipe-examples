"use strict";

var BigPipe = require('bigpipe')
;

BigPipe.Page.extend({
    path: '/get-params/:level1/:level2/',
    view: '../views/test.ejs',
    pagelets: {
      "thepagelet" : "../pagelets/get-params/"
    } 
}).on(module);
