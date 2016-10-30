---
date: 2016-09-20T22:36:33-07:00
title: Graphing and Drawing
---

Processing is a visual language.  As you will learn it, it will mostly be used to display computer graphics.  First you will draw simple pictures and then as you learn more, you will learn how to make things move and make things interact with the mouse and keyboard.

The processing drawing area is 400 dots wide and 400 dots tall.  The screen is addressed as a coordinate grid where coordinate **(0,0)** is in the upper left corner and coordinate **(399,399)** is in the lower right corner.

**NOTE** this may be different than you learned in math class where positive coordinates go up and to the right.  In processing they go down and to the right.

You can draw basic shapes on this grid:

* Rectangles
* Ellipses
* Triangles

The following Processing code will draw these three shapes on the screen and match what you see in the graph paper grid below.  Make sure you understand why the numbers in the code make the shapes appear on screen at that given location and size.

```
ellipse(110, 100, 100, 100);
rect(220, 70, 50, 80);
triangle(150, 200, 100, 300, 210, 320);
```

![graph paper](/images/graphing_shapes1.svg)

Try different sizes and positions.  Add more shapes.  Have fun making different patterns and pictures.