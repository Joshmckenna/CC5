var dataServer;
var pubKey = 'pub-c-9139d554-268f-4bd7-b408-e5d34d178b6b';
var subKey = 'sub-c-8d55adee-f983-11e8-a39c-e60c31199fb2';
var channelName = 'splash';



function setup() {
  createCanvas(windowWidth/3,windowHeight);
}
//
// function resetBackground () {
//   var backgroundArray =  [color(232, 228, 223),     // Gray
//                           color(237, 237, 231),    // Light Gray
//                           color(252, 252, 246),    // Lighter Gray
//                           color(255, 254, 228),    // Light Yellow
//                           color(218, 202, 167),    // Dark Tan
//                           color(197, 181, 158),    // Brown
//                           color(197, 181, 158),     // Brick Red
//                           color(219, 212, 193)]     // Sand
//
//   backgroundColor = backgroundArray[Math.floor(Math.random() * backgroundArray.length)]
//
// }


function draw () {
  frameRate(1)
  if (frameCount % 7 === 1) {
  backgroundDraw();
}
  if (frameCount % 7 === 2) {
  triangleDraw();
}
 if (frameCount % 7 === 3) {
  quadDraw();
}
  if (frameCount % 7 === 4) {
  quadDraw();
}
  if (frameCount % 7 === 5) {
  rectangleDraw();
  }
  if (frameCount % 7 === 6) {
  circleDraw();
    console.log("}")
}
}



function backgroundDraw () {
  var backgroundArray =  [color(232, 228, 223),     // Gray
                          color(237, 237, 231),    // Light Gray
                          color(252, 252, 246),    // Lighter Gray
                          color(255, 254, 228),    // Light Yellow
                          color(218, 202, 167),    // Dark Tan
                          color(197, 181, 158),    // Brown
                          color(197, 181, 158),     // Brick Red
                          color(219, 212, 193)]     // Sand

  backgroundColor = backgroundArray[Math.floor(Math.random() * backgroundArray.length)]
  background(backgroundColor);

  console.log("function setup() {\ncreateCanvas(" + Math.floor(windowWidth/3) +", " + Math.floor(windowHeight) + ");\n}\nfunction draw () {\n")
  console.log("background("+ backgroundColor + ");\n")
}



function circleDraw () {
  var elementColorArray =  [color(206, 78, 41),        // Orange
                            color(39, 65, 106),       // Navy Blue
                            color(0),                 // Black
                            color(26, 65, 25),       // Forest Green
                            color(245, 227, 212),     // pink
                            color(35, 31, 32),        // off black
                            color(248, 207, 17),      // yellow
                            color(118, 1, 8),         // maroon
                            color(95, 69, 44),        // brown
                            color(110, 160, 100)]     // green

  circleColor = elementColorArray[Math.floor(Math.random() * elementColorArray.length)]

  var circleArray = [1, 2];
  var circleChoice = circleArray[Math.floor(Math.random() * circleArray.length)]

  if (circleChoice == 1) {


    var radius1 = Math.floor(random(20, 100))
    var translate1X = Math.floor(random(0, width))
    var translate1Y = Math.floor(random(0, height))

    push();
    noStroke();
    fill(circleColor);
    translate(translate1X, translate1Y);
    ellipse(0, 0, radius1, radius1);

    console.log("// Circle\nnoStroke();\nfill(" + circleColor + ");\ntranslate(" + translate1X + ", " + translate1Y + ");\nellipse(0, 0, " + radius1 + ", " + radius1 + ");")

    pop();

  }

  if (circleChoice == 2 && rectChoice == 2 && quadChoice == 3) {

    var radius2 = Math.floor(random(250, 300))
    var translate2X = Math.floor(random(0, width))
    var translate2Y = Math.floor(random(0, height))

    push();
    noStroke();
    fill(circleColor);
    translate(translate2X, translate2Y);
    ellipse(0, 0, radius2, radius2);

    console.log("// Circle\nnoStroke();\nfill(" + circleColor + ");\ntranslate(" + translate2X + ", " + translate2Y + ");\nellipse(0, 0, " + radius2 + ", " + radius2 + ");")

    pop();

  }
}

function rectangleDraw () {
  angleMode(DEGREES);
  var elementColorArray =  [color(206, 78, 41),        // Orange
                            color(39, 65, 106),       // Navy Blue
                            color(0),                 // Black
                            color(26, 65, 25),       // Forest Green
                            color(245, 227, 212),     // pink
                            color(35, 31, 32),        // off black
                            color(248, 207, 17),      // yellow
                            color(118, 1, 8),         // maroon
                            color(95, 69, 44),        // brown
                            color(110, 160, 100)]     // green

  rectColor = elementColorArray[Math.floor(Math.random() * elementColorArray.length)]

  var rectArray = [1, 2];
  rectChoice = rectArray[Math.floor(Math.random() * rectArray.length)]

  if (rectChoice == 1) {

    var rectW1 = Math.floor(random(8,12))
    var rectW2 = Math.floor(random(10,14))
    var rectH1 = Math.floor(random(400, 460))
    var rectH2 = Math.floor(random(200, 220))
    var translate3X = Math.floor(random(0, width))
    var translate3Y = Math.floor(random(0, height))
    var translate4X = Math.floor(random(0, width))
    var translate4Y = Math.floor(random(0, height))

    var rotate1 = Math.floor(random(0,360))
    var rotate2 = Math.floor(random(0,360))

    push();
    noStroke();
    fill(rectColor);
    translate(translate3X, translate3Y);
    rotate(rotate1);
    translate(-rectW1/2, -rectH1/2);
  	rect(0,0,rectW1,rectH1);
    pop();

    push();
    noStroke();
    fill(rectColor);
    translate(translate4X, translate4Y);
    rotate(rotate2);
    translate(-rectW2/2, -rectH2/2);
    rect(0,0,rectW2,rectH2);
    pop();

    console.log("angleMode(DEGREES)\n")
    console.log("// Rectangle\nnoStroke();\nfill(" + rectColor + ");\ntranslate(" + translate3X + ", " + translate3Y + ");\nrotate(" + rotate1 + ");\nrect(0, 0, " + rectW1 + ", " + rectH1 + ");\n")
    console.log("// Rectangle\nnoStroke();\nfill(" + rectColor + ");\ntranslate(" + translate4X + ", " + translate4Y + ");\nrotate(" + rotate2 + ");\nrect(0, 0, " + rectW2 + ", " + rectH2 + ");\n")

    var toggleArray = [1, 2];
    toggle = toggleArray[Math.floor(Math.random() * toggleArray.length)]

    if (toggle == 1) {

      var rectW3 = Math.floor(random(10,14))
      var rectW4 = Math.floor(random(15,20))
      var rectH3 = Math.floor(random(200, 220))
      var rectH4 = Math.floor(random(120, 140))
      var translate5X = Math.floor(random(0, width))
      var translate5Y = Math.floor(random(0, height))
      var translate6X = Math.floor(random(0, width))
      var translate6Y = Math.floor(random(0, height))

      var rotate3 = Math.floor(random(0,360))
      var rotate4 = Math.floor(random(0,360))

      push();
      noStroke();
      fill(rectColor);
      translate(translate5X, translate5Y);
      rotate(rotate3);
      translate(-rectW3/2, -rectH3/2);
      rect(0,0,rectW3,rectH3);
      pop();

      push();
      noStroke();
      fill(rectColor);
      translate(translate6X, translate6Y);
      rotate(rotate4);
      translate(-rectW4/2, -rectH4/2);
      rect(0,0,rectW4,rectH4);
      pop();

      console.log("// Rectangle\nnoStroke();\nfill(" + rectColor + ");\ntranslate(" + translate5X + ", " + translate5Y + ");\nrotate(" + rotate3 + ");\nrect(0, 0, " + rectW3 + ", " + rectH3 + ");\n")
      console.log("// Rectangle\nnoStroke();\nfill(" + rectColor + ");\ntranslate(" + translate6X + ", " + translate6Y + ");\nrotate(" + rotate4 + ");\nrect(0, 0, " + rectW4 + ", " + rectH4 + ");\n")
    }
  }
}



function quadDraw () {
  angleMode(DEGREES);
  var elementColorArray =  [color(206, 78, 41),        // Orange
                            color(39, 65, 106),       // Navy Blue
                            color(0),                 // Black
                            color(26, 65, 25),        // Forest Green
                            color(245, 227, 212),     // pink
                            color(35, 31, 32),        // off black
                            color(248, 207, 17),      // yellow
                            color(118, 1, 8),         // maroon
                            color(95, 69, 44),        // brown
                            color(110, 160, 100)]     // green
  quadColor = elementColorArray[Math.floor(Math.random() * elementColorArray.length)]

  var quadArray = [1, 2, 3];
  quadChoice = quadArray[Math.floor(Math.random() * quadArray.length)]

  if (quadChoice == 1 && triangleChoice == 4) {

    var translate7X = Math.floor(random(0, width))
    var translate7Y = Math.floor(random(0, height))

    var scale1 = random(1, 1.1)

    var rotate5 = Math.floor(random(0,360))

    push();
    noStroke();
    fill(quadColor);
    translate(translate7X, translate7Y);
    rotate(rotate5);
    translate(-288, -330);
    scale(scale1)
  	quad(482,509,150,100,113,143,389,558);
    pop();

    console.log("// Quadrilateral\nnoStroke();\nfill(" + quadColor + ");\ntranslate(" + translate7X + ", " + translate7Y + ");\nrotate(" + rotate5 + ");\nscale(" + scale1 + ")\nquad(482,509,150,100,113,143,389,558);\n")

  }

  if (quadChoice == 2) {

    var translate8X = Math.floor(random(0, width))
    var translate8Y = Math.floor(random(0, height))

    var scale2 = random(1, 1.1)

    var rotate6 = Math.floor(random(0,360))

    push();
    noStroke();
    fill(quadColor);
    translate(translate8X, translate8Y);
    rotate(rotate6);
    translate(-330, -319);
    scale(scale2)
    quad(192,295,375,174,487,352,259,451);
    pop();

    console.log("// Quadrilateral\nnoStroke();\nfill(" + quadColor + ");\ntranslate(" + translate8X + ", " + translate8Y + ");\nrotate(" + rotate6 + ");\nscale(" + scale2 + ")\nquad(192,295,375,174,487,352,259,451);\n")

  }
}



function triangleDraw () {
  angleMode(DEGREES);
  var elementColorArray =  [color(206, 78, 41),        // Orange
                            color(39, 65, 106),       // Navy Blue
                            color(0),                 // Black
                            color(26, 65, 25),        // Forest Green
                            color(245, 227, 212),     // pink
                            color(35, 31, 32),        // off black
                            color(248, 207, 17),      // yellow
                            color(118, 1, 8),         // maroon
                            color(95, 69, 44),        // brown
                            color(110, 160, 100)]     // green
  triangleColor = elementColorArray[Math.floor(Math.random() * elementColorArray.length)]

  var triangleArray = [1, 2, 3, 4];
  triangleChoice = triangleArray[Math.floor(Math.random() * triangleArray.length)]

  if (triangleChoice == 1) {

    var translate9X = Math.floor(random(0, width))
    var translate9Y = Math.floor(random(0, height))
    var rotate7 = Math.floor(random(0,360))
    var scale3 = random(1, 1.2)


    push();
    noStroke();
    fill(triangleColor);
    translate(translate9X, translate9Y);
    rotate(rotate7);
    translate(-111, -285);
    scale(scale3)
    triangle(16,389,259,284,16,183);
    pop();

    console.log("// Triangle\nnoStroke();\nfill(" + triangleColor + ");\ntranslate(" + translate9X + ", " + translate9Y + ");\nrotate(" + rotate7 + ");\nscale(" + scale3 + ")\ntriangle(16,389,259,284,16,183);\n")

  }

  if (triangleChoice == 2) {

    var translate10X = Math.floor(random(0, width))
    var translate10Y = Math.floor(random(0, height))
    var rotate8 = Math.floor(random(0,360))
    var scale4 = random(1, 1.2)

    push();
    noStroke();
    fill(triangleColor);
    translate(translate10X, translate10Y);
    rotate(rotate8);
    translate(-174, -247);
    scale(scale4)
    triangle(40,347,309,346,166,91);
    pop();

    console.log("// Triangle\nnoStroke();\nfill(" + triangleColor + ");\ntranslate(" + translate10X + ", " + translate10Y + ");\nrotate(" + rotate8 + ");\nscale(" + scale4 + ")\ntriangle(40,347,309,346,166,91);\n")

  }

  if (triangleChoice == 3) {

    var translate11X = Math.floor(random(0, width))
    var translate11Y = Math.floor(random(0, height))
    var rotate9 = Math.floor(random(0,360))
    var scale5 = random(1, 1.1)

    push();
    noStroke();
    fill(triangleColor);
    translate(translate11X, translate11Y);
  	rotate(rotate9);
  	translate(-214, -201);
    scale(scale5)
  	triangle(281,379,280,3,2,379);
    pop();

    console.log("// Triangle\nnoStroke();\nfill(" + triangleColor + ");\ntranslate(" + translate11X + ", " + translate11Y + ");\nrotate(" + rotate9 + ");\nscale(" + scale5 + ")\ntriangle(281,379,280,3,2,379);\n")

  }

  if (triangleChoice == 4) {

    var translate12X = Math.floor(random(0, width))
    var translate12Y = Math.floor(random(0, height))
    var rotate10 = Math.floor(random(0,360))
    var scale6 = random(1, 1.3)

    push();
    noStroke();
    fill(triangleColor);
    translate(translate12X, translate12Y);
  	rotate(rotate10);
    translate(-26, -63);
    scale(scale6)
    triangle(5,112,32,112,31,1);
    pop();

    console.log("// Triangle\nnoStroke();\nfill(" + triangleColor + ");\ntranslate(" + translate12X + ", " + translate12Y + ");\nrotate(" + rotate10 + ");\nscale(" + scale6 + ")\ntriangle(5,112,32,112,31,1);\n")

  }
}

function sendTheMessage() {

  // Send Data to the server to draw it in all other canvases
  dataServer.publish(
    {
      channel: channelName,
	  message: {
		paintCol: paintNumber
	  }

    });

console.log("published");

}

var myFirstSketch = new p5(sketch1);
