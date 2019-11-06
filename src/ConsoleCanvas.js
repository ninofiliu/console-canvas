const Pixel = require('./Pixel');

module.exports = class ConsoleCanvas {
    constructor(width, height) {
        this.width = width;
        this.height = height;
        this.screen = (new Array(height)).fill().map(() => (
            (new Array(width)).fill().map(() => (
                new Pixel()
            ))
        ));
    }
};
