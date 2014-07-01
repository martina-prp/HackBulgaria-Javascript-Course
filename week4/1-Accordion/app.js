'use strict';

$(document).ready(function() {
  $('.accordion').find('dd').hide();

  $('a').on('click', function(event) {
    event.preventDefault();
    var id = $(this).parent().next().attr('id');
    $('#' + id).siblings().filter('dd').hide();
    $(this).parent().next().slideToggle()('slow');
  });
});
