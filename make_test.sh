#!/bin/sh

env HUGO_BASEURL="http://bmsprocessing-test.course23.com/" ../hugo --theme=hugo-material-docs
s3cmd -P sync public/* s3://bmsprocessing-test.course23.com
