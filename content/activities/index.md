---
date: 2016-10-22T21:38:32-07:00
title: Activities
---

## Activity 1

Use Graph Paper.

Take the graph paper provided and draw the shapes that would be drawn by this code:

	1. line(220, 390, 240, 370);
	2. line(260, 390, 280, 370);
	3. rect(100, 150, 200, 200);
	4. triangle(100, 150, 300, 150, 200, 50);
	5. ellipse(200, 230, 100, 50);
	6. point(280, 320);
	7. rect(250, 280, 30, 70);
	8. point(350, 50);
	9. ellipse(50, 50, 60, 60);
	10. line(320, 20, 380, 80);

## Activity 2

Use Graph Paper.

There are two parts to this activity.  **Part 1** is just like Activity 1.  For **Part 2**, turn your graph paper over and write the code for the shapes you see.

### Part 1

Take the graph paper provided and draw the shapes that would be drawn by this code:

	point(350, 350);
	ellipse(100, 100, 100, 100);
	line(50, 250, 100, 50);
	rect(200, 250, 100, 50);
	triangle(350, 50, 370, 150, 300, 100);
	rect(200, 200, 50, 50);
	line(200, 100, 300, 50);
	ellipse(350, 200, 60, 40);
	triangle(70, 200, 130, 170, 110, 230);
	point(50, 350);

### Part 2

Looking at the following image, write the code that would draw these ten shapes in their numbered order.  The first two answers should be the points at 1 and 2.  You do not need to write the code that would draw the red numbers themselves.

![Activity 2b](/images/activities/assignment2_graph.svg)

# <a href="/outline/#a-href-activities-activity-2-b-complete-activity-2-b-a">**STOP** Go back to the Outline</a>

## Activity 3

Use your Notebook.

Using the ```fill()``` and ```rect()``` functions, code the following shape.  Hint, it can be done with 4 rectangles and 3 fill calls however it can also be solved with only 3 rectangles.  Assume this square is like our graph paper and is a 400x400 grid with (0,0) in the upper left corner.

![Exercise 1-4](/images/activities/exercise1-4.png)

# <a href="/outline/#a-href-activities-activity-3-b-complete-activity-3-b-a">**STOP** Go back to the Outline</a>

## Activity 4

Use your Notebook.

Estimate which RGB values to use for the following 3 colors:

	Bright Blue:  R__________, G_________, B_________

	Dark Purple:  R__________, G_________, B_________

	Yellow:		  R__________, G_________, B_________

What color will each of the following lines of code generate?

	fill(0, 100, 0);		_____________________________

	fill(100);				_____________________________

	stroke(0,0,200);		_____________________________

	stroke(255);			_____________________________

	stroke(255,255,0);		_____________________________

	stroke(0, 255, 255);	_____________________________

	stroke(200, 50, 50);	_____________________________

# <a href="/outline/#a-href-activities-activity-4-b-complete-activity-4-b-a">**STOP** Go back to the Outline</a>

## Activity 5

Use your Notebook.

Rewrite the lines of code so they will work/run:


	// 1.
	background(); 

	// _______________________________________________

	// 2.
	stroke 255;

	// _______________________________________________

	// 3.
	fill(150)

	// _______________________________________________

	// 4.
	rect 100, 100, 30, 40;

	// _______________________________________________

	// 5.
	tri(100,100, 40,50, 100,40);

	// _______________________________________________

	// 6.
	triangle(70, 200, 130, 170, 110,)

	// _______________________________________________

	// 7.
	line(100, 130, 210);

	// _______________________________________________

	// 8.
	noStroke( ;

	// _______________________________________________

	// 9.
	fill(255,0);

	// _______________________________________________

	// 10.
	rect(100,100,50)

	// _______________________________________________

# <a href="/outline/#a-href-activities-activity-5-b-complete-activity-5-b-a">**STOP** Go back to the Outline</a>

## Activity 6

Use graph paper and your notebook.

On graph paper, design/draw a creature of your own using the shapes you have learned so far.  Color your creature including the outline colors.  **Name** your creature.

Your creature must use:

- one rectangle
- one ellipse
- one triangle
- up to two lines and/or points
 
Once you have drawn a creature on your graph paper and colored it, take out a piece of lined paper and begin writing the code for your creature.
 
- background() comes first
 
- stroke(), fill(), etc. comes **above** the object or line you want to affect.
 
- Drawing Functions:  point(), line(), rect(), ellipse(), triangle()

- Color Functions:  stroke(), fill(), background(), noStroke(), noFill()
 
When using RGB in your stroke, fill, and background, be purposeful and know what color you are trying to make and describe it in your comment

Look back to the <a href="/outline/#graphing-shapes">Class Outline</a> if you need a reminder about how to use rect, line, ellipse, etc.
 
**Use COMMENTS for EVERY part of your drawing so you know what your code is doing and remember to include what color you intend.**

Remember that to comment out a line you do this:

	rect(50, 50, 25, 25); // the rest of this line is a comment
	// this is a comment below the rect function

# <a href="/outline/#a-href-activities-activity-6-b-complete-activity-6-b-a">**STOP** Go back to the Outline</a>


## Activity 7

Create a new Open Processing sketch.

Go to your account on www.openprocessing.org, create a new sketch and type in the code for your creature and see if it will run.

Make sure you put your code inside the draw function (look for `function draw()` and write between the curly braces).

If it doesn't run, try to determine what is wrong.  Don't forget to look at the "Console" to check for errors reported there.

Save your sketch and replace "My Sketch" with "MyCreature_(name)__" with "name" replaced with the name of your creature.


# <a href="/outline/#a-href-activities-activity-7-b-complete-activity-7-b-a">**STOP** Go back to the Outline</a>

## Activity 8

Open your creature sketch from Activity 7.  We are going to change your code so it will be easy to move your creature around on the screen by specifying the creature's overall x and y position.  Add two variables `x` and `y` at the top of your draw function and set them to be equal to a  central part of your creature.
 
For example:

	function draw() {
		var x = 200;
		var y = 150;

		... // more code below here
 
Save the sketch from Activity 7 as a FORK and add “var” to the end of the name (as in "MyCreature_(name)__var").

In all of the places where you specify a location such as the x and y position of a rectangle or ellipse, replace the fixed x and y position with an offset from the x and y variable.

For example, if you are drawing a rectangle at (250,100) your code might start with:

	rect(250,100,50,50);

and become:

	rect(x+50, y-50, 50,50);
 
You may use the calculator on your computer to assist you.  To find it, (on Windows computers) click on the Windows icon in the lower left corner.  There should be a calculator option.
 
After you have incorporated x and y variables into all your x and y arguments in your code, your creature should look the same (as if nothing has changed because it shouldn’t have).  If it is not the same, what did you do wrong?

## Activity 8.1

Take out graph paper.

Draw an ice cream cone with one triangle and one ellipse for the ice cream and one ellipse for the cherry on top.  Color your drawing.

Write the code for your ice cream cone on the separate sheet of paper.

Open a new sketch in open processing and enter your code.  When you run your code, does the cone look correct?  If not, fix your code.

Once your code looks correct, take out another sheet of paper and create variables for all of your function arguments such as x,y positions, width and height, r,g,b for colors.

Then, incorporate your variables in your open processing sketch.  

Turn in stapled your graph, regular code, and code with variables.

Save your sketch as "IceCreamCone"

# <a href="/outline/#a-href-activities-activity-8-1-b-complete-activity-8-1-b-a">**STOP** Go back to the Outline</a>

## Activity 9

Create a new Open Processing sketch.

Change the following program so that the circle moves across and down while it is getting bigger.  You may copy and paste the info below over your new sketch and finish writing your code from that.

	var circleSize=5;
	var circleX=100;
	var circleY=100;

	function setup() {
		createCanvas(windowWidth,windowHeight);
	}

	function draw() {
		background(0);
		stroke(255);
		fill(175);

		// fill in your code here
	}

Name your sketch:  MoveGrow

## Activity 10

Create a new Open Processing sketch.

Create a rectangle and declare variables for all the arguments needed.  For example:  x, y, w, h, fillColor, backgroundColor, change.

Make your rectangle start off of the screen on the bottom left and move up to the top right while growing at half the rate of speed shown in the outline example.  Also, make the color of the rectangle change as it moves up.

Name your sketch:  AllVarChange

# <a href="/outline/#a-href-activities-activity-10-b-complete-activity-10-b-a">**STOP** Go back to the Outline</a>

## Activity 11

Create a new Open Processing sketch.

Open your sketch "icecreamcone".  Save as a Fork and name it icecreamcone_mXmY.

Change your code so that the color of your ice cream changes based on the location of your mouse.

Make sure the ice cream is *inside* the cone (not on top of the cone).

### Discussion questions: 

When you move the mouse, are there areas of the screen where the mouse doesn't change the ice cream color?  Why?

- (Advanced/Not Required:  Check out the <a href="http://p5js.org/reference/#/p5/map">"map()"</a> function at p5js.org for a way around this...)

Is there a limit to the colors you can choose using ```mouseX``` and ```mouseY``` inside the ```fill()``` function?  Why?

## Activity 11.1

Open your sketch MyCreature_(name)__var.

Now go back to the sketch of your creature that you modified in Activity 8.  Go to where you have your variables defined.  You set your variable ```x``` and your variable ```y``` to be equal to numbers.  Replace the numbers with the system variables ```mouseX``` and ```mouxeY``` as shown:

	function draw() {
		var x = mouseX;
		var y = mouseY;

		... # more code for your creature below here

FORK this sketch and save it as "MyCreature_(name)__mXmY”

Do all parts of your creature move together around your screen when you move your mouse?  Or do some parts have extended lines or change size and look odd when you move your mouse.  If your creature does not move all together, review your code and problem solve.

# <a href="/outline/#a-href-activities-activity-11-1-b-complete-activity-11-1-b-a">**STOP** Go back to the Outline</a>

## Activity 12

Use your Notebook.

For each of the following examples, answer the questions.  It is recommended that you solve for each line of code first and then you will have the answers readily available to you.

	// 1. Given the following code:

	var x = 20;
	var y = 30;
	var z, q;

	z = x + y;  // (a)
	q = z - x;
	y = 40;
	z = x + y;  // (b)

	// Answer:

	// 1a. what is the value of z at (a):________________________________

	// 1b. what is the final value of q:_________________________________

	// 1c. what is the value of z at (b):________________________________

	// 2.  Given the following code:

	var x = 1;
	var y = 2;
	var z = 3;
	var p, q, r;

	p = x + y;
	q = y * 2 + z;
	r = x + y * z;

	// Answer:

	// 2a. what is the final value of p: ______________________

	// 2b. what is the final value of q: ______________________

	// 2c. what is the final value of r: ______________________

	// 3.  Given the following code:

	var x = 10;
	var y = 30;
	var z = 25;
	var a, b;

	a = x + y + z;
	x = x + y;
	z = x + y;
	b = a + z;

	// Answer: 

	// 3a. what is the final value of a:__________________

	// 3b. what is the final value of x:__________________

	// 3c. what is the final value of z:__________________

	// 3d. what is the final value of b:__________________


## Activity 13

	// 1. Given the following code:

	var x = 2;
	var y = 3;
	var z = 4;
	var q;

	x = y + z;
	y = x - z;
	z = x + y;
	z = z - y + x;

	// Answer and show your work:

	// 1a. What is the final value of x:
	// 1b. What is the final value of y:
	// 1c. What is the final value of z:

	// 2. Given the following code:

	var x = 10;
	var y = 10;
	var z = 20;
	var r;

	x = x + y;
	r = y + z;
	r = r - z;
	y = r + x;

	// Answer and show your work:

	// 2a. What is the final value of x:
	// 2b. What is the final value of y:
	// 2c. What is the final value of r:


	// 3. Given the following code:

	var x = 20;
	var y = 30;

	x = x + y; // (a)
	y = x - y;
	x = x - y; // (b)

	// Answer and show your work:

	// 3a. What is the value of x at (a):
	// 3b. What is the final value of y:
	// 3c. What is the value of x at (b):

	// 4. Given the following code:

	var x = 10;
	var y = 20;
	var z = 30;
	var r, q;

	r = y + z;
	q = r;
	r = r - x; // (a)
	q = q + r;

	// Answer and show your work:

	// 4a. What is the value of r at (a):
	// 4b. What is the final value of q:

	// 5. Given the following code:

	var x = 10;
	var y = 20;
	var z = 30;

	y = y + x;
	x = x + z;
	z = 5;
	y = y + x;
	x = x + z;

	// Answer and show your work:

	// 5a. What is the final value of y:
	// 5b. What is the final value of x:

	// 6. Given the following code:

	var x = 10;
	var y = 30;
	var z = 50;
	var p, q;

	q = z - x; // (a)
	p = 10;
	x = x + p;
	p = z - x;
	q = p + y; // (b)

	// Answer and show your work:

	// 6a. What is the value of q at (a):
	// 6b. What is the final value of x;
	// 6c. What is the final value of p:
	// 6d. What is the value of q at (b):

	// 7. Given the following code:

	var x = 1;
	var y = 2;
	var z = 3;
	var p, q;

	p = z + y + x;   // (a)
	q = (z * y) + x; // (b)
	z = x;
	p = z + y + x;   // (c)
	q = (z * y) + x; // (d)

	// Answer and show your work:

	// 7a. What is the value of p at (a):
	// 7b. What is the value of q at (b):
	// 7c. What is the value of p at (c):
	// 7d. What is the value of q at (d):

# <a href="/outline/#a-href-activities-activity-13-b-complete-activity-13-b-a">**STOP** Go back to the Outline</a>


## Activity 14

Create a new Open Processing sketch.

Create a circle or square (w and h are the same) and declare a variable for ALL the parts and make the parts random(255) as was demonstrated to you.

Name your sketch: RandomShapes


## Activity 15

Create a new Open Processing sketch.

Open your creature code where you have incorporated the variables and it is now set on mouseX and mouseY.  This is the sketch named like:  "MyCreature_(name)__XY”.

Save a Fork and name it RandomCreature.  

Do the following:
 
- Take out the mouseX and mouseY and replace them with numeric values.

- Change the frame rate to 5 by adding a call to the `frameRate` function inside of `setup()`.  The call to `frameRate` should look like this: `frameRate(5);`

- Choose a part of your creature that you want to randomly change color.

- Declare variables R, G, B for the part you want to have change color randomly such as the eyes, legs, or whatever.  (for example:  `var eyeR =random(255); var eyeG = random(255); var eyeB = random(255);`.)  Declare these variables just one line above the part you want to change.  Then, replace the arguments for the fill with your new variable names.

Does your creature now have a body part that changes colors randomly?

To have your creature begin in the center of the screen, inside the `setup()` function, set x to be equal to one-half the width of the screen:  `x = windowWidth/2;`
 
Then, let’s make your creature begin off the screen on the y.  What would you have to do with the y variable to accomplish that?  [Hint: it would have to be declared in the setup also]  Answer this question as a comment at the bottom of your program.

Add an increment that would bring your creature from the bottom of the screen up on the y-axis.

# <a href="/outline/#a-href-activities-activity-15-b-complete-activity-15-b-a">**STOP** Go back to the Outline</a>

## Activity 16

Using an if statement, move a square across a window by incrementing a variable.  Start the shape at x coordinate 0 and use an if statement to have it stop at coordinate 100.

Save sketch as IF1

# <a href="/outline/#a-href-activities-activity-16-b-complete-activity-16-b-a">**STOP** Go back to the Outline</a>

## Activity 17

Write a program that splits your screen horizontally so that when your mouse is on the top third of the screen, the screen is RED; when it’s below the top third your screen turns GREEN.

Save sketch as IFELSE1

# <a href="/outline/#a-href-activities-activity-17-b-complete-activity-17-b-a">**STOP** Go back to the Outline</a>

## Activity 18

Create a program using “else if” to make the following happen:

If the mouse is on the left third of the window, draw a white background; if the mouse is in the middle third, draw a gray background; otherwise, draw a black background.

Save sketch as elseif1

## Activity 19

Think about a grading system where numbers are turned into letters.

Use this grading scale:

- A - 90 to 100%
- B - 80 to 89%
- C - 70 to 79%
- D - 60 to 69&
- F - 59% or below

Fill in the blanks in the following code to complete the conditions.

	var grade = random(0,100);

	if (__________) {
		println("Assign letter grade A.");
	} else if (__________) {
		println(________________);
	} else if(_____________) {
		println(________________);
	} else if(_____________) {
		println(________________);
	} else {
		println(________________);
	}

## Activity 20

To further practice using if, else, else if, please make the following happen.

1.	Create variables to represent red, green, and blue (r, g, b perhaps)
2.	Continuously draw the background based on those colors: background(r, g, b)
3.	If the mouse is on the right-hand side of the screen, increment the value of r; if it’s on the left-hand side decrement the value of r.
4.	Constrain the value r to be within 0 and 255.

Save sketch as elseif3

## Activity 21

On a piece of notebook paper, please answer for both Problem 1A-C and 2A-C.

Problem #1:  Determine if a number is between 0 and 25, 26 and 50, or greater than 50.

	var x = 75;

	if(x > 50) {
		println(x + ">50!");
	} else if(x > 25) {
		println(x + ">25!");
	} else {
		println(x + "<=25!");
	}

	// Output: ___________________

	var x = 75;

	if(x > 25) {
		println(x + ">25!");
	} else if(x > 50) {
		println(x + ">50!");
	} else {
		println(x + "<=25!");
	}

	// Output: ___________________

Although the program syntax is correct, what is the problem with the second block of code?

Problem #2:  If a number is 5, change it to 6.  If a number is 6, change it to 5.

	var x = 5;
	println("x is now: " + x);
	if (x == 5) {
		x = 6;
	}
	if (x == 6) {
		x = 5;
	}
	println("x is now: " + x);

	// Output: _______________


	var x = 5;
	println("x is now: " + x);
	if (x == 5) {
		x = 6;
	} else if (x == 6) {
		x = 5;
	}
	println("x is now: " + x);

	// Output: _______________

Although the program syntax is correct, what is the problem with the first block of code?

# <a href="/outline/#a-href-activities-activity-21-b-complete-activity-21-b-a">**STOP** Go back to the Outline</a>

## Activity 22

Change the code so there is only one “if” statement and && to make the rectangle appear in the lower right corner once your mouse is there.

Save sketch as:  And1

# <a href="/outline/#a-href-activities-activity-22-b-complete-activity-22-b-a">**STOP** Go back to the Outline</a>

## Activity 23

Write your answers on a piece of notebook paper.

Given ```x == 5``` and ```y == 6```, are the following expressions true or false?

1.	 !(x > 6)
2.	 (x == 6 && x == 5)
3.	 (x == 6 || x == 5)
4.	 (x > -1 && y < 10)
5.	 !(x < 7)
6.   (x != y || y < 5)
7.   (x == 5 && (y > 6 || x < y))

Although the syntax is correct, what is flawed about the following expressions?

8.	 (x > 10 && x < 5)
9.	 (y < 10 && y < 4)
10.   (x > y && y > x)

## Activity 24

Write a program that implements a simple rollover.  If the mouse is over a rectangle, the rectangle changes color.  

Here’s a start:

	var x = 50;
	var y = 50;
	var w = 100;
	var h = 75;

	function setup() {
	    createCanvas(windowWidth, windowHeight);
	}

	function draw() {
		background(255);
		stroke(0);

	if ( _____ && ______ && ______ && ______ ) {
		______________

	} _________ {
		___________________
	}

	rect(x, y, w, h);

}

Save Sketch as:  SingleRollover

## Activity 25

Using your entire screen, divide your screen into four quarters.
Write your program so that:

- If your mouse is in the top left corner, that section turns red.
- If the mouse is in the top right corner, that section turns green.
- If the mouse is in the lower left corner, that section turns blue.
- If the mouse is in the lower right corner, that section turns black.

Save sketch as:  FourSquareRollover

# <a href="/outline/#a-href-activities-activity-25-b-complete-activity-25-b-a">**STOP** Go back to the Outline</a>

## Activity 26


Make a small ellipse or rect at position x = 0 so that it begins on the left side of your screen.  Using variable named button and the system function mousePressed, write a program that makes your ellipse or rect only move across the screen while you press your mouse.

### Reversing Polarity (direction)
 
When I want to reverse the polarity of a number, I mean that I want a positive number to become negative and a negative number to become positive.  This is achieved by multiplying by -1.   Remember this is how it works… some examples:
 
    -5 * -1 = 5
     5 * -1 = -5
     1 * -1 = -1
    -1 * -1 = 1
 
If my object moves to the right edge, I want it to stop and move to the left edge and continue to bounce off both edges.    So, if my variable x is greater than the windowWidth or if my variable x is less than zero, I want to reverse the speed.
 
    if((x > windowWidth) || (x < 0) {
                speed = speed * -1;
    }

## Activity 27

Create a small ball using a speed variable.  Make it so the ball goes right to the edge of the screen and when it gets there, it automatically goes left to the edge of your screen and when it gets there, it goes back to the right… 
 
Save sketch as:  bouncy ball 1

## Activity 28

Partner activity.
 
Make your bouncing ball1 ball move vertically as well as horizonally.  Also, change the size and/or color of the ball based on certain conditions?  And then, make the ball speed up or slow down in addition to changing direction.
 
Save sketch as:  bouncy ball 2

# <a href="/outline/#a-href-activities-activity-28-b-complete-activity-28-b-a">**STOP** Go back to the Outline</a>

.