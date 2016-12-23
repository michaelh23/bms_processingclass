---
date: 2016-10-22T21:38:32-07:00
title: Activities
---

## Activity 1

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

Take the graph paper provided and draw the shapes that would be drawn by this code:

	point(350, 350);
	ellipse(100, 100, 100, 100);
	line(50, 250, 100, 50);
	rect (200, 250, 100, 50);
	triangle(350, 50, 370, 150, 300, 100);
	rect(200, 200, 50, 50);
	line(200, 100, 300, 50);
	ellipse(350, 200, 60, 40);
	triangle(70, 200, 130, 170, 110, 230);
	point(50, 350);

Looking at the following image, write the code that would draw these shapes.  Hint, small black squares are points.

![Activity 2b](/images/activities/assignment2_graph.svg)


## Activity 3

Try to guess what the instructions would be for the following picture:

![Exercise 1-4](/images/activities/exercise1-4.png)

## Activity 4

Complete the following program. Guess what RGB values to use.

![Exercise 1-5](/images/activities/exercise1-5.png)

What color will each of the following lines of code generate?

![Exercise 1-6](/images/activities/exercise1-6.png)


## Activity 5

Fix the errors in the following code statements:


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
	rectMode(center);

	// _______________________________________________

	// 5.
	function draw()

	}           

	// _______________________________________________

	// 6.
	createCanvas(windowWidth, Height);

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

On graph paper, design/draw a creature of your own using the shapes you have learned so far.  **Only use up to six shapes and up to four lines**.  Color your creature including the outline colors.  **Name** your creature
 
Once you have drawn a creature on your graph paper and colored it, take out a piece of lined paper and begin writing the code for your creature.
 
- background() comes first
 
- stroke(), fill(), etc. comes above the object or line you want to affect.
 
- Drawing Functions:  point(), line(), rect(), rectMode(), ellipse(), triangle()

- Color Functions:  stroke(), fill(), background(), noStroke(), noFill()
 
When using RGB in your stroke, fill, and background, be purposeful and know what color you are trying to make and describe it in your comment

Look back to the <a href="/outline/#graphing-shapes">Class Outline</a> if you need a reminder about how to use rect, line, ellipse, etc.
 
**Use COMMENTS for EVERY part of your drawing so you know what your code is doing and remember to include what color you intend.**

## Activity 7

Go to your account on www.openprocessing.org, create a new sketch and type in the code for your creature and see if it will run.  :-)

If it doesn't, try to determine what is wrong.

## Activity 8

Create a new sketch and draw an ice cream cone using a triangle and an ellipse.  The color of the ice cream should be influenced by the ```mouseX``` and ```mouseY``` variables.  I.e. the color of the ice cream should change when you move the mouse.

Make sure the ice cream is *inside* the cone (not on top of the cone).

### Discussion questions: 

When you move the mouse, are there areas of the screen where the mouse doesn't change the ice cream color?  Why?

- (Advanced/Not Required:  Check out the <a href="http://p5js.org/reference/#/p5/map">"map()"</a> function at p5js.org for a way around this...)

Is there a limit to the colors you can choose using ```mouseX``` and ```mouseY``` inside the ```fill()``` function?  Why?


## Activity 9

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

What would you change to have the circle follow the mouse as it grows?  How could you vary the speed at which the circle grows?	

## Activity 10

Create one shape (ellipse or rect) and declare variables for all the arguments needed.  For example:  x, y, w, h, fillColor, backgroundColor, change.

Make it so that at least the following items change:  color, x, and y

Once that works, try changing the color so that it's not just greyscale.

Name your sketch:  AllVarChange

## Activity 11

For each of the following examples, answer the questions:

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

## Activity 12

Create a circle or square (w and h are the same) and declare a variable for ALL the parts and make the parts random(255) as was demonstrated to you.

Name your sketch: RandomShapes

## Activity 13

Open your character/creature code where you have incorporated the variables and it is now set on mouseX and mouseY.  

Save a Fork and name it RandomCreature.  

Do the following:
 
- Take out mouseX and mouseY and put in the original value for the var.

- Set your framerate to 5 in `setup()`: `frameRate(5);`

- Choose a part of your character/creature that you want to make change color randomly.

- Declare variables R, G, B for the part you want to have change color randomly such as the eyes, legs, or whatever.  (ex:  `var eyeR =random(255); var eyeG = random(255); var eyeB = random(255);`.  Declare these variable just one line above the part you want to change.  Then, replace the arguments for the fill with your new variable labels.

Does your character now have a body part that changes colors randomly?
 
If you would like your character to begin in the center of your screen, inside the setup function, set your x to be equal to one-half the width of the screen:  `x = windowWidth/2;`
 
Then, let’s make your character begin off the screen on the y.  What would you have to do with the Height to accomplish that?  [Hint: it would have to be declared in the setup also]

Add an increment that would bring your character from the bottom of the screen up on the y-axis.

## Activity 14

Think about a grading system where numbers are turned into letters.  Fill in the blanks in the following code to complete the boolean expressions.

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

## Activity 15

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

	// 8. Make a new sketch at openprocessing.org and
	// write a program to swap two numbers.  Here is a
	// starting point:

	var x = 10;
	var y = 20;

	// your code here:

	if(x == 20 && y == 10) {
	    println("x and y were swapped");
	} else {
	    println("something went wrong");
	}


.