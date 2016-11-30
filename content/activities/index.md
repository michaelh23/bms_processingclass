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

For each of the following examples, answer the questions:

	// 1.

	var x = 20;
	var y = 30;
	var z, q;

	z = x + y;  // (a)
	q = z - x;
	y = 40;
	z = x + y;  // (b)

	// what is the value of z at (a):________________________________

	// what is the value of q:_______________________________________

	// what is the value of z at (b):________________________________

	// 2.

	var x = 1;
	var y = 2;
	var z = 3;
	var p, q, r;

	p = x + y;
	q = y * 2 + z;
	r = x + y * z;

	// what is the value of p: ______________________

	// what is the value of q: ______________________

	// what is the value of r: ______________________

	// 3.

	var x = 10;
	var y = 30;
	var z = 25;
	var a, b;

	a = x + y + z;
	x = x + y;
	z = x + y;
	b = a + z;

	// by the end...
	// what is the value of a:__________________

	// what is the value of x:__________________

	// what is the value of z:__________________

	// what is the value of b:__________________



.