#!/bin/sh

env HUGO_BASEURL="http://processingclass-test.michaelhelmke.org/" ../hugo --theme=hugo-material-docs
s3cmd -P sync public/* s3://processingclass-test.michaelhelmke.org
