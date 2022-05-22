import {Shape} from "./Shape";
import {Circle} from "./Circle";
import {Ractangle} from "./Ractangle";

let myCircle = new Circle(19, 11, 44);
let myRactangle = new Ractangle(10, 10 ,20, 10);

//declare an array of shapes
let theShapes: Shape[] = [];

theShapes.push(myCircle);
theShapes.push(myRactangle);

for (let theShape of theShapes) {
    console.log(theShape);
    console.log(theShape.calculateArea());
    console.log();
}