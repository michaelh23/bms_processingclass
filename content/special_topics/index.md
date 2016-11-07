---
date: 2016-11-04T11:46:40-05:00
title: Special Topics
---

## More on color

How computers view color in terms of Red, Green, and Blue can be confusing at first.  If you have never worked with computer graphics before, you are probably more familiar mixing paint colors or mixing crayons.  When mixing paint, you know that yellow mixed with blue makes green.  Mixing colors like that is an example of a subtractive color space (<a href="https://en.wikipedia.org/wiki/Subtractive_color" target="_blank">Subtractive Color</a> if you want to learn more)

In the print industry, subtractive color is also referred to as CMYK for Cyan, Magenta, Yellow and Black (K stands for Key Plate which is a printing term.  The wikipedia link above explains more).  You won't be using CMYK color spaces for this class.

![CMYK image](/images/special_topics/SubtractiveColor.svg)

With computers, however, color is additive since it is based on mixing different colors of light; Red, Green, and Blue lights to be specific.

From wikipedia:

> An RGB color space can be easily understood by thinking of it as "all possible colors" that can be made from three colourants for red, green and blue. Imagine, for example, shining three lights together onto a white wall: one red light, one green light, and one blue light, each with dimmer switches. If only the red light is on, the wall will look red. If only the green light is on, the wall will look green. If the red and green lights are on together, the wall will look yellow. Dim the red light and the wall will become more of a yellow-green. Dim the green light instead, and the wall will become more orange. Bringing up the blue light a bit will cause the orange to become less saturated and more whitish. In all, each setting of the three dimmer switches will produce a different result, either in color or in brightness or both. <a href="https://en.wikipedia.org/wiki/RGB_color_space" target="_blank">RGB Color Space</a>

![RGB image](/images/special_topics/AdditiveColor.svg)

As you can see above, RGB mixes together to produce different colors.  As you vary the levels of red, green, and blue you can mix further.  For any given color, if you reduce all 3 components equally, you will produce darker versions of a given color.  For example:

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

which gives:

![Color Squares](/images/special_topics/color_squares.png)

You should be able to see how to experiment from here to produce other colors.  There are also charts of RGB colors and their common names on the web that you can find if you search for them.

## Rotation

![Snowman](/images/special_topics/snowman.png)
