"use strict";

var BigPipe = require('bigpipe')
;

BigPipe.Page.extend({
    path: '/500',
    view: '../views/500.ejs'
}).on(module);
