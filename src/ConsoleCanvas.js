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

    // core methods

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

    // draw methods

    drawPoint(x, y, bgColor) {
        this.screen[y][x].setBgColor(bgColor);
    }

    drawRect(x0, y0, x1, y1, bgColor) {
        for (let x = x0; x < x1; x++) {
            for (let y = y0; y < y1; y++) {
                this.screen[y][x].setBgColor(bgColor);
            }
        }
    }

    drawEmptyRectangle(x0, y0, x1, y1, fgColor) {
        this.screen[y0][x0].setFgColor(fgColor);
        this.screen[y0][x0].setLetter('╔');
        this.screen[y0][x1].setFgColor(fgColor);
        this.screen[y0][x1].setLetter('╗');
        this.screen[y1][x0].setFgColor(fgColor);
        this.screen[y1][x0].setLetter('╚');
        this.screen[y1][x1].setFgColor(fgColor);
        this.screen[y1][x1].setLetter('╝');

        for (let x = x0 + 1; x < x1; x++) {
            for (const y of [y0, y1]) {
                this.screen[y][x].setFgColor(fgColor);
                this.screen[y][x].setLetter('═');
            }
        }
        for (let y = y0 + 1; y < y1; y++) {
            for (const x of [x0, x1]) {
                this.screen[y][x].setFgColor(fgColor);
                this.screen[y][x].setLetter('║');
            }
        }
    }

    // write methods

    write(x, y, text, fgColor) {
        text.split('').forEach((letter, i) => {
            this.screen[y][x + i].setFgColor(fgColor);
            this.screen[y][x + i].setLetter(letter);
        });
    }
};
