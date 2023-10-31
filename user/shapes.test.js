const { Triangle, Square, Circle } = require('./shapes.js');


describe('Triangle test', () => {
    it('should test for a triangle with a gray background', () => {
        const shape = new Triangle();
        shape.useColor('gray');
        expect(shape.render()).toBe('<polygon points="150, 18 244, 183 56, 182" fill="gray" />');
    })
});

describe('Square test', () => {
    it('should test for a square with a red background', () => {
        const shape = new Square();
        shape.useColor('red');
        expect(shape.render()).toBe('<rect x="73" y="40" width="160" height="160" fill="red" />');
    })
});

describe('Circle test', () => {
    it('should test for a circle with a black background', () => {
        const shape = new Circle();
        shape.useColor('black');
        expect(shape.render()).toBe('<circle cx="150" cy="115" r="80" fill="black" />');
    })
});
