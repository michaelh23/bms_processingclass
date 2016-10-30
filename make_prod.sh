#!/bin/sh

../hugo --theme=hugo-material-docs
s3cmd -r -P put public/* s3://processingclass.michaelhelmke.org
