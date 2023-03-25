function setup() {
    const canvasWidth = window.innerWidth;
    const canvasHeight = window.innerHeight; 
    createCanvas(canvasWidth, canvasHeight);
    background("pink");

    drawCreature();


    // add your drawing here:
    // https://p5js.org/reference/#/p5/point
    // point(110, 20);

    drawGrid(canvasWidth, canvasHeight)
}


    function drawCreature {
    point(30, 20);
    point(30, 31);
    point(30, 42);
    point(30, 53);
    point(30, 64);
    point(85, 20);
    point(85, 31);
    point(85, 42);
    point(85, 53);
    point(85, 64);
    point(85, 75);
    point(30, 75);
    point(41, 20);
    point(52, 20);
    point(63, 20);
    point(74, 20);
    point(41, 75);
    point(52, 75);
    point(63, 75);
    point(74, 75);
    strokeWeight(11)
    }

    // https://p5js.org/reference/#/p5/text
    // text("Here is some text", 200, 40);

    // https://p5js.org/reference/#/p5/circle
    // fill('red');
    // circle(550, 100, 100);

    // https://p5js.org/reference/#/p5/ellipse
    // fill('teal');
    // ellipse(100, 200, 60, 100);

    // Other shapes...
    // Polygon: https://p5js.org/reference/#/p5/beginShape
    // Line: https://p5js.org/reference/#/p5/line
    // Rectangle: https://p5js.org/reference/#/p5/rect
    // Curve: https://p5js.org/reference/#/p5/curve


    // for debugging:
    
