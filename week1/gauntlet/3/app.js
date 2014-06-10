'use strict';

$(document).ready(function() {
  var imgUrl,
  img = [];

  $('#search-button').on('click', function() {
    imgUrl = $('#search-input').val();
    img = ['<img ',
            'src = ',
            imgUrl,
            //'onerror="alert("The image could not be loaded.")"',
            '/>'
          ];
    $('.place-image').append(img.join(' '));
  });

  $('.place-image').on('click', 'img', function() {
    $(this).remove();
  });
});
