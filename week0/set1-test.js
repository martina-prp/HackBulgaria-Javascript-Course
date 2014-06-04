"use strict";

var fib = require("./set1").fib;
var sum_of_digits = require("./set1").sum_of_digits;
var sum_of_min_and_max = require("./set1").sum_of_min_and_max;
var sum_of_divisors = require("./set1").sum_of_divisors;
var is_prime = require("./set1").is_prime;
var prime_number_of_divisors = require("./set1").prime_number_of_divisors;

exports.testFibAllCases = function(test) {
  test.equal(1, fib(1));
  test.equal(1, fib(2));
  test.equal(2, fib(3));
  test.equal(55, fib(10));
  test.done();
};

exports.testSumOfdigits = function(test) {
  test.equal(43, sum_of_digits(1325132435356));
  test.equal(6, sum_of_digits(123));
  test.equal(6, sum_of_digits(6));
  test.equal(1, sum_of_digits(-10));
  test.done();
};

exports.testSumOfMinAndMax = function(test) {
  test.equal(10, sum_of_min_and_max([1,2,3,4,5,6,8,9]));
  test.equal(90, sum_of_min_and_max([-10,5,10,100]));
  test.equal(2, sum_of_min_and_max([1]));
  test.done();
};

exports.testSumOfdivisors = function(test) {
  test.equal(15, sum_of_divisors(8));
  test.equal(8, sum_of_divisors(7));
  test.equal(1, sum_of_divisors(1));
  test.equal(2340, sum_of_divisors(1000));
  test.done();
};

exports.testIsPrime = function(test) {
  test.equal(false, is_prime(1));
  test.equal(true, is_prime(2));
  test.equal(false, is_prime(8));
  test.equal(true, is_prime(11));
  test.equal(false, is_prime(-10));
  test.done();
};

exports.testPrimeNumberOfDivisors = function(test) {
  test.equal(true, prime_number_of_divisors(7));
  test.equal(false, prime_number_of_divisors(8));
  test.equal(true, prime_number_of_divisors(9));
  test.done();
};
