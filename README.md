# console-canvas

Draw colorful geometric shapes in the console

## Installation

```bash
npm install --save console-canvas
```

## Getting started

```js
// launch with: node <this file name>

const { ConsoleCanvas, colors } = require('console-canvas');

// Creates a 15x7 canvas (dimension: console character)
const canvas = new ConsoleCanvas(15, 7);

// Colors a point at (x,y) with one 16 background color
canvas.drawPoint(7, 2, colors.bg.blue);
canvas.drawPoint(6, 6, colors.bg.brGreen);
canvas.drawPoint(8, 6, colors.bg.brGreen);

// Fills a rectangle at (x0,y0,x1,y1)
canvas.drawRect(3, 3, 6, 4, colors.bg.brYellow);
canvas.drawRect(9, 3, 12, 4, colors.bg.brYellow);
canvas.drawRect(6, 3, 9, 6, colors.bg.magenta);

// Flushes the drawing to stdout,
// then rewinds the console cursor to the beginning
// (for animations, draw several stuff, and call print in between!)
canvas.print();

// Makes the cursor go just below the canvas
canvas.finish();
```
