"use strict";

var BigPipe = require('bigpipe')
;

BigPipe.Page.extend({
    path: '/deliberate-error',
    view: '../views/test.ejs',
    initialize: function() {
      throw new Error('This is an internal error !');
    }
     
}).on(module);
