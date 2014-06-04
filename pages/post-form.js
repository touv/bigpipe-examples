"use strict";

var BigPipe = require('bigpipe')
;

BigPipe.Page.extend({
    path: '/post-form',
    view: '../views/test.ejs',
    pagelets: {
      "thepagelet" : "../pagelets/post-form/"
    } 
}).on(module);
