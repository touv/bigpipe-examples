'use strict';
 var BigPipe = require('bigpipe')
 ;

BigPipe.Pagelet.extend({
  view: 'view.ejs',
  streaming: true,
  get: function(render) {
    var pagelet = this;
    render(null, { levels: [ 
          pagelet.params.level1, 
          pagelet.params.level2 
        ]
      }
    );
  }
}).on(module);
