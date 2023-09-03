const { triangle, square, circle } = require("./shapes.js");

describe("triangle test", () => {
    it("should test for a triangle with a blue background", () => {
        const shape = new triangle();
        shape.color("blue");
        expect();
    }
}

describe("square test", () => {
    it("should test for a circle with a purple background", () = {
        const shape = new circle();
        shape.color("purple");
        expect();
    })
})

describe("circle test", () => {
    it("should test for a circle with a red background", () = {
        const shape = new circle();
        shape.color("red");
        expect();
    })
}