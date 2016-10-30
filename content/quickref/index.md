---
date: 2016-08-28T08:51:25-07:00
title: Quick Reference
---

Below are some commonly used functions and variables in Processing with examples:

## Drawing

### rect(x, y, width, height, radius);

A plain rectangle and a rounded corner rectangle.

	rect(30, 20, 55, 55);
	rect(30, 20, 55, 55, 7);

### ellipse(x, y, width, height);
	ellipse(56, 46, 55, 55);

## Interaction

The variables mouseX and mouseY always return the mouse pointer coordinates when they are over the drawing window.  For example:

```
var y = 23;

void draw()
{
  background(204);
  line(mouseX, 20, mouseX, 80);
}
```

Will draw a line that follows the mouse x position.

## Logic/Conditionals

```
var x = 1;

if (x === 3) {
} else {
}
```

```
if (x <= 2) {
} else if (x > 2) {
} else {
}
```

## Looping

```
for (int i = 0; i < 40; i = i+1) {
  line(30, i, 80, i);
}
```

## Basic Animation Program Setup

```
background(255,255,255);


```
