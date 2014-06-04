"use strict";

var BigPipe = require('bigpipe')
;

BigPipe.Page.extend({
    path: '/404',
    view: '../views/404.ejs'
}).on(module);
