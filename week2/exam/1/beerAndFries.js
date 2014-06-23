'use strict';

var beerAndFries = function(items) {
  var scores = [],
    beer =[],
    fries = [];

  if (items.length === 0) {
    return 0;
  }

  items.forEach(function(item) {
    if (item.type === 'beer') {
      beer.push(item.score);
    }
    else {
      fries.push(item.score);
    }
  });

  beer.sort(function(a, b) {
    return b - a;
  });
  fries.sort(function(a, b) {
    return b - a;
  });
  scores = beer.map(function(element, index) {
    return element * fries[index];
  });

  return  scores.reduce(function(previous, next) {
    return previous + next;
  });
};

exports.beerAndFries = beerAndFries;
