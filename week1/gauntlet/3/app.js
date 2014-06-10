'use strict';

$(document).ready(function() {
  var imgUrl,
  img = [];

  /*function onImageClick() {
    console.log('test');
  }*/

  $('#search-button').on('click', function() {
    imgUrl = $('#search-input').val();
    img = ['<img ',
            'src = ',
            imgUrl,
            //'onclick =',
            //'"onImageClick()"',
            '/>'
          ];
    $('.place-image').append(img.join(' '));
  });
  var t = $('img'); console.log(t);
});
