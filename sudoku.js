// Sudoku Solver
//@cartertrafton
//9 August 2018

//  To-Do
//  - Create chart
//  - Create fill-in on click ability
//  - Create solving algortihm lol

function setup() {
  createCanvas(1000, 1000);
  fill(255);
  stroke(102);
}
function draw() {
  background(0);
  for (var y = 20; y <= height-20; y += 100) {
    for (var x = 20; x <= width-20; x += 100) {
      ellipse(x, y, 10, 10);
      // Draw a line to the center of the display
      line(x, y, mouseX, mouseY);
    }
  }
}

function sudokuSolve(){

}
