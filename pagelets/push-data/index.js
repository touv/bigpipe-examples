"use strict";

var Pagelet = require('bigpipe').Pagelet
;
;

Pagelet.extend({
    view: './view.ejs',
    js: './client.js',
    data: { msg : 'OK' },
    get: function(render) {
      var pagelet = this;

      render(undefined, {msg: 'OK'});
      setTimeout(function() {
          pagelet.substream.write({ prop: 'hi there', other: 'hello' });
        }, 5000);
    },
}).on(module);
