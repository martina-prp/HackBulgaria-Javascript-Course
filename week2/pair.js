'use strict';

function Pair(left, right) {
  if (!(this instanceof Pair)) {
    return new Pair(left, right);
  }

  this.left = left;
  this.right = right;
}



Pair.prototype.equals = function(pair) {
  if (!(this instanceof Pair)) {
    throw new TypeError('Should be Pair');
  }
  if (this.left === pair.left && this.right === pair.right) {
    return true;
  }
  return false;
};

Pair.prototype.toString = function() {
  if (!(this instanceof Pair)) {
    throw new TypeError('Should be Pair');
  }
  return '({' + this.left + '}, {' + this.right + '})';
};

Pair.prototype.toList = function() {
  var list = [];
  if (!(this instanceof Pair)) {
    throw new TypeError('Should be Pair');
  }
  list.push(this.left);
  list.push(this.right);
  return list;
};

Pair.prototype.combine = function(f) {
  if (!(this instanceof Pair)) {
    throw new TypeError('Should be Pair');
  }
  return f(this.left, this.right);
};

var p1 = Pair(4, 6);
var p2 = Pair(4, 6);
var p3 = Pair(14, 7);
console.log(p1.equals(p2));
console.log(p3.toString());
console.log(p3.toList());
console.log(p1.combine(function(left, right) {
  return left + right;
}));

String.prototype.capitalize = function() {
  return this.toUpperCase();
};

String.prototype.dasharize = function() {
  return this.replace(/_/g, '-');
};

String.prototype.times = function(amount) {
  /*var that = this;
  return [].range(1, amount).map(function(_) {
    return that;
  }).join(' ');*/
  var res = '';
  while (amount) {
    res += this + ' ';
    amount--;
  }
  return res;
};

String.prototype.blank = function() {
  var list = this.split('');
  // ako podadem prazen masiv every vry6ta vinagi true, za6toto za vseki element e izpylneno uslovieto
  return list.every(function(x) {
    return x === ' ';
  });
};

var test = 'test';
var dashes = 'border_bottom_width';
var times = 'bobi';
var isBlank = '';

console.log(test.capitalize());
console.log(dashes.dasharize());
console.log(times.times(5));
console.log(isBlank.blank());

Array.prototype.first = function() {
  if (this.length === 0) {
    throw new TypeError('The array is empty.');
  }
  return this[0];
};

Array.prototype.range = function(from, to) {
  if (from > to) {
    throw new TypeError('to should be bigger that from');
  }
  while(from <= to) {
    this.push(from);
    from++;
  }
  return this;
};

Array.prototype.sum = function() {
  return this.reduce(function(a, b) {
    return a + b;
  });
};

Array.prototype.average = function() {
  return this.sum()/this.length;
};

var first_arr = [3, 4, 7, 9];
console.log(first_arr.first());
console.log([].range(1, 5));
console.log([].range(7, 7));
console.log(first_arr.sum());
console.log(first_arr.average());

Number.prototype.times = function(action) {
  var count = this;
  while (count) {
    action();
    count--;
  }
};

var num = 5;
num.times(function() {
  console.log('OMG!');
});
