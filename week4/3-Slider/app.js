'use strict';

var imageSearch;
$(document).ready(function() {
  $('.load-image').on('click', function(event) {
    event.preventDefault();
    var string = $('.input-lg').val();
    loadImages(string);
    //google.setOnLoadCallback(function() {loadImages(string); });
  });
});

function searchComplete() {
  var count = 0;
  var imgTag = document.getElementById('current-image');
  imgTag.setAttribute('src', imageSearch.results[0].url);
  imgTag.setAttribute('data-current-id', 0);

  $('.right').on('click', function(event) {
    event.preventDefault();
    count += 1;
    if (typeof imageSearch.results[count]!== 'undefined') {
      imgTag.setAttribute('src', imageSearch.results[count].url);
      imgTag.setAttribute('data-current-id', count);
    }
  });

  $('.left').on('click', function(event) {
    event.preventDefault();
    count = imgTag.getAttribute('data-current-id');
    count -= 1;
    if (typeof imageSearch.results[count]!== 'undefined') {
      imgTag.setAttribute('src', imageSearch.results[count].url);
      imgTag.setAttribute('data-current-id', count);
    }
  });
}

function loadImages(string) {
  imageSearch = new google.search.ImageSearch();

  imageSearch.setSearchCompleteCallback(this, searchComplete, null);

  imageSearch.execute(string);
}
