"use strict";

var students = [{
  "name" : "Daniel Taskoff",
  "course" : "Frontend JavaScript"
}, {
  "name" : "Elena Jeleva",
  "course" : "Programming 101"
}, {
  "name" : "Luboslava Dimitrova",
  "course" : "Frontend JavaScript"
}, {
  "name" : "Anton Antonov",
  "course" : "Core Java"
}, {
  "name" : "Nikola Dichev",
  "course" : "Core Java"
}],

groupResult = { "Frontend JavaScript":
   [ { name: "Daniel Taskoff", course: "Frontend JavaScript" },
     { name: "Luboslava Dimitrova", course: "Frontend JavaScript" } ],
  "Programming 101": [ { name: "Elena Jeleva", course: "Programming 101" } ],
  "Core Java":
   [ { name: "Anton Antonov", course: "Core Java" },
     { name: "Nikola Dichev", course: "Core Java" } ] };

var f = require("./throws").f;
var sum = require("./throws").sum;
var concat = require("./throws").concat;
var contains = require("./throws").contains;
var containsAll = require("./throws").containsAll;
var groupBy = require("./throws").groupBy;

exports.testThrows = function(test) {
  test.throws(function() {
    f();
  });
  test.done();
};

exports.testSumThrows = function(test) {
  test.throws(function() {
    sum("2", "b");
  });
  // test.throws(sum("2", "b"), Error); ???
  test.done();
};

exports.testSum = function(test) {
  test.equal(10, sum(4, 6));
  test.done();
};


exports.testConcatThrows = function(test) {
  test.throws(function() {
    concat(2, [1, 2, 3]);
  });
  test.done();
};

exports.testConcat = function(test) {
  test.equal("aB", concat("a", "B"));
  test.done();
};

exports.testContains = function(test) {
  test.equal(true, contains(3, ["a", 1, 2, 3]));
  test.equal(false, contains(3, ["a", 2, "abv", 1, 4, 34]));
  test.equal(true, contains("test", ["2", 34, 5, "test", "nanan"]));
  test.done();
};

exports.testContainsAll = function(test) {
  test.equal(true, containsAll([1, 2, 3], [1, 2, 3]));
  test.equal(false, containsAll([1, 2, 3, 4], [1, 2, 3]));
  test.equal(true, containsAll([1, 2, 3], [1, 2, 3, 4]));
  test.done();
};

exports.groupBy = function(test) {
  test.deepEqual(groupResult,
    groupBy(function(student) {
      return student.course;
    }, students));

  test.deepEqual({"odd": [1, 3, 5], "even": [2, 4, 6]}, groupBy(function(x) {
    if (x % 2 === 0) {
      return "even";
    }
    else {
      return "odd";
    }
  },[1, 2, 3, 4, 5, 6]));
  test.done();
};
