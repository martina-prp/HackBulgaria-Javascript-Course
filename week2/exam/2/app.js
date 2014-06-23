"use strict";

$(document).ready(function() {
  var miliseconds,
    countUpId = null,
    countDownId = null,
    countUpMin,
    countUpSec,
    countDownTimeOutId,
    countUpTimeOutId,
    countDownMin,
    countDownSec,
    minFirstDigit = $("#minute-first-digit"),
    minSecondDigit = $("#minute-second-digit"),
    secFirstDigit = $("#second-first-digit"),
    secSecondDigit = $("#second-second-digit");

  $("#counting-up").click(function() {
    var min = $("#minutes").val(),
    sec = $("#seconds").val();
    countDownMin = 0;
    countUpSec = 0;

    miliseconds = min * 60 * 1000 + sec * 1000;
    resetTimer();
    countUpId = setInterval(countUp, 1000);
    countUpTimeOutId = setTimeout(function() { clearInterval(countUpId); countUpId = null; }, miliseconds);
  });

  $("#counting-down").click(function() {
    countDownMin = $("#minutes").val();
    countDownSec = $("#seconds").val();
    if (countDownMin === "") {
      countDownMin = 0;
    }
    displayTime(countDownMin, countDownSec);

    miliseconds = countDownMin * 60 * 1000 + countDownSec * 1000;
    resetTimer();
    countDownId = setInterval(countDown, 1000);
    countDownTimeOutId = setTimeout(function() { clearInterval(countDownId); countDownId = null; }, miliseconds);
  });

  $(".btn-danger").click(function() {
    resetTimer();
  });

  var countUp = function() {
      countUpSec += 1;
      if (countUpSec === 60) {
        countUpSec = 0;
        countUpMin =+ 1 ;
      }
      displayTime(countUpMin, countUpSec);
    };

    var countDown = function() {
      countDownSec -= 1;
      if (countDownSec === -1 && countDownMin !== -1) {
        countDownSec = 59;
        countDownMin -= 1;
      }
      displayTime(countDownMin, countDownSec);
    };

    var displayTime = function(min, sec) {
      if (sec < 10) {
        secFirstDigit.html("0");
        secSecondDigit.html(sec);
      }
      else {
        var seconds = sec.toString().split("");
        secFirstDigit.html(seconds[0]);
        secSecondDigit.html(seconds[1]);
      }

      if (min < 10) {
        minFirstDigit.html("0");
        minSecondDigit.html(min);
      }
      else {
        var minutes = min.toString().split("");
        minFirstDigit.html(minutes[0]);
        minSecondDigit.html(minutes[1]);
      }
    };

    var resetTimer = function() {
      if (countUpId !== null && countUpTimeOutId !== null) {
        clearInterval(countUpId);
        clearTimeout(countUpTimeOutId);
        countUpId = null;
        countUpTimeOutId = null;
        displayTime(0, 0);
      }
      if (countDownId !== null && countDownTimeOutId !== null) {
        clearInterval(countDownId);
        clearTimeout(countDownTimeOutId);
        countDownId = null;
        countDownTimeOutId = null;
        displayTime(0, 0);
      }
    };
});
