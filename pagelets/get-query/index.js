'use strict';
var BigPipe = require('bigpipe')
;

BigPipe.Pagelet.extend({
    view: 'view.ejs',
    fields : [],
    authorize: function authorize(req, done) {
      console.log('req', req);
      this.fields[0] = req.query.field1 || 'empty field';
      this.fields[1] = req.query.field2 || 'empty field';
      done(true); 
    },
    get: function(render) {
      render(null, { fields: this.fields });
    }
}).on(module);
