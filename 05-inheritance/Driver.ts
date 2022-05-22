import {Shape} from "./Shape";
import {Circle} from "./Circle";
import {Ractangle} from "./Ractangle";

let mySahpe =  new Shape(19, 15);
console.log(mySahpe.getInfo());

let myCircle = new Circle(19, 11, 44);

console.log(myCircle.getInfo());

let myRactangle = new Ractangle(10, 10 ,20, 10);
console.log(myRactangle.getInfo());
