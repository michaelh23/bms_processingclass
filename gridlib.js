/*
Grid Drawing Library

the idea is that not only do I want a grid, I want new functions for easily
drawing things on that grid, because I'm lazy and plan to do this a lot.
so I define functions "gridPoint()", "gridRect()", etc that let me draw shapes
in "grid space" and inside of those, it gets converted to screen space for drawing

the oddly named "s2gArrow()" function lets me specify a point on the screen as the
origin and a point on the grid as a destination and draws an arrow there.

the last few lines in "draw()" demonstrate how to use the functions.

Have fun!

-- Michael
realmichaelhelmke@gmail.com
*/

function s2gArrow(sX, sY, gX, gY) {
  var sX2 = gridOriginX + gX * squareWidth;  // convert from grid coordinates to screen coordinates
  var sY2 = gridOriginY + gY * squareWidth;  // same method used throughout this sketch
  
  push();
  strokeWeight(2);  // I wanted this to be thinner than the gridLine().  looked better
  strokeCap(SQUARE);
  
  line(sX, sY, sX2, sY2);
  
  push();  // extra push/pop to guard the translate/rotate
  translate(sX2, sY2);
  r = atan2(sX-sX2, sY2-sY);  // the magic of math.  gives us angle of line
  rotate(r);
  fill(0);
  triangle(0,0,-5,-10,5,-10);
  pop();
  
  pop();
}

function gridPoint(gridX, gridY) {
  var screenX, screenY;
  push();
  strokeWeight(10);
  strokeCap(SQUARE);
  
  screenX = gridOriginX + gridX * squareWidth;
  screenY = gridOriginY + gridY * squareWidth;
  
  point(screenX, screenY);
  
  pop();
}

function gridLine(gridX1, gridY1, gridX2, gridY2) {
  var screenX1, screenY1, screenX2, screenY2;
  push();
  strokeWeight(5);
  strokeCap(SQUARE);

  screenX1 = gridOriginX + gridX1 * squareWidth;
  screenY1 = gridOriginY + gridY1 * squareWidth;
  screenX2 = gridOriginX + gridX2 * squareWidth;
  screenY2 = gridOriginY + gridY2 * squareWidth;
  line(screenX1, screenY1, screenX2, screenY2);

  pop();
}

function gridRect(gridX, gridY, width, height) {
  var screenX, screenY;
  push();
  strokeWeight(5);
  strokeCap(SQUARE);
  noFill();

  screenX = gridOriginX + gridX * squareWidth;
  screenY = gridOriginY + gridY * squareWidth;

  rect(screenX, screenY, width * squareWidth, height * squareWidth);
  
  pop();
}

function gridEllipse(gridX, gridY, width, height) {
  var screenX, screenY;
  push();
  strokeWeight(5);
  strokeCap(SQUARE);
  noFill();

  screenX = gridOriginX + gridX * squareWidth;
  screenY = gridOriginY + gridY * squareWidth;

  ellipse(screenX, screenY, width * squareWidth, height * squareWidth);
  
  pop();
}

function labelAxies() {
  var gridHeight = squareWidth * numSquaresY;
  var gridWidth = squareWidth * numSquaresX;
  var centerHeight = gridHeight / 2;
  var centerWidth = gridWidth / 2;
  var yAxisCenter = gridOriginY + centerHeight;
  var xAxisCenter = gridOriginX + centerWidth;
  
  // rotate and draw Y label
  push();
  translate(gridOriginX-20, yAxisCenter);
  rotate(PI*1.5);
  textAlign(CENTER);
  text("Y-Axis", 0, 0);
  pop();
  
  // X label
  push();
  translate(xAxisCenter, gridOriginY-20);
  textAlign(CENTER);
  text("X-Axis", 0,0);
  pop();
  
}

function drawGrid() {
  
  push();
  textAlign(CENTER);
  for(var x=0; x <= numSquaresX; x++) {
    var startX = gridOriginX + squareWidth * x;
    line(startX, gridOriginY, startX, gridOriginY + gridHeight);
    if(x > 0) {
      text(x, startX, gridOriginY + labelOffset);
    }
  }
  
  textAlign(RIGHT); // it seemed to be this should have been LEFT but RIGHT looked better.
  for(var y=0; y <= numSquaresY; y++) {
    var startY = gridOriginY + squareWidth * y;
    line(gridOriginX, startY, gridOriginX + gridWidth, startY);
    if(y > 0) {
        text(y, gridOriginX + labelOffset, startY);
    }
  }
  pop();
  
}