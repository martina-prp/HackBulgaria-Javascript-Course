'use strict';

function Shape(type) {
  this.getType = function() {
    return type;
  };
}

Shape.prototype.area = function() {
  throw new Error('Cannot call area of Shape. Use subclasses!');
};

function Rectangle(a, b) {
  Shape.call(this, 'rectangle'); // lie base class constructor
  this.a = a;
  this.b = b;
}

Rectangle.prototype = Object.create(Shape.prototype);

Rectangle.prototype.area = function() {
  return this.getType() + ' area = ' + this.a * this.b;
};

var rec = new Rectangle(5, 5);
console.log(rec.area());

function Triangle(a, h) {
  Shape.call(this, 'triangle');
  this.a = a;
  this.h = h;
}

Triangle.prototype = Object.create(Shape.prototype);

Triangle.prototype.area = function() {
  return this.getType() + ' area = ' + (this.a * this.h)/2;
};

var tr = new Triangle(5,2);
console.log(tr.area());

function Circle(r) {
  Shape.call(this, 'circle');
  this.r = r;
}

Circle.prototype = Object.create(Shape.prototype);

Circle.prototype.area = function() {
  return this.getType() + ' area = ' + 3.14 * this.r * this.r;
};

var circle = new Circle(5);
console.log(circle.area());

var queue = {
  elements : [],

  push : function(item) {
    this.elements.push(item);
  },

  pop : function() {
    if (!this.empty()) {
      return this.elements[0];
    }
  },

  empty : function() {
    var n = this.elements.length;
    if (n === 0) {
      return true;
    }
    return false;
  }
};

var q1 = Object.create(queue);
console.log(q1.empty());
q1.push(5);
q1.push(7);
console.log(q1.pop());
console.log(q1.elements);
console.log(q1.empty());



