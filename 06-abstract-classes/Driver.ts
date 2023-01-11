import { Shape } from "./Shape";
import { Circle } from "./Circle";
import { Rectangle } from "./Rectangle";

let myCircle = new Circle(5, 10, 20);

let myRectangle = new Rectangle(10, 20, 100, 50)

let myShapes: Shape[] = [];
myShapes.push(myCircle);
myShapes.push(myRectangle);

for(let tempShape of myShapes) {
    console.log(tempShape.getInfo());
    console.log("Area = " + tempShape.calculateArea());
    console.log();
}