'use strict';

function Pizza(name, cost, timeToMake) {
  if (!(this instanceof Pizza)) {
    return new Pizza(name, cost, timeToMake);
  }

  this.name = name;
  this.cost = cost;
  this.timeToMake = timeToMake;
}

function pizzaOrder(pizza) {
  if (!(this instanceof pizzaOrder)) {
    return new pizzaOrder(pizza);
  }

  var id = 0;
  this.pizza = pizza;

  this.getId = function() {
    this.id = this.id + 1;
  };
}

var p1 = Pizza('pizza1', 10, 1000);
var p2 = Pizza('pizza2', 12, 3000);
var o1 = pizzaOrder(p1);
var o2 = pizzaOrder(p2);
console.log(o1.getId());
console.log(o2.getId());
