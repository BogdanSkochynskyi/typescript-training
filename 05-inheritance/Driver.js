"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Shape_1 = require("./Shape");
var Circle_1 = require("./Circle");
var Rectangle_1 = require("./Rectangle");
var myShape = new Shape_1.Shape(10, 15);
console.log(myShape.getInfo());
var myCircle = new Circle_1.Circle(5, 10, 20);
console.log(myCircle.getInfo());
var myRectangle = new Rectangle_1.Rectangle(10, 20, 100, 50);
console.log(myRectangle.getInfo());
var myShapes = [];
myShapes.push(myShape);
myShapes.push(myCircle);
myShapes.push(myRectangle);
for (var _i = 0, myShapes_1 = myShapes; _i < myShapes_1.length; _i++) {
    var tempShape = myShapes_1[_i];
    console.log(tempShape.getInfo());
}
