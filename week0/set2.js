"use strict";
// TODO: make tests;

var info = {
  "name" : "Rado",
  "age" :23
};

var forEach = function(f, sth) {
  var i = 0,
    n = sth.length,
    key;

  if (Array.isArray(sth)) {
    for (i; i < n; i++) {
      f(sth[i], i, sth);
    }
  }
  else {
    for (key in sth) {
      f(sth[key], key);
    }
  }
};

forEach(function(value, key) { console.log(key + " - " + value); }, info);
forEach(function(value, key) { console.log(key + " - " + value); }, [1, 3, 5]);


var format = function(str, dict) {
  forEach(function (value, key) {
      str = str.replace("{" + key + "}", value);
    },
    dict
  );
  return str;
};

var formatted = format("{lang} is a very weird {thing}!", {
  "lang" : "JavaScript",
  "thing" : "language"
});
console.log(formatted);

var map = function(f, arr) {
var result = [];

    arr.forEach(function(value) {
        result.push(f(value));
    });

    return result;
};

var result = map(function(x) {
    return x * x;
}, [1,2,3]);
console.log(result);

var users = [{
    "name" : "Rado",
    "score" : 50
}, {
    "name" : "Ivan",
    "score" : 67
}, {
    "name" : "Vlado",
    "score" : 30
}];

var filter = function(pred, arr) {
  var result = [];

  arr.forEach(function(value) {
    if (pred(value)) {
      result.push(value);
    }
  });
  return result;
};

var result = filter(function(user) {
    return user.score > 40;
}, users);
console.log(result);

var reduce = function(oper, arr, start) {
  var result = start;
  arr.forEach(function(value) {
    result = oper(result, value);
  });

  return result;
};

var sum = function(arr) {
    return reduce(function(acc, next) {
        return acc + next;
    }, arr, 0);
};
console.log(sum([1, 2, 3]));

var any = function(pred, arr) {
  var isTrue = false;
  arr.forEach(function(value) {
    if (pred(value)) {
      isTrue = true;
    }
  });
  return isTrue;
};

console.log(any(function(x) {return x > 5; }, [2, 4, 3, 8, 5, 9]));

var all = function(pred, arr) {
  var result = [],
  n = arr.length;
  if (n === 0) {
    return false;
  }
  result = arr.filter(pred, arr);
  if (n !== result.length) {
    return false;
  }
  return true;
};
console.log(all(function(x) {return x > 5; }, [2, 4, 3, 8, 5, 9]));
console.log(all(function(x) {return x > 5; }, [8, 15, 9]));
