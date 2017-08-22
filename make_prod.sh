#!/bin/sh

../hugo --theme=hugo-material-docs
s3cmd -P sync public/* s3://bmsprocessing.course23.com
