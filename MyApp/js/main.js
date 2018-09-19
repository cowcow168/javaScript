(function() {
  'use strict';

  var open = document.getElementById('open');
  var close = document.getElementById('close');
  var modal = document.getElementById('modal');
  var mask = document.getElementById('mask');

  open.addEventListener('click', function() {
    modal.className = '';
    mask.className = '';
  });

  close.addEventListener('click', function() {
    modal.className = 'hidden';
    mask.className = 'hidden';
  });

  mask.addEventListener('click', function() {
    // modal.className = 'hidden';
    // mask.className = 'hidden';
    close.click();
  });
})();

//宝探し
(function() {
  'use strict';

  var boxes = document.getElementsByClassName('box');

  var contents = [
    'coin.png',
    'empty.png',
    'cobra.png'
  ];

  function init() {
    var i;
    for (i = 0; i < boxes.length; i++) {
      boxes[i].addEventListener('click', function() {
        var j;
        if (this.className.indexOf('shake') === -1) {
          return;
        }
        for (j = 0; j < boxes.length; j++) {
          boxes[j].src = 'img/' + contents[Math.floor(Math.random() * contents.length)];
          boxes[j].className = 'box disabled';
        }
        this.className = 'box';
        document.getElementById('btn').className = '';
      });
    }
  }

  init();
})();
