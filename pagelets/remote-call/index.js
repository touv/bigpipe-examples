"use strict";

var Pagelet = require('bigpipe').Pagelet
;
;

Pagelet.extend({
    view: './view.ejs',
    js: './client.js',
    dependencies: [
      'http://code.jquery.com/jquery-2.1.1.min.js'
    ],
    RPC: [ 'serverDoesSomething' ],
    counter: 0,
    get: function(render) {
      render(undefined, {});
    },
    serverDoesSomething: function (reply, arg1) {
      this.counter++;
      reply(undefined, arg1 + this.counter );
    }
}).on(module);
