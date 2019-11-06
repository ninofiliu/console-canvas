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

    print() {
        for (const line of this.screen) {
            for (const pixel of line) {
                process.stdout.write(pixel.letter);
            }
            process.stdout.write('\n');
        }
        for (let i = 0; i < this.height; i++) {
            process.stdout.write('\x1b[F');
        }
    }
};
