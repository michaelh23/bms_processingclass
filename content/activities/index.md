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

Looking at the following image, write the code that would draw these ten shapes in their numbered order.  The first two answers should be the points at 1 and 2.  You do not need to write the code that would draw the red numbers themselves.

![Activity 2b](/images/activities/assignment2_graph.svg)


## Activity 3

Use your Notebook.

Using the ```fill()``` and ```rect()``` functions, code the following shape.  Hint, it can be done with 4 rectangles and 3 fill calls however it can also be solved with only 3 rectangles.

![Exercise 1-4](/images/activities/exercise1-4.png)

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


## Activity 5

Use your Notebook.

Rewrite the lines of code to make them correct:


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

## Activity 6

Use graph paper and your notebook.

On graph paper, design/draw a creature of your own using the shapes you have learned so far.  Color your creature including the outline colors.  **Name** your creature.

Your creature can use:

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

## Activity 7

Create a new Open Processing sketch.

Go to your account on www.openprocessing.org, create a new sketch and type in the code for your creature and see if it will run.

Make sure you put your code inside the draw function (look for `function draw()` and write between the curly braces).

If it doesn't run, try to determine what is wrong.  Don't forget to look at the "Console" to check for errors reported there.

Save your sketch as "MyCreature_(name)__" with "name" replaced with the name of your creature.

## Activity 8

Open your creature sketch from Activity 7.  Add two variables `x` and `y` at the top of your draw function and set them to be equal to a somewhat central part of your creature.
 
For example:

	function draw() {
		var x = 200;
		var y = 150;

		... # more code below here
 
Save the sketch from Activity 7 as a FORK and add “var” to the end of the name (as in "MyCreature_(name)__var").
 
Incorporate these x and y variable into your sketch for all the x and y arguments that you have used in your code.
 
You may use the calculator on your computer to assist you.  To find it, (on Windows computers) click on the Windows icon in the lower left corner.  There should be a calculator option.
 
After you have incorporated x and y variables into all your x and y arguments in your code, your creature should look the same (as if nothing has changed because it shouldn’t have).  If it is not the same, what did you do wrong?
 
## Activity 9

Create a new Open Processing sketch.

Create a new sketch and draw an ice cream cone using a triangle and an ellipse.  The color of the ice cream should be influenced by the ```mouseX``` and ```mouseY``` variables.  I.e. the color of the ice cream should change when you move the mouse.

Make sure the ice cream is *inside* the cone (not on top of the cone).

Save your sketch as "ice cream cone".

### Discussion questions: 

When you move the mouse, are there areas of the screen where the mouse doesn't change the ice cream color?  Why?

- (Advanced/Not Required:  Check out the <a href="http://p5js.org/reference/#/p5/map">"map()"</a> function at p5js.org for a way around this...)

Is there a limit to the colors you can choose using ```mouseX``` and ```mouseY``` inside the ```fill()``` function?  Why?

## Activity 9B

Now go back to the sketch of your creature that you modified in Activity 8.  Go to where you have your variables defined.  You set your variable ```x``` and your variable ```y``` to be equal to numbers.  Replace the numbers with the system variables ```mouseX``` and ```mouxeY``` as shown:

	function draw() {
		var x = mouseX;
		var y = mouseY;

		... # more code for your creature below here

FORK this sketch and save it as "MyCreature_(name)__mXmY”

## Activity 10

Create a new Open Processing sketch.

Change the following program so that instead of the circle moving from left to right as in the class outline, the circle grows in size.

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

Once that works, change your program so that the circle moves with the mouse and changes size with the mouse at the same time.	

Name your sketch:  MoveGrow

## Activity 11

Create a new Open Processing sketch.

Create one shape (ellipse or rect) and declare variables for all the arguments needed.  For example:  x, y, w, h, fillColor, backgroundColor, change.

Next, make your background color change based on the position of the mouse and make your shape move two times faster across the X axis as it does on the Y axis.

Name your sketch:  AllVarChange

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


## Activity 14

Create a new Open Processing sketch.

Create a circle or square (w and h are the same) and declare a variable for ALL the parts and make the parts random(255) as was demonstrated to you.

Name your sketch: RandomShapes

## Activity 15

Create a new Open Processing sketch.

Open your creature code where you have incorporated the variables and it is now set on mouseX and mouseY.  

Save a Fork and name it RandomCreature.  

Do the following:
 
- Take out mouseX and mouseY and put in the original value for the var.

- Set your framerate to 5 in `setup()`: `frameRate(5);`

- Choose a part of your creature that you want to make change color randomly.

- Declare variables R, G, B for the part you want to have change color randomly such as the eyes, legs, or whatever.  (ex:  `var eyeR =random(255); var eyeG = random(255); var eyeB = random(255);`.  Declare these variables just one line above the part you want to change.  Then, replace the arguments for the fill with your new variable labels.

Does your creature now have a body part that changes colors randomly?
 
If you would like your creature to begin in the center of your screen, inside the setup function, set your x to be equal to one-half the width of the screen:  `x = windowWidth/2;`
 
Then, let’s make your creature begin off the screen on the y.  What would you have to do with the Height to accomplish that?  [Hint: it would have to be declared in the setup also]  Answer this question as a comment at the bottom of your program.

Add an increment that would bring your creature from the bottom of the screen up on the y-axis.


## Activity 16

Think about a grading system where numbers are turned into letters.

Use this grading scale:

- A - 90 to 100%
- B - 80 to 89%
- C - 70 to 79%
- D - 60 to 69&
- F - 59% or below

Fill in the blanks in the following code to complete the boolean expressions.

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

.