function make2DArray(cols, rows) {
    var arr = new Array(cols);
    for (var i = 0; i < arr.length; i++) {
        arr[i] = new Array(rows);
    }
    return arr;
}

var grid;
var rows;
var cols;
var w = 90;

function setup() {
    createCanvas(windowWidth/3, windowHeight);
    cols = floor(width/w);
    rows = floor(height);
    grid = make2DArray(cols, rows);
    for (var i = 0; i < cols; i++) {
        for (var j = 0; j < rows; j++) {
            grid[i][j] = new Cell(i * w, j * w, w);
        }
    }
}

function draw() {
    background(255);
    for (var i = 0; i < cols; i++) {
        for (var j = 0; j < rows; j++) {
            grid[i][j].show();
        }
    }
}

// function arcDraw(){
//   arc(0, 0, radius1, radius2, insert angle start, insert angle end);
// }
// //arc (x, y, w, h, start, stop, [mode])
// arc(175, 35, 50, 50, -PI / 6, PI / 6, PIE); // 60 degrees
//
// stroke(82, 85, 65);
// strokeWeight(10);
// strokeCap(SQUARE);
//
//  ellipse (100, 100, 40, 40);
//
// //semicircles
// arc(x, y, w, h, -PI / 2.0, PI / 2.0);
// arc(x, y, w, h, PI / 2.0, -PI / 2.0);
// arc(x, y, w, h, 6.3, PI);
// arc(x, y, w, h, PI, 6.3);
// arc(x, y, w, h, 4.2, PI / 3.0);
// arc(x, y, w, h, PI / 3.0, 4.2);
// arc(x, y, w, h, -PI / 3.0, 2.1);
// arc(x, y, w, h, 2.1, -PI / 3.0);
//
// //90 degree arcs
// arc(x, y, w, h, PI, -PI / 2.0, PIE);
// arc(x, y, w, h, -PI / 2.0, 0, PIE);
// arc(x, y, w, h, 0, PI / 2.0, PIE);
// arc(x, y, w, h, PI / 2.0, -PI, PIE);
//
// //90 degree arc rotated but honestly not so good
// arc(x, y, w, h, 10, -PI / 6);
// arc(x, y, w, h, -PI / 6 , PI / 5);
// arc(x, y, w, h, 2.5 , -PI /1.2);
// arc(x, y, w, h, PI / 5,  2.5);
//
// //I'VE CHANGED THE COLORS IN THE SKETCH ALREADY YES
// var backgroundArray =  [color(215, 183, 145),  // Dark Neutral
//                         color(127, 190, 142),  // Light pastel green or smth
//                         color(252, 120, 46),   // Orange
//                         color(69, 160, 51),    // Grass green
//                         color(0, 166, 230),    // Vibrant Light Blue
//                         color(250, 245, 227),  // White Yellow Tint
//                         color(249, 207, 194)]  // Light pink
//
// var elementColorArray =  [color(18, 49, 112),        // Flashy Yellow
//                           color(255, 214, 68),       // Mustard Yellow
//                           color(75, 54, 73),         // Darkest Purple
//                           color(82, 85, 65),        // Army Forest Green
//                           color(232, 71, 64),       // Dark Blue
//                           color(127, 81, 27),       // Brown
//                           color(245, 232, 53),      // Magenta
//                           color(163, 27, 135),      // Lilac
//                           color(51, 85, 146),       // Blue
//                           color(64, 53, 137)]       // Indigo
