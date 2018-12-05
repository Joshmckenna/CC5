var sketch1 = function(p) {


        // *** ~~~ *** ~~~ *** POSTER ONE *** ~~~ *** ~~~ *** //
        // * ~ Variables ~ * //

        let timer = 1;
        var margin = 10;
        // Suprematism Background Colors
        var backgroundArray0 = [p.color(232, 228, 223),    // Gray
                                p.color(237, 237, 231),    // Light Gray
                                p.color(252, 252, 246),    // Lighter Gray
                                p.color(255, 254, 228),    // Light Yellow
                                p.color(218, 202, 167),    // Dark Tan
                                p.color(197, 181, 158),    // Brown
                                p.color(197, 181, 158)];   // Brick Red
        // Choose one randomly
        var randBackground0 = backgroundArray0[Math.floor(Math.random() * backgroundArray0.length)]

        // Suprematism Element Colors
        var elementArray0 = [p.color(206, 78, 41),         // Orange
                             p.color(39, 65, 106),         // Navy Blue
                             p.color(0)]
        // Choose one randomly
        var randElementArray0 = elementArray0[Math.floor(Math.random() * elementArray0.length)]
        var randElementArray1 = elementArray0[Math.floor(Math.random() * elementArray0.length)]

        // Element Rotate Array
        var rotateArray = [45, 90, 135, 180, 225, 280]

        var middleXCanvas1 = (margin + (p.width/3)-(margin*3)) - (p.width/3)/2
        var middleYCanvas1 = (margin + p.height) - p.height/2

        var sVari = p.random(1, 8)
        var rectH1 = p.random(5, 15)
        var rectL1 = p.random(60, 100)
        var rectX1 = p.random(20, 200)
        var rectY1 = p.random(20, 500)

        var degVari1 = p.random(0, 360)

    // SETUP SKETCH ONE

    p.setup = function() {
        var canvas = p.createCanvas((p.windowWidth/3)-30, p.windowHeight -20);
        canvas.parent('#sketch1');
    };

    p.draw = function() {



      // DRAW Poster ONE
        // background
        if (timer > 1) {
        p.fill(randBackground0);
        p.noStroke();
        p.rect(0, 0, p.width, p.height);
        }

        // Element 1
        if (timer > 2) {
        p.push();
        p.fill(randElementArray0);
        p.translate(middleXCanvas1, middleYCanvas1);
        p.rotate(degVari1);
        p.scale(sVari);
        p.triangle(30, 75, 58, 20, 86, 75);
        p.pop();
        }

        // Element 2
        if (timer > 3) {
        p.push();
        p.fill(randElementArray1);
        p.rect(rectX1, rectY1, rectH1, rectL1);
        p.rotate(degVari1);
        p.pop();
        }

        console.log(timer)

        if (p.frameCount % 60 == 0 && timer > 0) {
          console.log("wtf")
          timer++;
          console.log(timer)
        }


// counter that increases from 0 to length of array and then loops background (specifies which part of the array to call)
// counter that resets everytime it reaches 60 (or framecount is divisible % 0) while also calling the function to use with array
// timeCounterMax (to change how fast the array counter works)





    };
};

var sketch2 = function(p) {
    p.setup = function() {
        var canvas = p.createCanvas((p.windowWidth/3)-30, p.windowHeight -20);
        canvas.parent('#sketch2');
    };

    p.draw = function() {
        p.background(0, 0, 51);
        p.fill(0, 255, 0);
        // answers question 2
        p.rectMode(p.CENTER);
        p.rect(p.width / 2, p.height / 2, 1000, 50);
    };
};

var sketch3 = function(p) {
    p.setup = function() {
        var canvas = p.createCanvas((p.windowWidth/3)-30, p.windowHeight -20);
        canvas.parent('#sketch3');
    };

    p.draw = function() {
        p.background(0, 0, 51);
        p.fill(0, 255, 0);
        // answers question 2
        p.rectMode(p.CENTER);
        p.rect(p.width / 2, p.height / 2, 1000, 50);
    };
};


var myFirstSketch = new p5(sketch1);
var mySecondSketch = new p5(sketch2);
var myThirdSketch = new p5(sketch3);
