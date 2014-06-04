/* should not be empty */

pipe.once('thepagelet:initialize', function init(pagelet) {
    'use strict';

    $('#clickme').click(function() {
        pagelet.serverDoesSomething('Echo', function(err, data) {
            $('#serverresponse').text(data);
          }
        );
      }
    );
  }
);
