'use strict';

$(document).ready(function() {
  var generateLen = randomNumber(2, 9);
  var generateNumber = randomNumberLen(generateLen);
  var generatedNumber = generateNumber.split('');
  var n = '',
      currentLen = 0;

  $('.type-number').text(generateNumber);

  $('.num').on('click', function(event) {
    event.preventDefault();
    var num = $(this).text();
    n = $('.entered-number').text();
    console.log(generatedNumber);
    if (num === generatedNumber[0]) {
      generatedNumber.shift();
    }
    n += num;

    $('.entered-number').text(n);

    if (generatedNumber.length === 0) {
    alert('Success!');
    generateLen = randomNumber(2, 9);
    generateNumber = randomNumberLen(generateLen);
    generatedNumber = generateNumber.split('');
    $('.type-number').text(generateNumber);
  }
  })

  $('.btn-back').on('click', function(event) {
    event.preventDefault();
    var backN = n.substring(0, n.length-1);
    $('.entered-number').text(backN);
    currentLen = backN.length;
    var backS = generateNumber.substring(currentLen, generateNumber.length);
    generatedNumber = backS.split('');
  });
});

function randomNumber(min, max) {
  return Math.floor(Math.random() * (max - min + 1) + min);
}

function randomNumberLen(len) {console.log(len);
  var number = '';
  for(var i = 0; i < len; i++) {
    number += randomNumber(0, 9);
  }
  return number;
}
