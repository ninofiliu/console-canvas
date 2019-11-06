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

    drawRect(x0, y0, x1, y1, bgColor) {
        for (let x = x0; x < x1; x++) {
            for (let y = y0; y < y1; y++) {
                this.screen[y][x].setBgColor(bgColor);
            }
        }
    }

    finish() {
        for (let i = 0; i < this.height; i++) {
            process.stdout.write('\n');
        }
    }

    print() {
        for (const line of this.screen) {
            for (const pixel of line) {
                process.stdout.write(pixel.value);
            }
            process.stdout.write('\n');
        }
        for (let i = 0; i < this.height; i++) {
            process.stdout.write('\x1b[F');
        }
    }
};
