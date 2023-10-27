const { Triangle, Square, Circle } = require('./shapes.js');


describe("Triangle test", () => {
    it("should test for a triangle with a gray background", () => {
        const shape = new Triangle();
        shape.useColor("gray");
        expect();
    }
    )
});

describe("Square test", () => {
    it("should test for a square with a red background", () => {
        const shape = new Square();
        shape.useColor("rede");
        expect();
    })
});

describe("Circle test", () => {
    it("should test for a circle with a black background", () => {
        const shape = new Circle();
        shape.useColor("black");
        expect();
    })
});

