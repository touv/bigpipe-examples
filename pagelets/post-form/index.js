'use strict';
 var BigPipe = require('bigpipe')
 ;

BigPipe.Pagelet.extend({
  view: 'view.ejs',
  streaming: true,
  inputdata: 'Initial value',
  get: function(render) {
    render(null, { inputdata: this.inputdata });
  },
  post: function(body, files, next) {
    this.inputdata  = body.truc || 'Empty value';
    next();
  }
}).on(module);
