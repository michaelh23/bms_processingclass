#!/bin/sh

s3cmd -r -P put public/* s3://processingclass.michaelhelmke.org
