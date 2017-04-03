#!/bin/sh

../hugo --theme=hugo-material-docs
s3cmd -P sync public/* s3://processingclass.michaelhelmke.org
