---
date: 2016-10-22T18:36:15-07:00
title: Class Outline
---

## Graphing Shapes

For many of these exercises it will help to have graph paper.  If you don't have any, you can download and print this page of <a href="/images/graphpaper_85x11.pdf" target="_blank">graph paper</a>

Note that in Processing, we set the grid origin (0,0) point in the upper left corner.  Also note that increasing values of Y go down rather than up like you have seen in your math class.  This is ok and has to do with how computer displays are normally programmed.

### Drawing Functions:  point(), line(), rect(), ellipse()

The `point` function draws a point at the given x and y location on the screen.  Coordinates are *always* given in (x,y) order:

	point(4,5);

![Figure 1-5](/images/figures/PointDiagram.png)

The `line` function draws a line between two x and y locations on the screen:

	line(1,3,8,3);

The first two arguments "1,3" are the start point of the line and the last two arguments "8,3" are the end point of the line:

![Figure 1-6](/images/figures/LineDiagram.png)

The `triangle` function draws a triangle.  The function takes 6 parameters describing 3 points:  (x1,y1), (x2,y2), and (x3,y3).

![Triangle](/images/figures/triangle.svg)

You call the triangle function like this:

	triangle(200,100,  300,300,  100,300);

The `rect` function draws a rectangle.  The upper left corner of the rectangle is specified by the x and y parameters and then the width and height.

![Rectangle Arrows](/images/figures/rect_arrows.svg)

Calling the `rect` function looks like this with 2,3 as the x and y position of the rectangle with a width of 5 and a height of 4:

	rect(2,3,5,4);

![Figure 1-7](/images/figures/RectDiagram.png)

The `ellipse` function is similar to `rect` except it draws *circles* and *ellipses*.  This time, the center of the ellipse is specified by the x and y parameters and then the width and height.

![Ellipse Arrows](/images/figures/ellipse_arrows.svg)

Calling the `ellipse` function looks like this example with 3,3 as the x and y position of the ellipse with a width of 5 and height of 5:

	ellipse(3,3,5,5);

![Figure 1-10](/images/figures/EllipseCenterDiag.png)


### <a href="/activities/#activity-1"><b>Complete Activity 1</b></a>

### <a href="/activities/#activity-2"><b>Complete Activity 2</b></a>


## Color

### Greyscale

Greyscale means describing terms of black, white, and the grey inbetween.

- 0 = black
- 255 = white
- between 0 and 255 = greyscale

![Figure 1-13](/images/figures/figure1-13.jpg)

You use these functions to change colors: `stroke(...)`, `fill(...)`, and `background(...)`

You can use them like this:

	stroke(50); // gives you a dark grey outline to your shapes
	background(255); // gives you a white background
	background(128); // gives you a medium grey background
	fill(0); // fills the next shapes with black


### <a href="/activities/#activity-3"><b>Complete Activity 3</b></a>

### RGB

Computers view color in terms of Red, Green, and Blue light (RGB) and this can be confusing at first.  You are probably more used to color from mixing paint like knowing that mixing yellow and blue makes green.

Mixing colors of **light** works differently as you can see below:

![RGB image](/images/figures/AdditiveColor.svg)

RGB color can be understood as all colors that can be made up of shining a Red, Green, and Blue light on a wall and adjusting the lights with dimmer switches.  If only red is on, the wall looks red.  If red and green are on, the wall will look yellow (see above).  Dimming the lights will change the intensity of the light.

Adding RGB to what we did above wtih greyscale:

	stroke(255,0,0); // gives a red outline to your shapes
	background(0,255, 0);  // gives you a green background
	fill(0, 0, 255); // fills the next shapes with blue

And rewriting the above with greyscale using RGB:

	stroke(50, 50, 50); // gives you a dark grey outline to your shapes
	background(255, 255, 255); // gives you a white background
	background(128, 128, 128); // gives you a medium grey background
	fill(0, 0, 0); // fills the next shapes with black

The following code:

	function setup() {
	  createCanvas(windowWidth, windowHeight); 
	  
	} 

	function draw() {
	  background(255, 255, 255);
	  
	  fill(148, 222, 254);
	  rect(300,300,50,50);

	  fill(148 * 0.8, 222 * 0.8, 254 * 0.8);
	  rect(300,360,50,50);

	  fill(148 * 0.6, 222 * 0.6, 254 * 0.6);
	  rect(300,420,50,50);
	}

will produce this:

![Color Squares](/images/figures/color_squares.png)

You should be able to see how to experiment from here to produce other colors.  There are also charts of RGB colors and their common names on the web that you can find if you search for them.


### <a href="/activities/#activity-4"><b>Complete Activity 4</b></a>

## Parts of Code

There are 3 kinds of statements:  Function calls, Assignment Operations, and Control Structures

So far, we've been doing **function calls**.

	line(0, 0, 200, 200);

- *line* is the function name, like a verb
- the arguments to the functions are surrounded by parenthesis
- each statement ends with a semicolon ';' character

### <a href="/activities/#activity-5"><b>Complete Activity 5</b></a>

## Create Creature

For this part, you are going to design/draw a creature of your own using the shapes you have learned so far.  I want you to keep your design simple since the point here is to learn how to turn your design into code you can run and see on the screen.

### <a href="/activities/#activity-6"><b>Complete Activity 6</b></a>

## OpenProcessing.org Sketches

To start coding with a new sketch, we start with a function, ``setup`` to get everything prepared:
 
	function setup() {
	    createCanvas(windowWidth, windowHeight);  
	} 
 
This sets the size of the window our drawings will appear.  Although we used a 400x400 graph grid, once we write our code it’s useful to have a much bigger window than to be restricted to a small grid.
 
Then, we need to add our code to a function called ``draw``:
 
	function draw() {
	  rect (200, 200, 50, 50);		//head
	  ellipse (190, 190, 10, 10);	//eye left
	  ellipse (210, 190, 10, 10);	//eye right
	}
 
Remember to **comment** your code with two slashes ``//``
 
If you want a longer comment, you can do this:

	//* this is a comment that spans
	more than one line of code  */
 
Remember:

- the computer READS the instructions (your code) from top down and does exactly what you tell it to do. 

- No space between the function name and the arguments. ``line();`` not ``line ();``

- Once you’ve entered your program, you will click on the RUN button (like a START arrow on a video).  If nothing shows up, there is an error in your code.  Time to proofread what you typed and find any mistakes.

- The computer can only do what it is told, it does not think for itself.

- Processing is CASE SENSITIVE and does NOT do spellcheck for you.

### <a href="/activities/#activity-7"><b>Complete Activity 7</b></a>

## Variables

So far you have been making shapes by calling functions like ``rect(...)`` or ``ellipse(...)`` and entering exact numbers for each of the function arguments.

You can also use variables to store information to be used later.  A variable is like a cubbyhole in the computer memory where you can store things.

You create a variable like this:

	var x;

That creates a variable called x that you can put numbers or letters into:

	x = 23;
	rect(x, 25, 50, 50);

In that example, we assign the number 23 to the variable called ``x``.  In the following ``rect(...)`` function call, we use the variable ``x`` as the first argument to ``rect(...)``.  That is the same as doing this:

	rect(23, 25, 50, 50);

### <a href="/activities/#activity-8"><b>Complete Activity 8</b></a>

### System Variables

*System Variables* are provided by the Processing language for you to use.  They give you access to information like the mouse position on the screen or the last key pressed on the keyboard.  *System Variables* are not variables that you define, they are set by Processing and you can read them from your sketch.

```mouseX``` and ```mouseY``` are system variables that store the current mouse position.  If you look at the default sketch in <a href="http://www.openprocessing.org" target="_blank">www.openprocessing.org</a>, you will see them used there:

	function setup() {
	  createCanvas(windowWidth, windowHeight); 
	  
	} 

	function draw() {
	  background(100);  // moved down from setup() so we don't get trails
	  ellipse(mouseX, mouseY, 20, 20);
	}

When you run this sketch, you will see a circle following the mouse.  Why? because the position of the ellipse is set using ```mouseX``` and ```mouseY```.  Every time we go through the ```draw()``` function and call ellipse, the variables ```mouseX``` and ```mouseY``` have the current mouse position.

You will explore another way to use system variables in the next activity:

### <a href="/activities/#activity-9"><b>Complete Activity 9</b></a>

### <a href="/activities/#activity-9b"><b>Complete Activity 9B</b></a>

What do you think this next program does?

	var circleX = 100;
	var circleY = 100;

	function setup() {
		createCanvas(windowWidth,windowHeight);
	}

	function draw() {
		background(255);
		stroke(0);
		fill(175);
		ellipse(circleX, circleY, 50,50);

		circleX = circleX + 1
	}

A circle of diameter 50 will first be drawn at position (100,100).  Then it will move to the right as ``circleX`` is increased.  Each time the system calls the ``draw()`` function, ``circleX`` will be increased by 1.

Every time ``circleX`` gets assigned a new value in the ``draw()`` function, the new value will be stored until the next time it is used.

### <a href="/activities/#activity-10"><b>Complete Activity 10</b></a>

### <a href="/activities/#activity-11"><b>Complete Activity 11</b></a>

## Operator Precedence

When you add or subtract or multiply, the +, -, *, and / (for divide) symbols are called *operators*.

You may know from math that some operators are always done before others (for example, the PEMDAS mnemonic).  For example:

	2 + 3 * 4 = 14 (not 20)

because multipication is always done before addition.  *Processing* is the same way.  Multiplication and division are always done before addition and subtraction.  You can use parenthesis to change the order.  Operations in parenthesis are always done first.  For example:

	(2 + 3) * 4 = 20 (parenthesis first)

Here are some examples.  Make sure you understand why each variable has the stated value.  Ask if you don't:

	var x, y, a, b;

	x = 5;
	a = 10;
	b = 20;
	y = a + b; // y equals 30
	x = (y - 10) * 20; // before, x equaled 5, now x equals 400
	x = x * 5; // now x = 2000

The next two activities will touch on operator precedence though they are mostly about following the value of variables.  Remember the computer will execute one line at a time.  If variable values are changed, the computer will use the most recent value of the variable.

### <a href="/activities/#activity-12"><b>Complete Activity 12</b></a>

### <a href="/activities/#activity-13"><b>Complete Activity 13</b></a>


## Random

Random is a special type of Function that returns a value.
 
For example:  
 
- Me:  Hey random, what’s going on?  Hope you’re well.  Hey, I was wondering... could you give me a random number between 1 and 100?
- Random:  Sure, no problem.  How about the number 63?
- Me:  Awesome!  That’s great, thank you.

In code, this would look like:
 
	var w = random(1, 100);
	rect(100, 100, w, 50);
 
The random() function requires two arguments.  It returns a random number ranging from the first argument to the second argument.  The second argument must be larger than the first argument for it to work properly.  The function random() also works with one argument by assuming a range between ZERO and that argument, such as `random(6)` which will return a random number between 0 and 6.

### <a href="/activities/#activity-14"><b>Complete Activity 14</b></a>

### <a href="/activities/#activity-15"><b>Complete Activity 15</b></a>


## Booleans and if/else Statements
 
A Boolean expression (named for the mathematician George Boole) is an expression that can be either `true` or `false`.

For example:
 
My favorite color is blue == true
I am afraid of the dark == false
Coding is fun after all == true
 
In the logic of computers, we test relationships between number:
 
	15 is greater than 20 == false
	5 equals 5 == true
	32 is less than or equal to 33 == true
 
let’s think of this in terms of code and variables:
 
	x > 20 – depends on the current value of x
	y == 5 – depends on the current value of y
	z <= 33 – depends on the current value of z
 
The following are standard boolean operations in Processing:
 
	>    greater than
	<    less than
	>=   greater than or equal to
	<=   less than or equal to
	==   equal to
	!=   not equal to

This is an example of an `if` statement:
 
	if (Boolean expression) {
		//code to execute if Boolean expression is true
	}
 
for example:

	function setup() {
		createCanvas(windowWidth, windowHeight); 
	} 

	function draw() {
		background(0);  
		if (mouseX < windowWidth/2) {
			fill(255);
			rect(0, 0, windowWidth/2, windowHeight);
		}  
	}

This will make the left half of the screen white when the mouse is on the left:

![Figure 5-1](/images/figures/Figure5-1.png)

You can add an `else` statement to run code when the `if` condition is `false`:

If the Boolean expression is FALSE you would add
 
	if (Boolean expression) {
		//code to execute if expression is true
	} else {
		//code to execute if expression is false
	}
 
Continuing our example from above, observe:
to continue the example:
 
	function setup() {
		createCanvas(windowWidth, windowHeight); 
	} 

	function draw() {
		if (mouseX < windowWidth/2) {
			background(255);
		} else {
			background(0);
		}
	}
 
By putting it all together, you should see white when the mouse is on the left half of the screen and black when the mouse is on the right half of the screen:
 
![Figure 5-2](/images/figures/Figure5-2.png)
 
When you want to test for MULTIPLE conditions, you use “else if”.  Once an expression is found to be true, the corresponding code is executed and the remaining Boolean expressions are ignored.
 
![Figure 5-3](/images/figures/Figure5-3.png)
 
To continue our example above, we could write the following:
 
	function setup() {
		createCanvas(windowWidth, windowHeight); 
	} 

	function draw() {
        if (mouseX < windowWidth/3) {
			background(255);
        } else if (mouseX < 2*windowWidth/3 {
			background(127);
        } else {
			background(0);
        }
	}
 
![Figure 5-4](/images/figures/Figure5-4.png)

### <a href="/activities/#activity-16"><b>Complete Activity 16</b></a>


.
