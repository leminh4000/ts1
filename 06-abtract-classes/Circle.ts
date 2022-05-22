import {Shape} from "./Shape";

export class Circle extends Shape {
    get radius(): number {
        return this._radius;
    }

    set radius(value: number) {
        this._radius = value;
    }

    private _radius: number;

    constructor(theX: number, theY: number, radius: number) {
        super(theX, theY);
        this._radius = radius;
    }

    getInfo(): string {
        return `${super.getInfo()} , radius = ${this._radius} `;
    }

    calculateArea(): number {
        return Math.PI * Math.pow(this._radius, 2);
    }
}