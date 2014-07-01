'use strict';

$(document).ready(function() {
  $('div').not('#tab1').hide();
  $('a').on('click', function(event) {
    event.preventDefault();
    var id = $(this).attr('id');
    $('a').removeAttr('style');
    $(this).css('background-color', 'red');
    $('div').removeClass('active');
    $('div#' + id).addClass('active');
    $('.active').siblings().filter('div').hide();
    $('div.active').show();
  });
});
