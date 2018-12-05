var isInsideText;
var margin = 35;
var margin2 = 100;
var cp = [];
var tileSize = 9;
var PGRAPHICS_COLOR = 0;
var cp = ['#ABADC8', '#0F5DAC', '#79E0F8', '#7C7C7C', '#C5B226', '#344C5C', '#041D1A', '#37494A', '#362CE6'];

/* Text */
var description = "Generative \nPoster \nWorkshop";
var cost =        "Free Admission";
var dateLocation ="OCAD U \n2018/10/31\n6:00PM";
var url =         "typeandcode.com";


function setup() {     // This runs only once
  createCanvas(windowWidth,windowHeight);   // Canvas size
}

function draw () {
  background(random(360), random(75,100), random(75,100));
    // background(cp[int(random(cp.length))]);
  fill(0, 0, 100);
  textSize(15);

  textPlus();
  textFront();
  textBack();

  var d = random(10,25);
  var d2 = random(10, 35);
  var d3 = random(10, 35);

  var plus = color(random(360), 100, 100);

  for (var i = 0; i < width; i += tileSize/2) {
    for(var j = 0; j < height; j += tileSize/2) {
      var c = pgback.get(i,j);
       if (c == PGRAPHICS_COLOR) {
         isInsideText = true;
       }
       noFill();
       stroke(0);

       if (isInsideText) {
       ellipse(i,j,d2,d2);
      }
    }
  }

  for (var i = -tileSize; i <= width+tileSize;i += tileSize) {
  for (var j = -tileSize; j <= height+tileSize; j += tileSize) {
    var c = pgplus.get(i,j);
    if (c == PGRAPHICS_COLOR) {
      isInsideText = true;
    }
    noFill();
    stroke(plus);

    if (!isInsideText) { // If the binary variable is true, then do the following:
      ellipse(i,j,d,d);
    }
  }
}

push();
translate(width-margin2-165,0);
info();
pop();


for (var i = 0; i < width;i += tileSize/2) {
  for (var j = 0; j < height; j += tileSize/2) {
    var c = pgfront.get(i,j);
    if (c == PGRAPHICS_COLOR) {
      isInsideText = true;
    }
    noFill();
    stroke(0);

    if (isInsideText) { // If the binary variable is true, then do the following:
      ellipse(i,j,d3,d3);
    }
  }
}

// saveFrames("output/poster#####.png"); // The # will be replaced by the frame number
// }

function info() {
fill(0,0,100);
strokeWeight(1);
stroke(0);
rect(margin2-16,-3,165,275);
fill(0);
// textFont(boldFont);
textSize(20);
textAlign(LEFT,TOP);
text(description,margin2,20);
// textFont(regularFont);
textSize(15);
text(cost,margin2,130);
text(dateLocation,margin2,165);
// textFont(boldFont);
textSize(11);
text(url,margin2,240);
}

function textPlus() {
  var s = random(3,6);
  pgplus = createGraphics(width,height);
  pgplus.background(200);
  pgplus.fill(0);
  pgback.textSize(100);
  pgplus.textSize(random(600,1000)); // Making this more apparent
  pgplus.textAlign(CENTER,CENTER);
  pgplus.strokeWeight(random(75,150));
  pgplus.push();
  pgplus.translate(random(pgplus.width/2-100,pgplus.width/2+100),random(pgplus.height/2-75*s,pgplus.height/2+5*s));
  pgplus.line(random(-10,10),random(-10,10),random(-10,10),random(90,110)*s);
  pgplus.line(random(-40,-60)*s,random(40,60)*s,random(40,60)*s,random(40,60)*s);
  pgplus.pop();
  //pgplus.text("+",pgplus.width/2,pgplus.height/2-50);
  //image(pg,0,0);
}

function textBack() {
  pgback = createGraphics(width,height);
  pgback.textAlign(CENTER,CENTER);
  pgback.textSize(100);
  pgback.fill(0);
  pgback.textSize(random(75,300));
  pgback.text("Y",random(width/4,width/3),random(margin,height/2));
  pgback.textSize(random(75,300));
  pgback.text("C",random(0,width/4),random(height/2,height-margin));
  pgback.textSize(random(75,300));
  pgback.text("D",random(width/3,width/2),random(height/2,height-margin));
  pgback.textSize(random(75,300));
  pgback.text("E",random(width/2,width),random(height/2,height-margin));
  //image(pgback,0,0);
}

function textFront() {
  pgfront = createGraphics(width,height);
  pgback.textSize(100);
  pgfront.textAlign(CENTER,CENTER);
  pgfront.fill(0);
  pgfront.textSize(random(75,300));
  pgfront.text("T",random(0,width/4),random(margin,height/2));
  pgfront.textSize(random(75,300));
  pgfront.text("P",random(width/3,width/2),random(margin,height/2));
  pgfront.textSize(random(75,300));
  pgfront.text("E",random(width/2,width),random(margin,height/2));
  pgfront.textSize(random(75,300));
  pgfront.text("O",random(width/4,width/3),random(height/2,height-margin));

  //image(pgfront,0,0);
}
}
