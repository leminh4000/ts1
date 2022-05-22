import {Shape} from "./Shape";
import {Circle} from "./Circle";
import {Ractangle} from "./Ractangle";

let mySahpe =  new Shape(19, 15);
let myCircle = new Circle(19, 11, 44);
let myRactangle = new Ractangle(10, 10 ,20, 10);

//declare an array of shapes
let theShapes: Shape[] = [];

theShapes.push(mySahpe);
theShapes.push(myCircle);
theShapes.push(myRactangle);

for (let theShape of theShapes) {
    console.log(theShape);
}