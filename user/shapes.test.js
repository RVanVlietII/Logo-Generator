const { Triangle, Square, Circle } = require('./shapes.js');


describe("Triangle test", () => {
    it("should test for a triangle with a blue background", () => {
        const shape = new Triangle();
        shape.useColor("blue");
        expect();
    }
    )
});

describe("Square test", () => {
    it("should test for a square with a purple background", () => {
        const shape = new Square();
        shape.useColor("purple");
        expect();
    })
});

describe("Circle test", () => {
    it("should test for a circle with a red background", () => {
        const shape = new Circle();
        shape.useColor("red");
        expect();
    })
});

