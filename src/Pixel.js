const colors = require('./colors');

module.exports = class Pixel {
    constructor() {
        this.letter = ' ';
        this.fgColor = '';
        this.bgColor = '';
        this.value = null;

        this.setValue();
    }

    setValue() {
        this.value = `${this.fgColor}${this.bgColor}${this.letter}${colors.reset}`;
    }

    setLetter(letter) {
        this.letter = letter;
        this.setValue();
    }

    setFgColor(fgColor) {
        this.fgColor = fgColor;
        this.setValue();
    }

    setBgColor(bgColor) {
        this.bgColor = bgColor;
        this.setValue();
    }
};
