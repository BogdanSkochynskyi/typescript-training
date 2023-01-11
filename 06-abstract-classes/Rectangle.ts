import { Shape } from "./Shape";
export class Rectangle extends Shape {

    constructor(x :number, y :number, private _width :number, private _length :number) {
        super(x,y);
    }

    public get width(): number {
        return this._width;
    }
    public set width(value: number) {
        this._width = value;
    }

    public get length(): number {
        return this._length;
    }
    public set length(value: number) {
        this._length = value;
    }

    getInfo(): string {
        return super.getInfo() + `, width=${this._width}, length=${this._length}`;
    }

    calculateArea(): number {
        return this._width * this._length;
    }
}