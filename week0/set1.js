"use strict";

var fib = function(n) {
  if (n === 1 || n === 2) {
    return 1;
  }
  return fib(n - 1) + fib(n - 2);
};

var sum_of_digits = function(n) {
  var stringN = n.toString();
  var parseN = stringN.split("").filter(
    function(y) { return y !== "-"; }
);

  return parseN.map(function(x) { return parseInt(x, 10); }).reduce(function(a, b) {
    return a+b;
  });

};

var sum_of_min_and_max = function(arr) {
  var n = arr.length;

  arr.sort(function compare(a, b) {
      return a - b;
    }
  );
  return arr[0] + arr[n - 1];

};

var sum_of_divisors = function(n) {
  var arr = [], i = 1;

  for(i; i <= n; i++) {
    if (n % i === 0) {
      arr.push(i);
    }
  }
   return arr.reduce(function(a, b) { return a + b; });
};

var is_prime = function(n) {
  var i = 2;
  if (n === 1) {
    return false;
  }
  if (n < 0) {
    n *= -1;
  }
  for (i; i < n; i++) {
    if (n % i === 0) {
      return false;
    }
  }

  return true;
};

var prime_number_of_divisors = function(n) {
  var arr = [], i = 1, count = 0;

  for(i; i <= n; i++) {
    if (n % i === 0) {
      arr.push(i);
    }
  }

  count = arr.length;
  return is_prime(count);
};

var is_int_palindrome = function(n) {
  console.log(n.split(""));
};
is_int_palindrome();

exports.fib = fib;
exports.sum_of_digits = sum_of_digits;
exports.sum_of_min_and_max = sum_of_min_and_max;
exports.sum_of_divisors = sum_of_divisors;
exports.is_prime = is_prime;
exports.prime_number_of_divisors = prime_number_of_divisors;
