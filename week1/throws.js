"use strict";

var f = function() {
  throw new TypeError("ERROR!!");
};

var sum = function(a, b) {
  if (typeof a === "number" && typeof b === "number"){
    return a + b;
  }
  else {
    throw new TypeError("Some of the arguments is not a number!");
  }
};

var concat = function(a, b) {
  if (typeof a === "string" && typeof b === "string"){
    return a + b;
  }
  else {
    throw new TypeError("Some of the arguments is not a string!");
  }
};

// Zashto ne stava kato vryshtam napravo true i false v otdelnite sluchai?
var contains = function(element, arr) {
  var n = arr.length,
    result = false;
  if (n === 0) {
    result = false; // return false;
  }

  result = arr.some(function(x) {
    return element === x;
  });

  return result; // return false;
};

var containsAll = function(elements, arr) {
  return elements.every(function(value) {
    return contains(value, arr);
  });
};

var groupBy = function(groupingFunction, arr) {
  var result = {},
    key = "";
  arr.map(function(x) {
    key = groupingFunction(x);
    if (key in result) {
      result[key].push(x);
    }
    else {
      result[key] = [x];
    }
  });
  return result;
};

var countBy = function(countingFunction, arr) {
  var result = {},
    key = "";
  arr.map(function(x) {
    key = countingFunction(x);
    if (key in result) {
      result[key]++;
    }
    else {
      result[key] = 1;
    }
  });
  return result;
};

var always = function(x) {
  return function() { return x;};
};

var only = function(type, arr) {
  return arr.every(function(value) {
    return typeof value  === type;
  });
};

var range = function(from, to) {
  if (from > to) {
    throw new TypeError("Invalid arguments!");
  }
  if (from === to) {
    return [from];
  }
  else if (from < to) {
    return [from].concat(range(from + 1, to));
  }
};

// return v map ???
var find = function(predicate, arr) {
  var result;
  result = arr.filter(predicate);
  return result[0];
};

var without = function(exclude, arr) {
  return arr.filter(function(x) {
    return exclude.every(function(y)
      { return x!== y;
      });
    });
};

exports.f = f;
exports.sum = sum;
exports.concat = concat;
exports.contains= contains;
exports.containsAll = containsAll;
exports.groupBy = groupBy;
exports.countBy = countBy;
exports.always = always;
exports.only = only;
exports.range = range;
exports.find = find;
exports.without = without;
