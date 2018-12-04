// Canvas margin for posters
var margin = 10;








function setup() {
  // set canvas size and color
  createCanvas(windowWidth , windowHeight);
  background(255);
  strokeWeight(2);

  // Poster 1 boundaries
  rect(margin, margin, (width/3)-(margin*3), height-(margin*2))
  // Poster 2 boundaries
  rect(margin + (width/3), margin, (width/3)-(margin*3), height-(margin*2))
  // Poster 3 boundaries
  rect(margin + (2*(width/3)), margin, (width/3)-(margin*3), height-(margin*2))
}

function draw() {

  // *** ~~~ *** ~~~ *** POSTER ONE *** ~~~ *** ~~~ *** //
  // * ~ Variables ~ * //

  // Suprematism Background Colors
  var backgroundArray0 = [color(232, 228, 223),    // Gray
                          color(237, 237, 231),    // Light Gray
                          color(252, 252, 246),    // Lighter Gray
                          color(255, 254, 228),    // Light Yellow
                          color(218, 202, 167),    // Dark Tan
                          color(197, 181, 158),    // Brown
                          color(197, 181, 158)];   // Brick Red
  // Choose one randomly
  var randBackground0 = backgroundArray0[Math.floor(Math.random() * backgroundArray0.length)]

  // Suprematism Element Colors
  var elementArray0 = [color(206, 78, 41),         // Orange
                       color(39, 65, 106),         // Navy Blue
                       color(0)]
  // Choose one randomly
  var randElementArray0 = elementArray0[Math.floor(Math.random() * elementArray0.length)]


  var sVari = random(0, 4)


  // DRAW Poster ONE
  push();
    // background
    frameRate(1);
    fill(randBackground0);
    noStroke();
    rect(margin, margin, (width/3)-(margin*3), height-(margin*2));


    // Quadrilateral Polygon
    // quad(x1, y1, x2, y2, x3, y3, x4, y4)
    fill(randElementArray0);
    translate(20, 20);
    quad(38 +sVari, 31, 86 +sVari, 20, 69, 63, 30, 76);
  pop();





}
