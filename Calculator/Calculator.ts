import { DivideByZeroException } from './DivideByZeroException';
export class Calculator {
    public add(x: number, y: number): number {
        return x + y;
    }
    public sub(x: number, y: number): number {
        return x - y;
    }
    public mul(x: number, y: number): number {
        return x * y;
    }
    public div(x: number, y: number): number {
        if(y === 0) {
            throw new DivideByZeroException();
        }
        return x / y;
    }
}
