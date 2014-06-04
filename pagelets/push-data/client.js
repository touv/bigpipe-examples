/* should not be empty */

pipe.once('thepagelet:initialize', function init(pagelet) {
    'use strict';
    $('#serverresponse').text('...');
    pagelet.substream.on('data', function (data) { 
        $('#serverresponse').text(data);
    });
  }
);
