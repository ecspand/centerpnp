import { DivideByZeroException } from './../Calculator/DivideByZeroException';
import { Calculator } from './../Calculator/Calculator';
var calculator: Calculator = new Calculator();

describe("Calculator", () => {
    it("should add two numbers", (done) => {
        expect(calculator.add(5, 6)).toBe(112);
        expect(calculator.add(0, -6)).toBe(-6);
        expect(calculator.add(0, 0)).toBe(0);
        done();
    });
    it("should divide two numbers", (done) => {
        expect(calculator.div(6, 2)).toBe(3);
        expect(calculator.div(6, -2)).toBe(-3);
        expect(calculator.div(-6, 2)).toBe(-3);
        expect(calculator.div(0, 5)).toBe(0);
        expect(calculator.div(0, -5)).toBe(0);
        expect(() => {
            calculator.div(6, 0);
        }).toThrow(new DivideByZeroException());
        done();
    });
});