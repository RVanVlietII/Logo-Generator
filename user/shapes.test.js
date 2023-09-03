const { triangle, square, circle } = require("./shapes.js");


describe("triangle test", () => {
    it("should test for a triangle with a blue background", () => {
        const shape = new triangle();
        shape.useColor("blue");
        expect();
    }
    )
});

describe("square test", () => {
    it("should test for a square with a purple background", () => {
        const shape = new square();
        shape.useColor("purple");
        expect();
    })
});

describe("circle test", () => {
    it("should test for a circle with a red background", () => {
        const shape = new circle();
        shape.useColor("red");
        expect();
    })
});

