/* should not be empty */

pipe.once('pageletest:initialize', function init(pagelet) {
    'use strict';
    console.log('initialize');
    pagelet.substream.on('data', function (data) { console.log('push', data) });
  }
);

pipe.on('pageletest:render', function render(pagelet) {
    console.log('render');
    pagelet.substream.on('data', function (data) { console.log('push', data) });
});
