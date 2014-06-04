"use strict";

var Pagelet = require('bigpipe').Pagelet
;

Pagelet.extend({
    view: './view.ejs',
    js: './client.js',
    dependencies: [
      'http://code.jquery.com/jquery-2.1.1.min.js'
    ],
    get: function(render) {
      var pagelet = this;
      render(undefined, {});

      setTimeout(function() {
          console.log('substream', pagelet.substream);
          pagelet.substream.write({ prop: 'hi there', other: 'hello' });
      }, 3000);

    }
}).on(module);
