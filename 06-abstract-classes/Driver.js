"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Circle_1 = require("./Circle");
var Rectangle_1 = require("./Rectangle");
var myCircle = new Circle_1.Circle(5, 10, 20);
var myRectangle = new Rectangle_1.Rectangle(10, 20, 100, 50);
var myShapes = [];
myShapes.push(myCircle);
myShapes.push(myRectangle);
for (var _i = 0, myShapes_1 = myShapes; _i < myShapes_1.length; _i++) {
    var tempShape = myShapes_1[_i];
    console.log(tempShape.getInfo());
    console.log("Area = " + tempShape.calculateArea());
    console.log();
}
