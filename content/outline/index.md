---
date: 2016-10-22T18:36:15-07:00
title: Class Outline
---

## Graphing Shapes

For many of these exercises it will help to have graph paper.  If you don't have any, you can download and print this page of <a href="/images/graphpaper_85x11.pdf" target="_blank">graph paper</a>

### Drawing Functions:  point(), line(), rect(), ellipse()

The **point** function at the given x and y location on the screen:

	point(4,5);

![Figure 1-5](/images/figures/figure1-5b.jpg)

The **line** function draws a line between two x and y locations on the screen:

	line(1,3,8,3);

![Figure 1-6](/images/figures/figure1-6.jpg)

The **rect** function draws a rectangle.  The upper left corner is *normally* specified by the x and y locations.  The next to parameters are the width and height of the rectangle.

	rect(2,3,5,4);

![Figure 1-7](/images/figures/figure1-7.jpg)

However, if you use the **rectMode** function, you can change how the rectangle is drawn.  If you use

	rectMode(CENTER);
	rect(3,3,5,5);

then the x,y parameters of **rect** will be the center of the rectangle:

![Figure 1-8](/images/figures/figure1-8.jpg)

And if you use a **rectMode** of *CORNERS* as in:

	rectMode(CORNERS);
	rect(5,5,8,7);

Then the first pair of parameters are the upper left corner of the rectangle and the 2nd pair of parameters are the lower right corner of the rectangle.  (**Note**:  the default **rectMode** is **CORNER**).

![Figure 1-9](/images/figures/figure1-9.jpg)

The **ellipse** function is similar to **rect** except it draws *circles* and *ellipses*.  The **ellipseMode** function is likewise similar to **rectMode**:

	ellipseMode(CENTER);
	ellipse(3,3,5,5);

	ellipsMode(CORNER);
	ellipse(3,3,4,4);

	ellipseMode(CORNERS):
	ellipse(5,5,8,7);

![Figure 1-10](/images/figures/figure1-10.jpg)

Circles have an implicit bounding box around them.

![Figure 1-11](/images/figures/figure1-11.jpg)

### Complete Activity 1

### Complete Activity 2


## Color

### Greyscale

Describing color in terms of black, white, and grey in between.

0 = black      255 = white     between 0 and 255 = greyscale

![Figure 1-13](/images/figures/figure1-13.jpg)

Color Functions:  stroke(), fill(), background()

### Complete Activity 3

### RGB

Computers view color in terms of Red, Green, and Blue light (RGB) and this can be confusing at first.  You are probably more used to color from mixing paint like knowing that mixing yellow and blue makes green.

Mixing colors of light works differently as you can see below:

![RGB image](/images/figures/AdditiveColor.svg)

RGB color can be understood as all colors that can be made up of shining a Red, Green, and Blue light on a wall and adjusting the lights with dimmer switches.  If only red is on, the wall looks red.  If red and green are on, the wall will look yellow (see above).  Dimming the lights will change the intensity of the light.  For example the following code:

	function setup() {
	  createCanvas(windowWidth, windowHeight); 
	  
	} 

	function draw() {
	  background(255, 255, 255);
	  
	  fill(148, 222, 254);
	  rect(300,300,50,50);

	  fill(148*.8, 222*.8, 254*.8);
	  rect(300,360,50,50);

	  fill(148*.6, 222*.6, 254*.6);
	  rect(300,420,50,50);
	}

will produce this:

![Color Squares](/images/figures/color_squares.png)

You should be able to see how to experiment from here to produce other colors.  There are also charts of RGB colors and their common names on the web that you can find if you search for them.


### Complete Activity 4

## Parts of Code

There are 3 kinds of statements:  Function calls, Assignment Operations, and Control Structures

So far, we've been doing **function calls**.

	line(0, 0, 200, 200);

- *line* is the function name, like a verb
- the arguments to the functions are surrounded by parenthesis
- each statement ends with a semicolon ';' character

### Complete Activity 5

## Create Creature/Character

For this part, you are going to design/draw a creature of your own using the shapes you have learned so far.  I want you to keep your design fairly simple since the point here is to learn how to turn your design into code you can run and see on the screen.

### Complete Activity 6

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

### Complete Activity 7









