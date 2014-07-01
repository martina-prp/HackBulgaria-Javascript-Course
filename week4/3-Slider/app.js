'use strict';

var imageSearch, images = [];
$(document).ready(function() {
  $('.load-image').on('click', function(event) {
    event.preventDefault();
    var string = $('.input-lg').val();
    loadImages(string);
    console.log(images);
    //google.setOnLoadCallback(function() {loadImages(string); });
  });
});

function searchComplete() {
  //console.log(images);
  //var imgTag = document.getElementById('current-image');
  //console.log(imgTag);
 //console.log(images.results[0].url);
  //imgTag.setAttribute('src', images.results[0].url);
  images = imageSearch.results;
console.log(images);
}

function loadImages(string) {
  imageSearch = new google.search.ImageSearch();

  imageSearch.setSearchCompleteCallback(this, searchComplete, null);

  imageSearch.execute(string);
}
