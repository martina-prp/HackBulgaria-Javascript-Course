'use strict';

function Point(x, y) {

  if (!(this instanceof Point)) {
    return new Point(x, y);
  }

  this.getX = function() {
    return x;
  };

  this.getY = function() {
    return y;
  };

  this.xInc = function(amount) {
    x = x + amount;
  };

  this.yInc = function(amount) {
    y = y + amount;
  };

  this.xDec = function(amount) {
    x = x - amount;
  };

  this.yDec = function (amount) {
    y = y - amount;
  };

}

Point.prototype.equals = function(point) {
  if (!(point instanceof Point)) {
    throw new TypeError('Should be of type Point');
  }
  return point.getX() === this.getX() && point.getY() === this.getY();
};

Point.prototype.toString = function() {//console.log(this.getX()); console.log(this.getY());
  return 'Point @ ' + this.getX() + ', ' + this.getY();
};

var point1 = Point(2, 3);
var point2 = Point(3, 4);
var point3 = Point(2, 3);
//console.log(point1.yDec(1).toString());
//console.log(point1.equals(point2));
//console.log(point1.equals(point3));
//console.log(point2.toString());

exports.Point = Point;
