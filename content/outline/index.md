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

Color described in terms of Red, Green, and Blue parts.

0 = none of the color     255 = all of the color

- Bright red: (255, 0, 0)
- Dark red: (127, 0, 0)
- Pale pink: (255,200,200)

![Figure 1-18](/images/figures/figure1-18.jpg)

### Complete Activity 4
 
## Parts of Code

There are 3 kinds of statements:  Function calls, Assignment Operations, and Control Structures

So far, we've been doing **function calls**.

	line(0, 0, 200, 200);

- *line* is the function name, like a verb
- the arguments to the functions are surrounded by parenthesis
- each statement ends with a semicolon ';' character

### Complete Activity 5
