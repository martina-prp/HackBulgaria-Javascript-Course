'use strict';

var Point = require('./point_in_the_sky').Point;

function Robot(startPoint) {

  this.getStartPoint = function() {
    return startPoint;
  };

  this.moveLeft = function(amount) {
    startPoint.xDec(amount);
  };

  this.moveRight = function(amount) {
    startPoint.xInc(amount);
  };

  this.moveUp = function(amount) {
    startPoint.yDec(amount);
  };

  this.moveDown = function(amount) {
    startPoint.yInc(amount);
  };

  this.getPosition = function() {
    return startPoint;
  };
}

var robot = new Robot(new Point(0, 0));

robot.moveLeft(10);
robot.moveDown(5);

console.log(robot.getPosition().toString());
