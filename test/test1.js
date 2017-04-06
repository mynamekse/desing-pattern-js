"use strict"
class Rectangle {
  constructor(height, width) {
    this.height = height;
    this.width = width;
  }
}

class Car{
  constructor(model,year,miles){
    this.module=model;
    this.year=year;
    this.miles=miles;
  }
  toString(){
    return "DDDDDDDDDDDDDD"
  }
}
 

// Usage:
 
// We can create new instances of the car
var civic = new Car( "Honda Civic", 2009, 20000 );
var mondeo = new Car( "Ford Mondeo", 2010, 5000 );
 
// and then open our browser console to view the
// output of the toString() method being called on
// these objects
console.log( civic );
console.log( mondeo );