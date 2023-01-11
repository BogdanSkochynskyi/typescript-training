import { Shape } from "./Shape";
import { Circle } from "./Circle";
import { Rectangle } from "./Rectangle";

let myShape = new Shape(10, 15);
console.log(myShape.getInfo());

let myCircle = new Circle(5, 10, 20);
console.log(myCircle.getInfo());

let myRectangle = new Rectangle(10, 20, 100, 50)
console.log(myRectangle.getInfo());

let myShapes: Shape[] = [];
myShapes.push(myShape);
myShapes.push(myCircle);
myShapes.push(myRectangle);

for(let tempShape of myShapes) {
    console.log(tempShape.getInfo());
}