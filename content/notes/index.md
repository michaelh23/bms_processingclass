---
date: 2016-09-21T09:00:55-07:00
title: Notes & Work in Progress
---

### Lesson Notes

#### screen coordinates

cover coordinate systems.  screen is 400 pixel square.  where is origin.  drawing in screen space.

#### draw favorite animal

use squares, circles, ellipses.  hand draw.  hard coded numbers.

draw numbers in editor to change them

#### draw animal with variable position

draw animal with anchor point at center of animal.  take hard coded numbers and make them offsets from center point.

technique:

- leave existing animal alone
- draw a temporary center point (small ellipse) and place it in the center of the animal shape by eye
- copy paste new copy of code
- define and assign x,y variables so new animal won't overlap old one
- subtract x coordinate of center point from each existing old x coordinate and substitute (x - difference) to each new x coordinate
- do the same with the y coordinates
- now new shape is centered on x,y
- note that hight and width of shapes **do not change**

**HINT**: Any new drawings you make should be drawn relative to some anchor point

**HINT 2**: You will normally want the anchor point in the center of a shape but sometimes you won't.

Example:

```
  fill(255);
  rect(23,57,50,40);
  ellipse(35,60,30,30);
  fill(0);
  ellipse(46,78,5,5);

  int x = 46;
  int y = 78;
  
  fill(255);
  rect(x-23, y-21,50,40);
  ellipse(x-11,y-18,30,30);
  
  fill(0);
  ellipse(x,y,5,5);

```

![draw alien](/images/draw_alien.svg)

#### Looping

#### Rotation, Scaling, Translation
