function setup() {
  createCanvas(windowWidth/3,windowHeight);
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
  frameRate(0.15);
  backgroundDraw();
  triangleDraw();
  quadDraw();
  quadDraw();
  rectangleDraw();
  circleDraw();
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
  console.log("background color is:")

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


    var radius = random(20, 100)

    push();
    noStroke();
    fill(quadColor);
    translate(random(0, width), random(0, height));
    ellipse(20, 20, radius, radius);
    console.log("small circle selected")
    console.log("circle color is:")
    pop();

  }

  if (circleChoice == 2 && rectChoice == 2 && quadChoice == 3) {

    var radius = random(250, 300)

    push();
    noStroke();
    fill(quadColor);
    translate(random(0, width), random(0, height));
    ellipse(20, 20, radius, radius);
    console.log("large circle selected")
    console.log("circle color is:")
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

  quadColor = elementColorArray[Math.floor(Math.random() * elementColorArray.length)]

  var rectArray = [1, 2];
  rectChoice = rectArray[Math.floor(Math.random() * rectArray.length)]

  if (rectChoice == 1) {

    push();
    noStroke();
    fill(quadColor);
    translate(random(0, width), random(0, height));
    rotate(random(0,360));
    translate(-29, -287);
  	rect(26,56,8,459);
    pop();

    push();
    noStroke();
    fill(quadColor);
    translate(random(0, width), random(0, height));
    rotate(random(0,360));
    translate(-23, -123);
    rect(17,21,10,205);
    pop();

    console.log("small rectangles drawn")
    console.log("rectangle color is:")

    var toggleArray = [1, 2];
    toggle = toggleArray[Math.floor(Math.random() * toggleArray.length)]

    if (toggle == 1) {
      push();
      noStroke();
      fill(quadColor);
      translate(random(0, width), random(0, height));
      rotate(random(0,360));
      translate(-23, -123);
      rect(17,21,10,205);
      pop();

      push();
      noStroke();
      fill(quadColor);
      translate(random(0, width), random(0, height));
      rotate(random(0,360));
      translate(-25, -87);
      rect(19,21,17,134);
      pop();
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
    push();
    noStroke();
    fill(quadColor);
    translate(random(0, width), random(0, height));
    rotate(random(0,360));
    translate(-288, -330);
    scale(random(1,1.1))
  	quad(482,509,150,100,113,143,389,558);
    pop();
  }

  if (quadChoice == 2) {
    push();
    noStroke();
    fill(quadColor);
    translate(random(0, width), random(0, height));
    rotate(random(0,360));
    translate(-330, -319);
    scale(random(1,1.1))
    quad(192,295,375,174,487,352,259,451);
    pop();
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
    push();
    noStroke();
    fill(triangleColor);
    translate(random(0, width), random(0, height));
    rotate(random(0,360));
    translate(-111, -285);
    scale(random(1,1.2))
    triangle(16,389,259,284,16,183);
    pop();
  }

  if (triangleChoice == 2) {
    push();
    noStroke();
    fill(triangleColor);
    translate(random(0, width), random(0, height));
    rotate(random(0,360));
    translate(-174, -247);
    scale(random(1,1.1))
    triangle(40,347,309,346,166,91);
    pop();
  }

  if (triangleChoice == 3) {
    push();
    noStroke();
    fill(triangleColor);
    translate(random(0, width), random(0, height));
  	rotate(random(0, 360));
  	translate(-214, -201);
    scale(random(1,1.1))
  	triangle(281,379,280,3,2,379);
    pop();
  }

  if (triangleChoice == 4) {
    push();
    noStroke();
    fill(triangleColor);
    translate(random(0, width), random(0, height));
  	rotate(random(0, 360));
    translate(-26, -63);
    scale(random(1,1.3))
    triangle(5,112,32,112,31,1);
    pop();
  }
}


var myFirstSketch = new p5(sketch1);
