export class Shape{
    get y(): number {
        return this._y;
    }

    set y(value: number) {
        this._y = value;
    }
    get x(): number {
        return this._x;
    }

    set x(value: number) {
        this._x = value;
    }

    constructor(private _x: number, private _y: number) {
    }
    getInfo(): string{
        return `x=${this._x}, y=${this.y}`;
    }
}