'use strict';

$(document).ready(function() {
 var n = $('#mightyParagraphHolder p').length,
  counter = 0;

  $('button').on('click', function() {
    $('p').removeClass('highlight');
    $('p').each(function(index, element) {
      if (counter === index) {
        $(element).addClass('highlight');
      }
    });
    counter += 1;
    if (counter === n) {
      counter = 0;
    }
  });
});
